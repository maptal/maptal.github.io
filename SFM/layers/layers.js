var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WuppertalQuartiere_1 = new ol.format.GeoJSON();
var features_WuppertalQuartiere_1 = format_WuppertalQuartiere_1.readFeatures(json_WuppertalQuartiere_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WuppertalQuartiere_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WuppertalQuartiere_1.addFeatures(features_WuppertalQuartiere_1);
var lyr_WuppertalQuartiere_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WuppertalQuartiere_1, 
                style: style_WuppertalQuartiere_1,
                popuplayertitle: 'Wuppertal - Quartiere',
                interactive: false,
                title: '<img src="styles/legend/WuppertalQuartiere_1.png" /> Wuppertal - Quartiere'
            });
var format_WuppertalBezirke_2 = new ol.format.GeoJSON();
var features_WuppertalBezirke_2 = format_WuppertalBezirke_2.readFeatures(json_WuppertalBezirke_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WuppertalBezirke_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WuppertalBezirke_2.addFeatures(features_WuppertalBezirke_2);
var lyr_WuppertalBezirke_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WuppertalBezirke_2, 
                style: style_WuppertalBezirke_2,
                popuplayertitle: 'Wuppertal - Bezirke',
                interactive: false,
                title: '<img src="styles/legend/WuppertalBezirke_2.png" /> Wuppertal - Bezirke'
            });
var format_WuppertalStadtgebiet_3 = new ol.format.GeoJSON();
var features_WuppertalStadtgebiet_3 = format_WuppertalStadtgebiet_3.readFeatures(json_WuppertalStadtgebiet_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WuppertalStadtgebiet_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WuppertalStadtgebiet_3.addFeatures(features_WuppertalStadtgebiet_3);
var lyr_WuppertalStadtgebiet_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WuppertalStadtgebiet_3, 
                style: style_WuppertalStadtgebiet_3,
                popuplayertitle: 'Wuppertal - Stadtgebiet',
                interactive: false,
                title: '<img src="styles/legend/WuppertalStadtgebiet_3.png" /> Wuppertal - Stadtgebiet'
            });
var format_PlanungsregionDsseldorfGemeinden_4 = new ol.format.GeoJSON();
var features_PlanungsregionDsseldorfGemeinden_4 = format_PlanungsregionDsseldorfGemeinden_4.readFeatures(json_PlanungsregionDsseldorfGemeinden_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanungsregionDsseldorfGemeinden_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanungsregionDsseldorfGemeinden_4.addFeatures(features_PlanungsregionDsseldorfGemeinden_4);
var lyr_PlanungsregionDsseldorfGemeinden_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanungsregionDsseldorfGemeinden_4, 
                style: style_PlanungsregionDsseldorfGemeinden_4,
                popuplayertitle: 'Planungsregion Düsseldorf - Gemeinden',
                interactive: false,
                title: '<img src="styles/legend/PlanungsregionDsseldorfGemeinden_4.png" /> Planungsregion Düsseldorf - Gemeinden'
            });
var format_PlanungsregionDsseldorfKreise_5 = new ol.format.GeoJSON();
var features_PlanungsregionDsseldorfKreise_5 = format_PlanungsregionDsseldorfKreise_5.readFeatures(json_PlanungsregionDsseldorfKreise_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanungsregionDsseldorfKreise_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanungsregionDsseldorfKreise_5.addFeatures(features_PlanungsregionDsseldorfKreise_5);
var lyr_PlanungsregionDsseldorfKreise_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanungsregionDsseldorfKreise_5, 
                style: style_PlanungsregionDsseldorfKreise_5,
                popuplayertitle: 'Planungsregion Düsseldorf - Kreise',
                interactive: false,
                title: '<img src="styles/legend/PlanungsregionDsseldorfKreise_5.png" /> Planungsregion Düsseldorf - Kreise'
            });
var format_PlanungsregionDsseldorf_6 = new ol.format.GeoJSON();
var features_PlanungsregionDsseldorf_6 = format_PlanungsregionDsseldorf_6.readFeatures(json_PlanungsregionDsseldorf_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanungsregionDsseldorf_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanungsregionDsseldorf_6.addFeatures(features_PlanungsregionDsseldorf_6);
var lyr_PlanungsregionDsseldorf_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanungsregionDsseldorf_6, 
                style: style_PlanungsregionDsseldorf_6,
                popuplayertitle: 'Planungsregion Düsseldorf',
                interactive: false,
                title: '<img src="styles/legend/PlanungsregionDsseldorf_6.png" /> Planungsregion Düsseldorf'
            });
var format_RegierungsbezirkDsseldorf_7 = new ol.format.GeoJSON();
var features_RegierungsbezirkDsseldorf_7 = format_RegierungsbezirkDsseldorf_7.readFeatures(json_RegierungsbezirkDsseldorf_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegierungsbezirkDsseldorf_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegierungsbezirkDsseldorf_7.addFeatures(features_RegierungsbezirkDsseldorf_7);
var lyr_RegierungsbezirkDsseldorf_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegierungsbezirkDsseldorf_7, 
                style: style_RegierungsbezirkDsseldorf_7,
                popuplayertitle: 'Regierungsbezirk Düsseldorf',
                interactive: false,
                title: '<img src="styles/legend/RegierungsbezirkDsseldorf_7.png" /> Regierungsbezirk Düsseldorf'
            });
var format_FlchenimEigentumderStadtWuppertal_8 = new ol.format.GeoJSON();
var features_FlchenimEigentumderStadtWuppertal_8 = format_FlchenimEigentumderStadtWuppertal_8.readFeatures(json_FlchenimEigentumderStadtWuppertal_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlchenimEigentumderStadtWuppertal_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlchenimEigentumderStadtWuppertal_8.addFeatures(features_FlchenimEigentumderStadtWuppertal_8);
var lyr_FlchenimEigentumderStadtWuppertal_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlchenimEigentumderStadtWuppertal_8, 
                style: style_FlchenimEigentumderStadtWuppertal_8,
                popuplayertitle: 'Flächen im Eigentum der Stadt Wuppertal',
                interactive: true,
                title: '<img src="styles/legend/FlchenimEigentumderStadtWuppertal_8.png" /> Flächen im Eigentum der Stadt Wuppertal'
            });
var lyr_Regionalplan_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/wms/wms_nw_regionalplan",
                              attributions: ' ',
                              params: {
                                "LAYERS": "regionalplan",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Regionalplan',
                            popuplayertitle: 'Regionalplan',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_Regionalplan_9, 0]);
var lyr_LandschaftsplanWestFestsetzungskarte_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpwest_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan West Festsetzungskarte',
                            popuplayertitle: 'Landschaftsplan West Festsetzungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanWestFestsetzungskarte_10, 0]);
var lyr_LandschaftsplanWestEntwicklungskarte_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpwest_entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan West Entwicklungskarte',
                            popuplayertitle: 'Landschaftsplan West Entwicklungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanWestEntwicklungskarte_11, 0]);
var lyr_LandschaftsplanOstFestsetzungskarte_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpost_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Ost Festsetzungskarte',
                            popuplayertitle: 'Landschaftsplan Ost Festsetzungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanOstFestsetzungskarte_12, 0]);
var lyr_LandschaftsplanOstEntwicklungskarte_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpost_entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Ost Entwicklungskarte',
                            popuplayertitle: 'Landschaftsplan Ost Entwicklungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanOstEntwicklungskarte_13, 0]);
var lyr_LandschaftsplanNordFestlegungskarte_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpnord_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Nord Festlegungskarte',
                            popuplayertitle: 'Landschaftsplan Nord Festlegungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanNordFestlegungskarte_14, 0]);
var lyr_LandschaftsplanNordEntwicklungskarte_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpnord_entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Nord Entwicklungskarte',
                            popuplayertitle: 'Landschaftsplan Nord Entwicklungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanNordEntwicklungskarte_15, 0]);
var lyr_LandschaftsplanGelpeFestsetzungskarte_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpgelpe_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Gelpe Festsetzungskarte',
                            popuplayertitle: 'Landschaftsplan Gelpe Festsetzungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanGelpeFestsetzungskarte_16, 0]);
var lyr_LandschaftsplanGelpeEntwicklungskarte_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpgelpe_entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Gelpe Entwicklungskarte',
                            popuplayertitle: 'Landschaftsplan Gelpe Entwicklungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanGelpeEntwicklungskarte_17, 0]);
var lyr_LandschaftsundNaturschutz_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "landschaft_lundsschutz",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschafts- und Naturschutz',
                            popuplayertitle: 'Landschafts- und Naturschutz',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsundNaturschutz_18, 0]);
var lyr_Festsetzungstexte_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lplan_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Festsetzungstexte',
                            popuplayertitle: 'Festsetzungstexte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Festsetzungstexte_19, 0]);
var lyr_Talachse_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "talachse",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Talachse',
                            popuplayertitle: 'Talachse',
                            type: '',
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_Talachse_20, 0]);
var lyr_FlchenanGrnanlagen_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gruen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Flächen an Grünanlagen',
                            popuplayertitle: 'Flächen an Grünanlagen',
                            type: '',
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_FlchenanGrnanlagen_21, 0]);
var lyr_ErhaltungsGestaltungssatzrechtsverbindl_22 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gestalt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Erhaltungs-/Gestaltungssatz. (rechtsverbindl.)',
                            popuplayertitle: 'Erhaltungs-/Gestaltungssatz. (rechtsverbindl.)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ErhaltungsGestaltungssatzrechtsverbindl_22, 0]);
var lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gestaltn",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Erhaltungs-/Gestaltungssatz. (nicht rechtsverbindl.)',
                            popuplayertitle: 'Erhaltungs-/Gestaltungssatz. (nicht rechtsverbindl.)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_23, 0]);
var lyr_BundesHauptverkehrsstraen_24 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadtbhstr",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bundes- Hauptverkehrsstraßen',
                            popuplayertitle: 'Bundes- Hauptverkehrsstraßen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BundesHauptverkehrsstraen_24, 0]);
var lyr_BedeutsameTeilrume_25 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "teilraeume",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bedeutsame Teilräume',
                            popuplayertitle: 'Bedeutsame Teilräume',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BedeutsameTeilrume_25, 0]);
var lyr_InnenBandStadtWuppertal_26 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "innenbandstadt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'InnenBandStadt Wuppertal',
                            popuplayertitle: 'InnenBandStadt Wuppertal',
                            type: '',
                            opacity: 0.600000,
                            
                            
                          });
              wms_layers.push([lyr_InnenBandStadtWuppertal_26, 0]);
var lyr_AlleStadtraumtypenSRT_27 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "srt_alle",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Alle Stadtraumtypen (SRT)',
                            popuplayertitle: 'Alle Stadtraumtypen (SRT)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AlleStadtraumtypenSRT_27, 0]);
var lyr_FNPnderungsverfahrenrechtsverbindlich_28 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren-r",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (rechtsverbindlich)',
                            popuplayertitle: 'FNP-Änderungsverfahren (rechtsverbindlich)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenrechtsverbindlich_28, 0]);
var lyr_FNPnderungsverfahrenimVerfahren_29 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren-n",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (im Verfahren)',
                            popuplayertitle: 'FNP-Änderungsverfahren (im Verfahren)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenimVerfahren_29, 0]);
var lyr_FNPnderungsverfahrenaufgehoben_30 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren-a",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (aufgehoben)',
                            popuplayertitle: 'FNP-Änderungsverfahren (aufgehoben)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenaufgehoben_30, 0]);
var lyr_FNPnderungsverfahrenalle_31 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (alle)',
                            popuplayertitle: 'FNP-Änderungsverfahren (alle)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenalle_31, 0]);
