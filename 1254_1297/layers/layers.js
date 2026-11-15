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

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_2 = new ol.layer.Tile({
            'title': 'Open Topo Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Gmaps_3 = new ol.layer.Tile({
            'title': 'Gmaps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_AmtlicheBasiskartegrau_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/karten?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "abkg",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Amtliche Basiskarte (grau)',
                            popuplayertitle: 'Amtliche Basiskarte (grau)',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_AmtlicheBasiskartegrau_4, 0]);
var lyr_WuppertalerOrthofoto2024_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/karten?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:luftbild2024",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Wuppertaler Orthofoto 2024',
                            popuplayertitle: 'Wuppertaler Orthofoto 2024',
                            type: 'base',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WuppertalerOrthofoto2024_5, 0]);
var lyr_Reliefschummerung_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/karten?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "hillshade",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Reliefschummerung',
                            popuplayertitle: 'Reliefschummerung',
                            type: '',
                            opacity: 0.494000,
                            
                            
                          });
              wms_layers.push([lyr_Reliefschummerung_6, 0]);
var format_WuppertalBezirke_7 = new ol.format.GeoJSON();
var features_WuppertalBezirke_7 = format_WuppertalBezirke_7.readFeatures(json_WuppertalBezirke_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WuppertalBezirke_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WuppertalBezirke_7.addFeatures(features_WuppertalBezirke_7);
var lyr_WuppertalBezirke_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WuppertalBezirke_7, 
                style: style_WuppertalBezirke_7,
                popuplayertitle: 'Wuppertal - Bezirke',
                interactive: false,
                title: '<img src="styles/legend/WuppertalBezirke_7.png" /> Wuppertal - Bezirke'
            });
var format_WuppertalStadtgebiet_8 = new ol.format.GeoJSON();
var features_WuppertalStadtgebiet_8 = format_WuppertalStadtgebiet_8.readFeatures(json_WuppertalStadtgebiet_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WuppertalStadtgebiet_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WuppertalStadtgebiet_8.addFeatures(features_WuppertalStadtgebiet_8);
var lyr_WuppertalStadtgebiet_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WuppertalStadtgebiet_8, 
                style: style_WuppertalStadtgebiet_8,
                popuplayertitle: 'Wuppertal - Stadtgebiet',
                interactive: false,
                title: '<img src="styles/legend/WuppertalStadtgebiet_8.png" /> Wuppertal - Stadtgebiet'
            });
var format_DornerWeg_9 = new ol.format.GeoJSON();
var features_DornerWeg_9 = format_DornerWeg_9.readFeatures(json_DornerWeg_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DornerWeg_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DornerWeg_9.addFeatures(features_DornerWeg_9);
var lyr_DornerWeg_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DornerWeg_9, 
                style: style_DornerWeg_9,
                popuplayertitle: 'Dorner Weg',
                interactive: true,
                title: '<img src="styles/legend/DornerWeg_9.png" /> Dorner Weg'
            });
var format_LichtscheidSd_10 = new ol.format.GeoJSON();
var features_LichtscheidSd_10 = format_LichtscheidSd_10.readFeatures(json_LichtscheidSd_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LichtscheidSd_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LichtscheidSd_10.addFeatures(features_LichtscheidSd_10);
var lyr_LichtscheidSd_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LichtscheidSd_10, 
                style: style_LichtscheidSd_10,
                popuplayertitle: 'Lichtscheid Süd',
                interactive: true,
                title: '<img src="styles/legend/LichtscheidSd_10.png" /> Lichtscheid Süd'
            });
var format_SchllerWest_11 = new ol.format.GeoJSON();
var features_SchllerWest_11 = format_SchllerWest_11.readFeatures(json_SchllerWest_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchllerWest_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchllerWest_11.addFeatures(features_SchllerWest_11);
var lyr_SchllerWest_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchllerWest_11, 
                style: style_SchllerWest_11,
                popuplayertitle: 'Schöller West',
                interactive: true,
                title: '<img src="styles/legend/SchllerWest_11.png" /> Schöller West'
            });
var format_Scniedestr_12 = new ol.format.GeoJSON();
var features_Scniedestr_12 = format_Scniedestr_12.readFeatures(json_Scniedestr_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scniedestr_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scniedestr_12.addFeatures(features_Scniedestr_12);
var lyr_Scniedestr_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scniedestr_12, 
                style: style_Scniedestr_12,
                popuplayertitle: 'Scniedestr',
                interactive: true,
                title: '<img src="styles/legend/Scniedestr_12.png" /> Scniedestr'
            });
var lyr_Kompensationsflchenverffentlicht_13 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Kompensationsflchenverffentlicht_13, 0]);
var format_KompensatationnachArt_14 = new ol.format.GeoJSON();
var features_KompensatationnachArt_14 = format_KompensatationnachArt_14.readFeatures(json_KompensatationnachArt_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompensatationnachArt_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompensatationnachArt_14.addFeatures(features_KompensatationnachArt_14);
var lyr_KompensatationnachArt_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompensatationnachArt_14, 
                style: style_KompensatationnachArt_14,
                popuplayertitle: 'Kompensatation nach Art',
                interactive: true,
    title: 'Kompensatation nach Art<br />\
    <img src="styles/legend/KompensatationnachArt_14_0.png" /> Artenschutz<br />\
    <img src="styles/legend/KompensatationnachArt_14_1.png" /> Brache und Sukzessionsflächen<br />\
    <img src="styles/legend/KompensatationnachArt_14_2.png" /> extensiv genutzter Saumstreifen<br />\
    <img src="styles/legend/KompensatationnachArt_14_3.png" /> Feuchtbrache<br />\
    <img src="styles/legend/KompensatationnachArt_14_4.png" /> Feuchtwiesen<br />\
    <img src="styles/legend/KompensatationnachArt_14_5.png" /> Gewässer naturnah<br />\
    <img src="styles/legend/KompensatationnachArt_14_6.png" /> Grünland Extensivnutzung Weide<br />\
    <img src="styles/legend/KompensatationnachArt_14_7.png" /> Grünland Extensivnutzung Wiese<br />\
    <img src="styles/legend/KompensatationnachArt_14_8.png" /> Grünland Extensivnutzung<br />\
    <img src="styles/legend/KompensatationnachArt_14_9.png" /> Hecken<br />\
    <img src="styles/legend/KompensatationnachArt_14_10.png" /> Kleingehölz<br />\
    <img src="styles/legend/KompensatationnachArt_14_11.png" /> Kleingewässer/Feuchtbiotope<br />\
    <img src="styles/legend/KompensatationnachArt_14_12.png" /> Obstwiese<br />\
    <img src="styles/legend/KompensatationnachArt_14_13.png" /> Sonderbiotop<br />\
    <img src="styles/legend/KompensatationnachArt_14_14.png" /> Uferrandstreifen<br />\
    <img src="styles/legend/KompensatationnachArt_14_15.png" /> Wald (standorttypischer Laubwald)<br />\
    <img src="styles/legend/KompensatationnachArt_14_16.png" /> Waldsaum<br />\
    <img src="styles/legend/KompensatationnachArt_14_17.png" /> <br />' });
