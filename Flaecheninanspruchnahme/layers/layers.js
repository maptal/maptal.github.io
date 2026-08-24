ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([777334.970118, 6649985.687500, 817595.154882, 6678432.812500]);
var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Quartierequartiere_1 = new ol.format.GeoJSON();
var features_Quartierequartiere_1 = format_Quartierequartiere_1.readFeatures(json_Quartierequartiere_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Quartierequartiere_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Quartierequartiere_1.addFeatures(features_Quartierequartiere_1);
var lyr_Quartierequartiere_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Quartierequartiere_1, 
                style: style_Quartierequartiere_1,
                popuplayertitle: 'Quartiere — quartiere',
                interactive: false,
                title: '<img src="styles/legend/Quartierequartiere_1.png" /> Quartiere — quartiere'
            });
var format_Bezirkestadtbezirke_2 = new ol.format.GeoJSON();
var features_Bezirkestadtbezirke_2 = format_Bezirkestadtbezirke_2.readFeatures(json_Bezirkestadtbezirke_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bezirkestadtbezirke_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bezirkestadtbezirke_2.addFeatures(features_Bezirkestadtbezirke_2);
var lyr_Bezirkestadtbezirke_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bezirkestadtbezirke_2, 
                style: style_Bezirkestadtbezirke_2,
                popuplayertitle: 'Bezirke — stadtbezirke',
                interactive: false,
                title: '<img src="styles/legend/Bezirkestadtbezirke_2.png" /> Bezirke — stadtbezirke'
            });
var format_Stadtgebietstadtgebiet_3 = new ol.format.GeoJSON();
var features_Stadtgebietstadtgebiet_3 = format_Stadtgebietstadtgebiet_3.readFeatures(json_Stadtgebietstadtgebiet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtgebietstadtgebiet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtgebietstadtgebiet_3.addFeatures(features_Stadtgebietstadtgebiet_3);
var lyr_Stadtgebietstadtgebiet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtgebietstadtgebiet_3, 
                style: style_Stadtgebietstadtgebiet_3,
                popuplayertitle: 'Stadtgebiet — stadtgebiet',
                interactive: false,
                title: '<img src="styles/legend/Stadtgebietstadtgebiet_3.png" /> Stadtgebiet — stadtgebiet'
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
                interactive: false,
                title: '<img src="styles/legend/FlchenimEigentumderStadtWuppertal_4.png" /> Flächen im Eigentum der Stadt Wuppertal'
            });
var lyr_Kompensationsflchenverffentlicht_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadt:kompensationoe",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Kompensationsflächen (veröffentlicht)',
                            popuplayertitle: 'Kompensationsflächen (veröffentlicht)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kompensationsflchenverffentlicht_5, 0]);
var lyr_BPlanVerfahrenimVerfahren_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bverfahren-n",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'B-Plan-Verfahren (im Verfahren)',
                            popuplayertitle: 'B-Plan-Verfahren (im Verfahren)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BPlanVerfahrenimVerfahren_6, 0]);
var lyr_BdenalsLebensraum_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_naturhaushalt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Böden als Lebensraum',
                            popuplayertitle: 'Böden als Lebensraum',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BdenalsLebensraum_7, 0]);
var lyr_GesamtbewertungderBodenfunktionen_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_ges",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Gesamtbewertung der Bodenfunktionen',
                            popuplayertitle: 'Gesamtbewertung der Bodenfunktionen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GesamtbewertungderBodenfunktionen_8, 0]);
var lyr_FFPV2026Wuppertal_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'FF-PV 2026 Wuppertal<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FFPV2026Wuppertal_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [780330.391279, 6649981.730669, 823394.070598, 6678266.413066]
        })
    });
var lyr_SolarthermieKWPWuppertal_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Solarthermie KWP Wuppertal<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SolarthermieKWPWuppertal_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [773405.425503, 6650241.400732, 814330.662130, 6678042.438355]
        })
    });
