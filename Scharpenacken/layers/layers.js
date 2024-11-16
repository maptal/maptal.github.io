ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([800609.870500, 6662918.596283, 806709.565000, 6667083.108517]);
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

        var lyr_Gmaps_1 = new ol.layer.Tile({
            'title': 'Gmaps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_LPlanWestFestsetzungskarte_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpwest:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan West Festsetzungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanWestFestsetzungskarte_2, 1]);
var lyr_LPlanWestEntwicklungskarte_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpwest:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan West Entwicklungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanWestEntwicklungskarte_3, 1]);
var lyr_LPlanOstFestsetzungskarte_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpost:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan Ost Festsetzungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanOstFestsetzungskarte_4, 1]);
var lyr_LPlanOstEntwicklungskarte_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpost:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan Ost Entwicklungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanOstEntwicklungskarte_5, 1]);
var lyr_LPlanNordFestsetzungskarte_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpnord:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan Nord Festsetzungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanNordFestsetzungskarte_6, 1]);
var lyr_LPlanNordEntwicklungskarte_7 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpnord:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan Nord Entwicklungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanNordEntwicklungskarte_7, 1]);
var lyr_LPlanGelpeFestsetzungskarte_8 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpgelpe:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan Gelpe Festsetzungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanGelpeFestsetzungskarte_8, 1]);
var lyr_LPlanGelpeEntwicklungskarte_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lpgelpe:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "LPlan Gelpe Entwicklungskarte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LPlanGelpeEntwicklungskarte_9, 1]);
var lyr_LandschaftsundNaturschutz_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "landschaft:lundsschutz",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Landschafts- und Naturschutz",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsundNaturschutz_10, 1]);
var lyr_Festsetzungstexte_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "lplan:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Festsetzungstexte",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Festsetzungstexte_11, 1]);
var lyr_VerffentlichteKompensationsflchen_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "stadt:kompensationoe",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Veröffentlichte Kompensationsflächen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerffentlichteKompensationsflchen_12, 1]);
var lyr_FlchenanGrnanlagen_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
    attributions: ' ',
                              params: {
                                "LAYERS": "gruen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "Flächen an Grünanlagen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FlchenanGrnanlagen_13, 1]);
var format_FlchenimEigentumderStadtWuppertalAusschnitt_14 = new ol.format.GeoJSON();
var features_FlchenimEigentumderStadtWuppertalAusschnitt_14 = format_FlchenimEigentumderStadtWuppertalAusschnitt_14.readFeatures(json_FlchenimEigentumderStadtWuppertalAusschnitt_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlchenimEigentumderStadtWuppertalAusschnitt_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlchenimEigentumderStadtWuppertalAusschnitt_14.addFeatures(features_FlchenimEigentumderStadtWuppertalAusschnitt_14);
var lyr_FlchenimEigentumderStadtWuppertalAusschnitt_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlchenimEigentumderStadtWuppertalAusschnitt_14, 
                style: style_FlchenimEigentumderStadtWuppertalAusschnitt_14,
                popuplayertitle: "Flächen im Eigentum der Stadt Wuppertal - Ausschnitt",
                interactive: true,
                title: '<img src="styles/legend/FlchenimEigentumderStadtWuppertalAusschnitt_14.png" /> Flächen im Eigentum der Stadt Wuppertal - Ausschnitt'
            });
var format_LebensraumtypenrundScharpenacken_15 = new ol.format.GeoJSON();
var features_LebensraumtypenrundScharpenacken_15 = format_LebensraumtypenrundScharpenacken_15.readFeatures(json_LebensraumtypenrundScharpenacken_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LebensraumtypenrundScharpenacken_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LebensraumtypenrundScharpenacken_15.addFeatures(features_LebensraumtypenrundScharpenacken_15);
var lyr_LebensraumtypenrundScharpenacken_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LebensraumtypenrundScharpenacken_15, 
                style: style_LebensraumtypenrundScharpenacken_15,
                popuplayertitle: "Lebensraumtypen rund Scharpenacken",
                interactive: true,
                title: '<img src="styles/legend/LebensraumtypenrundScharpenacken_15.png" /> Lebensraumtypen rund Scharpenacken'
            });
