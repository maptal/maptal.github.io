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
var format_Null_1 = new ol.format.GeoJSON();
var features_Null_1 = format_Null_1.readFeatures(json_Null_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Null_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Null_1.addFeatures(features_Null_1);
var lyr_Null_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Null_1, 
                style: style_Null_1,
                popuplayertitle: 'Null',
                interactive: false,
                title: '<img src="styles/legend/Null_1.png" /> Null'
            });
var format_TypC_2 = new ol.format.GeoJSON();
var features_TypC_2 = format_TypC_2.readFeatures(json_TypC_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TypC_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TypC_2.addFeatures(features_TypC_2);
var lyr_TypC_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TypC_2, 
                style: style_TypC_2,
                popuplayertitle: 'Typ C',
                interactive: false,
                title: '<img src="styles/legend/TypC_2.png" /> Typ C'
            });
var format_TypB_3 = new ol.format.GeoJSON();
var features_TypB_3 = format_TypB_3.readFeatures(json_TypB_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TypB_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TypB_3.addFeatures(features_TypB_3);
var lyr_TypB_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TypB_3, 
                style: style_TypB_3,
                popuplayertitle: 'Typ B',
                interactive: false,
                title: '<img src="styles/legend/TypB_3.png" /> Typ B'
            });
var format_TypA_4 = new ol.format.GeoJSON();
var features_TypA_4 = format_TypA_4.readFeatures(json_TypA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TypA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TypA_4.addFeatures(features_TypA_4);
var lyr_TypA_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TypA_4, 
                style: style_TypA_4,
                popuplayertitle: 'Typ A',
                interactive: false,
                title: '<img src="styles/legend/TypA_4.png" /> Typ A'
            });
var lyr_Klimafunktionskarte_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Klimafunktion",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klimafunktionskarte </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_hitze_zukunftszenario2050.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Klimafunktionskarte_5, 1]);
var lyr_PlanhinweiskarteKlima_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Planhinweise",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Planhinweiskarte Klima </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_Planhinweise.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_PlanhinweiskarteKlima_6, 1]);
var lyr_Freiflchen_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Freiflaechen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Freiflächen </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_hitze_freiflaechen.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Freiflchen_7, 1]);
var lyr_HitzeinselnAusweitungZukunftsszenario2050_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-2050",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln Ausweitung Zukunftsszenario 2050 </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_hitze_zukunftszenario2050.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnAusweitungZukunftsszenario2050_9, 1]);
var lyr_HitzeinselnstarkIstZustand_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Stark-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln (stark) Ist-Zustand </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_hitze_hitzebelastung_stark.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnstarkIstZustand_8, 1]);
var lyr_HitzeinselnIstZustand_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln Ist-Zustand </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_hitze_hitzebelastung.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnIstZustand_10, 1]);
var lyr_Luftleitbahnen_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Frischluftschneisen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Luftleitbahnen </br> <img style="max-width: 100%; max-height: 100%;" src="styles/legend/default_hitze_luftleitbahnen.png" />',
                            opacity:  0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Luftleitbahnen_11, 1]);
var format_Zone1_12 = new ol.format.GeoJSON();
var features_Zone1_12 = format_Zone1_12.readFeatures(json_Zone1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone1_12.addFeatures(features_Zone1_12);
var lyr_Zone1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone1_12, 
                style: style_Zone1_12,
                popuplayertitle: 'Zone 1',
                interactive: false,
                title: '<img src="styles/legend/Zone1_12.png" /> Zone 1'
            });
var format_Zone2_13 = new ol.format.GeoJSON();
var features_Zone2_13 = format_Zone2_13.readFeatures(json_Zone2_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone2_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone2_13.addFeatures(features_Zone2_13);
var lyr_Zone2_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone2_13, 
                style: style_Zone2_13,
                popuplayertitle: 'Zone 2',
                interactive: false,
                title: '<img src="styles/legend/Zone2_13.png" /> Zone 2'
            });
var format_Zone3_14 = new ol.format.GeoJSON();
var features_Zone3_14 = format_Zone3_14.readFeatures(json_Zone3_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone3_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone3_14.addFeatures(features_Zone3_14);
var lyr_Zone3_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone3_14, 
                style: style_Zone3_14,
                popuplayertitle: 'Zone 3',
                interactive: false,
                title: '<img src="styles/legend/Zone3_14.png" /> Zone 3'
            });
var format_Zone4_15 = new ol.format.GeoJSON();
var features_Zone4_15 = format_Zone4_15.readFeatures(json_Zone4_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone4_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone4_15.addFeatures(features_Zone4_15);
var lyr_Zone4_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone4_15, 
                style: style_Zone4_15,
                popuplayertitle: 'Zone 4',
                interactive: false,
                title: '<img src="styles/legend/Zone4_15.png" /> Zone 4'
            });
var format_Zone5Kaltluftleitbahnen_16 = new ol.format.GeoJSON();
var features_Zone5Kaltluftleitbahnen_16 = format_Zone5Kaltluftleitbahnen_16.readFeatures(json_Zone5Kaltluftleitbahnen_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone5Kaltluftleitbahnen_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone5Kaltluftleitbahnen_16.addFeatures(features_Zone5Kaltluftleitbahnen_16);
var lyr_Zone5Kaltluftleitbahnen_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone5Kaltluftleitbahnen_16, 
                style: style_Zone5Kaltluftleitbahnen_16,
                popuplayertitle: 'Zone 5: Kaltluftleitbahnen',
                interactive: false,
                title: '<img src="styles/legend/Zone5Kaltluftleitbahnen_16.png" /> Zone 5: Kaltluftleitbahnen'
            });