var lyr_LuftleitbahnenHitzeGutachten2019_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Frischluftschneisen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Luftleitbahnen (Hitze-Gutachten 2019)',
                            popuplayertitle: 'Luftleitbahnen (Hitze-Gutachten 2019)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LuftleitbahnenHitzeGutachten2019_15, 0]);
var lyr_KlimarelevanteFreiflchenHitzeGutachten2019_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Freiflaechen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klimarelevante Freiflächen (Hitze-Gutachten 2019)',
                            popuplayertitle: 'Klimarelevante Freiflächen (Hitze-Gutachten 2019)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_KlimarelevanteFreiflchenHitzeGutachten2019_16, 0]);
var lyr_HitzeinselnSzenario2050Gutachten2019_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-2050",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln Szenario 2050 (Gutachten 2019)',
                            popuplayertitle: 'Hitzeinseln Szenario 2050 (Gutachten 2019)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnSzenario2050Gutachten2019_17, 0]);
var lyr_HitzeinselnIstZustandGutachten2019_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln Ist-Zustand (Gutachten 2019)',
                            popuplayertitle: 'Hitzeinseln Ist-Zustand (Gutachten 2019)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnIstZustandGutachten2019_18, 0]);
var lyr_HitzeinselnstarkIstZustandGutachten2019_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Stark-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln (stark) Ist-Zustand (Gutachten 2019)',
                            popuplayertitle: 'Hitzeinseln (stark) Ist-Zustand (Gutachten 2019)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnstarkIstZustandGutachten2019_19, 0]);
var lyr_Klimafunktionskarte_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Klimafunktion",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klimafunktionskarte',
                            popuplayertitle: 'Klimafunktionskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Klimafunktionskarte_20, 0]);
var lyr_PlanhinweiskarteKlima_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Planhinweise",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Planhinweiskarte Klima',
                            popuplayertitle: 'Planhinweiskarte Klima',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanhinweiskarteKlima_21, 0]);
var lyr_LandschaftsplneFestsetzungstexte_22 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lplan_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftspläne Festsetzungstexte',
                            popuplayertitle: 'Landschaftspläne Festsetzungstexte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplneFestsetzungstexte_22, 0]);
var lyr_LandschaftsplanWestFestsetzungskarte_23 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanWestFestsetzungskarte_23, 0]);
var lyr_LandschaftsplanWestEntwicklungskarte_24 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanWestEntwicklungskarte_24, 0]);
var lyr_LandschaftsplanOstFestsetzungskarte_25 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanOstFestsetzungskarte_25, 0]);
var lyr_LandschaftsplanOstEntwicklungskarte_26 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanOstEntwicklungskarte_26, 0]);
var lyr_LandschaftsplanNordFestsetzungskarte_27 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpnord_festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Nord Festsetzungskarte',
                            popuplayertitle: 'Landschaftsplan Nord Festsetzungskarte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanNordFestsetzungskarte_27, 0]);
var lyr_LandschaftsplanNordEntwicklungskarte_28 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanNordEntwicklungskarte_28, 0]);
var lyr_LandschaftsplanGelpeFestsetzungskarte_29 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanGelpeFestsetzungskarte_29, 0]);
var lyr_LandschaftsplanGelpeEntwicklungskarte_30 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanGelpeEntwicklungskarte_30, 0]);
var lyr_LandschaftsundNaturschutz_31 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsundNaturschutz_31, 0]);
var lyr_BdenalsLebensraum_32 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BdenalsLebensraum_32, 0]);
var lyr_BdenfrdasKlima_33 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_klima",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Böden für das Klima',
                            popuplayertitle: 'Böden für das Klima',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BdenfrdasKlima_33, 0]);
var lyr_BdenundWasserhaushalt_34 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodenfunktion_wasserhaushalt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Böden und Wasserhaushalt',
                            popuplayertitle: 'Böden und Wasserhaushalt',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BdenundWasserhaushalt_34, 0]);