var lyr_Biotopkataster_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "Biotopkataster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Biotopkataster",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Biotopkataster_16, 1]);
var lyr_Biotoptypen_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "Biotoptypen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Biotoptypen",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Biotoptypen_17, 1]);
var lyr_Landschaftsschutzgebiete_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "Landschaftsschutzgebiet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Landschaftsschutzgebiete",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landschaftsschutzgebiete_18, 1]);
var lyr_Naturschutzgebiete_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "Naturschutzgebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Naturschutzgebiete",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturschutzgebiete_19, 1]);
var lyr_BereichefrdenSchutzderNatur_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "BSN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Bereiche für den Schutz der Natur",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BereichefrdenSchutzderNatur_20, 1]);
var lyr_VerbundflchenherausragendebesondereBedeutung_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "Verbundflaechen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Verbundflächen (herausragende/besondere Bedeutung)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerbundflchenherausragendebesondereBedeutung_21, 1]);
var lyr_3042Biotope_22 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "geschuetzteBiotope",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "§30/§42 – Biotope",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_3042Biotope_22, 1]);
var lyr_FFHGebiete_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
    attributions: ' ',
                              params: {
                                "LAYERS": "FFH-Gebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "FFH-Gebiete",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FFHGebiete_23, 1]);
var lyr_FlcheohneBPlan_24 = new ol.layer.Image({
                            opacity: 1,
                            title: "Fläche - ohne BPlan",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FlcheohneBPlan_24.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [800776.638728, 6663031.157144, 804499.379979, 6666910.828940]
                            })
                        });
var lyr_ExterneManahmenLandschaftspflegerischerFachbeitrag_25 = new ol.layer.Image({
                            opacity: 1,
                            title: "Externe Maßnahmen - Landschaftspflegerischer Fachbeitrag",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ExterneManahmenLandschaftspflegerischerFachbeitrag_25.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [801012.956287, 6663001.569730, 806475.277543, 6666840.019280]
                            })
                        });
var lyr_MassnahmenBPlan1115V_26 = new ol.layer.Image({
                            opacity: 1,
                            title: "Massnahmen BPlan 1115V",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/MassnahmenBPlan1115V_26.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [801708.457200, 6664128.408200, 804238.090900, 6666441.987800]
                            })
                        });
var format_KompensationflchenScharpenackeninkMassnahmebtterPDF_27 = new ol.format.GeoJSON();
var features_KompensationflchenScharpenackeninkMassnahmebtterPDF_27 = format_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.readFeatures(json_KompensationflchenScharpenackeninkMassnahmebtterPDF_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompensationflchenScharpenackeninkMassnahmebtterPDF_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.addFeatures(features_KompensationflchenScharpenackeninkMassnahmebtterPDF_27);
var lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompensationflchenScharpenackeninkMassnahmebtterPDF_27, 
                style: style_KompensationflchenScharpenackeninkMassnahmebtterPDF_27,
                popuplayertitle: "Kompensationflächen Scharpenacken ink. Massnahmebätter (PDF)",
                interactive: true,
    title: 'Kompensationflächen Scharpenacken ink. Massnahmebätter (PDF)<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_0.png" /> 17 - 18<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_1.png" /> 18 - 19<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_2.png" /> 19 - 20<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_3.png" /> 20 - 21<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_4.png" /> 21 - 22<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_5.png" /> 22 - 23<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_6.png" /> 23 - 24<br />\
    <img src="styles/legend/KompensationflchenScharpenackeninkMassnahmebtterPDF_27_7.png" /> 24 - 25<br />'
        });
