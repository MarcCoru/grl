<template>
  <div class="understanding-pulse" :style="{ width: `${WIDTH}px`, height: `${HEIGHT}px` }">
    <svg
      :width="WIDTH"
      :height="HEIGHT"
      :viewBox="`0 0 ${WIDTH} ${HEIGHT}`"
      role="img"
      aria-label="Live understanding pulse"
      @pointerdown="handlePointerDown"
    >
      <rect :width="WIDTH" :height="HEIGHT" fill="white" />

      <text
        :x="LEFT_MARGIN"
        :y="LINE_Y - 18"
        text-anchor="start"
        class="understanding-pulse__label"
      >
        {{ leftLabel }}
      </text>
      <text
        :x="WIDTH - RIGHT_MARGIN"
        :y="LINE_Y - 18"
        text-anchor="end"
        class="understanding-pulse__label"
      >
        {{ rightLabel }}
      </text>

      <path
        v-if="densityPath"
        :d="densityPath"
        class="understanding-pulse__density"
      />
      <line
        :x1="LEFT_MARGIN"
        :x2="WIDTH - RIGHT_MARGIN"
        :y1="LINE_Y"
        :y2="LINE_Y"
        class="understanding-pulse__line"
      />

      <g v-for="point in visiblePoints" :key="point.id">
        <circle
          :cx="valueToX(point.value)"
          :cy="LINE_Y"
          r="4"
          fill="black"
          :opacity="point.opacity"
        />
        <circle
          :cx="valueToX(point.value)"
          :cy="LINE_Y"
          r="1.35"
          fill="white"
          :opacity="point.opacity"
        />
      </g>

      <text
        :x="WIDTH / 2"
        :y="LINE_Y + 25"
        text-anchor="middle"
        class="understanding-pulse__instruction"
      >
        {{ instruction }}
      </text>

      <rect
        :x="LEFT_MARGIN - 10"
        :y="LINE_Y - 24"
        :width="WIDTH - LEFT_MARGIN - RIGHT_MARGIN + 20"
        height="48"
        fill="transparent"
        class="understanding-pulse__hit-area"
      />
    </svg>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://ldefkkjnobeldsuanntt.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_3NhvSYwNzFAVlfPwjIAnJA_pdrWSXSP";
const CLIENT_ID_STORAGE_KEY = "understanding-pulse-client-id";
const TABLE_NAME = "understanding_responses";

const WIDTH = 500;
const HEIGHT = 150;
const LEFT_MARGIN = 45;
const RIGHT_MARGIN = 45;
const LINE_Y = 78;
const SAMPLE_COUNT = 120;

const props = defineProps({
  sessionId: {
    type: String,
    required: true,
  },
  pollId: {
    type: String,
    required: true,
  },
  leftLabel: {
    type: String,
    default: "I am completely lost",
  },
  rightLabel: {
    type: String,
    default: "I fully understand",
  },
  instruction: {
    type: String,
    default: "Click on the line to vote.",
  },
  fadeMs: {
    type: Number,
    default: 5000,
  },
  bandwidth: {
    type: Number,
    default: 10,
  },
  kernelAmplitude: {
    type: Number,
    default: 20,
  },
  densityReferenceCount: {
    type: Number,
    default: 6,
  },
});

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const points = ref([]);
const now = ref(Date.now());

let clientId = "";
let fadeInterval = null;
let loadInterval = null;
let channel = null;

const lineWidth = computed(() => WIDTH - LEFT_MARGIN - RIGHT_MARGIN);

const visiblePoints = computed(() => {
  return points.value
    .map((point) => {
      const age = now.value - new Date(point.created_at).getTime();
      const opacity = clamp(1 - age / props.fadeMs, 0, 1);
      return { ...point, opacity };
    })
    .filter((point) => point.opacity > 0);
});