var lyr_GesamtbewertungderBodenfunktionen_35 = new ol.layer.Tile({
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
              wms_layers.push([lyr_GesamtbewertungderBodenfunktionen_35, 0]);
var lyr_EinzelbaumKronenumringe2025twin4tree_36 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "einzelbaum_umringe_2025",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Einzelbaum Kronenumringe 2025 (twin4tree)',
                            popuplayertitle: 'Einzelbaum Kronenumringe 2025 (twin4tree)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EinzelbaumKronenumringe2025twin4tree_36, 0]);
var lyr_EinzelbaumKronenumringetwin4tree_37 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "einzelbaum_umringe",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Einzelbaum Kronenumringe (twin4tree)',
                            popuplayertitle: 'Einzelbaum Kronenumringe (twin4tree)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EinzelbaumKronenumringetwin4tree_37, 0]);
var lyr_EinzelbaumStammpositionen2025twin4tree_38 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "einzelbaum_stamm_2025",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Einzelbaum Stammpositionen 2025 (twin4tree)',
                            popuplayertitle: 'Einzelbaum Stammpositionen 2025 (twin4tree)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EinzelbaumStammpositionen2025twin4tree_38, 0]);
var lyr_EinzelbaumStammpositionentwin4tree_39 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "einzelbaum_stamm",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Einzelbaum Stammpositionen (twin4tree)',
                            popuplayertitle: 'Einzelbaum Stammpositionen (twin4tree)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EinzelbaumStammpositionentwin4tree_39, 0]);
var lyr_EinzelbaumBaumartentwin4tree_40 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "einzelbaum_baumarten",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Einzelbaum Baumarten (twin4tree)',
                            popuplayertitle: 'Einzelbaum Baumarten (twin4tree)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_EinzelbaumBaumartentwin4tree_40, 0]);
var lyr_BaumdateistdtischeEinzelbume_41 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "baeume",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Baumdatei (städtische Einzelbäume)',
                            popuplayertitle: 'Baumdatei (städtische Einzelbäume)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BaumdateistdtischeEinzelbume_41, 0]);
var lyr_Naturdenkmler_42 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "naturdenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Naturdenkmäler',
                            popuplayertitle: 'Naturdenkmäler',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Naturdenkmler_42, 0]);
var lyr_FNPnderungsverfahrenrechtsverbindlich_43 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnderungsverfahrenrechtsverbindlich_43, 0]);
var lyr_FNPnderungsverfahrenimVerfahren_44 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnderungsverfahrenimVerfahren_44, 0]);
var lyr_FNPnderungsverfahrenalle_45 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnderungsverfahrenalle_45, 0]);
var lyr_FNPArbeitskarteaktualisiertXplan_46 = new ol.layer.Tile({
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
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPArbeitskarteaktualisiertXplan_46, 0]);
var lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_47 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_47, 0]);
var lyr_FNP2005Rechtsplan_48 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102_fnp_clip",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP 2005 Rechtsplan',
                            popuplayertitle: 'FNP 2005 Rechtsplan',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNP2005Rechtsplan_48, 0]);
var lyr_FNP2005_49 = new ol.layer.Tile({
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
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNP2005_49, 0]);
var lyr_BPlanVerfahrenrechtsverbindlich_50 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bverfahren-r",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'B-Plan-Verfahren (rechtsverbindlich)',
                            popuplayertitle: 'B-Plan-Verfahren (rechtsverbindlich)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BPlanVerfahrenrechtsverbindlich_50, 0]);
var lyr_BPlanVerfahrenimVerfahren_51 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BPlanVerfahrenimVerfahren_51, 0]);
var lyr_Talachse_52 = new ol.layer.Tile({
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
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Talachse_52, 0]);
var lyr_FlchenanGrnanlagen_53 = new ol.layer.Tile({
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
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FlchenanGrnanlagen_53, 0]);
var lyr_BedeutsameTeilrume_54 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BedeutsameTeilrume_54, 0]);
var lyr_Denkmalbereichssatzungenrechtsverbindlich_55 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Denkmalbereichssatzungenrechtsverbindlich_55, 0]);
var lyr_Kleingrten_56 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "kga",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Kleingärten',
                            popuplayertitle: 'Kleingärten',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kleingrten_56, 0]);
var lyr_Gewerbelrm2022DayEveningNight_57 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:IND_RAST_DEN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Gewerbelärm 2022 (Day, Evening, Night)',
                            popuplayertitle: 'Gewerbelärm 2022 (Day, Evening, Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewerbelrm2022DayEveningNight_57, 0]);
var lyr_Gewerbelrm2022Night_58 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:IND_RAST_NGT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Gewerbelärm 2022 (Night)',
                            popuplayertitle: 'Gewerbelärm 2022 (Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewerbelrm2022Night_58, 0]);
var lyr_VerkehrslrmBahn2022DayEveningNight_59 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm:LDEN_BAHN_4",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Bahn 2022 (Day, Evening, Night)',
                            popuplayertitle: 'Verkehrslärm Bahn 2022 (Day, Evening, Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmBahn2022DayEveningNight_59, 0]);
var lyr_VerkehrslrmBahn2022Night_60 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm:LNIGHT_BAHN_4",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Bahn 2022 (Night)',
                            popuplayertitle: 'Verkehrslärm Bahn 2022 (Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmBahn2022Night_60, 0]);
var lyr_VerkehrslrmSchwebebahn2022DayEveningNight_61 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:SCS_RAST_DEN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Schwebebahn 2022 (Day, Evening, Night)',
                            popuplayertitle: 'Verkehrslärm Schwebebahn 2022 (Day, Evening, Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmSchwebebahn2022DayEveningNight_61, 0]);
var lyr_VerkehrslrmSchwebebahnStrae2022Night_62 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:SCS_RAST_NGT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Schwebebahn Straße 2022 (Night)',
                            popuplayertitle: 'Verkehrslärm Schwebebahn Straße 2022 (Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmSchwebebahnStrae2022Night_62, 0]);
var lyr_VerkehrslrmStrae2022DayEveningNight_63 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:STR_RAST_DEN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Straße 2022 (Day, Evening, Night)',
                            popuplayertitle: 'Verkehrslärm Straße 2022 (Day, Evening, Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmStrae2022DayEveningNight_63, 0]);
var lyr_VerkehrslrmStrae2022Night_64 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:STR_RAST_NGT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Straße 2022 (Night)',
                            popuplayertitle: 'Verkehrslärm Straße 2022 (Night)',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmStrae2022Night_64, 0]);