var group_LandschaftspflegerischerBegleitplanScharpenacken = new ol.layer.Group({
                                layers: [lyr_FlcheohneBPlan_24,lyr_ExterneManahmenLandschaftspflegerischerFachbeitrag_25,lyr_MassnahmenBPlan1115V_26,lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27,],
                                fold: "open",
                                title: "Landschaftspflegerischer Begleitplan Scharpenacken"});
var group_LandschaftsinformationssystemLINFOS = new ol.layer.Group({
                                layers: [lyr_Biotopkataster_16,lyr_Biotoptypen_17,lyr_Landschaftsschutzgebiete_18,lyr_Naturschutzgebiete_19,lyr_BereichefrdenSchutzderNatur_20,lyr_VerbundflchenherausragendebesondereBedeutung_21,lyr_3042Biotope_22,lyr_FFHGebiete_23,],
                                fold: "open",
                                title: "Landschaftsinformationssystem LINFOS"});
var group_Wuppertal = new ol.layer.Group({
                                layers: [lyr_FlchenimEigentumderStadtWuppertalAusschnitt_14,lyr_LebensraumtypenrundScharpenacken_15,],
                                fold: "open",
                                title: "Wuppertal"});
var group_WuppertalWMSDienste = new ol.layer.Group({
                                layers: [lyr_VerffentlichteKompensationsflchen_12,lyr_FlchenanGrnanlagen_13,],
                                fold: "open",
                                title: "Wuppertal WMS Dienste"});
var group_Landschaftsplnerechtsverbindlich = new ol.layer.Group({
                                layers: [lyr_LPlanWestFestsetzungskarte_2,lyr_LPlanWestEntwicklungskarte_3,lyr_LPlanOstFestsetzungskarte_4,lyr_LPlanOstEntwicklungskarte_5,lyr_LPlanNordFestsetzungskarte_6,lyr_LPlanNordEntwicklungskarte_7,lyr_LPlanGelpeFestsetzungskarte_8,lyr_LPlanGelpeEntwicklungskarte_9,lyr_LandschaftsundNaturschutz_10,lyr_Festsetzungstexte_11,],
                                fold: "open",
                                title: "Landschaftspläne (rechtsverbindlich)"});
var group_Basiskarten = new ol.layer.Group({
                                layers: [lyr_OSM_0,lyr_Gmaps_1,],
                                fold: "open",
                                title: "Basiskarten"});