var lyr_FNPArbeitskarteaktualisiertXplan_32 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102_fnp_haupt_fl",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Arbeitskarte (aktualisiert) Xplan',
                            popuplayertitle: 'FNP-Arbeitskarte (aktualisiert) Xplan',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_FNPArbeitskarteaktualisiertXplan_32, 0]);
var lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_33 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102_fnp_ngF",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP nicht genehmigte Flächen (nachrichtl. Übernahmen)',
                            popuplayertitle: 'FNP nicht genehmigte Flächen (nachrichtl. Übernahmen)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_33, 0]);
var lyr_FNP2005clip_34 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102_fnp_clip",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP 2005 clip',
                            popuplayertitle: 'FNP 2005 clip',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_FNP2005clip_34, 0]);
var lyr_FNP2005_35 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102_fnp",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP 2005 ',
                            popuplayertitle: 'FNP 2005 ',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_FNP2005_35, 0]);
var lyr_Denkmalbereichssatzungenrechtsverbindlich_36 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "denkmalbr",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Denkmalbereichssatzungen (rechtsverbindlich)',
                            popuplayertitle: 'Denkmalbereichssatzungen (rechtsverbindlich)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Denkmalbereichssatzungenrechtsverbindlich_36, 0]);
var lyr_Denkmalbereichssatzungennichtrechtsverbindlich_37 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "denkmalbn",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Denkmalbereichssatzungen (nicht rechtsverbindlich)',
                            popuplayertitle: 'Denkmalbereichssatzungen (nicht rechtsverbindlich)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Denkmalbereichssatzungennichtrechtsverbindlich_37, 0]);
var lyr_Bodendenkmler_38 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodendenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bodendenkmäler',
                            popuplayertitle: 'Bodendenkmäler',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bodendenkmler_38, 0]);
var lyr_Baudenkmler_39 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "baudenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Baudenkmäler',
                            popuplayertitle: 'Baudenkmäler',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Baudenkmler_39, 0]);
var lyr_Innenbereichssatzungen_40 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "innenr",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Innenbereichssatzungen',
                            popuplayertitle: 'Innenbereichssatzungen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Innenbereichssatzungen_40, 0]);
var lyr_BPlanverfahrenrechtsverbindlich_41 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bverfahren-r",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'B-Planverfahren (rechtsverbindlich)',
                            popuplayertitle: 'B-Planverfahren (rechtsverbindlich)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BPlanverfahrenrechtsverbindlich_41, 0]);
var lyr_BPlanverfahrenimVerfahren_42 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bverfahren-n",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'B-Planverfahren (im Verfahren)',
                            popuplayertitle: 'B-Planverfahren (im Verfahren)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BPlanverfahrenimVerfahren_42, 0]);
var lyr_Baulastnachweis_43 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "baul",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Baulastnachweis',
                            popuplayertitle: 'Baulastnachweis',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Baulastnachweis_43, 0]);
var lyr_KlimaWrmebildTagsituation_44 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Tagsituation",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klima - Wärmebild Tagsituation',
                            popuplayertitle: 'Klima - Wärmebild Tagsituation',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_KlimaWrmebildTagsituation_44, 0]);
var lyr_KlimaWrmebildNachtsituation_45 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Nachtsituation",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klima - Wärmebild Nachtsituation',
                            popuplayertitle: 'Klima - Wärmebild Nachtsituation',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_KlimaWrmebildNachtsituation_45, 0]);
var lyr_KlimaPlanhinweiskarteKlima_46 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Planhinweise",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klima - Planhinweiskarte Klima',
                            popuplayertitle: 'Klima - Planhinweiskarte Klima',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_KlimaPlanhinweiskarteKlima_46, 0]);
var lyr_KlimaKlimafunktionskarte_47 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Klimafunktion",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klima - Klimafunktionskarte',
                            popuplayertitle: 'Klima - Klimafunktionskarte',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_KlimaKlimafunktionskarte_47, 0]);
var lyr_HitzeLuftleitbahnen_48 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Frischluftschneisen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitze - Luftleitbahnen',
                            popuplayertitle: 'Hitze - Luftleitbahnen',
                            type: '',
                            opacity: 0.800000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeLuftleitbahnen_48, 0]);
var lyr_HitzeHitzeinselnIstZustand_49 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitze - Hitzeinseln Ist-Zustand',
                            popuplayertitle: 'Hitze - Hitzeinseln Ist-Zustand',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeHitzeinselnIstZustand_49, 0]);
var lyr_HitzeHitzeinselnAusweitungZukunftsszenario2050_50 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-2050",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitze - Hitzeinseln Ausweitung Zukunftsszenario 2050',
                            popuplayertitle: 'Hitze - Hitzeinseln Ausweitung Zukunftsszenario 2050',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeHitzeinselnAusweitungZukunftsszenario2050_50, 0]);
var lyr_HitzeHitzeinselnstarkIstZustand_51 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Stark-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitze - Hitzeinseln (stark) Ist-Zustand',
                            popuplayertitle: 'Hitze - Hitzeinseln (stark) Ist-Zustand',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeHitzeinselnstarkIstZustand_51, 0]);
var lyr_HitzeFreiflchen_52 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Freiflaechen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitze - Freiflächen',
                            popuplayertitle: 'Hitze - Freiflächen',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeFreiflchen_52, 0]);
var lyr_BodenGesamtbewertungderBodenfunktionen_53 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_ges",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Boden - Gesamtbewertung der Bodenfunktionen',
                            popuplayertitle: 'Boden - Gesamtbewertung der Bodenfunktionen',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_BodenGesamtbewertungderBodenfunktionen_53, 0]);
var lyr_BodenBdenundWasserhaushalt_54 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_wasserhaushalt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Boden - Böden und Wasserhaushalt',
                            popuplayertitle: 'Boden - Böden und Wasserhaushalt',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_BodenBdenundWasserhaushalt_54, 0]);
var lyr_BodenBdenfrdasKlima_55 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_klima",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Boden - Böden für das Klima',
                            popuplayertitle: 'Boden - Böden für das Klima',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_BodenBdenfrdasKlima_55, 0]);
var lyr_BodenBdenalsLebensraum_56 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_naturhaushalt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Boden - Böden als Lebensraum',
                            popuplayertitle: 'Boden - Böden als Lebensraum',
                            type: '',
                            opacity: 0.400000,
                            
                            
                          });
              wms_layers.push([lyr_BodenBdenalsLebensraum_56, 0]);
var lyr_Naturdenkmale_57 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "naturdenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Naturdenkmale',
                            popuplayertitle: 'Naturdenkmale',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturdenkmale_57, 0]);
var lyr_Kompensationsflchenverffentlicht_58 = new ol.layer.Tile({
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
                            opacity: 0.700000,
                            
                            
                          });
              wms_layers.push([lyr_Kompensationsflchenverffentlicht_58, 0]);
var lyr_geschtzteBiotopePunkt_59 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "13",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'geschützte Biotope (Punkt)',
                            popuplayertitle: 'geschützte Biotope (Punkt)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_geschtzteBiotopePunkt_59, 0]);
var lyr_geschtzteBiotopeLinie_60 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "12",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'geschützte Biotope (Linie)',
                            popuplayertitle: 'geschützte Biotope (Linie)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_geschtzteBiotopeLinie_60, 0]);
var lyr_geschtzteBiotopeFlche_61 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "11",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'geschützte Biotope (Fläche)',
                            popuplayertitle: 'geschützte Biotope (Fläche)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_geschtzteBiotopeFlche_61, 0]);
var lyr_Wildnisgebiete_62 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "WG",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Wildnisgebiete',
                            popuplayertitle: 'Wildnisgebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Wildnisgebiete_62, 0]);
var lyr_Vogelschutzgebiete_63 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Vogelschutzgebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Vogelschutzgebiete',
                            popuplayertitle: 'Vogelschutzgebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vogelschutzgebiete_63, 0]);
var lyr_VerbundflchenherausragendebesondereBedeutung_64 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Verbundflaechen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Verbundflächen (herausragende/besondere Bedeutung)',
                            popuplayertitle: 'Verbundflächen (herausragende/besondere Bedeutung)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerbundflchenherausragendebesondereBedeutung_64, 0]);
var lyr_VerordnungersetzendeVertragsflche_65 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "SCH_V",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Verordnung ersetzende Vertragsfläche',
                            popuplayertitle: 'Verordnung ersetzende Vertragsfläche',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerordnungersetzendeVertragsflche_65, 0]);
var lyr_Naturwaldzellen_66 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "SCH_NWZ",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naturwaldzellen',
                            popuplayertitle: 'Naturwaldzellen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturwaldzellen_66, 0]);
var lyr_BereichefrdenSchutzderNatur_67 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BSN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Bereiche für den Schutz der Natur',
                            popuplayertitle: 'Bereiche für den Schutz der Natur',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BereichefrdenSchutzderNatur_67, 0]);
var lyr_RAMSAR_68 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "RAMSAR",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'RAMSAR',
                            popuplayertitle: 'RAMSAR',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RAMSAR_68, 0]);
var lyr_Naturschutzgebiete_69 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Naturschutzgebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naturschutzgebiete',
                            popuplayertitle: 'Naturschutzgebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturschutzgebiete_69, 0]);
var lyr_NaturrumlicheHaupteinheiten_70 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Naturraeumliche_Haupteinheiten",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naturräumliche Haupteinheiten',
                            popuplayertitle: 'Naturräumliche Haupteinheiten',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_NaturrumlicheHaupteinheiten_70, 0]);
var lyr_Naturparke_71 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Naturpark",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naturparke',
                            popuplayertitle: 'Naturparke',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturparke_71, 0]);
var lyr_Nationalpark_72 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Nationalpark",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Nationalpark',
                            popuplayertitle: 'Nationalpark',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Nationalpark_72, 0]);
var lyr_MassnahmenPunkt_73 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Massnahmen_Punkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Massnahmen (Punkt)',
                            popuplayertitle: 'Massnahmen (Punkt)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MassnahmenPunkt_73, 0]);
var lyr_MassnahmenLinie_74 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Massnahmen_Linie",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Massnahmen (Linie)',
                            popuplayertitle: 'Massnahmen (Linie)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MassnahmenLinie_74, 0]);
var lyr_MassnahmenFlche_75 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Massnahmen_Flaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Massnahmen (Fläche)',
                            popuplayertitle: 'Massnahmen (Fläche)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MassnahmenFlche_75, 0]);
var lyr_Landschaftsschutzgebiete_76 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Landschaftsschutzgebiet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landschaftsschutzgebiete',
                            popuplayertitle: 'Landschaftsschutzgebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landschaftsschutzgebiete_76, 0]);
var lyr_Landschaftsrume_77 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Landschaftsraeume",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landschaftsräume',
                            popuplayertitle: 'Landschaftsräume',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landschaftsrume_77, 0]);
var lyr_GebietefrdenSchutzderNatur_78 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GSN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gebiete für den Schutz der Natur',
                            popuplayertitle: 'Gebiete für den Schutz der Natur',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GebietefrdenSchutzderNatur_78, 0]);
var lyr_FFHGebiete_79 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "FFH-Gebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'FFH-Gebiete',
                            popuplayertitle: 'FFH-Gebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FFHGebiete_79, 0]);
var lyr_BiotoptypenPunkt_80 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotoptypen_Punkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotoptypen (Punkt)',
                            popuplayertitle: 'Biotoptypen (Punkt)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotoptypenPunkt_80, 0]);
var lyr_BiotoptypenLinie_81 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotoptypen_Linie",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotoptypen (Linie)',
                            popuplayertitle: 'Biotoptypen (Linie)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotoptypenLinie_81, 0]);
var lyr_BiotoptypenFlche_82 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotoptypen_Flaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotoptypen (Fläche)',
                            popuplayertitle: 'Biotoptypen (Fläche)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotoptypenFlche_82, 0]);