var format_Windhvel_11 = new ol.format.GeoJSON();
var features_Windhvel_11 = format_Windhvel_11.readFeatures(json_Windhvel_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Windhvel_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Windhvel_11.addFeatures(features_Windhvel_11);
var lyr_Windhvel_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Windhvel_11, 
                style: style_Windhvel_11,
                popuplayertitle: 'Windhövel',
                interactive: false,
                title: '<img src="styles/legend/Windhvel_11.png" /> Windhövel'
            });
var format_BuntenbeckGIB_12 = new ol.format.GeoJSON();
var features_BuntenbeckGIB_12 = format_BuntenbeckGIB_12.readFeatures(json_BuntenbeckGIB_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BuntenbeckGIB_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BuntenbeckGIB_12.addFeatures(features_BuntenbeckGIB_12);
var lyr_BuntenbeckGIB_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BuntenbeckGIB_12, 
                style: style_BuntenbeckGIB_12,
                popuplayertitle: 'Buntenbeck (GIB)',
                interactive: false,
                title: '<img src="styles/legend/BuntenbeckGIB_12.png" /> Buntenbeck (GIB)'
            });
var format_WeitereSiedlungsflchenASB_13 = new ol.format.GeoJSON();
var features_WeitereSiedlungsflchenASB_13 = format_WeitereSiedlungsflchenASB_13.readFeatures(json_WeitereSiedlungsflchenASB_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WeitereSiedlungsflchenASB_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WeitereSiedlungsflchenASB_13.addFeatures(features_WeitereSiedlungsflchenASB_13);
var lyr_WeitereSiedlungsflchenASB_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WeitereSiedlungsflchenASB_13, 
                style: style_WeitereSiedlungsflchenASB_13,
                popuplayertitle: 'Weitere Siedlungsflächen (ASB)',
                interactive: false,
    title: 'Weitere Siedlungsflächen (ASB)<br />\
    <img src="styles/legend/WeitereSiedlungsflchenASB_13_0.png" /> Hipkendahl<br />\
    <img src="styles/legend/WeitereSiedlungsflchenASB_13_1.png" /> Nissen<br />\
    <img src="styles/legend/WeitereSiedlungsflchenASB_13_2.png" /> Olga-Heubeck Weg<br />' });
var format_28RPDnderung_14 = new ol.format.GeoJSON();
var features_28RPDnderung_14 = format_28RPDnderung_14.readFeatures(json_28RPDnderung_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_28RPDnderung_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_28RPDnderung_14.addFeatures(features_28RPDnderung_14);
var lyr_28RPDnderung_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_28RPDnderung_14, 
                style: style_28RPDnderung_14,
                popuplayertitle: '28. RPD Änderung',
                interactive: false,
    title: '28. RPD Änderung<br />\
    <img src="styles/legend/28RPDnderung_14_0.png" /> Dorner Weg<br />\
    <img src="styles/legend/28RPDnderung_14_1.png" /> Lichtscheid-Süd<br />\
    <img src="styles/legend/28RPDnderung_14_2.png" /> Linde II<br />\
    <img src="styles/legend/28RPDnderung_14_3.png" /> Schmiedestraße<br />\
    <img src="styles/legend/28RPDnderung_14_4.png" /> Schöller West<br />' });
var group_WeitereGewerbeflchenGBGIB = new ol.layer.Group({
                                layers: [lyr_Windhvel_11,lyr_BuntenbeckGIB_12,],
                                fold: 'open',
                                title: 'Weitere Gewerbeflächen (GB & GIB)'});
var group_Boden = new ol.layer.Group({
                                layers: [lyr_BdenalsLebensraum_7,lyr_GesamtbewertungderBodenfunktionen_8,],
                                fold: 'close',
                                title: 'Boden'});

