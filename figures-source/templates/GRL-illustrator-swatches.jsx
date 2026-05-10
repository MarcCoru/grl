/*
  GRL Illustrator swatches

  Usage in Illustrator:
  1. Open or create a document.
  2. Choose File > Scripts > Other Script...
  3. Select this file.

  The script adds the GRL CSS color tokens as named RGB swatches.
*/

(function () {
  if (app.documents.length === 0) {
    alert("Open or create an Illustrator document before importing GRL swatches.");
    return;
  }

  var doc = app.activeDocument;
  var colors = [
    ["grl-bonn-blue", "00457c"],
    ["grl-bonn-yellow", "f2c300"],
    ["grl-text", "222222"],
    ["grl-muted", "5f625f"],
    ["grl-rule", "d7d9d8"],
    ["grl-background", "ffffff"],
    ["grl-panel", "f7f9fa"],
    ["grl-cover-background", "eef2f4"],
    ["grl-cover-background-deep", "dce4e8"],
    ["grl-figure-blue-dark", "035172"],
    ["grl-data-cyan", "5ec8ec"],
    ["grl-data-cyan-soft", "b9dcf0"],
    ["grl-data-orange", "ff7900"],
    ["grl-data-orange-soft", "ffc891"],
    ["grl-data-green", "2eb82e"],
    ["grl-data-green-soft", "a9e5aa"],
    ["grl-link-red", "ff7378"],
    ["grl-model-blue", "3b82f6"],
    ["grl-application-green", "10b981"],
    ["grl-warning-orange", "f59e0b"],
    ["grl-foundation-purple", "8b5cf6"],
    ["grl-phase-red", "b02b37"]
  ];

  function rgbFromHex(hex) {
    var color = new RGBColor();
    color.red = parseInt(hex.substring(0, 2), 16);
    color.green = parseInt(hex.substring(2, 4), 16);
    color.blue = parseInt(hex.substring(4, 6), 16);
    return color;
  }

  function findSwatch(name) {
    for (var i = 0; i < doc.swatches.length; i += 1) {
      if (doc.swatches[i].name === name) {
        return doc.swatches[i];
      }
    }
    return null;
  }

  for (var i = 0; i < colors.length; i += 1) {
    var name = colors[i][0];
    var hex = colors[i][1];
    var swatch = findSwatch(name) || doc.swatches.add();
    swatch.name = name;
    swatch.color = rgbFromHex(hex);
  }

  alert("Added " + colors.length + " GRL color swatches.");
}());