lyr_OSM_0.setVisible(true);lyr_Gmaps_1.setVisible(false);lyr_LPlanWestFestsetzungskarte_2.setVisible(false);lyr_LPlanWestEntwicklungskarte_3.setVisible(false);lyr_LPlanOstFestsetzungskarte_4.setVisible(false);lyr_LPlanOstEntwicklungskarte_5.setVisible(false);lyr_LPlanNordFestsetzungskarte_6.setVisible(false);lyr_LPlanNordEntwicklungskarte_7.setVisible(false);lyr_LPlanGelpeFestsetzungskarte_8.setVisible(false);lyr_LPlanGelpeEntwicklungskarte_9.setVisible(false);lyr_LandschaftsundNaturschutz_10.setVisible(false);lyr_Festsetzungstexte_11.setVisible(false);lyr_VerffentlichteKompensationsflchen_12.setVisible(false);lyr_FlchenanGrnanlagen_13.setVisible(false);lyr_FlchenimEigentumderStadtWuppertalAusschnitt_14.setVisible(false);lyr_LebensraumtypenrundScharpenacken_15.setVisible(false);lyr_Biotopkataster_16.setVisible(false);lyr_Biotoptypen_17.setVisible(false);lyr_Landschaftsschutzgebiete_18.setVisible(false);lyr_Naturschutzgebiete_19.setVisible(false);lyr_BereichefrdenSchutzderNatur_20.setVisible(false);lyr_VerbundflchenherausragendebesondereBedeutung_21.setVisible(false);lyr_3042Biotope_22.setVisible(false);lyr_FFHGebiete_23.setVisible(false);lyr_FlcheohneBPlan_24.setVisible(false);lyr_ExterneManahmenLandschaftspflegerischerFachbeitrag_25.setVisible(true);lyr_MassnahmenBPlan1115V_26.setVisible(false);lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.setVisible(true);
var layersList = [group_Basiskarten,group_Landschaftsplnerechtsverbindlich,group_WuppertalWMSDienste,group_Wuppertal,group_LandschaftsinformationssystemLINFOS,group_LandschaftspflegerischerBegleitplanScharpenacken];
lyr_FlchenimEigentumderStadtWuppertalAusschnitt_14.set('fieldAliases', {'fid': 'fid', 'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', });
lyr_LebensraumtypenrundScharpenacken_15.set('fieldAliases', {'fid': 'fid', 'LOCALID': 'LOCALID', 'DOMAINOBJE': 'DOMAINOBJE', 'LRT_CODE_G': 'LRT_CODE_G', 'LINK': 'LINK', });
lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.set('fieldAliases', {'id': 'id', 'name': 'Name', 'flaeche': 'flaeche', 'bezeichnun': 'Bezeichnung', 'ziel1': 'Ziel', 'ziel2': 'ziel2', 'zielbio': 'zielbio', 'massnahme': 'Massnahme', 'ur_wert': 'Ausg. Biotopwert', 'ziel_wert': 'Ziel Biotopwert', 'ur_typ': 'Ausg. Biotoptyp', 'ziel_typ': 'Ziel Biotoptyp', 'hektar': 'Fläche (ha)', 'pdf': 'vollst. Beschreibung', 'image': 'Beschreibung als Bild', });
lyr_FlchenimEigentumderStadtWuppertalAusschnitt_14.set('fieldImages', {'fid': '', 'GEM': '', 'FLUR': '', 'FLURSTZ': '', 'FLURSTN': '', });
lyr_LebensraumtypenrundScharpenacken_15.set('fieldImages', {'fid': '', 'LOCALID': '', 'DOMAINOBJE': '', 'LRT_CODE_G': '', 'LINK': '', });
lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.set('fieldImages', {'id': 'Range', 'name': 'TextEdit', 'flaeche': 'TextEdit', 'bezeichnun': 'TextEdit', 'ziel1': 'TextEdit', 'ziel2': 'TextEdit', 'zielbio': 'TextEdit', 'massnahme': 'TextEdit', 'ur_wert': 'Range', 'ziel_wert': 'Range', 'ur_typ': 'TextEdit', 'ziel_typ': 'TextEdit', 'hektar': 'TextEdit', 'pdf': 'TextEdit', 'image': 'TextEdit', });
lyr_FlchenimEigentumderStadtWuppertalAusschnitt_14.set('fieldLabels', {'fid': 'header label - visible with data', 'GEM': 'header label - visible with data', 'FLUR': 'header label - visible with data', 'FLURSTZ': 'header label - visible with data', 'FLURSTN': 'header label - visible with data', });
lyr_LebensraumtypenrundScharpenacken_15.set('fieldLabels', {'fid': 'header label - visible with data', 'LOCALID': 'header label - visible with data', 'DOMAINOBJE': 'header label - visible with data', 'LRT_CODE_G': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.set('fieldLabels', {'id': 'hidden field', 'name': 'header label - visible with data', 'flaeche': 'hidden field', 'bezeichnun': 'header label - visible with data', 'ziel1': 'header label - visible with data', 'ziel2': 'header label - visible with data', 'zielbio': 'hidden field', 'massnahme': 'inline label - visible with data', 'ur_wert': 'inline label - visible with data', 'ziel_wert': 'inline label - visible with data', 'ur_typ': 'inline label - visible with data', 'ziel_typ': 'inline label - visible with data', 'hektar': 'header label - always visible', 'pdf': 'header label - visible with data', 'image': 'no label', });
lyr_KompensationflchenScharpenackeninkMassnahmebtterPDF_27.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});