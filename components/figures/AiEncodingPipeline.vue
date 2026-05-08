<template>
  <div class="ai-encoding-pipeline" aria-label="AI model encodes raw tensors into a feature vector">
    <div class="stage raw-stage">
      <div class="stage-title">Raw data</div>
      <div class="raw-stack">
        <div class="data-card">
          <span class="i-carbon-time-plot data-icon"></span>
          <div>
            <div class="data-title">Time series</div>
            <div class="sparkline" aria-hidden="true">
              <span v-for="index in 12" :key="`ts-${index}`" :style="{ height: `${18 + ((index * 7) % 24)}px` }"></span>
            </div>
          </div>
        </div>
        <div class="data-card">
          <span class="i-carbon-chart-network data-icon"></span>
          <div>
            <div class="data-title">Vectors</div>
            <div class="vector-row" aria-hidden="true">
              <span v-for="index in 6" :key="`vec-${index}`"></span>
            </div>
          </div>
        </div>
        <div class="data-card">
          <span class="i-carbon-image data-icon"></span>
          <div>
            <div class="data-title">Images</div>
            <div class="image-grid" aria-hidden="true">
              <span v-for="index in 9" :key="`px-${index}`"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="stage-caption">tensors</div>
    </div>

    <div class="arrow" aria-hidden="true"></div>

    <div class="stage model-stage">
      <span class="i-carbon-machine-learning-model model-icon"></span>
      <div class="model-title">ML model</div>
      <div class="model-subtitle">encoder</div>
    </div>

    <div class="arrow" aria-hidden="true"></div>

    <div class="stage feature-stage">
      <div class="stage-title">Feature space</div>
      <div class="vertical-vector" aria-hidden="true">
        <span v-for="index in 9" :key="`feature-${index}`" :style="{ opacity: 0.42 + ((index % 5) * 0.12) }"></span>
      </div>
      <div class="stage-caption">embedding</div>
    </div>
  </div>
</template>

<style scoped>
.ai-encoding-pipeline {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) 1.2rem minmax(0, .95fr) 1.2rem minmax(0, .72fr);
  align-items: center;
  gap: .7rem;
  margin-top: .85rem;
  color: #00457c;
}

.stage {
  min-width: 0;
  border: 1px solid rgba(0, 69, 124, .18);
  border-radius: .5rem;
  background: rgba(0, 69, 124, .035);
}

.stage-title,
.model-title {
  font-size: .72rem;
  font-weight: 800;
  line-height: 1.1;
}

.stage-caption,
.model-subtitle {
  color: rgba(34, 34, 34, .66);
  font-size: .52rem;
  font-weight: 700;
  line-height: 1.1;
  text-transform: uppercase;
}

.raw-stage {
  padding: .62rem;
}

.raw-stack {
  display: grid;
  gap: .34rem;
  margin-top: .48rem;
}

.data-card {
  display: grid;
  grid-template-columns: 1.2rem minmax(0, 1fr);
  align-items: center;
  gap: .42rem;
  min-height: 2.25rem;
  padding: .38rem .44rem;
  border: 1px solid rgba(0, 69, 124, .16);
  border-radius: .42rem;
  background: #ffffff;
}

.data-icon {
  width: 1.1rem;
  height: 1.1rem;
  color: #00457c;
}

.data-title {
  color: #222222;
  font-size: .56rem;
  font-weight: 800;
  line-height: 1.05;
}

.sparkline {
  display: flex;
  align-items: end;
  gap: .08rem;
  height: 1.08rem;
  margin-top: .18rem;
}

.sparkline span {
  width: .16rem;
  border-radius: .08rem;
  background: #f2c300;
}

.vector-row {
  display: flex;
  gap: .14rem;
  margin-top: .22rem;
}

.vector-row span {
  width: .42rem;
  height: .42rem;
  border-radius: .12rem;
  background: rgba(0, 69, 124, .74);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, .42rem);
  grid-auto-rows: .34rem;
  gap: .08rem;
  margin-top: .2rem;
}

.image-grid span {
  background: rgba(0, 69, 124, .24);
}

.image-grid span:nth-child(2n) {
  background: rgba(242, 195, 0, .72);
}

.model-stage {
  display: grid;
  justify-items: center;
  gap: .24rem;
  padding: .9rem .56rem;
  text-align: center;
}

.model-icon {
  width: 2.2rem;
  height: 2.2rem;
  padding: .36rem;
  border-radius: .5rem;
  background: #00457c;
  color: #ffffff;
}

.feature-stage {
  display: grid;
  justify-items: center;
  gap: .42rem;
  padding: .62rem .42rem;
  text-align: center;
}

.vertical-vector {
  display: grid;
  gap: .12rem;
}

.vertical-vector span {
  width: 1.18rem;
  height: .44rem;
  border: 1px solid rgba(0, 69, 124, .16);
  border-radius: .14rem;
  background: #00457c;
}

.arrow {
  position: relative;
  height: 2px;
  background: rgba(0, 69, 124, .48);
}

.arrow::after {
  content: "";
  position: absolute;
  right: -.02rem;
  top: 50%;
  width: .42rem;
  height: .42rem;
  border-right: 2px solid rgba(0, 69, 124, .58);
  border-top: 2px solid rgba(0, 69, 124, .58);
  transform: translateY(-50%) rotate(45deg);
}
</style>
