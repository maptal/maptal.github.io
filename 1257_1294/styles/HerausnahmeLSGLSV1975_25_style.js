var size = 0;
var placement = 'point';
function categories_HerausnahmeLSGLSV1975_25(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case 'Fahrradstellplätze':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.7)', lineDash: [13.299999999999999,2.6599999999999997], lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(255,240,105,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Teilaufhebung des Landschaftsschutzes':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.7)', lineDash: [13.299999999999999,2.6599999999999997], lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(255,127,0,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Toiletten':
            return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,0.7)', lineDash: [13.299999999999999,2.6599999999999997], lineCap: 'butt', lineJoin: 'miter', width: 2.6599999999999997}),fill: new ol.style.Fill({color: 'rgba(255,82,82,0.7)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_HerausnahmeLSGLSV1975_25 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Beschreibung");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("Beschreibung") !== null) {
        labelText = String(feature.get("Beschreibung"));
    }
    
    var style = categories_HerausnahmeLSGLSV1975_25(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
