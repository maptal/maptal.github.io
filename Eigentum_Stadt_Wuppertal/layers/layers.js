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
var format_Bezirke_2 = new ol.format.GeoJSON();
var features_Bezirke_2 = format_Bezirke_2.readFeatures(json_Bezirke_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bezirke_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bezirke_2.addFeatures(features_Bezirke_2);
var lyr_Bezirke_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bezirke_2, 
                style: style_Bezirke_2,
                popuplayertitle: 'Bezirke',
                interactive: true,
                title: '<img src="styles/legend/Bezirke_2.png" /> Bezirke'
            });
var format_Stadtgebiet_3 = new ol.format.GeoJSON();
var features_Stadtgebiet_3 = format_Stadtgebiet_3.readFeatures(json_Stadtgebiet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtgebiet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtgebiet_3.addFeatures(features_Stadtgebiet_3);
var lyr_Stadtgebiet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtgebiet_3, 
                style: style_Stadtgebiet_3,
                popuplayertitle: 'Stadtgebiet',
                interactive: true,
                title: '<img src="styles/legend/Stadtgebiet_3.png" /> Stadtgebiet'
            });
var format_FlchenimEigentumderStadtWuppertal_4 = new ol.format.GeoJSON();
var features_FlchenimEigentumderStadtWuppertal_4 = format_FlchenimEigentumderStadtWuppertal_4.readFeatures(json_FlchenimEigentumderStadtWuppertal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlchenimEigentumderStadtWuppertal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlchenimEigentumderStadtWuppertal_4.addFeatures(features_FlchenimEigentumderStadtWuppertal_4);
var lyr_FlchenimEigentumderStadtWuppertal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlchenimEigentumderStadtWuppertal_4, 
                style: style_FlchenimEigentumderStadtWuppertal_4,
                popuplayertitle: 'Flächen im Eigentum der Stadt Wuppertal',
                interactive: true,
                title: '<img src="styles/legend/FlchenimEigentumderStadtWuppertal_4.png" /> Flächen im Eigentum der Stadt Wuppertal'
            });
var group_Stadtgebiet = new ol.layer.Group({
                                layers: [lyr_Bezirke_2,lyr_Stadtgebiet_3,],
                                fold: "open",
                                title: 'Stadtgebiet'});

lyr_Gmaps_0.setVisible(false);lyr_OSM_1.setVisible(true);lyr_Bezirke_2.setVisible(true);lyr_Stadtgebiet_3.setVisible(true);lyr_FlchenimEigentumderStadtWuppertal_4.setVisible(true);
var layersList = [lyr_Gmaps_0,lyr_OSM_1,group_Stadtgebiet,lyr_FlchenimEigentumderStadtWuppertal_4];
lyr_Bezirke_2.set('fieldAliases', {'fid': 'fid', 'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche (km²)', });
lyr_Stadtgebiet_3.set('fieldAliases', {'fid': 'fid', 'STADT': 'STADT', 'FLAECHE': 'Fläche', 'Fläche2': 'Fläche (km²)', });
lyr_FlchenimEigentumderStadtWuppertal_4.set('fieldAliases', {'fid': 'fid', 'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', 'Fläche': 'Fläche (m²)', });
lyr_Bezirke_2.set('fieldImages', {'fid': 'Hidden', 'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'Hidden', 'Fläche': 'TextEdit', });
lyr_Stadtgebiet_3.set('fieldImages', {'fid': 'Hidden', 'STADT': 'TextEdit', 'FLAECHE': 'Hidden', 'Fläche2': 'TextEdit', });
lyr_FlchenimEigentumderStadtWuppertal_4.set('fieldImages', {'fid': 'Hidden', 'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_Bezirke_2.set('fieldLabels', {'BEZIRK': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_Stadtgebiet_3.set('fieldLabels', {'STADT': 'inline label - visible with data', 'Fläche2': 'inline label - visible with data', });
lyr_FlchenimEigentumderStadtWuppertal_4.set('fieldLabels', {'GEM': 'inline label - visible with data', 'FLUR': 'inline label - visible with data', 'FLURSTZ': 'inline label - visible with data', 'FLURSTN': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_FlchenimEigentumderStadtWuppertal_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});