var lyr_BiotopkatasterPunkt_83 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotopkataster_Punkt",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotopkataster (Punkt)',
                            popuplayertitle: 'Biotopkataster (Punkt)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotopkatasterPunkt_83, 0]);
var lyr_BiotopkatasterLinie_84 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotopkataster_Linie",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotopkataster (Linie)',
                            popuplayertitle: 'Biotopkataster (Linie)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotopkatasterLinie_84, 0]);
var lyr_BiotopkatasterFlche_85 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotopkataster_Flaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotopkataster (Fläche)',
                            popuplayertitle: 'Biotopkataster (Fläche)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotopkatasterFlche_85, 0]);
var format_DornerWeg_86 = new ol.format.GeoJSON();
var features_DornerWeg_86 = format_DornerWeg_86.readFeatures(json_DornerWeg_86, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DornerWeg_86 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DornerWeg_86.addFeatures(features_DornerWeg_86);
var lyr_DornerWeg_86 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DornerWeg_86, 
                style: style_DornerWeg_86,
                popuplayertitle: 'Dorner Weg',
                interactive: true,
                title: '<img src="styles/legend/DornerWeg_86.png" /> Dorner Weg'
            });
var format_LichtscheidSd_87 = new ol.format.GeoJSON();
var features_LichtscheidSd_87 = format_LichtscheidSd_87.readFeatures(json_LichtscheidSd_87, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LichtscheidSd_87 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LichtscheidSd_87.addFeatures(features_LichtscheidSd_87);
var lyr_LichtscheidSd_87 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LichtscheidSd_87, 
                style: style_LichtscheidSd_87,
                popuplayertitle: 'Lichtscheid Süd',
                interactive: true,
                title: '<img src="styles/legend/LichtscheidSd_87.png" /> Lichtscheid Süd'
            });
var format_SchllerWest_88 = new ol.format.GeoJSON();
var features_SchllerWest_88 = format_SchllerWest_88.readFeatures(json_SchllerWest_88, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchllerWest_88 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchllerWest_88.addFeatures(features_SchllerWest_88);
var lyr_SchllerWest_88 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchllerWest_88, 
                style: style_SchllerWest_88,
                popuplayertitle: 'Schöller West',
                interactive: true,
                title: '<img src="styles/legend/SchllerWest_88.png" /> Schöller West'
            });
var format_Scniedestr_89 = new ol.format.GeoJSON();
var features_Scniedestr_89 = format_Scniedestr_89.readFeatures(json_Scniedestr_89, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scniedestr_89 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scniedestr_89.addFeatures(features_Scniedestr_89);
var lyr_Scniedestr_89 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scniedestr_89, 
                style: style_Scniedestr_89,
                popuplayertitle: 'Scniedestr',
                interactive: true,
                title: '<img src="styles/legend/Scniedestr_89.png" /> Scniedestr'
            });
var format_2009_GewRes_90 = new ol.format.GeoJSON();
var features_2009_GewRes_90 = format_2009_GewRes_90.readFeatures(json_2009_GewRes_90, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2009_GewRes_90 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2009_GewRes_90.addFeatures(features_2009_GewRes_90);
var lyr_2009_GewRes_90 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2009_GewRes_90, 
                style: style_2009_GewRes_90,
                popuplayertitle: '2009_GewRes',
                interactive: true,
                title: '<img src="styles/legend/2009_GewRes_90.png" /> 2009_GewRes'
            });
var format_2009_WohnRes_91 = new ol.format.GeoJSON();
var features_2009_WohnRes_91 = format_2009_WohnRes_91.readFeatures(json_2009_WohnRes_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2009_WohnRes_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2009_WohnRes_91.addFeatures(features_2009_WohnRes_91);
var lyr_2009_WohnRes_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2009_WohnRes_91, 
                style: style_2009_WohnRes_91,
                popuplayertitle: '2009_WohnRes',
                interactive: true,
                title: '<img src="styles/legend/2009_WohnRes_91.png" /> 2009_WohnRes'
            });
var format_2012_Wiedern_92 = new ol.format.GeoJSON();
var features_2012_Wiedern_92 = format_2012_Wiedern_92.readFeatures(json_2012_Wiedern_92, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2012_Wiedern_92 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2012_Wiedern_92.addFeatures(features_2012_Wiedern_92);
var lyr_2012_Wiedern_92 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2012_Wiedern_92, 
                style: style_2012_Wiedern_92,
                popuplayertitle: '2012_Wiedern',
                interactive: true,
                title: '<img src="styles/legend/2012_Wiedern_92.png" /> 2012_Wiedern'
            });
var format_2012_GewRes_93 = new ol.format.GeoJSON();
var features_2012_GewRes_93 = format_2012_GewRes_93.readFeatures(json_2012_GewRes_93, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2012_GewRes_93 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2012_GewRes_93.addFeatures(features_2012_GewRes_93);
var lyr_2012_GewRes_93 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2012_GewRes_93, 
                style: style_2012_GewRes_93,
                popuplayertitle: '2012_GewRes',
                interactive: true,
                title: '<img src="styles/legend/2012_GewRes_93.png" /> 2012_GewRes'
            });
var format_2012_WohnRes_94 = new ol.format.GeoJSON();
var features_2012_WohnRes_94 = format_2012_WohnRes_94.readFeatures(json_2012_WohnRes_94, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2012_WohnRes_94 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2012_WohnRes_94.addFeatures(features_2012_WohnRes_94);
var lyr_2012_WohnRes_94 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2012_WohnRes_94, 
                style: style_2012_WohnRes_94,
                popuplayertitle: '2012_WohnRes',
                interactive: true,
                title: '<img src="styles/legend/2012_WohnRes_94.png" /> 2012_WohnRes'
            });
var format_2012_Fl_Verbr_95 = new ol.format.GeoJSON();
var features_2012_Fl_Verbr_95 = format_2012_Fl_Verbr_95.readFeatures(json_2012_Fl_Verbr_95, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2012_Fl_Verbr_95 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2012_Fl_Verbr_95.addFeatures(features_2012_Fl_Verbr_95);
var lyr_2012_Fl_Verbr_95 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2012_Fl_Verbr_95, 
                style: style_2012_Fl_Verbr_95,
                popuplayertitle: '2012_Fl_Verbr',
                interactive: true,
                title: '<img src="styles/legend/2012_Fl_Verbr_95.png" /> 2012_Fl_Verbr'
            });
var format_20141104FNP_Reserven_Wuppertal_96 = new ol.format.GeoJSON();
var features_20141104FNP_Reserven_Wuppertal_96 = format_20141104FNP_Reserven_Wuppertal_96.readFeatures(json_20141104FNP_Reserven_Wuppertal_96, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20141104FNP_Reserven_Wuppertal_96 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20141104FNP_Reserven_Wuppertal_96.addFeatures(features_20141104FNP_Reserven_Wuppertal_96);
var lyr_20141104FNP_Reserven_Wuppertal_96 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20141104FNP_Reserven_Wuppertal_96, 
                style: style_20141104FNP_Reserven_Wuppertal_96,
                popuplayertitle: '20141104 - FNP_Reserven_Wuppertal',
                interactive: true,
                title: '<img src="styles/legend/20141104FNP_Reserven_Wuppertal_96.png" /> 20141104 - FNP_Reserven_Wuppertal'
            });
var format_20150130SIEDLMO_2014_Wuppertal_97 = new ol.format.GeoJSON();
var features_20150130SIEDLMO_2014_Wuppertal_97 = format_20150130SIEDLMO_2014_Wuppertal_97.readFeatures(json_20150130SIEDLMO_2014_Wuppertal_97, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20150130SIEDLMO_2014_Wuppertal_97 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_20150130SIEDLMO_2014_Wuppertal_97.addFeatures(features_20150130SIEDLMO_2014_Wuppertal_97);
var lyr_20150130SIEDLMO_2014_Wuppertal_97 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_20150130SIEDLMO_2014_Wuppertal_97, 
                style: style_20150130SIEDLMO_2014_Wuppertal_97,
                popuplayertitle: '20150130 - SIEDLMO_2014_Wuppertal',
                interactive: true,
                title: '<img src="styles/legend/20150130SIEDLMO_2014_Wuppertal_97.png" /> 20150130 - SIEDLMO_2014_Wuppertal'
            });
var format_2014Gesamt_98 = new ol.format.GeoJSON();
var features_2014Gesamt_98 = format_2014Gesamt_98.readFeatures(json_2014Gesamt_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2014Gesamt_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2014Gesamt_98.addFeatures(features_2014Gesamt_98);
var lyr_2014Gesamt_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2014Gesamt_98, 
                style: style_2014Gesamt_98,
                popuplayertitle: '2014 Gesamt',
                interactive: true,
                title: '<img src="styles/legend/2014Gesamt_98.png" /> 2014 Gesamt'
            });
var format_Wiedernutzungspotenziale_99 = new ol.format.GeoJSON();
var features_Wiedernutzungspotenziale_99 = format_Wiedernutzungspotenziale_99.readFeatures(json_Wiedernutzungspotenziale_99, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wiedernutzungspotenziale_99 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wiedernutzungspotenziale_99.addFeatures(features_Wiedernutzungspotenziale_99);
var lyr_Wiedernutzungspotenziale_99 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wiedernutzungspotenziale_99, 
                style: style_Wiedernutzungspotenziale_99,
                popuplayertitle: 'Wiedernutzungspotenziale',
                interactive: true,
                title: '<img src="styles/legend/Wiedernutzungspotenziale_99.png" /> Wiedernutzungspotenziale'
            });
var format_ReserveWohnen_100 = new ol.format.GeoJSON();
var features_ReserveWohnen_100 = format_ReserveWohnen_100.readFeatures(json_ReserveWohnen_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveWohnen_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveWohnen_100.addFeatures(features_ReserveWohnen_100);
var lyr_ReserveWohnen_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveWohnen_100, 
                style: style_ReserveWohnen_100,
                popuplayertitle: 'Reserve Wohnen',
                interactive: true,
                title: '<img src="styles/legend/ReserveWohnen_100.png" /> Reserve Wohnen'
            });
var format_ReserveGewerbe_101 = new ol.format.GeoJSON();
var features_ReserveGewerbe_101 = format_ReserveGewerbe_101.readFeatures(json_ReserveGewerbe_101, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveGewerbe_101 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveGewerbe_101.addFeatures(features_ReserveGewerbe_101);
var lyr_ReserveGewerbe_101 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveGewerbe_101, 
                style: style_ReserveGewerbe_101,
                popuplayertitle: 'Reserve Gewerbe',
                interactive: true,
                title: '<img src="styles/legend/ReserveGewerbe_101.png" /> Reserve Gewerbe'
            });
var format_ReserveGemischt_102 = new ol.format.GeoJSON();
var features_ReserveGemischt_102 = format_ReserveGemischt_102.readFeatures(json_ReserveGemischt_102, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveGemischt_102 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveGemischt_102.addFeatures(features_ReserveGemischt_102);
var lyr_ReserveGemischt_102 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveGemischt_102, 
                style: style_ReserveGemischt_102,
                popuplayertitle: 'Reserve Gemischt',
                interactive: true,
                title: '<img src="styles/legend/ReserveGemischt_102.png" /> Reserve Gemischt'
            });
var format_KeineReserve_103 = new ol.format.GeoJSON();
var features_KeineReserve_103 = format_KeineReserve_103.readFeatures(json_KeineReserve_103, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeineReserve_103 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeineReserve_103.addFeatures(features_KeineReserve_103);
var lyr_KeineReserve_103 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeineReserve_103, 
                style: style_KeineReserve_103,
                popuplayertitle: 'Keine Reserve',
                interactive: true,
                title: '<img src="styles/legend/KeineReserve_103.png" /> Keine Reserve'
            });
