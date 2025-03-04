var size = 0;
var placement = 'point';

var style_LadestationenEBikes_21 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("STANDORT") !== null) {
        labelText = String(feature.get("STANDORT"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [283.46, 283.46],
                  scale: 0.09172369999294434,
                  anchor: [141.73, 141.73],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/output_editable.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
