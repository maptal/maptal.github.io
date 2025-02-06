var wms_layers = [];


        var lyr_Gmaps_0 = new ol.layer.Tile({
            'title': 'Gmaps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSM_1 = new ol.layer.Tile({
            'title': 'OSM',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Quartiere_2 = new ol.format.GeoJSON();
var features_Quartiere_2 = format_Quartiere_2.readFeatures(json_Quartiere_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartiere_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartiere_2.addFeatures(features_Quartiere_2);
var lyr_Quartiere_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartiere_2, 
                style: style_Quartiere_2,
                popuplayertitle: 'Quartiere',
                interactive: true,
                title: '<img src="styles/legend/Quartiere_2.png" /> Quartiere'
            });
var format_Bezirke_3 = new ol.format.GeoJSON();
var features_Bezirke_3 = format_Bezirke_3.readFeatures(json_Bezirke_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bezirke_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bezirke_3.addFeatures(features_Bezirke_3);
var lyr_Bezirke_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bezirke_3, 
                style: style_Bezirke_3,
                popuplayertitle: 'Bezirke',
                interactive: true,
                title: '<img src="styles/legend/Bezirke_3.png" /> Bezirke'
            });
var format_Stadtgebiet_4 = new ol.format.GeoJSON();
var features_Stadtgebiet_4 = format_Stadtgebiet_4.readFeatures(json_Stadtgebiet_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtgebiet_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtgebiet_4.addFeatures(features_Stadtgebiet_4);
var lyr_Stadtgebiet_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtgebiet_4, 
                style: style_Stadtgebiet_4,
                popuplayertitle: 'Stadtgebiet',
                interactive: true,
                title: '<img src="styles/legend/Stadtgebiet_4.png" /> Stadtgebiet'
            });
var format_FlchenimEigentumderStadtWuppertal_5 = new ol.format.GeoJSON();
var features_FlchenimEigentumderStadtWuppertal_5 = format_FlchenimEigentumderStadtWuppertal_5.readFeatures(json_FlchenimEigentumderStadtWuppertal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlchenimEigentumderStadtWuppertal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlchenimEigentumderStadtWuppertal_5.addFeatures(features_FlchenimEigentumderStadtWuppertal_5);
var lyr_FlchenimEigentumderStadtWuppertal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlchenimEigentumderStadtWuppertal_5, 
                style: style_FlchenimEigentumderStadtWuppertal_5,
                popuplayertitle: 'Flächen im Eigentum der Stadt Wuppertal',
                interactive: true,
                title: '<img src="styles/legend/FlchenimEigentumderStadtWuppertal_5.png" /> Flächen im Eigentum der Stadt Wuppertal'
            });
var group_Stadtgebiet = new ol.layer.Group({
                                layers: [lyr_Quartiere_2,lyr_Bezirke_3,lyr_Stadtgebiet_4,],
                                fold: "open",
                                title: 'Stadtgebiet'});

lyr_Gmaps_0.setVisible(false);lyr_OSM_1.setVisible(true);lyr_Quartiere_2.setVisible(true);lyr_Bezirke_3.setVisible(true);lyr_Stadtgebiet_4.setVisible(true);lyr_FlchenimEigentumderStadtWuppertal_5.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_OSM_1,group_Stadtgebiet,lyr_FlchenimEigentumderStadtWuppertal_5];
lyr_Quartiere_2.set('fieldAliases', {'fid': 'fid', 'QUARTIER': 'QUARTIER', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_Bezirke_3.set('fieldAliases', {'fid': 'fid', 'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_Stadtgebiet_4.set('fieldAliases', {'fid': 'fid', 'STADT': 'STADT', 'FLAECHE': 'Fläche', 'Fläche2': 'Fläche2', });
lyr_FlchenimEigentumderStadtWuppertal_5.set('fieldAliases', {'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', });
lyr_Quartiere_2.set('fieldImages', {'fid': 'TextEdit', 'QUARTIER': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'Hidden', 'Fläche': 'TextEdit', });
lyr_Bezirke_3.set('fieldImages', {'fid': 'TextEdit', 'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'Hidden', 'Fläche': 'TextEdit', });
lyr_Stadtgebiet_4.set('fieldImages', {'fid': 'TextEdit', 'STADT': 'TextEdit', 'FLAECHE': 'Hidden', 'Fläche2': 'TextEdit', });
lyr_FlchenimEigentumderStadtWuppertal_5.set('fieldImages', {'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', });
lyr_Quartiere_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'QUARTIER': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_Bezirke_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'BEZIRK': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_Stadtgebiet_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'STADT': 'inline label - visible with data', 'Fläche2': 'inline label - visible with data', });
lyr_FlchenimEigentumderStadtWuppertal_5.set('fieldLabels', {'GEM': 'inline label - visible with data', 'FLUR': 'inline label - visible with data', 'FLURSTZ': 'inline label - visible with data', 'FLURSTN': 'inline label - visible with data', });
lyr_FlchenimEigentumderStadtWuppertal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});