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

        var lyr_Gmaps_1 = new ol.layer.Tile({
            'title': 'Gmaps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Kreise_2 = new ol.format.GeoJSON();
var features_Kreise_2 = format_Kreise_2.readFeatures(json_Kreise_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kreise_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kreise_2.addFeatures(features_Kreise_2);
var lyr_Kreise_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kreise_2, 
                style: style_Kreise_2,
                popuplayertitle: 'Kreise',
                interactive: true,
                title: '<img src="styles/legend/Kreise_2.png" /> Kreise'
            });
var format_Regierungsbezirke_3 = new ol.format.GeoJSON();
var features_Regierungsbezirke_3 = format_Regierungsbezirke_3.readFeatures(json_Regierungsbezirke_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regierungsbezirke_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regierungsbezirke_3.addFeatures(features_Regierungsbezirke_3);
var lyr_Regierungsbezirke_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regierungsbezirke_3, 
                style: style_Regierungsbezirke_3,
                popuplayertitle: 'Regierungsbezirke',
                interactive: true,
                title: '<img src="styles/legend/Regierungsbezirke_3.png" /> Regierungsbezirke'
            });
var lyr_Regionalplan_4 = new ol.layer.Tile({
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
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Regionalplan_4, 0]);
var lyr_3042Biotope_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "geschuetzteBiotope",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: '§30/§42 – Biotope',
                            popuplayertitle: '§30/§42 – Biotope',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_3042Biotope_5, 0]);
var lyr_Wildnisgebiete_6 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Wildnisgebiete_6, 0]);
var lyr_Vogelschutzgebiete_7 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Vogelschutzgebiete_7, 0]);
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
                            popuplayertitle: 'Verbundflächen (herausragende/besondere Bedeutung)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerbundflchenherausragendebesondereBedeutung_8, 0]);
var lyr_Vegetationstypen_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Vegetationstypen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Vegetationstypen',
                            popuplayertitle: 'Vegetationstypen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vegetationstypen_9, 0]);
var lyr_Vegetationsaufnahmen_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Vegetationsaufnahmen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Vegetationsaufnahmen',
                            popuplayertitle: 'Vegetationsaufnahmen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Vegetationsaufnahmen_10, 0]);
var lyr_SonstigeSchutzgebiete_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "SonstigeSchutzgebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sonstige Schutzgebiete',
                            popuplayertitle: 'Sonstige Schutzgebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SonstigeSchutzgebiete_11, 0]);
var lyr_RAMSAR_12 = new ol.layer.Tile({
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
              wms_layers.push([lyr_RAMSAR_12, 0]);
var lyr_Prozessschutzgebiete_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Prozessschutzgebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Prozessschutzgebiete',
                            popuplayertitle: 'Prozessschutzgebiete',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Prozessschutzgebiete_13, 0]);
var lyr_Naturschutzgebiete_14 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Naturschutzgebiete_14, 0]);
var lyr_NaturrumlicheHaupteinheiten_15 = new ol.layer.Tile({
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
              wms_layers.push([lyr_NaturrumlicheHaupteinheiten_15, 0]);
var lyr_Naturpark_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Naturpark",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Naturpark',
                            popuplayertitle: 'Naturpark',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturpark_16, 0]);
var lyr_Nationalpark_17 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Nationalpark_17, 0]);
var lyr_Massnahmen_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Massnahmen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Massnahmen',
                            popuplayertitle: 'Massnahmen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Massnahmen_18, 0]);
var lyr_Landschaftsschutzgebiet_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Landschaftsschutzgebiet",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landschaftsschutzgebiet',
                            popuplayertitle: 'Landschaftsschutzgebiet',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landschaftsschutzgebiet_19, 0]);
var lyr_Landschaftsrume_20 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Landschaftsrume_20, 0]);
var lyr_GebietefrdenSchutzderNatur_21 = new ol.layer.Tile({
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
              wms_layers.push([lyr_GebietefrdenSchutzderNatur_21, 0]);
var lyr_FFHGebiete_22 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FFHGebiete_22, 0]);
var lyr_Biotoptypen_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotoptypen",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotoptypen',
                            popuplayertitle: 'Biotoptypen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Biotoptypen_23, 0]);
var lyr_Biotopkataster_24 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Biotopkataster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Biotopkataster',
                            popuplayertitle: 'Biotopkataster',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Biotopkataster_24, 0]);
var lyr_BereichefrdenSchutzderNatur_25 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BereichefrdenSchutzderNatur_25, 0]);
var lyr_Alleenkataster_26 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Alleen-Kataster",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Alleenkataster',
                            popuplayertitle: 'Alleenkataster',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Alleenkataster_26, 0]);
