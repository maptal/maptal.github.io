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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Verrohrungen_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "5",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Verrohrungen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Verrohrungen_2, 1]);
var lyr_Gewsserbeschriftung_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "9",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gewässerbeschriftung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewsserbeschriftung_3, 1]);
var lyr_AlleGewsser_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "10",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Alle Gewässer',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AlleGewsser_4, 1]);
var lyr_Alleenkataster_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Alleen-Kataster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Alleenkataster',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Alleenkataster_5, 1]);
var lyr_BiotopkatasterFlche_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotopkataster_Flaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotopkataster (Fläche)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotopkatasterFlche_6, 1]);
var lyr_BiotoptypenFlche_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotoptypen_Flaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotoptypen (Fläche)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BiotoptypenFlche_7, 1]);
var lyr_VerbundflchenherausragendebesondereBedeutung_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Verbundflaechen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Verbundflächen (herausragende/besondere Bedeutung)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerbundflchenherausragendebesondereBedeutung_8, 1]);
var lyr_GebietefrdenSchutzderNatur_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "GSN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gebiete für den Schutz der Natur',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GebietefrdenSchutzderNatur_9, 1]);
var lyr_Landschaftsschutzgebiete_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Landschaftsschutzgebiet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landschaftsschutzgebiete',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landschaftsschutzgebiete_10, 1]);
var lyr_Naturschutzgebiete_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Naturschutzgebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naturschutzgebiete',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturschutzgebiete_11, 1]);
var lyr_geschtzteBiotopeFlche_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "11",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'geschützte Biotope (Fläche)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_geschtzteBiotopeFlche_12, 1]);
var lyr_StarkregenSRI10Flierichtung_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102_90d",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 10 Fließrichtung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI10Flierichtung_13, 1]);
var lyr_StarkregenSRI10maxWassertiefe_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102_90md",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 10 max. Wassertiefe',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI10maxWassertiefe_14, 1]);
var lyr_StarkregenSRI10Fliegeschwindigkeit_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102_90v",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 10 Fließgeschwindigkeit',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI10Fliegeschwindigkeit_15, 1]);
var lyr_LandschaftsplanWestFestsetzungskarte_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpwest:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan West Festsetzungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanWestFestsetzungskarte_16, 1]);
var lyr_LandschaftsplanWestEntwicklungskarte_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpwest:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan West Entwicklungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanWestEntwicklungskarte_17, 1]);
var lyr_Denkmalbereichssatzungenrechtsverbindlich_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "denkmalbr",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Denkmalbereichssatzungen (rechtsverbindlich)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Denkmalbereichssatzungenrechtsverbindlich_18, 1]);
var lyr_Baudenkmler_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "baudenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Baudenkmäler',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Baudenkmler_19, 1]);
var lyr_Naturdenkmale_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "naturdenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Naturdenkmale',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturdenkmale_20, 1]);
var lyr_FNP2005Xplanclip_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102:fnp_clip",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP 2005 Xplan clip',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNP2005Xplanclip_21, 1]);
var lyr_FaunaNachweise_22 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Fauna - Nachweise',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/FaunaNachweise_22.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [791034.377900, 6663347.342500, 792717.172100, 6664563.507400]
                            })
                        });
var lyr_FledertiereKnigshhe_23 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Fledertiere - Königshöhe',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/FledertiereKnigshhe_23.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [791350.017400, 6663950.738600, 793033.038200, 6665169.178900]
                            })
                        });
var lyr_Fledertiere_24 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Fledertiere',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Fledertiere_24.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [791042.627000, 6663393.558800, 792724.502600, 6664610.022300]
                            })
                        });
var lyr_HhlenbumeHorstbume_25 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Höhlenbäume - Horstbäume',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/HhlenbumeHorstbume_25.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [791052.102900, 6663402.430500, 792711.274000, 6664573.532000]
                            })
                        });
var lyr_SBStrfallschutz_26 = new ol.layer.Image({
                            opacity: 1,
                            title: 'SB-Störfallschutz',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/SBStrfallschutz_26.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [788501.783500, 6662597.845000, 794639.013700, 6666920.507100]
                            })
                        });
var lyr_SBSttzen_27 = new ol.layer.Image({
                            opacity: 1,
                            title: 'SB-Stützen',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/SBSttzen_27.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [790950.993800, 6663303.284300, 791944.195900, 6664003.518300]
                            })
                        });
var lyr_SBDenkmalbereichssatzung_28 = new ol.layer.Image({
                            opacity: 1,
                            title: 'SB-Denkmalbereichssatzung',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/SBDenkmalbereichssatzung_28.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [790301.456400, 6662815.926900, 792302.763100, 6664801.675100]
                            })
                        });
var lyr_SBVariantenprfung_29 = new ol.layer.Image({
                            opacity: 1,
                            title: 'SB-Variantenprüfung',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/SBVariantenprfung_29.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [790688.722000, 6663372.307600, 792674.782400, 6664192.112000]
                            })
                        });