var lyr_Landschaftsschutzgebiete_65 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Landschaftsschutzgebiete_65, 0]);
var lyr_FFHGebiete_66 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FFHGebiete_66, 0]);
var lyr_Naturschutzgebiete_67 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Naturschutzgebiete_67, 0]);
var lyr_BiotopkatasterFlche_68 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BiotopkatasterFlche_68, 0]);
var lyr_BiotoptypenFlche_69 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BiotoptypenFlche_69, 0]);
var lyr_VerbundflchenherausragendebesondereBedeutung_70 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerbundflchenherausragendebesondereBedeutung_70, 0]);
var format_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71 = new ol.format.GeoJSON();
var features_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71 = format_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.readFeatures(json_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.addFeatures(features_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71);
var lyr_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71, 
                style: style_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71,
                popuplayertitle: 'Biotopverbundflaechen_EPSG25832_Shape — ql_vbpolygon.shp',
                interactive: true,
                title: '<img src="styles/legend/Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.png" /> Biotopverbundflaechen_EPSG25832_Shape — ql_vbpolygon.shp'
            });
var lyr_VerordnungersetzendeVertragsflche_72 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerordnungersetzendeVertragsflche_72, 0]);
var lyr_BereichefrdenSchutzderNatur_73 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BereichefrdenSchutzderNatur_73, 0]);
var lyr_geschtzteBiotopeFlche_74 = new ol.layer.Tile({
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
              wms_layers.push([lyr_geschtzteBiotopeFlche_74, 0]);
var format_FlurstimEigentumderStadtWuppertal2024_09_02_75 = new ol.format.GeoJSON();
var features_FlurstimEigentumderStadtWuppertal2024_09_02_75 = format_FlurstimEigentumderStadtWuppertal2024_09_02_75.readFeatures(json_FlurstimEigentumderStadtWuppertal2024_09_02_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_75.addFeatures(features_FlurstimEigentumderStadtWuppertal2024_09_02_75);
var lyr_FlurstimEigentumderStadtWuppertal2024_09_02_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_75, 
                style: style_FlurstimEigentumderStadtWuppertal2024_09_02_75,
                popuplayertitle: 'Flurst. im Eigentum der Stadt Wuppertal (2024_09_02)',
                interactive: true,
                title: '<img src="styles/legend/FlurstimEigentumderStadtWuppertal2024_09_02_75.png" /> Flurst. im Eigentum der Stadt Wuppertal (2024_09_02)'
            });
var lyr_1292BUGA1Tesche_76 = new ol.layer.Image({
        opacity: 1,
        
    title: '1292 - BUGA 1 - Tesche<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1292BUGA1Tesche_76.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [786819.191000, 6663435.851200, 789379.068000, 6665332.627500]
        })
    });
var lyr_1212BUGA5Lokschuppenareal_77 = new ol.layer.Image({
        opacity: 1,
        
    title: '1212 - BUGA 5 - Lokschuppenareal<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1212BUGA5Lokschuppenareal_77.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [787194.480993, 6662884.375282, 788287.320099, 6663683.554090]
        })
    });
var lyr_FaunaNachweise_78 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fauna - Nachweise<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FaunaNachweise_78.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791034.377900, 6663347.342500, 792717.172100, 6664563.507400]
        })
    });
var lyr_FledertiereKnigshhe_79 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fledertiere - Königshöhe<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FledertiereKnigshhe_79.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791350.017400, 6663950.738600, 793033.038200, 6665169.178900]
        })
    });
var lyr_Fledertiere_80 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fledertiere<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fledertiere_80.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791042.627000, 6663393.558800, 792724.502600, 6664610.022300]
        })
    });
var lyr_HhlenbumeHorstbume_81 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Höhlenbäume - Horstbäume<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HhlenbumeHorstbume_81.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791052.102900, 6663402.430500, 792711.274000, 6664573.532000]
        })
    });
var lyr_SBStrfallschutz_82 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Störfallschutz<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBStrfallschutz_82.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [788501.783500, 6662597.845000, 794639.013700, 6666920.507100]
        })
    });
var lyr_SBSttzen_83 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Stützen<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBSttzen_83.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790950.993800, 6663303.284300, 791944.195900, 6664003.518300]
        })
    });
var lyr_SBDenkmalbereichssatzung_84 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Denkmalbereichssatzung<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBDenkmalbereichssatzung_84.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790301.456400, 6662815.926900, 792302.763100, 6664801.675100]
        })
    });
var lyr_SBVariantenprfung_85 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Variantenprüfung<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBVariantenprfung_85.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790688.722000, 6663372.307600, 792674.782400, 6664192.112000]
        })
    });
var lyr_Geltungsbereich_86 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Geltungsbereich_86.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790860.832300, 6663083.347500, 792732.654200, 6664261.032900]
        })
    });
var lyr_SBLageplan_87 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Lageplan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBLageplan_87.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790890.895200, 6663037.499800, 792748.625600, 6664428.472300]
        })
    });
var lyr_Entwsserungsflchen_88 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/infra?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "sflaechen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Entwässerungsflächen',
                            popuplayertitle: 'Entwässerungsflächen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Entwsserungsflchen_88, 0]);
var lyr_Haltungen_89 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/infra?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "haltungen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Haltungen',
                            popuplayertitle: 'Haltungen',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Haltungen_89, 0]);
var lyr_Schchte_90 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/infra?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "schaechte",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Schächte',
                            popuplayertitle: 'Schächte',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Schchte_90, 0]);
var lyr_Planteil3_91 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil3_91.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791975.096700, 6663919.015000, 795265.694500, 6666383.844900]
        })
    });
var lyr_Planteil2_92 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil2_92.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791958.536300, 6664097.974300, 793604.456100, 6665330.387200]
        })
    });
var lyr_Planteil1_93 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil1_93.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792044.113500, 6665042.813300, 793689.867800, 6666275.725900]
        })
    });
var lyr_Buswendeschleife3unten_94 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Buswendeschleife 3 unten<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Buswendeschleife3unten_94.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792310.744600, 6664770.629700, 792465.728600, 6664881.197600]
        })
    });