lyr_OSM_0.setVisible(true);lyr_Quartierequartiere_1.setVisible(false);lyr_Bezirkestadtbezirke_2.setVisible(false);lyr_Stadtgebietstadtgebiet_3.setVisible(true);lyr_FlchenimEigentumderStadtWuppertal_4.setVisible(false);lyr_Kompensationsflchenverffentlicht_5.setVisible(false);lyr_BPlanVerfahrenimVerfahren_6.setVisible(false);lyr_BdenalsLebensraum_7.setVisible(false);lyr_GesamtbewertungderBodenfunktionen_8.setVisible(false);lyr_FFPV2026Wuppertal_9.setVisible(false);lyr_SolarthermieKWPWuppertal_10.setVisible(false);lyr_Windhvel_11.setVisible(true);lyr_BuntenbeckGIB_12.setVisible(true);lyr_WeitereSiedlungsflchenASB_13.setVisible(true);lyr_28RPDnderung_14.setVisible(true);
var layersList = [lyr_OSM_0,lyr_Quartierequartiere_1,lyr_Bezirkestadtbezirke_2,lyr_Stadtgebietstadtgebiet_3,lyr_FlchenimEigentumderStadtWuppertal_4,lyr_Kompensationsflchenverffentlicht_5,lyr_BPlanVerfahrenimVerfahren_6,group_Boden,lyr_FFPV2026Wuppertal_9,lyr_SolarthermieKWPWuppertal_10,group_WeitereGewerbeflchenGBGIB,lyr_WeitereSiedlungsflchenASB_13,lyr_28RPDnderung_14];
lyr_Quartierequartiere_1.set('fieldAliases', {'fid': 'fid', 'QUARTIER': 'QUARTIER', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_Bezirkestadtbezirke_2.set('fieldAliases', {'fid': 'fid', 'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_Stadtgebietstadtgebiet_3.set('fieldAliases', {'fid': 'fid', 'STADT': 'STADT', 'FLAECHE': 'FLAECHE', 'Fläche2': 'Fläche2', });
lyr_FlchenimEigentumderStadtWuppertal_4.set('fieldAliases', {'fid': 'fid', 'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', 'Fläche': 'Fläche', });
lyr_Windhvel_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fläche': 'Fläche', });
lyr_BuntenbeckGIB_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Fläche': 'Fläche', });
lyr_WeitereSiedlungsflchenASB_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'Fläche': 'Fläche', });
lyr_28RPDnderung_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'layer': 'layer', 'path': 'path', 'Fläche': 'Fläche', });
lyr_Quartierequartiere_1.set('fieldImages', {'fid': 'TextEdit', 'QUARTIER': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_Bezirkestadtbezirke_2.set('fieldImages', {'fid': 'TextEdit', 'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_Stadtgebietstadtgebiet_3.set('fieldImages', {'fid': 'TextEdit', 'STADT': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche2': 'TextEdit', });
lyr_FlchenimEigentumderStadtWuppertal_4.set('fieldImages', {'fid': 'TextEdit', 'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_Windhvel_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_BuntenbeckGIB_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_WeitereSiedlungsflchenASB_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_28RPDnderung_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_Quartierequartiere_1.set('fieldLabels', {'fid': 'no label', 'QUARTIER': 'no label', 'NAME': 'no label', 'FLAECHE': 'no label', 'Fläche': 'no label', });
lyr_Bezirkestadtbezirke_2.set('fieldLabels', {'fid': 'no label', 'BEZIRK': 'no label', 'NAME': 'no label', 'FLAECHE': 'no label', 'Fläche': 'no label', });
lyr_Stadtgebietstadtgebiet_3.set('fieldLabels', {'fid': 'no label', 'STADT': 'no label', 'FLAECHE': 'no label', 'Fläche2': 'no label', });
lyr_FlchenimEigentumderStadtWuppertal_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'GEM': 'no label', 'FLUR': 'no label', 'FLURSTZ': 'no label', 'FLURSTN': 'no label', 'Fläche': 'no label', });
lyr_Windhvel_11.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fläche': 'no label', });
lyr_BuntenbeckGIB_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Fläche': 'no label', });
lyr_WeitereSiedlungsflchenASB_13.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'layer': 'no label', 'path': 'no label', 'Fläche': 'no label', });
lyr_28RPDnderung_14.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'layer': 'no label', 'path': 'no label', 'Fläche': 'no label', });
lyr_28RPDnderung_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});