var format_Inanspruchnahme_104 = new ol.format.GeoJSON();
var features_Inanspruchnahme_104 = format_Inanspruchnahme_104.readFeatures(json_Inanspruchnahme_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inanspruchnahme_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inanspruchnahme_104.addFeatures(features_Inanspruchnahme_104);
var lyr_Inanspruchnahme_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inanspruchnahme_104, 
                style: style_Inanspruchnahme_104,
                popuplayertitle: 'Inanspruchnahme',
                interactive: true,
                title: '<img src="styles/legend/Inanspruchnahme_104.png" /> Inanspruchnahme'
            });
var format_BetriebsgebundeneReserve_105 = new ol.format.GeoJSON();
var features_BetriebsgebundeneReserve_105 = format_BetriebsgebundeneReserve_105.readFeatures(json_BetriebsgebundeneReserve_105, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BetriebsgebundeneReserve_105 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BetriebsgebundeneReserve_105.addFeatures(features_BetriebsgebundeneReserve_105);
var lyr_BetriebsgebundeneReserve_105 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BetriebsgebundeneReserve_105, 
                style: style_BetriebsgebundeneReserve_105,
                popuplayertitle: 'Betriebsgebundene Reserve',
                interactive: true,
                title: '<img src="styles/legend/BetriebsgebundeneReserve_105.png" /> Betriebsgebundene Reserve'
            });
var format_Wiedernutzungspotenziale_106 = new ol.format.GeoJSON();
var features_Wiedernutzungspotenziale_106 = format_Wiedernutzungspotenziale_106.readFeatures(json_Wiedernutzungspotenziale_106, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wiedernutzungspotenziale_106 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wiedernutzungspotenziale_106.addFeatures(features_Wiedernutzungspotenziale_106);
var lyr_Wiedernutzungspotenziale_106 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wiedernutzungspotenziale_106, 
                style: style_Wiedernutzungspotenziale_106,
                popuplayertitle: 'Wiedernutzungspotenziale',
                interactive: true,
                title: '<img src="styles/legend/Wiedernutzungspotenziale_106.png" /> Wiedernutzungspotenziale'
            });
var format_ReserveWohnen_107 = new ol.format.GeoJSON();
var features_ReserveWohnen_107 = format_ReserveWohnen_107.readFeatures(json_ReserveWohnen_107, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveWohnen_107 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveWohnen_107.addFeatures(features_ReserveWohnen_107);
var lyr_ReserveWohnen_107 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveWohnen_107, 
                style: style_ReserveWohnen_107,
                popuplayertitle: 'Reserve Wohnen',
                interactive: true,
                title: '<img src="styles/legend/ReserveWohnen_107.png" /> Reserve Wohnen'
            });
var format_ReserveGewerbe_108 = new ol.format.GeoJSON();
var features_ReserveGewerbe_108 = format_ReserveGewerbe_108.readFeatures(json_ReserveGewerbe_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveGewerbe_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveGewerbe_108.addFeatures(features_ReserveGewerbe_108);
var lyr_ReserveGewerbe_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveGewerbe_108, 
                style: style_ReserveGewerbe_108,
                popuplayertitle: 'Reserve Gewerbe',
                interactive: true,
                title: '<img src="styles/legend/ReserveGewerbe_108.png" /> Reserve Gewerbe'
            });
var format_ReserveGemischt_109 = new ol.format.GeoJSON();
var features_ReserveGemischt_109 = format_ReserveGemischt_109.readFeatures(json_ReserveGemischt_109, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveGemischt_109 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveGemischt_109.addFeatures(features_ReserveGemischt_109);
var lyr_ReserveGemischt_109 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveGemischt_109, 
                style: style_ReserveGemischt_109,
                popuplayertitle: 'Reserve Gemischt',
                interactive: true,
                title: '<img src="styles/legend/ReserveGemischt_109.png" /> Reserve Gemischt'
            });
var format_KeineReserve_110 = new ol.format.GeoJSON();
var features_KeineReserve_110 = format_KeineReserve_110.readFeatures(json_KeineReserve_110, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeineReserve_110 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeineReserve_110.addFeatures(features_KeineReserve_110);
var lyr_KeineReserve_110 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeineReserve_110, 
                style: style_KeineReserve_110,
                popuplayertitle: 'Keine Reserve',
                interactive: true,
                title: '<img src="styles/legend/KeineReserve_110.png" /> Keine Reserve'
            });
var format_Inanspruchnahme_111 = new ol.format.GeoJSON();
var features_Inanspruchnahme_111 = format_Inanspruchnahme_111.readFeatures(json_Inanspruchnahme_111, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inanspruchnahme_111 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inanspruchnahme_111.addFeatures(features_Inanspruchnahme_111);
var lyr_Inanspruchnahme_111 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inanspruchnahme_111, 
                style: style_Inanspruchnahme_111,
                popuplayertitle: 'Inanspruchnahme',
                interactive: true,
                title: '<img src="styles/legend/Inanspruchnahme_111.png" /> Inanspruchnahme'
            });
var format_BetriebsgebundeneReserve_112 = new ol.format.GeoJSON();
var features_BetriebsgebundeneReserve_112 = format_BetriebsgebundeneReserve_112.readFeatures(json_BetriebsgebundeneReserve_112, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BetriebsgebundeneReserve_112 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BetriebsgebundeneReserve_112.addFeatures(features_BetriebsgebundeneReserve_112);
var lyr_BetriebsgebundeneReserve_112 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BetriebsgebundeneReserve_112, 
                style: style_BetriebsgebundeneReserve_112,
                popuplayertitle: 'Betriebsgebundene Reserve',
                interactive: true,
                title: '<img src="styles/legend/BetriebsgebundeneReserve_112.png" /> Betriebsgebundene Reserve'
            });
var format_Wiedernutzungspotenziale_113 = new ol.format.GeoJSON();
var features_Wiedernutzungspotenziale_113 = format_Wiedernutzungspotenziale_113.readFeatures(json_Wiedernutzungspotenziale_113, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wiedernutzungspotenziale_113 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wiedernutzungspotenziale_113.addFeatures(features_Wiedernutzungspotenziale_113);
var lyr_Wiedernutzungspotenziale_113 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wiedernutzungspotenziale_113, 
                style: style_Wiedernutzungspotenziale_113,
                popuplayertitle: 'Wiedernutzungspotenziale',
                interactive: true,
                title: '<img src="styles/legend/Wiedernutzungspotenziale_113.png" /> Wiedernutzungspotenziale'
            });
var format_ReserveWohnen_114 = new ol.format.GeoJSON();
var features_ReserveWohnen_114 = format_ReserveWohnen_114.readFeatures(json_ReserveWohnen_114, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveWohnen_114 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveWohnen_114.addFeatures(features_ReserveWohnen_114);
var lyr_ReserveWohnen_114 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveWohnen_114, 
                style: style_ReserveWohnen_114,
                popuplayertitle: 'Reserve Wohnen',
                interactive: true,
                title: '<img src="styles/legend/ReserveWohnen_114.png" /> Reserve Wohnen'
            });
var format_ReserveGewerbe_115 = new ol.format.GeoJSON();
var features_ReserveGewerbe_115 = format_ReserveGewerbe_115.readFeatures(json_ReserveGewerbe_115, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveGewerbe_115 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveGewerbe_115.addFeatures(features_ReserveGewerbe_115);
var lyr_ReserveGewerbe_115 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveGewerbe_115, 
                style: style_ReserveGewerbe_115,
                popuplayertitle: 'Reserve Gewerbe',
                interactive: true,
                title: '<img src="styles/legend/ReserveGewerbe_115.png" /> Reserve Gewerbe'
            });
var format_ReserveGemischt_116 = new ol.format.GeoJSON();
var features_ReserveGemischt_116 = format_ReserveGemischt_116.readFeatures(json_ReserveGemischt_116, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveGemischt_116 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveGemischt_116.addFeatures(features_ReserveGemischt_116);
var lyr_ReserveGemischt_116 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveGemischt_116, 
                style: style_ReserveGemischt_116,
                popuplayertitle: 'Reserve Gemischt',
                interactive: true,
                title: '<img src="styles/legend/ReserveGemischt_116.png" /> Reserve Gemischt'
            });
var format_KeineReserve_117 = new ol.format.GeoJSON();
var features_KeineReserve_117 = format_KeineReserve_117.readFeatures(json_KeineReserve_117, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KeineReserve_117 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KeineReserve_117.addFeatures(features_KeineReserve_117);
var lyr_KeineReserve_117 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KeineReserve_117, 
                style: style_KeineReserve_117,
                popuplayertitle: 'Keine Reserve',
                interactive: true,
                title: '<img src="styles/legend/KeineReserve_117.png" /> Keine Reserve'
            });
var format_Inanspruchnahme_118 = new ol.format.GeoJSON();
var features_Inanspruchnahme_118 = format_Inanspruchnahme_118.readFeatures(json_Inanspruchnahme_118, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inanspruchnahme_118 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inanspruchnahme_118.addFeatures(features_Inanspruchnahme_118);
var lyr_Inanspruchnahme_118 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inanspruchnahme_118, 
                style: style_Inanspruchnahme_118,
                popuplayertitle: 'Inanspruchnahme',
                interactive: true,
                title: '<img src="styles/legend/Inanspruchnahme_118.png" /> Inanspruchnahme'
            });
var format_BetriebsgebundeneReserve_119 = new ol.format.GeoJSON();
var features_BetriebsgebundeneReserve_119 = format_BetriebsgebundeneReserve_119.readFeatures(json_BetriebsgebundeneReserve_119, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BetriebsgebundeneReserve_119 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BetriebsgebundeneReserve_119.addFeatures(features_BetriebsgebundeneReserve_119);
var lyr_BetriebsgebundeneReserve_119 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BetriebsgebundeneReserve_119, 
                style: style_BetriebsgebundeneReserve_119,
                popuplayertitle: 'Betriebsgebundene Reserve',
                interactive: true,
                title: '<img src="styles/legend/BetriebsgebundeneReserve_119.png" /> Betriebsgebundene Reserve'
            });
var group_2023 = new ol.layer.Group({
                                layers: [lyr_Wiedernutzungspotenziale_113,lyr_ReserveWohnen_114,lyr_ReserveGewerbe_115,lyr_ReserveGemischt_116,lyr_KeineReserve_117,lyr_Inanspruchnahme_118,lyr_BetriebsgebundeneReserve_119,],
                                fold: 'open',
                                title: '2023'});
var group_2020 = new ol.layer.Group({
                                layers: [lyr_Wiedernutzungspotenziale_106,lyr_ReserveWohnen_107,lyr_ReserveGewerbe_108,lyr_ReserveGemischt_109,lyr_KeineReserve_110,lyr_Inanspruchnahme_111,lyr_BetriebsgebundeneReserve_112,],
                                fold: 'close',
                                title: '2020'});
var group_2017 = new ol.layer.Group({
                                layers: [lyr_Wiedernutzungspotenziale_99,lyr_ReserveWohnen_100,lyr_ReserveGewerbe_101,lyr_ReserveGemischt_102,lyr_KeineReserve_103,lyr_Inanspruchnahme_104,lyr_BetriebsgebundeneReserve_105,],
                                fold: 'close',
                                title: '2017'});
var group_2014 = new ol.layer.Group({
                                layers: [lyr_20141104FNP_Reserven_Wuppertal_96,lyr_20150130SIEDLMO_2014_Wuppertal_97,lyr_2014Gesamt_98,],
                                fold: 'close',
                                title: '2014'});
var group_2012 = new ol.layer.Group({
                                layers: [lyr_2012_Wiedern_92,lyr_2012_GewRes_93,lyr_2012_WohnRes_94,lyr_2012_Fl_Verbr_95,],
                                fold: 'close',
                                title: '2012'});
var group_2009 = new ol.layer.Group({
                                layers: [lyr_2009_GewRes_90,lyr_2009_WohnRes_91,],
                                fold: 'close',
                                title: '2009'});