var lyr_Buswendeschleife2oben_95 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Buswendeschleife 2 oben<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Buswendeschleife2oben_95.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792599.355900, 6664324.450100, 792772.079700, 6664471.796500]
        })
    });
var lyr_Buswendeschleife1_96 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Buswendeschleife 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Buswendeschleife1_96.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792101.800900, 6664034.256800, 793342.489900, 6664923.154200]
        })
    });
var lyr_Geltungsbereich_97 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Geltungsbereich_97.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791930.331800, 6663975.841900, 793493.669800, 6666317.858600]
        })
    });
var format_Buswendeschleife_98 = new ol.format.GeoJSON();
var features_Buswendeschleife_98 = format_Buswendeschleife_98.readFeatures(json_Buswendeschleife_98, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buswendeschleife_98 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buswendeschleife_98.addFeatures(features_Buswendeschleife_98);
var lyr_Buswendeschleife_98 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buswendeschleife_98, 
                style: style_Buswendeschleife_98,
                popuplayertitle: 'Buswendeschleife',
                interactive: true,
    title: 'Buswendeschleife<br />\
    <img src="styles/legend/Buswendeschleife_98_0.png" /> Buswendeschleife oben<br />\
    <img src="styles/legend/Buswendeschleife_98_1.png" /> Buswendeschleife unten<br />\
    <img src="styles/legend/Buswendeschleife_98_2.png" /> Eingangsbereich<br />\
    <img src="styles/legend/Buswendeschleife_98_3.png" /> Stützmauer<br />' });
var lyr_BefreiungSeilbahn_99 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Befreiung Seilbahn<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BefreiungSeilbahn_99.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791711.769200, 6663406.933100, 792861.047000, 6664182.335300]
        })
    });
var format_BefreiungSeilbahnShape_100 = new ol.format.GeoJSON();
var features_BefreiungSeilbahnShape_100 = format_BefreiungSeilbahnShape_100.readFeatures(json_BefreiungSeilbahnShape_100, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BefreiungSeilbahnShape_100 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BefreiungSeilbahnShape_100.addFeatures(features_BefreiungSeilbahnShape_100);
var lyr_BefreiungSeilbahnShape_100 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BefreiungSeilbahnShape_100, 
                style: style_BefreiungSeilbahnShape_100,
                popuplayertitle: 'Befreiung Seilbahn Shape',
                interactive: true,
                title: '<img src="styles/legend/BefreiungSeilbahnShape_100.png" /> Befreiung Seilbahn Shape'
            });
var lyr_Planteil4_101 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil4_101.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790773.990600, 6661839.778600, 794062.668500, 6664318.437300]
        })
    });
var lyr_Planteil3_102 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil3_102.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791955.206400, 6663344.674200, 792775.364000, 6663972.607400]
        })
    });
var lyr_Planteil2_103 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil2_103.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791361.396500, 6663186.351300, 792183.941700, 6663805.521700]
        })
    });
var lyr_Planteil1_104 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil1_104.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790912.183500, 6663492.525200, 791733.025100, 6664093.437300]
        })
    });
var lyr_Geltungsbereich_105 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Geltungsbereich_105.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790849.497900, 6663074.831600, 792751.115300, 6664471.222300]
        })
    });
var group_BPlan1257SeilbahnVerffBeschluss = new ol.layer.Group({
                                layers: [lyr_BefreiungSeilbahn_99,lyr_BefreiungSeilbahnShape_100,lyr_Planteil4_101,lyr_Planteil3_102,lyr_Planteil2_103,lyr_Planteil1_104,lyr_Geltungsbereich_105,],
                                fold: 'open',
                                title: 'BPlan 1257 - Seilbahn - Veröff. Beschluss'});
var group_BPlan1294HngebrckeVerffBeschluss = new ol.layer.Group({
                                layers: [lyr_Planteil3_91,lyr_Planteil2_92,lyr_Planteil1_93,lyr_Buswendeschleife3unten_94,lyr_Buswendeschleife2oben_95,lyr_Buswendeschleife1_96,lyr_Geltungsbereich_97,lyr_Buswendeschleife_98,],
                                fold: 'open',
                                title: 'BPlan 1294 - Hängebrücke - Veröff. Beschluss'});
var group_BPlan1257SeilbahnAufstBeschluss = new ol.layer.Group({
                                layers: [lyr_SBStrfallschutz_82,lyr_SBSttzen_83,lyr_SBDenkmalbereichssatzung_84,lyr_SBVariantenprfung_85,lyr_Geltungsbereich_86,lyr_SBLageplan_87,lyr_Entwsserungsflchen_88,lyr_Haltungen_89,lyr_Schchte_90,],
                                fold: 'open',
                                title: 'BPlan 1257 - Seilbahn - Aufst. Beschluss'});
var group_BSMW2023kolErsteinsch = new ol.layer.Group({
                                layers: [lyr_FaunaNachweise_78,lyr_FledertiereKnigshhe_79,lyr_Fledertiere_80,lyr_HhlenbumeHorstbume_81,],
                                fold: 'close',
                                title: 'BSMW 2023 - Ökol. Ersteinsch.'});
var group_WeitereBUGAPlne = new ol.layer.Group({
                                layers: [lyr_1292BUGA1Tesche_76,lyr_1212BUGA5Lokschuppenareal_77,],
                                fold: 'close',
                                title: 'Weitere BUGA Pläne'});
var group_StdtEigentum = new ol.layer.Group({
                                layers: [lyr_FlurstimEigentumderStadtWuppertal2024_09_02_75,],
                                fold: 'close',
                                title: 'Städt. Eigentum'});
var group_Linfos = new ol.layer.Group({
                                layers: [lyr_Landschaftsschutzgebiete_65,lyr_FFHGebiete_66,lyr_Naturschutzgebiete_67,lyr_BiotopkatasterFlche_68,lyr_BiotoptypenFlche_69,lyr_VerbundflchenherausragendebesondereBedeutung_70,lyr_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71,lyr_VerordnungersetzendeVertragsflche_72,lyr_BereichefrdenSchutzderNatur_73,lyr_geschtzteBiotopeFlche_74,],
                                fold: 'close',
                                title: 'Linfos'});