var format_CO2DRCRVPUntersuchungsraum_27 = new ol.format.GeoJSON();
var features_CO2DRCRVPUntersuchungsraum_27 = format_CO2DRCRVPUntersuchungsraum_27.readFeatures(json_CO2DRCRVPUntersuchungsraum_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO2DRCRVPUntersuchungsraum_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO2DRCRVPUntersuchungsraum_27.addFeatures(features_CO2DRCRVPUntersuchungsraum_27);
var lyr_CO2DRCRVPUntersuchungsraum_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CO2DRCRVPUntersuchungsraum_27, 
                style: style_CO2DRCRVPUntersuchungsraum_27,
                popuplayertitle: 'CO2 DRC RVP Untersuchungsraum',
                interactive: true,
                title: '<img src="styles/legend/CO2DRCRVPUntersuchungsraum_27.png" /> CO2 DRC RVP Untersuchungsraum'
            });
var format_CO2DRCKorridoreDatenabfrage_28 = new ol.format.GeoJSON();
var features_CO2DRCKorridoreDatenabfrage_28 = format_CO2DRCKorridoreDatenabfrage_28.readFeatures(json_CO2DRCKorridoreDatenabfrage_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CO2DRCKorridoreDatenabfrage_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CO2DRCKorridoreDatenabfrage_28.addFeatures(features_CO2DRCKorridoreDatenabfrage_28);
var lyr_CO2DRCKorridoreDatenabfrage_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CO2DRCKorridoreDatenabfrage_28, 
                style: style_CO2DRCKorridoreDatenabfrage_28,
                popuplayertitle: 'CO2 DRC Korridore Datenabfrage',
                interactive: false,
                title: '<img src="styles/legend/CO2DRCKorridoreDatenabfrage_28.png" /> CO2 DRC Korridore Datenabfrage'
            });
var format_Knotenpunkte_29 = new ol.format.GeoJSON();
var features_Knotenpunkte_29 = format_Knotenpunkte_29.readFeatures(json_Knotenpunkte_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Knotenpunkte_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Knotenpunkte_29.addFeatures(features_Knotenpunkte_29);
var lyr_Knotenpunkte_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Knotenpunkte_29, 
                style: style_Knotenpunkte_29,
                popuplayertitle: 'Knotenpunkte',
                interactive: true,
                title: '<img src="styles/legend/Knotenpunkte_29.png" /> Knotenpunkte'
            });
var format_Mittellinieinterpoliert_30 = new ol.format.GeoJSON();
var features_Mittellinieinterpoliert_30 = format_Mittellinieinterpoliert_30.readFeatures(json_Mittellinieinterpoliert_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mittellinieinterpoliert_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mittellinieinterpoliert_30.addFeatures(features_Mittellinieinterpoliert_30);
var lyr_Mittellinieinterpoliert_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mittellinieinterpoliert_30, 
                style: style_Mittellinieinterpoliert_30,
                popuplayertitle: 'Mittellinie (interpoliert)',
                interactive: false,
                title: '<img src="styles/legend/Mittellinieinterpoliert_30.png" /> Mittellinie (interpoliert)'
            });
var group_Linfos = new ol.layer.Group({
                                layers: [lyr_3042Biotope_5,lyr_Wildnisgebiete_6,lyr_Vogelschutzgebiete_7,lyr_VerbundflchenherausragendebesondereBedeutung_8,lyr_Vegetationstypen_9,lyr_Vegetationsaufnahmen_10,lyr_SonstigeSchutzgebiete_11,lyr_RAMSAR_12,lyr_Prozessschutzgebiete_13,lyr_Naturschutzgebiete_14,lyr_NaturrumlicheHaupteinheiten_15,lyr_Naturpark_16,lyr_Nationalpark_17,lyr_Massnahmen_18,lyr_Landschaftsschutzgebiet_19,lyr_Landschaftsrume_20,lyr_GebietefrdenSchutzderNatur_21,lyr_FFHGebiete_22,lyr_Biotoptypen_23,lyr_Biotopkataster_24,lyr_BereichefrdenSchutzderNatur_25,lyr_Alleenkataster_26,],
                                fold: 'close',
                                title: 'Linfos'});