var group_GewerbepotenzialflchenGrnStadtGrau = new ol.layer.Group({
                                layers: [lyr_DornerWeg_86,lyr_LichtscheidSd_87,lyr_SchllerWest_88,lyr_Scniedestr_89,],
                                fold: 'open',
                                title: 'Gewerbepotenzialflächen (Grün.Stadt.Grau)'});
var group_LInfoS = new ol.layer.Group({
                                layers: [lyr_geschtzteBiotopePunkt_59,lyr_geschtzteBiotopeLinie_60,lyr_geschtzteBiotopeFlche_61,lyr_Wildnisgebiete_62,lyr_Vogelschutzgebiete_63,lyr_VerbundflchenherausragendebesondereBedeutung_64,lyr_VerordnungersetzendeVertragsflche_65,lyr_Naturwaldzellen_66,lyr_BereichefrdenSchutzderNatur_67,lyr_RAMSAR_68,lyr_Naturschutzgebiete_69,lyr_NaturrumlicheHaupteinheiten_70,lyr_Naturparke_71,lyr_Nationalpark_72,lyr_MassnahmenPunkt_73,lyr_MassnahmenLinie_74,lyr_MassnahmenFlche_75,lyr_Landschaftsschutzgebiete_76,lyr_Landschaftsrume_77,lyr_GebietefrdenSchutzderNatur_78,lyr_FFHGebiete_79,lyr_BiotoptypenPunkt_80,lyr_BiotoptypenLinie_81,lyr_BiotoptypenFlche_82,lyr_BiotopkatasterPunkt_83,lyr_BiotopkatasterLinie_84,lyr_BiotopkatasterFlche_85,],
                                fold: 'close',
                                title: 'LInfoS'});
var group_WuppertalUmwelt = new ol.layer.Group({
                                layers: [lyr_KlimaWrmebildTagsituation_44,lyr_KlimaWrmebildNachtsituation_45,lyr_KlimaPlanhinweiskarteKlima_46,lyr_KlimaKlimafunktionskarte_47,lyr_HitzeLuftleitbahnen_48,lyr_HitzeHitzeinselnIstZustand_49,lyr_HitzeHitzeinselnAusweitungZukunftsszenario2050_50,lyr_HitzeHitzeinselnstarkIstZustand_51,lyr_HitzeFreiflchen_52,lyr_BodenGesamtbewertungderBodenfunktionen_53,lyr_BodenBdenundWasserhaushalt_54,lyr_BodenBdenfrdasKlima_55,lyr_BodenBdenalsLebensraum_56,lyr_Naturdenkmale_57,lyr_Kompensationsflchenverffentlicht_58,],
                                fold: 'close',
                                title: 'Wuppertal - Umwelt'});
var group_WuppertalPlanung = new ol.layer.Group({
                                layers: [lyr_Talachse_20,lyr_FlchenanGrnanlagen_21,lyr_ErhaltungsGestaltungssatzrechtsverbindl_22,lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_23,lyr_BundesHauptverkehrsstraen_24,lyr_BedeutsameTeilrume_25,lyr_InnenBandStadtWuppertal_26,lyr_AlleStadtraumtypenSRT_27,lyr_FNPnderungsverfahrenrechtsverbindlich_28,lyr_FNPnderungsverfahrenimVerfahren_29,lyr_FNPnderungsverfahrenaufgehoben_30,lyr_FNPnderungsverfahrenalle_31,lyr_FNPArbeitskarteaktualisiertXplan_32,lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_33,lyr_FNP2005clip_34,lyr_FNP2005_35,lyr_Denkmalbereichssatzungenrechtsverbindlich_36,lyr_Denkmalbereichssatzungennichtrechtsverbindlich_37,lyr_Bodendenkmler_38,lyr_Baudenkmler_39,lyr_Innenbereichssatzungen_40,lyr_BPlanverfahrenrechtsverbindlich_41,lyr_BPlanverfahrenimVerfahren_42,lyr_Baulastnachweis_43,],
                                fold: 'close',
                                title: 'Wuppertal - Planung'});
var group_WuppertalLandschaftsplne = new ol.layer.Group({
                                layers: [lyr_LandschaftsplanWestFestsetzungskarte_10,lyr_LandschaftsplanWestEntwicklungskarte_11,lyr_LandschaftsplanOstFestsetzungskarte_12,lyr_LandschaftsplanOstEntwicklungskarte_13,lyr_LandschaftsplanNordFestlegungskarte_14,lyr_LandschaftsplanNordEntwicklungskarte_15,lyr_LandschaftsplanGelpeFestsetzungskarte_16,lyr_LandschaftsplanGelpeEntwicklungskarte_17,lyr_LandschaftsundNaturschutz_18,lyr_Festsetzungstexte_19,],
                                fold: 'close',
                                title: 'Wuppertal - Landschaftspläne'});
var group_Verwaltungsgrenzen = new ol.layer.Group({
                                layers: [lyr_WuppertalQuartiere_1,lyr_WuppertalBezirke_2,lyr_WuppertalStadtgebiet_3,lyr_PlanungsregionDsseldorfGemeinden_4,lyr_PlanungsregionDsseldorfKreise_5,lyr_PlanungsregionDsseldorf_6,lyr_RegierungsbezirkDsseldorf_7,],
                                fold: 'close',
                                title: 'Verwaltungsgrenzen'});

