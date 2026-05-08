// export-layers-to-svg.jsx
// Run in Illustrator: File → Scripts → Other Script…

if (app.documents.length === 0) {
  alert("No Illustrator document open.");
} else {
  var doc = app.activeDocument;
  var originalVisibility = [];

  // Save original layer visibility
  for (var i = 0; i < doc.layers.length; i++) {
    originalVisibility[i] = doc.layers[i].visible;
  }

  // Choose output folder
  var outFolder = Folder.selectDialog("Choose output folder for SVG layers");
  if (outFolder !== null) {
    for (var i = 0; i < doc.layers.length; i++) {
      var layer = doc.layers[i];

      // Skip hidden or guide-style layers if desired
      if (layer.name.indexOf("_") === 0 || layer.name.toLowerCase().indexOf("guide") >= 0) {
        continue;
      }

      // Hide all layers
      for (var j = 0; j < doc.layers.length; j++) {
        doc.layers[j].visible = false;
      }

      // Show only current layer
      layer.visible = true;

      var safeName = layer.name.replace(/[\\\/:*?"<>|]/g, "_");
      var outFile = new File(outFolder.fsName + "/" + safeName + ".svg");

      var options = new ExportOptionsSVG();
      options.embedRasterImages = true;
      options.fontType = SVGFontType.SVGFONT;
      options.coordinatePrecision = 3;
      options.cssProperties = SVGCSSPropertyLocation.PRESENTATIONATTRIBUTES;
      options.documentEncoding = SVGDocumentEncoding.UTF8;
      options.saveMultipleArtboards = false;

      doc.exportFile(outFile, ExportType.SVG, options);
    }

    // Restore original visibility
    for (var k = 0; k < doc.layers.length; k++) {
      doc.layers[k].visible = originalVisibility[k];
    }

    alert("Layer SVG export complete.");
  }
}