var group_Verwaltungsgrenzen = new ol.layer.Group({
                                layers: [lyr_Kreise_2,lyr_Regierungsbezirke_3,],
                                fold: 'close',
                                title: 'Verwaltungsgrenzen'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Gmaps_1.setVisible(false);lyr_Kreise_2.setVisible(false);lyr_Regierungsbezirke_3.setVisible(true);lyr_Regionalplan_4.setVisible(false);lyr_3042Biotope_5.setVisible(false);lyr_Wildnisgebiete_6.setVisible(false);lyr_Vogelschutzgebiete_7.setVisible(false);lyr_VerbundflchenherausragendebesondereBedeutung_8.setVisible(false);lyr_Vegetationstypen_9.setVisible(false);lyr_Vegetationsaufnahmen_10.setVisible(false);lyr_SonstigeSchutzgebiete_11.setVisible(false);lyr_RAMSAR_12.setVisible(false);lyr_Prozessschutzgebiete_13.setVisible(false);lyr_Naturschutzgebiete_14.setVisible(false);lyr_NaturrumlicheHaupteinheiten_15.setVisible(false);lyr_Naturpark_16.setVisible(false);lyr_Nationalpark_17.setVisible(false);lyr_Massnahmen_18.setVisible(false);lyr_Landschaftsschutzgebiet_19.setVisible(false);lyr_Landschaftsrume_20.setVisible(false);lyr_GebietefrdenSchutzderNatur_21.setVisible(false);lyr_FFHGebiete_22.setVisible(false);lyr_Biotoptypen_23.setVisible(false);lyr_Biotopkataster_24.setVisible(false);lyr_BereichefrdenSchutzderNatur_25.setVisible(false);lyr_Alleenkataster_26.setVisible(false);lyr_CO2DRCRVPUntersuchungsraum_27.setVisible(true);lyr_CO2DRCKorridoreDatenabfrage_28.setVisible(true);lyr_Knotenpunkte_29.setVisible(true);lyr_Mittellinieinterpoliert_30.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Gmaps_1,group_Verwaltungsgrenzen,lyr_Regionalplan_4,group_Linfos,lyr_CO2DRCRVPUntersuchungsraum_27,lyr_CO2DRCKorridoreDatenabfrage_28,lyr_Knotenpunkte_29,lyr_Mittellinieinterpoliert_30];
lyr_Kreise_2.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_ORI': 'KOORD_ORI', 'KOORD_GEN': 'KOORD_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'STAND': 'STAND', });
lyr_Regierungsbezirke_3.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_ORI': 'KOORD_ORI', 'KOORD_GEN': 'KOORD_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'STAND': 'STAND', });
lyr_CO2DRCRVPUntersuchungsraum_27.set('fieldAliases', {'fid_1': 'fid_1', 'NAME': 'NAME', 'DESC_': 'DESC_', 'REG_BEZ': 'REG_BEZ', 'KREISE': 'KREISE', 'FLAECHE': 'FLAECHE', 'DATE': 'DATE', 'STADT': 'STADT', 'GEMEINDE': 'GEMEINDE', });
lyr_CO2DRCKorridoreDatenabfrage_28.set('fieldAliases', {'Id': 'Id', });
lyr_Knotenpunkte_29.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', });
lyr_Mittellinieinterpoliert_30.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'Id': 'Id', });
lyr_Kreise_2.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'STAND': 'DateTime', });
lyr_Regierungsbezirke_3.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'STAND': 'DateTime', });
lyr_CO2DRCRVPUntersuchungsraum_27.set('fieldImages', {'fid_1': 'TextEdit', 'NAME': 'TextEdit', 'DESC_': 'TextEdit', 'REG_BEZ': 'TextEdit', 'KREISE': 'TextEdit', 'FLAECHE': 'TextEdit', 'DATE': 'TextEdit', 'STADT': 'TextEdit', 'GEMEINDE': 'TextEdit', });
lyr_CO2DRCKorridoreDatenabfrage_28.set('fieldImages', {'Id': 'Range', });
lyr_Knotenpunkte_29.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', });
lyr_Mittellinieinterpoliert_30.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'Id': 'Range', });
lyr_Kreise_2.set('fieldLabels', {'ART': 'inline label - always visible', 'GN': 'inline label - visible with data', 'KN': 'no label', 'KOORD_ORI': 'no label', 'KOORD_GEN': 'no label', 'LAENGE_ORI': 'no label', 'LAENGE_GEN': 'no label', 'STAND': 'no label', });
lyr_Regierungsbezirke_3.set('fieldLabels', {'ART': 'no label', 'GN': 'no label', 'KN': 'no label', 'KOORD_ORI': 'no label', 'KOORD_GEN': 'no label', 'LAENGE_ORI': 'no label', 'LAENGE_GEN': 'no label', 'STAND': 'no label', });
lyr_CO2DRCRVPUntersuchungsraum_27.set('fieldLabels', {'fid_1': 'inline label - visible with data', 'NAME': 'inline label - visible with data', 'DESC_': 'inline label - visible with data', 'REG_BEZ': 'inline label - visible with data', 'KREISE': 'inline label - visible with data', 'FLAECHE': 'inline label - visible with data', 'DATE': 'inline label - visible with data', 'STADT': 'inline label - visible with data', 'GEMEINDE': 'inline label - visible with data', });
lyr_CO2DRCKorridoreDatenabfrage_28.set('fieldLabels', {'Id': 'no label', });
lyr_Knotenpunkte_29.set('fieldLabels', {'fid': 'no label', 'Name': 'inline label - always visible', });
lyr_Mittellinieinterpoliert_30.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'Id': 'no label', });
lyr_Mittellinieinterpoliert_30.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});