lyr_OpenStreetMap_0.setVisible(true);lyr_WuppertalQuartiere_1.setVisible(false);lyr_WuppertalBezirke_2.setVisible(false);lyr_WuppertalStadtgebiet_3.setVisible(true);lyr_PlanungsregionDsseldorfGemeinden_4.setVisible(false);lyr_PlanungsregionDsseldorfKreise_5.setVisible(false);lyr_PlanungsregionDsseldorf_6.setVisible(true);lyr_RegierungsbezirkDsseldorf_7.setVisible(true);lyr_FlchenimEigentumderStadtWuppertal_8.setVisible(false);lyr_Regionalplan_9.setVisible(false);lyr_LandschaftsplanWestFestsetzungskarte_10.setVisible(false);lyr_LandschaftsplanWestEntwicklungskarte_11.setVisible(false);lyr_LandschaftsplanOstFestsetzungskarte_12.setVisible(false);lyr_LandschaftsplanOstEntwicklungskarte_13.setVisible(false);lyr_LandschaftsplanNordFestlegungskarte_14.setVisible(false);lyr_LandschaftsplanNordEntwicklungskarte_15.setVisible(false);lyr_LandschaftsplanGelpeFestsetzungskarte_16.setVisible(false);lyr_LandschaftsplanGelpeEntwicklungskarte_17.setVisible(false);lyr_LandschaftsundNaturschutz_18.setVisible(false);lyr_Festsetzungstexte_19.setVisible(false);lyr_Talachse_20.setVisible(false);lyr_FlchenanGrnanlagen_21.setVisible(false);lyr_ErhaltungsGestaltungssatzrechtsverbindl_22.setVisible(false);lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_23.setVisible(false);lyr_BundesHauptverkehrsstraen_24.setVisible(false);lyr_BedeutsameTeilrume_25.setVisible(false);lyr_InnenBandStadtWuppertal_26.setVisible(false);lyr_AlleStadtraumtypenSRT_27.setVisible(false);lyr_FNPnderungsverfahrenrechtsverbindlich_28.setVisible(false);lyr_FNPnderungsverfahrenimVerfahren_29.setVisible(false);lyr_FNPnderungsverfahrenaufgehoben_30.setVisible(false);lyr_FNPnderungsverfahrenalle_31.setVisible(false);lyr_FNPArbeitskarteaktualisiertXplan_32.setVisible(false);lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_33.setVisible(false);lyr_FNP2005clip_34.setVisible(false);lyr_FNP2005_35.setVisible(false);lyr_Denkmalbereichssatzungenrechtsverbindlich_36.setVisible(false);lyr_Denkmalbereichssatzungennichtrechtsverbindlich_37.setVisible(false);lyr_Bodendenkmler_38.setVisible(false);lyr_Baudenkmler_39.setVisible(false);lyr_Innenbereichssatzungen_40.setVisible(false);lyr_BPlanverfahrenrechtsverbindlich_41.setVisible(false);lyr_BPlanverfahrenimVerfahren_42.setVisible(false);lyr_Baulastnachweis_43.setVisible(false);lyr_KlimaWrmebildTagsituation_44.setVisible(false);lyr_KlimaWrmebildNachtsituation_45.setVisible(false);lyr_KlimaPlanhinweiskarteKlima_46.setVisible(false);lyr_KlimaKlimafunktionskarte_47.setVisible(false);lyr_HitzeLuftleitbahnen_48.setVisible(false);lyr_HitzeHitzeinselnIstZustand_49.setVisible(false);lyr_HitzeHitzeinselnAusweitungZukunftsszenario2050_50.setVisible(false);lyr_HitzeHitzeinselnstarkIstZustand_51.setVisible(false);lyr_HitzeFreiflchen_52.setVisible(false);lyr_BodenGesamtbewertungderBodenfunktionen_53.setVisible(false);lyr_BodenBdenundWasserhaushalt_54.setVisible(false);lyr_BodenBdenfrdasKlima_55.setVisible(false);lyr_BodenBdenalsLebensraum_56.setVisible(false);lyr_Naturdenkmale_57.setVisible(false);lyr_Kompensationsflchenverffentlicht_58.setVisible(false);lyr_geschtzteBiotopePunkt_59.setVisible(false);lyr_geschtzteBiotopeLinie_60.setVisible(false);lyr_geschtzteBiotopeFlche_61.setVisible(false);lyr_Wildnisgebiete_62.setVisible(false);lyr_Vogelschutzgebiete_63.setVisible(false);lyr_VerbundflchenherausragendebesondereBedeutung_64.setVisible(false);lyr_VerordnungersetzendeVertragsflche_65.setVisible(false);lyr_Naturwaldzellen_66.setVisible(false);lyr_BereichefrdenSchutzderNatur_67.setVisible(false);lyr_RAMSAR_68.setVisible(false);lyr_Naturschutzgebiete_69.setVisible(false);lyr_NaturrumlicheHaupteinheiten_70.setVisible(false);lyr_Naturparke_71.setVisible(false);lyr_Nationalpark_72.setVisible(false);lyr_MassnahmenPunkt_73.setVisible(false);lyr_MassnahmenLinie_74.setVisible(false);lyr_MassnahmenFlche_75.setVisible(false);lyr_Landschaftsschutzgebiete_76.setVisible(false);lyr_Landschaftsrume_77.setVisible(false);lyr_GebietefrdenSchutzderNatur_78.setVisible(false);lyr_FFHGebiete_79.setVisible(false);lyr_BiotoptypenPunkt_80.setVisible(false);lyr_BiotoptypenLinie_81.setVisible(false);lyr_BiotoptypenFlche_82.setVisible(false);lyr_BiotopkatasterPunkt_83.setVisible(false);lyr_BiotopkatasterLinie_84.setVisible(false);lyr_BiotopkatasterFlche_85.setVisible(false);lyr_DornerWeg_86.setVisible(true);lyr_LichtscheidSd_87.setVisible(true);lyr_SchllerWest_88.setVisible(true);lyr_Scniedestr_89.setVisible(true);lyr_2009_GewRes_90.setVisible(false);lyr_2009_WohnRes_91.setVisible(false);lyr_2012_Wiedern_92.setVisible(false);lyr_2012_GewRes_93.setVisible(false);lyr_2012_WohnRes_94.setVisible(false);lyr_2012_Fl_Verbr_95.setVisible(false);lyr_20141104FNP_Reserven_Wuppertal_96.setVisible(false);lyr_20150130SIEDLMO_2014_Wuppertal_97.setVisible(false);lyr_2014Gesamt_98.setVisible(false);lyr_Wiedernutzungspotenziale_99.setVisible(false);lyr_ReserveWohnen_100.setVisible(false);lyr_ReserveGewerbe_101.setVisible(false);lyr_ReserveGemischt_102.setVisible(false);lyr_KeineReserve_103.setVisible(false);lyr_Inanspruchnahme_104.setVisible(false);lyr_BetriebsgebundeneReserve_105.setVisible(false);lyr_Wiedernutzungspotenziale_106.setVisible(false);lyr_ReserveWohnen_107.setVisible(false);lyr_ReserveGewerbe_108.setVisible(false);lyr_ReserveGemischt_109.setVisible(false);lyr_KeineReserve_110.setVisible(false);lyr_Inanspruchnahme_111.setVisible(false);lyr_BetriebsgebundeneReserve_112.setVisible(false);lyr_Wiedernutzungspotenziale_113.setVisible(true);lyr_ReserveWohnen_114.setVisible(true);lyr_ReserveGewerbe_115.setVisible(true);lyr_ReserveGemischt_116.setVisible(true);lyr_KeineReserve_117.setVisible(true);lyr_Inanspruchnahme_118.setVisible(true);lyr_BetriebsgebundeneReserve_119.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Verwaltungsgrenzen,lyr_FlchenimEigentumderStadtWuppertal_8,lyr_Regionalplan_9,group_WuppertalLandschaftsplne,group_WuppertalPlanung,group_WuppertalUmwelt,group_LInfoS,group_GewerbepotenzialflchenGrnStadtGrau,group_2009,group_2012,group_2014,group_2017,group_2020,group_2023];
lyr_WuppertalQuartiere_1.set('fieldAliases', {'fid': 'fid', 'QUARTIER': 'QUARTIER', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_WuppertalBezirke_2.set('fieldAliases', {'fid': 'fid', 'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_WuppertalStadtgebiet_3.set('fieldAliases', {'fid': 'fid', 'STADT': 'STADT', 'FLAECHE': 'FLAECHE', 'Fläche2': 'Fläche2', });
lyr_PlanungsregionDsseldorfGemeinden_4.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_GEN': 'KOORD_GEN', 'KOORD_ORI': 'KOORD_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'STAND': 'STAND', });
lyr_PlanungsregionDsseldorfKreise_5.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_ORI': 'KOORD_ORI', 'KOORD_GEN': 'KOORD_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'STAND': 'STAND', });
lyr_PlanungsregionDsseldorf_6.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_ORI': 'KOORD_ORI', 'KOORD_GEN': 'KOORD_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'STAND': 'STAND', });
lyr_RegierungsbezirkDsseldorf_7.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_ORI': 'KOORD_ORI', 'KOORD_GEN': 'KOORD_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'STAND': 'STAND', });
lyr_FlchenimEigentumderStadtWuppertal_8.set('fieldAliases', {'fid': 'fid', 'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', 'Fläche': 'Fläche', });
lyr_DornerWeg_86.set('fieldAliases', {'id': 'id', 'Nsme': 'Nsme', });
lyr_LichtscheidSd_87.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SchllerWest_88.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Scniedestr_89.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_2009_GewRes_90.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GKZ': 'GKZ', 'KOMMUNE': 'KOMMUNE', 'NR_GE': 'NR_GE', 'NAME_GE': 'NAME_GE', 'GROESSE_GE': 'GROESSE_GE', 'NR_UNGENUT': 'NR_UNGENUT', 'NAME_UNGEN': 'NAME_UNGEN', 'GROESSE_UN': 'GROESSE_UN', 'PLANUNGSRE': 'PLANUNGSRE', 'VERFUEGBAR': 'VERFUEGBAR', 'MZM_ALS': 'MZM_ALS', 'MZM_ALT': 'MZM_ALT', 'MZM_BPL': 'MZM_BPL', 'MZM_ERS': 'MZM_ERS', 'MZM_GSE': 'MZM_GSE', 'MZM_BFN': 'MZM_BFN', 'MZM_SON': 'MZM_SON', 'BEMERKUNG': 'BEMERKUNG', 'GUELTIGAB': 'GUELTIGAB', 'GUELTIGBIS': 'GUELTIGBIS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2009_WohnRes_91.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GKZ': 'GKZ', 'KOMMUNE': 'KOMMUNE', 'NAME_UNGEN': 'NAME_UNGEN', 'GROESSE_UN': 'GROESSE_UN', 'PLANUNGSRE': 'PLANUNGSRE', 'VERFUEGBAR': 'VERFUEGBAR', 'NUTZUNGSKA': 'NUTZUNGSKA', 'MZM_ALS': 'MZM_ALS', 'MZM_ALT': 'MZM_ALT', 'MZM_BPL': 'MZM_BPL', 'MZM_ERS': 'MZM_ERS', 'MZM_GSE': 'MZM_GSE', 'MZM_BFN': 'MZM_BFN', 'MZM_SON': 'MZM_SON', 'BEMERKUNG': 'BEMERKUNG', 'GUELTIGAB': 'GUELTIGAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2012_Wiedern_92.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GKZ': 'GKZ', 'KOMMUNE': 'KOMMUNE', 'FL_NR': 'FL_NR', 'FL_NAME': 'FL_NAME', 'V_NACHF_N': 'V_NACHF_N', 'NUTZKAP_WE': 'NUTZKAP_WE', 'FLAECHE_HA': 'FLAECHE_HA', 'MZM_ALSALT': 'MZM_ALSALT', 'MZM_BPL': 'MZM_BPL', 'MZM_ERS': 'MZM_ERS', 'MZM_GSE': 'MZM_GSE', 'MZM_BFN': 'MZM_BFN', 'MZM_SON': 'MZM_SON', 'VERFUEGBAR': 'VERFUEGBAR', 'ANMERKUNG': 'ANMERKUNG', 'GUELTIGAB': 'GUELTIGAB', 'GUELTIGBIS': 'GUELTIGBIS', 'NEU': 'NEU', 'GEAENDERT': 'GEAENDERT', 'GELOESCHT': 'GELOESCHT', 'GEOMETRIE': 'GEOMETRIE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2012_GewRes_93.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GKZ': 'GKZ', 'KOMMUNE': 'KOMMUNE', 'NR_UNGENUT': 'NR_UNGENUT', 'NAME_UNGEN': 'NAME_UNGEN', 'GROESSE_UN': 'GROESSE_UN', 'PLANUNGSRE': 'PLANUNGSRE', 'VERFUEGBAR': 'VERFUEGBAR', 'BRACHE': 'BRACHE', 'MZM_ALSALT': 'MZM_ALSALT', 'MZM_BPL': 'MZM_BPL', 'MZM_ERS': 'MZM_ERS', 'MZM_GSE': 'MZM_GSE', 'MZM_BFN': 'MZM_BFN', 'MZM_SON': 'MZM_SON', 'BEMERKUNG': 'BEMERKUNG', 'GUELTIGAB': 'GUELTIGAB', 'GUELTIGBIS': 'GUELTIGBIS', 'NEU': 'NEU', 'GEAENDERT': 'GEAENDERT', 'GELOESCHT': 'GELOESCHT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2012_WohnRes_94.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GKZ': 'GKZ', 'KOMMUNE': 'KOMMUNE', 'NAME_UNGEN': 'NAME_UNGEN', 'GROESSE_UN': 'GROESSE_UN', 'PLANUNGSRE': 'PLANUNGSRE', 'VERFUEGBAR': 'VERFUEGBAR', 'NUTZUNGSKA': 'NUTZUNGSKA', 'BRACHE': 'BRACHE', 'MZM_ALSALT': 'MZM_ALSALT', 'MZM_BPL': 'MZM_BPL', 'MZM_ERS': 'MZM_ERS', 'MZM_GSE': 'MZM_GSE', 'MZM_BFN': 'MZM_BFN', 'MZM_SON': 'MZM_SON', 'BEMERKUNG': 'BEMERKUNG', 'GUELTIGAB': 'GUELTIGAB', 'GUELTIGBIS': 'GUELTIGBIS', 'NEU': 'NEU', 'GEAENDERT': 'GEAENDERT', 'GELOESCHT': 'GELOESCHT', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_2012_Fl_Verbr_95.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GKZ': 'GKZ', 'KOMMUNE': 'KOMMUNE', 'NR_FLAECHE': 'NR_FLAECHE', 'JAHR': 'JAHR', 'BRANCHE': 'BRANCHE', 'GGROESSEHA': 'GGROESSEHA', 'ANSIED_TYP': 'ANSIED_TYP', 'ANSIED_AUF': 'ANSIED_AUF', 'GUELTIGAB': 'GUELTIGAB', 'GUELTIGBIS': 'GUELTIGBIS', 'NEU': 'NEU', 'GEAENDERT': 'GEAENDERT', 'GELOESCHT': 'GELOESCHT', 'GEOMETRIE': 'GEOMETRIE', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_20141104FNP_Reserven_Wuppertal_96.set('fieldAliases', {'OID_1': 'OID_1', 'OS': 'OS', 'FOLIE': 'FOLIE', 'OBJNAME': 'OBJNAME', 'ENTDAT': 'ENTDAT', 'Nutzung': 'Nutzung', 'Bebauungsa': 'Bebauungsa', 'geloescht': 'geloescht', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_20150130SIEDLMO_2014_Wuppertal_97.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', });
lyr_2014Gesamt_98.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Wiedernutzungspotenziale_99.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveWohnen_100.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveGewerbe_101.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveGemischt_102.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_KeineReserve_103.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Inanspruchnahme_104.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_BetriebsgebundeneReserve_105.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Wiedernutzungspotenziale_106.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveWohnen_107.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveGewerbe_108.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveGemischt_109.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_KeineReserve_110.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Inanspruchnahme_111.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_BetriebsgebundeneReserve_112.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Wiedernutzungspotenziale_113.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveWohnen_114.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveGewerbe_115.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_ReserveGemischt_116.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_KeineReserve_117.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_Inanspruchnahme_118.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_BetriebsgebundeneReserve_119.set('fieldAliases', {'objectid': 'objectid', 'fl_nummer': 'fl_nummer', 'fl_bezeich': 'fl_bezeich', 'bauplan': 'bauplan', 'plan_recht': 'plan_recht', 'kategorie': 'kategorie', 'keinrsweil': 'keinrsweil', 'erlaeut': 'erlaeut', 'darst_fnp': 'darst_fnp', 'darst_rp': 'darst_rp', 'brache': 'brache', 'fl_brutto': 'fl_brutto', 'wohn_proz': 'wohn_proz', 'gew_proz': 'gew_proz', 'wohn_ha': 'wohn_ha', 'gew_ha': 'gew_ha', 'fl_netto': 'fl_netto', 'schluessel': 'schluessel', 'art_bebau': 'art_bebau', 'anz_we': 'anz_we', 'anz_besch': 'anz_besch', 'branche': 'branche', 'name_fa': 'name_fa', 'ansiedlung': 'ansiedlung', 'brache_zus': 'brache_zus', 'marktverf': 'marktverf', 'restrikt': 'restrikt', 'mzmobil': 'mzmobil', 'bemerkung': 'bemerkung', 'kommentar': 'kommentar', 'indiv_ang': 'indiv_ang', 'wohnquali': 'wohnquali', 'bearbeiter': 'bearbeiter', 'gkz': 'gkz', 'langname': 'langname', 'status': 'status', 'gueltigab': 'gueltigab', 'gueltigbis': 'gueltigbis', 'ursprung': 'ursprung', 'urspr_dat': 'urspr_dat', 'geloescht': 'geloescht', 'loescher': 'loescher', 'verlauf': 'verlauf', 'bearb_abg': 'bearb_abg', 'pruef_stat': 'pruef_stat', 'akzept_dat': 'akzept_dat', 'geometrie': 'geometrie', 'shape_Leng': 'shape_Leng', 'shape_Area': 'shape_Area', });
lyr_WuppertalQuartiere_1.set('fieldImages', {'fid': 'TextEdit', 'QUARTIER': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_WuppertalBezirke_2.set('fieldImages', {'fid': 'TextEdit', 'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_WuppertalStadtgebiet_3.set('fieldImages', {'fid': 'TextEdit', 'STADT': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche2': 'TextEdit', });
lyr_PlanungsregionDsseldorfGemeinden_4.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'STAND': 'DateTime', });
lyr_PlanungsregionDsseldorfKreise_5.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'STAND': 'DateTime', });
lyr_PlanungsregionDsseldorf_6.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'STAND': 'DateTime', });
lyr_RegierungsbezirkDsseldorf_7.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'STAND': 'DateTime', });
lyr_FlchenimEigentumderStadtWuppertal_8.set('fieldImages', {'fid': 'TextEdit', 'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_DornerWeg_86.set('fieldImages', {'id': 'TextEdit', 'Nsme': 'TextEdit', });
lyr_LichtscheidSd_87.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SchllerWest_88.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Scniedestr_89.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_2009_GewRes_90.set('fieldImages', {'OBJECTID': 'TextEdit', 'GKZ': 'TextEdit', 'KOMMUNE': 'TextEdit', 'NR_GE': 'TextEdit', 'NAME_GE': 'TextEdit', 'GROESSE_GE': 'TextEdit', 'NR_UNGENUT': 'TextEdit', 'NAME_UNGEN': 'TextEdit', 'GROESSE_UN': 'TextEdit', 'PLANUNGSRE': 'TextEdit', 'VERFUEGBAR': 'TextEdit', 'MZM_ALS': 'TextEdit', 'MZM_ALT': 'TextEdit', 'MZM_BPL': 'TextEdit', 'MZM_ERS': 'TextEdit', 'MZM_GSE': 'TextEdit', 'MZM_BFN': 'TextEdit', 'MZM_SON': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'GUELTIGAB': 'TextEdit', 'GUELTIGBIS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2009_WohnRes_91.set('fieldImages', {'OBJECTID': 'TextEdit', 'GKZ': 'TextEdit', 'KOMMUNE': 'TextEdit', 'NAME_UNGEN': 'TextEdit', 'GROESSE_UN': 'TextEdit', 'PLANUNGSRE': 'TextEdit', 'VERFUEGBAR': 'TextEdit', 'NUTZUNGSKA': 'TextEdit', 'MZM_ALS': 'TextEdit', 'MZM_ALT': 'TextEdit', 'MZM_BPL': 'TextEdit', 'MZM_ERS': 'TextEdit', 'MZM_GSE': 'TextEdit', 'MZM_BFN': 'TextEdit', 'MZM_SON': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'GUELTIGAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2012_Wiedern_92.set('fieldImages', {'OBJECTID': 'TextEdit', 'GKZ': 'TextEdit', 'KOMMUNE': 'TextEdit', 'FL_NR': 'TextEdit', 'FL_NAME': 'TextEdit', 'V_NACHF_N': 'TextEdit', 'NUTZKAP_WE': 'TextEdit', 'FLAECHE_HA': 'TextEdit', 'MZM_ALSALT': 'TextEdit', 'MZM_BPL': 'TextEdit', 'MZM_ERS': 'TextEdit', 'MZM_GSE': 'TextEdit', 'MZM_BFN': 'TextEdit', 'MZM_SON': 'TextEdit', 'VERFUEGBAR': 'TextEdit', 'ANMERKUNG': 'TextEdit', 'GUELTIGAB': 'TextEdit', 'GUELTIGBIS': 'TextEdit', 'NEU': 'TextEdit', 'GEAENDERT': 'TextEdit', 'GELOESCHT': 'TextEdit', 'GEOMETRIE': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2012_GewRes_93.set('fieldImages', {'OBJECTID': 'TextEdit', 'GKZ': 'TextEdit', 'KOMMUNE': 'TextEdit', 'NR_UNGENUT': 'TextEdit', 'NAME_UNGEN': 'TextEdit', 'GROESSE_UN': 'TextEdit', 'PLANUNGSRE': 'TextEdit', 'VERFUEGBAR': 'TextEdit', 'BRACHE': 'TextEdit', 'MZM_ALSALT': 'TextEdit', 'MZM_BPL': 'TextEdit', 'MZM_ERS': 'TextEdit', 'MZM_GSE': 'TextEdit', 'MZM_BFN': 'TextEdit', 'MZM_SON': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'GUELTIGAB': 'TextEdit', 'GUELTIGBIS': 'TextEdit', 'NEU': 'TextEdit', 'GEAENDERT': 'TextEdit', 'GELOESCHT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2012_WohnRes_94.set('fieldImages', {'OBJECTID': 'TextEdit', 'GKZ': 'TextEdit', 'KOMMUNE': 'TextEdit', 'NAME_UNGEN': 'TextEdit', 'GROESSE_UN': 'TextEdit', 'PLANUNGSRE': 'TextEdit', 'VERFUEGBAR': 'TextEdit', 'NUTZUNGSKA': 'TextEdit', 'BRACHE': 'TextEdit', 'MZM_ALSALT': 'TextEdit', 'MZM_BPL': 'TextEdit', 'MZM_ERS': 'TextEdit', 'MZM_GSE': 'TextEdit', 'MZM_BFN': 'TextEdit', 'MZM_SON': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'GUELTIGAB': 'TextEdit', 'GUELTIGBIS': 'TextEdit', 'NEU': 'TextEdit', 'GEAENDERT': 'TextEdit', 'GELOESCHT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_2012_Fl_Verbr_95.set('fieldImages', {'OBJECTID': '', 'GKZ': '', 'KOMMUNE': '', 'NR_FLAECHE': '', 'JAHR': '', 'BRANCHE': '', 'GGROESSEHA': '', 'ANSIED_TYP': '', 'ANSIED_AUF': '', 'GUELTIGAB': '', 'GUELTIGBIS': '', 'NEU': '', 'GEAENDERT': '', 'GELOESCHT': '', 'GEOMETRIE': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_20141104FNP_Reserven_Wuppertal_96.set('fieldImages', {'OID_1': '', 'OS': '', 'FOLIE': '', 'OBJNAME': '', 'ENTDAT': '', 'Nutzung': '', 'Bebauungsa': '', 'geloescht': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_20150130SIEDLMO_2014_Wuppertal_97.set('fieldImages', {'objectid': '', 'fl_nummer': '', 'fl_bezeich': '', 'bauplan': '', 'plan_recht': '', 'kategorie': '', 'keinrsweil': '', 'erlaeut': '', 'darst_fnp': '', 'darst_rp': '', 'brache': '', 'fl_brutto': '', 'wohn_proz': '', 'gew_proz': '', 'wohn_ha': '', 'gew_ha': '', 'fl_netto': '', 'schluessel': '', 'art_bebau': '', 'anz_we': '', 'anz_besch': '', 'branche': '', 'name_fa': '', 'ansiedlung': '', 'brache_zus': '', 'marktverf': '', 'restrikt': '', 'mzmobil': '', 'bemerkung': '', 'kommentar': '', 'indiv_ang': '', 'wohnquali': '', 'bearbeiter': '', 'gkz': '', 'langname': '', 'status': '', 'gueltigab': '', 'gueltigbis': '', 'ursprung': '', 'urspr_dat': '', 'geloescht': '', 'loescher': '', 'verlauf': '', 'bearb_abg': '', 'pruef_stat': '', 'akzept_dat': '', 'geometrie': '', 'st_area_sh': '', 'st_length_': '', });
lyr_2014Gesamt_98.set('fieldImages', {'OBJECTID': '', 'fl_nummer': '', 'fl_bezeich': '', 'bauplan': '', 'plan_recht': '', 'kategorie': '', 'keinrsweil': '', 'erlaeut': '', 'darst_fnp': '', 'darst_rp': '', 'brache': '', 'fl_brutto': '', 'wohn_proz': '', 'gew_proz': '', 'wohn_ha': '', 'gew_ha': '', 'fl_netto': '', 'schluessel': '', 'art_bebau': '', 'anz_we': '', 'anz_besch': '', 'branche': '', 'name_fa': '', 'ansiedlung': '', 'brache_zus': '', 'marktverf': '', 'restrikt': '', 'mzmobil': '', 'bemerkung': '', 'kommentar': '', 'indiv_ang': '', 'wohnquali': '', 'bearbeiter': '', 'gkz': '', 'langname': '', 'status': '', 'gueltigab': '', 'gueltigbis': '', 'ursprung': '', 'urspr_dat': '', 'geloescht': '', 'loescher': '', 'verlauf': '', 'bearb_abg': '', 'pruef_stat': '', 'akzept_dat': '', 'geometrie': '', 'st_area_sh': '', 'st_length_': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Wiedernutzungspotenziale_99.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveWohnen_100.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveGewerbe_101.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveGemischt_102.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_KeineReserve_103.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Inanspruchnahme_104.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_BetriebsgebundeneReserve_105.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Wiedernutzungspotenziale_106.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveWohnen_107.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveGewerbe_108.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveGemischt_109.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_KeineReserve_110.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Inanspruchnahme_111.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_BetriebsgebundeneReserve_112.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Wiedernutzungspotenziale_113.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveWohnen_114.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveGewerbe_115.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_ReserveGemischt_116.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_KeineReserve_117.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_Inanspruchnahme_118.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'TextEdit', 'gueltigbis': 'TextEdit', 'ursprung': 'TextEdit', 'urspr_dat': 'TextEdit', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'TextEdit', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_BetriebsgebundeneReserve_119.set('fieldImages', {'objectid': 'TextEdit', 'fl_nummer': 'TextEdit', 'fl_bezeich': 'TextEdit', 'bauplan': 'TextEdit', 'plan_recht': 'TextEdit', 'kategorie': 'TextEdit', 'keinrsweil': 'TextEdit', 'erlaeut': 'TextEdit', 'darst_fnp': 'TextEdit', 'darst_rp': 'TextEdit', 'brache': 'TextEdit', 'fl_brutto': 'TextEdit', 'wohn_proz': 'TextEdit', 'gew_proz': 'TextEdit', 'wohn_ha': 'TextEdit', 'gew_ha': 'TextEdit', 'fl_netto': 'TextEdit', 'schluessel': 'TextEdit', 'art_bebau': 'TextEdit', 'anz_we': 'TextEdit', 'anz_besch': 'TextEdit', 'branche': 'TextEdit', 'name_fa': 'TextEdit', 'ansiedlung': 'TextEdit', 'brache_zus': 'TextEdit', 'marktverf': 'TextEdit', 'restrikt': 'TextEdit', 'mzmobil': 'TextEdit', 'bemerkung': 'TextEdit', 'kommentar': 'TextEdit', 'indiv_ang': 'TextEdit', 'wohnquali': 'TextEdit', 'bearbeiter': 'TextEdit', 'gkz': 'TextEdit', 'langname': 'TextEdit', 'status': 'TextEdit', 'gueltigab': 'DateTime', 'gueltigbis': 'DateTime', 'ursprung': 'TextEdit', 'urspr_dat': 'DateTime', 'geloescht': 'TextEdit', 'loescher': 'TextEdit', 'verlauf': 'TextEdit', 'bearb_abg': 'TextEdit', 'pruef_stat': 'TextEdit', 'akzept_dat': 'DateTime', 'geometrie': 'TextEdit', 'shape_Leng': 'TextEdit', 'shape_Area': 'TextEdit', });
lyr_WuppertalQuartiere_1.set('fieldLabels', {'fid': 'inline label - visible with data', 'QUARTIER': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'FLAECHE': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_WuppertalBezirke_2.set('fieldLabels', {'fid': 'inline label - visible with data', 'BEZIRK': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'FLAECHE': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_WuppertalStadtgebiet_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'STADT': 'inline label - visible with data', 'FLAECHE': 'inline label - visible with data', 'Fläche2': 'inline label - visible with data', });
lyr_PlanungsregionDsseldorfGemeinden_4.set('fieldLabels', {'ART': 'no label', 'GN': 'no label', 'KN': 'no label', 'KOORD_GEN': 'no label', 'KOORD_ORI': 'no label', 'LAENGE_GEN': 'no label', 'LAENGE_ORI': 'no label', 'STAND': 'no label', });
lyr_PlanungsregionDsseldorfKreise_5.set('fieldLabels', {'ART': 'hidden field', 'GN': 'inline label - visible with data', 'KN': 'hidden field', 'KOORD_ORI': 'hidden field', 'KOORD_GEN': 'hidden field', 'LAENGE_ORI': 'inline label - visible with data', 'LAENGE_GEN': 'no label', 'STAND': 'no label', });
lyr_PlanungsregionDsseldorf_6.set('fieldLabels', {'ART': 'no label', 'GN': 'no label', 'KN': 'no label', 'KOORD_ORI': 'no label', 'KOORD_GEN': 'no label', 'LAENGE_ORI': 'no label', 'LAENGE_GEN': 'no label', 'STAND': 'no label', });
lyr_RegierungsbezirkDsseldorf_7.set('fieldLabels', {'ART': 'header label - visible with data', 'GN': 'inline label - visible with data', 'KN': 'no label', 'KOORD_ORI': 'no label', 'KOORD_GEN': 'no label', 'LAENGE_ORI': 'no label', 'LAENGE_GEN': 'no label', 'STAND': 'no label', });
lyr_FlchenimEigentumderStadtWuppertal_8.set('fieldLabels', {'fid': 'inline label - visible with data', 'GEM': 'inline label - visible with data', 'FLUR': 'inline label - visible with data', 'FLURSTZ': 'inline label - visible with data', 'FLURSTN': 'inline label - visible with data', 'Fläche': 'inline label - visible with data', });
lyr_DornerWeg_86.set('fieldLabels', {'id': 'no label', 'Nsme': 'inline label - always visible', });
lyr_LichtscheidSd_87.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'inline label - always visible', });
lyr_SchllerWest_88.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_Scniedestr_89.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', });
lyr_2009_GewRes_90.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'GKZ': 'inline label - visible with data', 'KOMMUNE': 'inline label - visible with data', 'NR_GE': 'inline label - visible with data', 'NAME_GE': 'inline label - visible with data', 'GROESSE_GE': 'inline label - visible with data', 'NR_UNGENUT': 'inline label - visible with data', 'NAME_UNGEN': 'inline label - visible with data', 'GROESSE_UN': 'inline label - visible with data', 'PLANUNGSRE': 'inline label - visible with data', 'VERFUEGBAR': 'inline label - visible with data', 'MZM_ALS': 'inline label - visible with data', 'MZM_ALT': 'inline label - visible with data', 'MZM_BPL': 'inline label - visible with data', 'MZM_ERS': 'inline label - visible with data', 'MZM_GSE': 'inline label - visible with data', 'MZM_BFN': 'inline label - visible with data', 'MZM_SON': 'inline label - visible with data', 'BEMERKUNG': 'hidden field', 'GUELTIGAB': 'inline label - visible with data', 'GUELTIGBIS': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_2009_WohnRes_91.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'GKZ': 'inline label - visible with data', 'KOMMUNE': 'inline label - visible with data', 'NAME_UNGEN': 'inline label - visible with data', 'GROESSE_UN': 'inline label - visible with data', 'PLANUNGSRE': 'inline label - visible with data', 'VERFUEGBAR': 'inline label - visible with data', 'NUTZUNGSKA': 'inline label - visible with data', 'MZM_ALS': 'inline label - visible with data', 'MZM_ALT': 'inline label - visible with data', 'MZM_BPL': 'inline label - visible with data', 'MZM_ERS': 'inline label - visible with data', 'MZM_GSE': 'inline label - visible with data', 'MZM_BFN': 'inline label - visible with data', 'MZM_SON': 'inline label - visible with data', 'BEMERKUNG': 'hidden field', 'GUELTIGAB': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_2012_Wiedern_92.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'GKZ': 'inline label - visible with data', 'KOMMUNE': 'inline label - visible with data', 'FL_NR': 'inline label - visible with data', 'FL_NAME': 'inline label - visible with data', 'V_NACHF_N': 'inline label - visible with data', 'NUTZKAP_WE': 'inline label - visible with data', 'FLAECHE_HA': 'inline label - visible with data', 'MZM_ALSALT': 'inline label - visible with data', 'MZM_BPL': 'inline label - visible with data', 'MZM_ERS': 'inline label - visible with data', 'MZM_GSE': 'inline label - visible with data', 'MZM_BFN': 'inline label - visible with data', 'MZM_SON': 'inline label - visible with data', 'VERFUEGBAR': 'inline label - visible with data', 'ANMERKUNG': 'hidden field', 'GUELTIGAB': 'inline label - visible with data', 'GUELTIGBIS': 'inline label - visible with data', 'NEU': 'inline label - visible with data', 'GEAENDERT': 'inline label - visible with data', 'GELOESCHT': 'inline label - visible with data', 'GEOMETRIE': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_2012_GewRes_93.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'GKZ': 'inline label - visible with data', 'KOMMUNE': 'inline label - visible with data', 'NR_UNGENUT': 'inline label - visible with data', 'NAME_UNGEN': 'inline label - visible with data', 'GROESSE_UN': 'inline label - visible with data', 'PLANUNGSRE': 'inline label - visible with data', 'VERFUEGBAR': 'inline label - visible with data', 'BRACHE': 'inline label - visible with data', 'MZM_ALSALT': 'inline label - visible with data', 'MZM_BPL': 'inline label - visible with data', 'MZM_ERS': 'inline label - visible with data', 'MZM_GSE': 'inline label - visible with data', 'MZM_BFN': 'inline label - visible with data', 'MZM_SON': 'inline label - visible with data', 'BEMERKUNG': 'hidden field', 'GUELTIGAB': 'inline label - visible with data', 'GUELTIGBIS': 'inline label - visible with data', 'NEU': 'inline label - visible with data', 'GEAENDERT': 'inline label - visible with data', 'GELOESCHT': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_2012_WohnRes_94.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'GKZ': 'inline label - visible with data', 'KOMMUNE': 'inline label - visible with data', 'NAME_UNGEN': 'inline label - visible with data', 'GROESSE_UN': 'inline label - visible with data', 'PLANUNGSRE': 'inline label - visible with data', 'VERFUEGBAR': 'inline label - visible with data', 'NUTZUNGSKA': 'inline label - visible with data', 'BRACHE': 'inline label - visible with data', 'MZM_ALSALT': 'inline label - visible with data', 'MZM_BPL': 'inline label - visible with data', 'MZM_ERS': 'inline label - visible with data', 'MZM_GSE': 'inline label - visible with data', 'MZM_BFN': 'inline label - visible with data', 'MZM_SON': 'inline label - visible with data', 'BEMERKUNG': 'hidden field', 'GUELTIGAB': 'inline label - visible with data', 'GUELTIGBIS': 'inline label - visible with data', 'NEU': 'inline label - visible with data', 'GEAENDERT': 'inline label - visible with data', 'GELOESCHT': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_2012_Fl_Verbr_95.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'GKZ': 'inline label - visible with data', 'KOMMUNE': 'inline label - visible with data', 'NR_FLAECHE': 'inline label - visible with data', 'JAHR': 'inline label - visible with data', 'BRANCHE': 'inline label - visible with data', 'GGROESSEHA': 'inline label - visible with data', 'ANSIED_TYP': 'inline label - visible with data', 'ANSIED_AUF': 'inline label - visible with data', 'GUELTIGAB': 'inline label - visible with data', 'GUELTIGBIS': 'inline label - visible with data', 'NEU': 'inline label - visible with data', 'GEAENDERT': 'inline label - visible with data', 'GELOESCHT': 'inline label - visible with data', 'GEOMETRIE': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_20141104FNP_Reserven_Wuppertal_96.set('fieldLabels', {'OID_1': 'inline label - visible with data', 'OS': 'inline label - visible with data', 'FOLIE': 'inline label - visible with data', 'OBJNAME': 'inline label - visible with data', 'ENTDAT': 'inline label - visible with data', 'Nutzung': 'inline label - visible with data', 'Bebauungsa': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_20150130SIEDLMO_2014_Wuppertal_97.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'inline label - visible with data', 'st_area_sh': 'hidden field', 'st_length_': 'hidden field', });
lyr_2014Gesamt_98.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'inline label - visible with data', 'st_area_sh': 'inline label - visible with data', 'st_length_': 'inline label - visible with data', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Wiedernutzungspotenziale_99.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveWohnen_100.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveGewerbe_101.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveGemischt_102.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_KeineReserve_103.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_Inanspruchnahme_104.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_BetriebsgebundeneReserve_105.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_Wiedernutzungspotenziale_106.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveWohnen_107.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveGewerbe_108.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveGemischt_109.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_KeineReserve_110.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_Inanspruchnahme_111.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_BetriebsgebundeneReserve_112.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'inline label - visible with data', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_Wiedernutzungspotenziale_113.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveWohnen_114.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'header label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveGewerbe_115.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_ReserveGemischt_116.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_KeineReserve_117.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_Inanspruchnahme_118.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_BetriebsgebundeneReserve_119.set('fieldLabels', {'objectid': 'inline label - visible with data', 'fl_nummer': 'inline label - visible with data', 'fl_bezeich': 'inline label - visible with data', 'bauplan': 'inline label - visible with data', 'plan_recht': 'inline label - visible with data', 'kategorie': 'inline label - visible with data', 'keinrsweil': 'inline label - visible with data', 'erlaeut': 'inline label - visible with data', 'darst_fnp': 'inline label - visible with data', 'darst_rp': 'inline label - visible with data', 'brache': 'inline label - visible with data', 'fl_brutto': 'inline label - visible with data', 'wohn_proz': 'inline label - visible with data', 'gew_proz': 'inline label - visible with data', 'wohn_ha': 'inline label - visible with data', 'gew_ha': 'inline label - visible with data', 'fl_netto': 'inline label - visible with data', 'schluessel': 'inline label - visible with data', 'art_bebau': 'inline label - visible with data', 'anz_we': 'inline label - visible with data', 'anz_besch': 'inline label - visible with data', 'branche': 'inline label - visible with data', 'name_fa': 'hidden field', 'ansiedlung': 'inline label - visible with data', 'brache_zus': 'inline label - visible with data', 'marktverf': 'inline label - visible with data', 'restrikt': 'inline label - visible with data', 'mzmobil': 'inline label - visible with data', 'bemerkung': 'hidden field', 'kommentar': 'hidden field', 'indiv_ang': 'hidden field', 'wohnquali': 'inline label - visible with data', 'bearbeiter': 'hidden field', 'gkz': 'inline label - visible with data', 'langname': 'inline label - visible with data', 'status': 'inline label - visible with data', 'gueltigab': 'inline label - visible with data', 'gueltigbis': 'inline label - visible with data', 'ursprung': 'inline label - visible with data', 'urspr_dat': 'inline label - visible with data', 'geloescht': 'inline label - visible with data', 'loescher': 'inline label - visible with data', 'verlauf': 'inline label - visible with data', 'bearb_abg': 'inline label - visible with data', 'pruef_stat': 'inline label - visible with data', 'akzept_dat': 'inline label - visible with data', 'geometrie': 'hidden field', 'shape_Leng': 'hidden field', 'shape_Area': 'hidden field', });
lyr_BetriebsgebundeneReserve_119.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});