var lyr_Geltungsbereich_30 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Geltungsbereich',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Geltungsbereich_30.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [790860.832300, 6663083.347500, 792732.654200, 6664261.032900]
                            })
                        });
var lyr_SBLageplan_31 = new ol.layer.Image({
                            opacity: 1,
                            title: 'SB-Lageplan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/SBLageplan_31.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [790890.895200, 6663037.499800, 792748.625600, 6664428.472300]
                            })
                        });
var group_SeilbahnKurzbegrndung = new ol.layer.Group({
                                layers: [lyr_SBStrfallschutz_26,lyr_SBSttzen_27,lyr_SBDenkmalbereichssatzung_28,lyr_SBVariantenprfung_29,lyr_Geltungsbereich_30,lyr_SBLageplan_31,],
                                fold: "open",
                                title: 'Seilbahn - Kurzbegründung'});
var group_BSMW2023kolErsteinsch = new ol.layer.Group({
                                layers: [lyr_FaunaNachweise_22,lyr_FledertiereKnigshhe_23,lyr_Fledertiere_24,lyr_HhlenbumeHorstbume_25,],
                                fold: "open",
                                title: 'BSMW 2023 - Ökol. Ersteinsch.'});
var group_StadtWuppertalWMS = new ol.layer.Group({
                                layers: [lyr_StarkregenSRI10Flierichtung_13,lyr_StarkregenSRI10maxWassertiefe_14,lyr_StarkregenSRI10Fliegeschwindigkeit_15,lyr_LandschaftsplanWestFestsetzungskarte_16,lyr_LandschaftsplanWestEntwicklungskarte_17,lyr_Denkmalbereichssatzungenrechtsverbindlich_18,lyr_Baudenkmler_19,lyr_Naturdenkmale_20,lyr_FNP2005Xplanclip_21,],
                                fold: "open",
                                title: 'Stadt Wuppertal WMS'});
var group_LINFOS = new ol.layer.Group({
                                layers: [lyr_Alleenkataster_5,lyr_BiotopkatasterFlche_6,lyr_BiotoptypenFlche_7,lyr_VerbundflchenherausragendebesondereBedeutung_8,lyr_GebietefrdenSchutzderNatur_9,lyr_Landschaftsschutzgebiete_10,lyr_Naturschutzgebiete_11,lyr_geschtzteBiotopeFlche_12,],
                                fold: "open",
                                title: 'LINFOS'});
var group_Wupperverband = new ol.layer.Group({
                                layers: [lyr_Verrohrungen_2,lyr_Gewsserbeschriftung_3,lyr_AlleGewsser_4,],
                                fold: "open",
                                title: 'Wupperverband'});

lyr_Gmaps_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_Verrohrungen_2.setVisible(false);lyr_Gewsserbeschriftung_3.setVisible(false);lyr_AlleGewsser_4.setVisible(false);lyr_Alleenkataster_5.setVisible(false);lyr_BiotopkatasterFlche_6.setVisible(false);lyr_BiotoptypenFlche_7.setVisible(false);lyr_VerbundflchenherausragendebesondereBedeutung_8.setVisible(false);lyr_GebietefrdenSchutzderNatur_9.setVisible(false);lyr_Landschaftsschutzgebiete_10.setVisible(false);lyr_Naturschutzgebiete_11.setVisible(false);lyr_geschtzteBiotopeFlche_12.setVisible(false);lyr_StarkregenSRI10Flierichtung_13.setVisible(false);lyr_StarkregenSRI10maxWassertiefe_14.setVisible(false);lyr_StarkregenSRI10Fliegeschwindigkeit_15.setVisible(false);lyr_LandschaftsplanWestFestsetzungskarte_16.setVisible(false);lyr_LandschaftsplanWestEntwicklungskarte_17.setVisible(false);lyr_Denkmalbereichssatzungenrechtsverbindlich_18.setVisible(false);lyr_Baudenkmler_19.setVisible(false);lyr_Naturdenkmale_20.setVisible(false);lyr_FNP2005Xplanclip_21.setVisible(false);lyr_FaunaNachweise_22.setVisible(false);lyr_FledertiereKnigshhe_23.setVisible(false);lyr_Fledertiere_24.setVisible(false);lyr_HhlenbumeHorstbume_25.setVisible(false);lyr_SBStrfallschutz_26.setVisible(false);lyr_SBSttzen_27.setVisible(false);lyr_SBDenkmalbereichssatzung_28.setVisible(false);lyr_SBVariantenprfung_29.setVisible(false);lyr_Geltungsbereich_30.setVisible(true);lyr_SBLageplan_31.setVisible(false);
var layersList = [lyr_Gmaps_0,lyr_OpenStreetMap_1,group_Wupperverband,group_LINFOS,group_StadtWuppertalWMS,group_BSMW2023kolErsteinsch,group_SeilbahnKurzbegrndung];