var group_WMSWuppertalLrmDenkmalGrnanlagen = new ol.layer.Group({
                                layers: [lyr_Talachse_52,lyr_FlchenanGrnanlagen_53,lyr_BedeutsameTeilrume_54,lyr_Denkmalbereichssatzungenrechtsverbindlich_55,lyr_Kleingrten_56,lyr_Gewerbelrm2022DayEveningNight_57,lyr_Gewerbelrm2022Night_58,lyr_VerkehrslrmBahn2022DayEveningNight_59,lyr_VerkehrslrmBahn2022Night_60,lyr_VerkehrslrmSchwebebahn2022DayEveningNight_61,lyr_VerkehrslrmSchwebebahnStrae2022Night_62,lyr_VerkehrslrmStrae2022DayEveningNight_63,lyr_VerkehrslrmStrae2022Night_64,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Lärm, Denkmal, Grünanlagen'});
var group_WMSWuppertalPlanung = new ol.layer.Group({
                                layers: [lyr_FNPnderungsverfahrenrechtsverbindlich_43,lyr_FNPnderungsverfahrenimVerfahren_44,lyr_FNPnderungsverfahrenalle_45,lyr_FNPArbeitskarteaktualisiertXplan_46,lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_47,lyr_FNP2005Rechtsplan_48,lyr_FNP2005_49,lyr_BPlanVerfahrenrechtsverbindlich_50,lyr_BPlanVerfahrenimVerfahren_51,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Planung'});
var group_WMSWuppertalLandschaftNatur = new ol.layer.Group({
                                layers: [lyr_BdenalsLebensraum_32,lyr_BdenfrdasKlima_33,lyr_BdenundWasserhaushalt_34,lyr_GesamtbewertungderBodenfunktionen_35,lyr_EinzelbaumKronenumringe2025twin4tree_36,lyr_EinzelbaumKronenumringetwin4tree_37,lyr_EinzelbaumStammpositionen2025twin4tree_38,lyr_EinzelbaumStammpositionentwin4tree_39,lyr_EinzelbaumBaumartentwin4tree_40,lyr_BaumdateistdtischeEinzelbume_41,lyr_Naturdenkmler_42,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Landschaft & Natur'});
var group_WMSWuppertalLandschaftsplne = new ol.layer.Group({
                                layers: [lyr_LandschaftsplneFestsetzungstexte_22,lyr_LandschaftsplanWestFestsetzungskarte_23,lyr_LandschaftsplanWestEntwicklungskarte_24,lyr_LandschaftsplanOstFestsetzungskarte_25,lyr_LandschaftsplanOstEntwicklungskarte_26,lyr_LandschaftsplanNordFestsetzungskarte_27,lyr_LandschaftsplanNordEntwicklungskarte_28,lyr_LandschaftsplanGelpeFestsetzungskarte_29,lyr_LandschaftsplanGelpeEntwicklungskarte_30,lyr_LandschaftsundNaturschutz_31,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Landschaftspläne'});
var group_WMSWuppertalKlima = new ol.layer.Group({
                                layers: [lyr_LuftleitbahnenHitzeGutachten2019_15,lyr_KlimarelevanteFreiflchenHitzeGutachten2019_16,lyr_HitzeinselnSzenario2050Gutachten2019_17,lyr_HitzeinselnIstZustandGutachten2019_18,lyr_HitzeinselnstarkIstZustandGutachten2019_19,lyr_Klimafunktionskarte_20,lyr_PlanhinweiskarteKlima_21,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Klima'});
var group_Kompensation = new ol.layer.Group({
                                layers: [lyr_Kompensationsflchenverffentlicht_13,lyr_KompensatationnachArt_14,],
                                fold: 'close',
                                title: 'Kompensation'});
var group_Gewerbe28RPDnderung = new ol.layer.Group({
                                layers: [lyr_DornerWeg_9,lyr_LichtscheidSd_10,lyr_SchllerWest_11,lyr_Scniedestr_12,],
                                fold: 'close',
                                title: 'Gewerbe - 28. RPD Änderung'});
var group_Verwaltungsgrenzen = new ol.layer.Group({
                                layers: [lyr_WuppertalBezirke_7,lyr_WuppertalStadtgebiet_8,],
                                fold: 'close',
                                title: 'Verwaltungsgrenzen'});
var group_Basiskarten = new ol.layer.Group({
                                layers: [lyr_OSM_0,lyr_OpenStreetMap_1,lyr_OpenTopoMap_2,lyr_Gmaps_3,lyr_AmtlicheBasiskartegrau_4,lyr_WuppertalerOrthofoto2024_5,lyr_Reliefschummerung_6,],
                                fold: 'open',
                                title: 'Basiskarten'});

lyr_OSM_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenTopoMap_2.setVisible(false);lyr_Gmaps_3.setVisible(false);lyr_AmtlicheBasiskartegrau_4.setVisible(false);lyr_WuppertalerOrthofoto2024_5.setVisible(false);lyr_Reliefschummerung_6.setVisible(false);lyr_WuppertalBezirke_7.setVisible(false);lyr_WuppertalStadtgebiet_8.setVisible(true);lyr_DornerWeg_9.setVisible(true);lyr_LichtscheidSd_10.setVisible(true);lyr_SchllerWest_11.setVisible(true);lyr_Scniedestr_12.setVisible(true);lyr_Kompensationsflchenverffentlicht_13.setVisible(false);lyr_KompensatationnachArt_14.setVisible(false);lyr_LuftleitbahnenHitzeGutachten2019_15.setVisible(false);lyr_KlimarelevanteFreiflchenHitzeGutachten2019_16.setVisible(false);lyr_HitzeinselnSzenario2050Gutachten2019_17.setVisible(false);lyr_HitzeinselnIstZustandGutachten2019_18.setVisible(false);lyr_HitzeinselnstarkIstZustandGutachten2019_19.setVisible(false);lyr_Klimafunktionskarte_20.setVisible(false);lyr_PlanhinweiskarteKlima_21.setVisible(false);lyr_LandschaftsplneFestsetzungstexte_22.setVisible(false);lyr_LandschaftsplanWestFestsetzungskarte_23.setVisible(false);lyr_LandschaftsplanWestEntwicklungskarte_24.setVisible(false);lyr_LandschaftsplanOstFestsetzungskarte_25.setVisible(false);lyr_LandschaftsplanOstEntwicklungskarte_26.setVisible(false);lyr_LandschaftsplanNordFestsetzungskarte_27.setVisible(false);lyr_LandschaftsplanNordEntwicklungskarte_28.setVisible(false);lyr_LandschaftsplanGelpeFestsetzungskarte_29.setVisible(false);lyr_LandschaftsplanGelpeEntwicklungskarte_30.setVisible(false);lyr_LandschaftsundNaturschutz_31.setVisible(false);lyr_BdenalsLebensraum_32.setVisible(false);lyr_BdenfrdasKlima_33.setVisible(false);lyr_BdenundWasserhaushalt_34.setVisible(false);lyr_GesamtbewertungderBodenfunktionen_35.setVisible(false);lyr_EinzelbaumKronenumringe2025twin4tree_36.setVisible(false);lyr_EinzelbaumKronenumringetwin4tree_37.setVisible(false);lyr_EinzelbaumStammpositionen2025twin4tree_38.setVisible(false);lyr_EinzelbaumStammpositionentwin4tree_39.setVisible(false);lyr_EinzelbaumBaumartentwin4tree_40.setVisible(false);lyr_BaumdateistdtischeEinzelbume_41.setVisible(false);lyr_Naturdenkmler_42.setVisible(false);lyr_FNPnderungsverfahrenrechtsverbindlich_43.setVisible(false);lyr_FNPnderungsverfahrenimVerfahren_44.setVisible(false);lyr_FNPnderungsverfahrenalle_45.setVisible(false);lyr_FNPArbeitskarteaktualisiertXplan_46.setVisible(false);lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_47.setVisible(false);lyr_FNP2005Rechtsplan_48.setVisible(false);lyr_FNP2005_49.setVisible(false);lyr_BPlanVerfahrenrechtsverbindlich_50.setVisible(false);lyr_BPlanVerfahrenimVerfahren_51.setVisible(false);lyr_Talachse_52.setVisible(false);lyr_FlchenanGrnanlagen_53.setVisible(false);lyr_BedeutsameTeilrume_54.setVisible(false);lyr_Denkmalbereichssatzungenrechtsverbindlich_55.setVisible(false);lyr_Kleingrten_56.setVisible(false);lyr_Gewerbelrm2022DayEveningNight_57.setVisible(false);lyr_Gewerbelrm2022Night_58.setVisible(false);lyr_VerkehrslrmBahn2022DayEveningNight_59.setVisible(false);lyr_VerkehrslrmBahn2022Night_60.setVisible(false);lyr_VerkehrslrmSchwebebahn2022DayEveningNight_61.setVisible(false);lyr_VerkehrslrmSchwebebahnStrae2022Night_62.setVisible(false);lyr_VerkehrslrmStrae2022DayEveningNight_63.setVisible(false);lyr_VerkehrslrmStrae2022Night_64.setVisible(false);lyr_Landschaftsschutzgebiete_65.setVisible(false);lyr_FFHGebiete_66.setVisible(false);lyr_Naturschutzgebiete_67.setVisible(false);lyr_BiotopkatasterFlche_68.setVisible(false);lyr_BiotoptypenFlche_69.setVisible(false);lyr_VerbundflchenherausragendebesondereBedeutung_70.setVisible(false);lyr_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.setVisible(false);lyr_VerordnungersetzendeVertragsflche_72.setVisible(false);lyr_BereichefrdenSchutzderNatur_73.setVisible(false);lyr_geschtzteBiotopeFlche_74.setVisible(false);lyr_FlurstimEigentumderStadtWuppertal2024_09_02_75.setVisible(false);lyr_1292BUGA1Tesche_76.setVisible(true);lyr_1212BUGA5Lokschuppenareal_77.setVisible(true);lyr_FaunaNachweise_78.setVisible(false);lyr_FledertiereKnigshhe_79.setVisible(false);lyr_Fledertiere_80.setVisible(false);lyr_HhlenbumeHorstbume_81.setVisible(false);lyr_SBStrfallschutz_82.setVisible(false);lyr_SBSttzen_83.setVisible(false);lyr_SBDenkmalbereichssatzung_84.setVisible(false);lyr_SBVariantenprfung_85.setVisible(false);lyr_Geltungsbereich_86.setVisible(false);lyr_SBLageplan_87.setVisible(false);lyr_Entwsserungsflchen_88.setVisible(false);lyr_Haltungen_89.setVisible(false);lyr_Schchte_90.setVisible(false);lyr_Planteil3_91.setVisible(false);lyr_Planteil2_92.setVisible(true);lyr_Planteil1_93.setVisible(true);lyr_Buswendeschleife3unten_94.setVisible(false);lyr_Buswendeschleife2oben_95.setVisible(false);lyr_Buswendeschleife1_96.setVisible(false);lyr_Geltungsbereich_97.setVisible(true);lyr_Buswendeschleife_98.setVisible(true);lyr_BefreiungSeilbahn_99.setVisible(false);lyr_BefreiungSeilbahnShape_100.setVisible(true);lyr_Planteil4_101.setVisible(false);lyr_Planteil3_102.setVisible(true);lyr_Planteil2_103.setVisible(true);lyr_Planteil1_104.setVisible(true);lyr_Geltungsbereich_105.setVisible(true);
var layersList = [group_Basiskarten,group_Verwaltungsgrenzen,group_Gewerbe28RPDnderung,group_Kompensation,group_WMSWuppertalKlima,group_WMSWuppertalLandschaftsplne,group_WMSWuppertalLandschaftNatur,group_WMSWuppertalPlanung,group_WMSWuppertalLrmDenkmalGrnanlagen,group_Linfos,group_StdtEigentum,group_WeitereBUGAPlne,group_BSMW2023kolErsteinsch,group_BPlan1257SeilbahnAufstBeschluss,group_BPlan1294HngebrckeVerffBeschluss,group_BPlan1257SeilbahnVerffBeschluss];
lyr_WuppertalBezirke_7.set('fieldAliases', {'fid': 'fid', 'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_WuppertalStadtgebiet_8.set('fieldAliases', {'fid': 'fid', 'STADT': 'STADT', 'FLAECHE': 'FLAECHE', 'Fläche2': 'Fläche2', });
lyr_DornerWeg_9.set('fieldAliases', {'id': 'id', 'Nsme': 'Nsme', });
lyr_LichtscheidSd_10.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SchllerWest_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Scniedestr_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_KompensatationnachArt_14.set('fieldAliases', {'id': 'id', 'name': 'name', 'flaeche': 'flaeche', 'bezeichnun': 'bezeichnun', 'ziel1': 'ziel1', 'ziel2': 'ziel2', 'ziel3': 'ziel3', 'ziel4': 'ziel4', 'ziel5': 'ziel5', 'ziel6': 'ziel6', 'ziel7': 'ziel7', 'ziel8': 'ziel8', 'ziel9': 'ziel9', 'ziel10': 'ziel10', 'zielbio': 'zielbio', });
lyr_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.set('fieldAliases', {'LOCALID': 'LOCALID', 'DOMAINOBJE': 'DOMAINOBJE', 'BEDEUTUNG1': 'BEDEUTUNG1', 'LINK': 'LINK', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_75.set('fieldAliases', {'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', });
lyr_Buswendeschleife_98.set('fieldAliases', {'fid': 'fid', 'Bezeichnung': 'Bezeichnung', });
lyr_BefreiungSeilbahnShape_100.set('fieldAliases', {'fid': 'fid', });
lyr_WuppertalBezirke_7.set('fieldImages', {'fid': 'TextEdit', 'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_WuppertalStadtgebiet_8.set('fieldImages', {'fid': 'TextEdit', 'STADT': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche2': 'TextEdit', });
lyr_DornerWeg_9.set('fieldImages', {'id': 'TextEdit', 'Nsme': 'TextEdit', });
lyr_LichtscheidSd_10.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SchllerWest_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Scniedestr_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_KompensatationnachArt_14.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'flaeche': 'TextEdit', 'bezeichnun': 'TextEdit', 'ziel1': 'TextEdit', 'ziel2': 'TextEdit', 'ziel3': 'TextEdit', 'ziel4': 'TextEdit', 'ziel5': 'TextEdit', 'ziel6': 'TextEdit', 'ziel7': 'TextEdit', 'ziel8': 'TextEdit', 'ziel9': 'TextEdit', 'ziel10': 'TextEdit', 'zielbio': 'TextEdit', });
lyr_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.set('fieldImages', {'LOCALID': 'TextEdit', 'DOMAINOBJE': 'TextEdit', 'BEDEUTUNG1': 'TextEdit', 'LINK': 'TextEdit', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_75.set('fieldImages', {'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', });
lyr_Buswendeschleife_98.set('fieldImages', {'fid': 'TextEdit', 'Bezeichnung': 'TextEdit', });
lyr_BefreiungSeilbahnShape_100.set('fieldImages', {'fid': '', });
lyr_WuppertalBezirke_7.set('fieldLabels', {'fid': 'header label - visible with data', 'BEZIRK': 'header label - visible with data', 'NAME': 'header label - visible with data', 'FLAECHE': 'header label - visible with data', 'Fläche': 'header label - visible with data', });
lyr_WuppertalStadtgebiet_8.set('fieldLabels', {'fid': 'header label - visible with data', 'STADT': 'header label - visible with data', 'FLAECHE': 'header label - visible with data', 'Fläche2': 'header label - visible with data', });
lyr_DornerWeg_9.set('fieldLabels', {'id': 'header label - visible with data', 'Nsme': 'header label - visible with data', });
lyr_LichtscheidSd_10.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_SchllerWest_11.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_Scniedestr_12.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_KompensatationnachArt_14.set('fieldLabels', {'id': 'header label - visible with data', 'name': 'header label - visible with data', 'flaeche': 'header label - visible with data', 'bezeichnun': 'header label - visible with data', 'ziel1': 'header label - visible with data', 'ziel2': 'header label - visible with data', 'ziel3': 'header label - visible with data', 'ziel4': 'header label - visible with data', 'ziel5': 'header label - visible with data', 'ziel6': 'header label - visible with data', 'ziel7': 'header label - visible with data', 'ziel8': 'header label - visible with data', 'ziel9': 'header label - visible with data', 'ziel10': 'header label - visible with data', 'zielbio': 'header label - visible with data', });
lyr_Biotopverbundflaechen_EPSG25832_Shapeql_vbpolygonshp_71.set('fieldLabels', {'LOCALID': 'header label - visible with data', 'DOMAINOBJE': 'header label - visible with data', 'BEDEUTUNG1': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_75.set('fieldLabels', {'GEM': 'header label - visible with data', 'FLUR': 'header label - visible with data', 'FLURSTZ': 'header label - visible with data', 'FLURSTN': 'header label - visible with data', });
lyr_Buswendeschleife_98.set('fieldLabels', {'fid': 'header label - visible with data', 'Bezeichnung': 'header label - visible with data', });
lyr_BefreiungSeilbahnShape_100.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_BefreiungSeilbahnShape_100.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});