var format_Zone5Kaltluftabfluss_17 = new ol.format.GeoJSON();
var features_Zone5Kaltluftabfluss_17 = format_Zone5Kaltluftabfluss_17.readFeatures(json_Zone5Kaltluftabfluss_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone5Kaltluftabfluss_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone5Kaltluftabfluss_17.addFeatures(features_Zone5Kaltluftabfluss_17);
var lyr_Zone5Kaltluftabfluss_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zone5Kaltluftabfluss_17, 
                style: style_Zone5Kaltluftabfluss_17,
                popuplayertitle: 'Zone 5: Kaltluftabfluss',
                interactive: false,
                title: '<img src="styles/legend/Zone5Kaltluftabfluss_17.png" /> Zone 5: Kaltluftabfluss'
            });
var group_HandlungskarteHidS = new ol.layer.Group({
                                layers: [lyr_Zone1_12,lyr_Zone2_13,lyr_Zone3_14,lyr_Zone4_15,lyr_Zone5Kaltluftleitbahnen_16,lyr_Zone5Kaltluftabfluss_17,],
                                fold: "open",
                                title: 'Handlungskarte K.Plan "HidS"'});
var group_Hitzebetroffenheit = new ol.layer.Group({
                                layers: [lyr_Null_1,lyr_TypC_2,lyr_TypB_3,lyr_TypA_4,],
                                fold: "open",
                                title: 'Hitzebetroffenheit K.Plan "HidS"'});
var group_KlimaStadtWuppertalWMS = new ol.layer.Group({
                                layers: [lyr_Klimafunktionskarte_5,lyr_PlanhinweiskarteKlima_6,lyr_Freiflchen_7,lyr_HitzeinselnAusweitungZukunftsszenario2050_9,lyr_HitzeinselnstarkIstZustand_8,lyr_HitzeinselnIstZustand_10,lyr_Luftleitbahnen_11,],
                                fold: "open",
                                title: 'Klima Stadt Wuppertal WMS'});


lyr_OSM_0.setVisible(true);lyr_Null_1.setVisible(false);lyr_TypC_2.setVisible(false);lyr_TypB_3.setVisible(false);lyr_TypA_4.setVisible(false);lyr_Klimafunktionskarte_5.setVisible(false);lyr_PlanhinweiskarteKlima_6.setVisible(false);lyr_Freiflchen_7.setVisible(false);lyr_HitzeinselnstarkIstZustand_8.setVisible(false);lyr_HitzeinselnAusweitungZukunftsszenario2050_9.setVisible(false);lyr_HitzeinselnIstZustand_10.setVisible(false);lyr_Luftleitbahnen_11.setVisible(false);lyr_Zone1_12.setVisible(true);lyr_Zone2_13.setVisible(true);lyr_Zone3_14.setVisible(true);lyr_Zone4_15.setVisible(true);lyr_Zone5Kaltluftleitbahnen_16.setVisible(true);lyr_Zone5Kaltluftabfluss_17.setVisible(true);
var layersList = [lyr_OSM_0,group_KlimaStadtWuppertalWMS,group_Hitzebetroffenheit,group_HandlungskarteHidS];
lyr_Null_1.set('fieldAliases', {'Hitzebetr': 'Hitzebetr', });
lyr_TypC_2.set('fieldAliases', {'Hitzebetr': 'Hitzebetr', });
lyr_TypB_3.set('fieldAliases', {'Hitzebetr': 'Hitzebetr', });
lyr_TypA_4.set('fieldAliases', {'Hitzebetr': 'Hitzebetr', });
lyr_Zone1_12.set('fieldAliases', {'FID': 'FID', });
lyr_Zone2_13.set('fieldAliases', {'FID': 'FID', });
lyr_Zone3_14.set('fieldAliases', {'FID': 'FID', });
lyr_Zone4_15.set('fieldAliases', {'FID': 'FID', });
lyr_Zone5Kaltluftleitbahnen_16.set('fieldAliases', {'FID': 'FID', });
lyr_Zone5Kaltluftabfluss_17.set('fieldAliases', {'id': 'id', });
lyr_Null_1.set('fieldImages', {'Hitzebetr': 'TextEdit', });
lyr_TypC_2.set('fieldImages', {'Hitzebetr': 'TextEdit', });
lyr_TypB_3.set('fieldImages', {'Hitzebetr': 'TextEdit', });
lyr_TypA_4.set('fieldImages', {'Hitzebetr': 'TextEdit', });
lyr_Zone1_12.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zone2_13.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zone3_14.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zone4_15.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zone5Kaltluftleitbahnen_16.set('fieldImages', {'FID': 'TextEdit', });
lyr_Zone5Kaltluftabfluss_17.set('fieldImages', {'id': 'TextEdit', });
lyr_Null_1.set('fieldLabels', {'Hitzebetr': 'no label', });
lyr_TypC_2.set('fieldLabels', {'Hitzebetr': 'no label', });
lyr_TypB_3.set('fieldLabels', {'Hitzebetr': 'no label', });
lyr_TypA_4.set('fieldLabels', {'Hitzebetr': 'no label', });
lyr_Zone1_12.set('fieldLabels', {'FID': 'no label', });
lyr_Zone2_13.set('fieldLabels', {'FID': 'no label', });
lyr_Zone3_14.set('fieldLabels', {'FID': 'no label', });
lyr_Zone4_15.set('fieldLabels', {'FID': 'no label', });
lyr_Zone5Kaltluftleitbahnen_16.set('fieldLabels', {'FID': 'no label', });
lyr_Zone5Kaltluftabfluss_17.set('fieldLabels', {'id': 'no label', });
lyr_Zone5Kaltluftabfluss_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