const densityPath = computed(() => {
  if (!visiblePoints.value.length) return "";

  const upper = [];
  const lower = [];
  const maxDensityHeight = props.kernelAmplitude * props.densityReferenceCount;
  const referenceCount = Math.max(props.densityReferenceCount, 1);
  const bandwidth = Math.max(props.bandwidth, 0.1);

  for (let i = 0; i <= SAMPLE_COUNT; i += 1) {
    const t = i / SAMPLE_COUNT;
    const x = LEFT_MARGIN + t * lineWidth.value;
    let density = 0;

    for (const point of visiblePoints.value) {
      const distance = x - valueToX(point.value);
      const scaledDistance = distance / bandwidth;
      density += Math.exp(-0.5 * scaledDistance * scaledDistance) * point.opacity;
    }

    const normalizedDensity = Math.min(density / referenceCount, 1);
    const height = normalizedDensity * maxDensityHeight;
    upper.push([x, LINE_Y - height]);
    lower.push([x, LINE_Y + height]);
  }

  const top = upper.map(([x, y], index) => `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  const bottom = lower
    .reverse()
    .map(([x, y]) => `L ${x.toFixed(2)} ${y.toFixed(2)}`);

  return `${top.join(" ")} ${bottom.join(" ")} Z`;
});

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function valueToX(value) {
  return LEFT_MARGIN + clamp(Number(value), 0, 1) * lineWidth.value;
}

function xToValue(x) {
  return clamp((x - LEFT_MARGIN) / lineWidth.value, 0, 1);
}

function getClientId() {
  if (typeof localStorage === "undefined") {
    return `client-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }

  try {
    const existing = localStorage.getItem(CLIENT_ID_STORAGE_KEY);
    if (existing) return existing;

    const generated = `client-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    localStorage.setItem(CLIENT_ID_STORAGE_KEY, generated);
    return generated;
  } catch (error) {
    console.error("UnderstandingPulse client ID storage failed", error);
    return `client-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  }
}

async function loadPoints() {
  const since = new Date(Date.now() - props.fadeMs).toISOString();
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select("id, value, created_at, client_id")
      .eq("session_id", props.sessionId)
      .eq("poll_id", props.pollId)
      .gte("created_at", since)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("UnderstandingPulse load failed", error);
      return;
    }

    points.value = data || [];
  } catch (error) {
    console.error("UnderstandingPulse load failed", error);
  }
}

async function insertPoint(value) {
  try {
    const { error } = await supabase.from(TABLE_NAME).insert({
      session_id: props.sessionId,
      poll_id: props.pollId,
      client_id: clientId,
      value,
    });

    if (error) {
      console.error("UnderstandingPulse insert failed", error);
      return;
    }

    loadPoints();
  } catch (error) {
    console.error("UnderstandingPulse insert failed", error);
  }
}

function handlePointerDown(event) {
  const svg = event.currentTarget;
  const rect = svg.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * WIDTH;
  const y = ((event.clientY - rect.top) / rect.height) * HEIGHT;

  if (y < LINE_Y - 24 || y > LINE_Y + 24) return;

  insertPoint(xToValue(x));
}

function startRealtime() {
  channel = supabase
    .channel(`understanding-pulse-${props.pollId}`)
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: TABLE_NAME,
        filter: `poll_id=eq.${props.pollId}`,
      },
      (payload) => {
        if (payload.new && payload.new.session_id === props.sessionId && payload.new.poll_id === props.pollId) {
          loadPoints();
        }
      },
    )
    .subscribe((status, error) => {
      if (error) {
        console.error("UnderstandingPulse realtime failed", error);
      }
    });
}

onMounted(() => {
  clientId = getClientId();
  loadPoints();
  startRealtime();

  fadeInterval = window.setInterval(() => {
    now.value = Date.now();
    points.value = points.value.filter((point) => now.value - new Date(point.created_at).getTime() < props.fadeMs);
  }, 100);

  loadInterval = window.setInterval(loadPoints, 1000);
});

onUnmounted(() => {
  if (fadeInterval) window.clearInterval(fadeInterval);
  if (loadInterval) window.clearInterval(loadInterval);
  if (channel) supabase.removeChannel(channel);
});
</script>

<style scoped>
.understanding-pulse {
  display: inline-block;
  background: white;
  color: black;
  user-select: none;
  touch-action: manipulation;
}

.understanding-pulse svg {
  display: block;
  cursor: crosshair;
}

.understanding-pulse__label {
  fill: #111;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
}

.understanding-pulse__instruction {
  fill: #222;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 13px;
}

.understanding-pulse__line {
  stroke: #111;
  stroke-width: 1.5;
}

.understanding-pulse__density {
  fill: rgba(0, 0, 0, 0.086);
  stroke: rgba(0, 0, 0, 0.24);
  stroke-width: 1;
}

.understanding-pulse__hit-area {
  pointer-events: all;
}
</style>
