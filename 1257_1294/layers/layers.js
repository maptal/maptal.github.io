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
var format_RegierungsbezirkDsseldorf_9 = new ol.format.GeoJSON();
var features_RegierungsbezirkDsseldorf_9 = format_RegierungsbezirkDsseldorf_9.readFeatures(json_RegierungsbezirkDsseldorf_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RegierungsbezirkDsseldorf_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RegierungsbezirkDsseldorf_9.addFeatures(features_RegierungsbezirkDsseldorf_9);
var lyr_RegierungsbezirkDsseldorf_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RegierungsbezirkDsseldorf_9, 
                style: style_RegierungsbezirkDsseldorf_9,
                popuplayertitle: 'Regierungsbezirk Düsseldorf',
                interactive: false,
                title: '<img src="styles/legend/RegierungsbezirkDsseldorf_9.png" /> Regierungsbezirk Düsseldorf'
            });
var format_DornerWeg_10 = new ol.format.GeoJSON();
var features_DornerWeg_10 = format_DornerWeg_10.readFeatures(json_DornerWeg_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DornerWeg_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DornerWeg_10.addFeatures(features_DornerWeg_10);
var lyr_DornerWeg_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DornerWeg_10, 
                style: style_DornerWeg_10,
                popuplayertitle: 'Dorner Weg',
                interactive: true,
                title: '<img src="styles/legend/DornerWeg_10.png" /> Dorner Weg'
            });
var format_LichtscheidSd_11 = new ol.format.GeoJSON();
var features_LichtscheidSd_11 = format_LichtscheidSd_11.readFeatures(json_LichtscheidSd_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LichtscheidSd_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LichtscheidSd_11.addFeatures(features_LichtscheidSd_11);
var lyr_LichtscheidSd_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LichtscheidSd_11, 
                style: style_LichtscheidSd_11,
                popuplayertitle: 'Lichtscheid Süd',
                interactive: true,
                title: '<img src="styles/legend/LichtscheidSd_11.png" /> Lichtscheid Süd'
            });
var format_SchllerWest_12 = new ol.format.GeoJSON();
var features_SchllerWest_12 = format_SchllerWest_12.readFeatures(json_SchllerWest_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchllerWest_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchllerWest_12.addFeatures(features_SchllerWest_12);
var lyr_SchllerWest_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchllerWest_12, 
                style: style_SchllerWest_12,
                popuplayertitle: 'Schöller West',
                interactive: true,
                title: '<img src="styles/legend/SchllerWest_12.png" /> Schöller West'
            });
var format_Scniedestr_13 = new ol.format.GeoJSON();
var features_Scniedestr_13 = format_Scniedestr_13.readFeatures(json_Scniedestr_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scniedestr_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scniedestr_13.addFeatures(features_Scniedestr_13);
var lyr_Scniedestr_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scniedestr_13, 
                style: style_Scniedestr_13,
                popuplayertitle: 'Scniedestr',
                interactive: true,
                title: '<img src="styles/legend/Scniedestr_13.png" /> Scniedestr'
            });
var lyr_Kompensationsflchenverffentlicht_14 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Kompensationsflchenverffentlicht_14, 0]);
var format_KompensatationnachArt_15 = new ol.format.GeoJSON();
var features_KompensatationnachArt_15 = format_KompensatationnachArt_15.readFeatures(json_KompensatationnachArt_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KompensatationnachArt_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KompensatationnachArt_15.addFeatures(features_KompensatationnachArt_15);
var lyr_KompensatationnachArt_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KompensatationnachArt_15, 
                style: style_KompensatationnachArt_15,
                popuplayertitle: 'Kompensatation nach Art',
                interactive: true,
    title: 'Kompensatation nach Art<br />\
    <img src="styles/legend/KompensatationnachArt_15_0.png" /> Artenschutz<br />\
    <img src="styles/legend/KompensatationnachArt_15_1.png" /> Brache und Sukzessionsflächen<br />\
    <img src="styles/legend/KompensatationnachArt_15_2.png" /> extensiv genutzter Saumstreifen<br />\
    <img src="styles/legend/KompensatationnachArt_15_3.png" /> Feuchtbrache<br />\
    <img src="styles/legend/KompensatationnachArt_15_4.png" /> Feuchtwiesen<br />\
    <img src="styles/legend/KompensatationnachArt_15_5.png" /> Gewässer naturnah<br />\
    <img src="styles/legend/KompensatationnachArt_15_6.png" /> Grünland Extensivnutzung Weide<br />\
    <img src="styles/legend/KompensatationnachArt_15_7.png" /> Grünland Extensivnutzung Wiese<br />\
    <img src="styles/legend/KompensatationnachArt_15_8.png" /> Grünland Extensivnutzung<br />\
    <img src="styles/legend/KompensatationnachArt_15_9.png" /> Hecken<br />\
    <img src="styles/legend/KompensatationnachArt_15_10.png" /> Kleingehölz<br />\
    <img src="styles/legend/KompensatationnachArt_15_11.png" /> Kleingewässer/Feuchtbiotope<br />\
    <img src="styles/legend/KompensatationnachArt_15_12.png" /> Obstwiese<br />\
    <img src="styles/legend/KompensatationnachArt_15_13.png" /> Sonderbiotop<br />\
    <img src="styles/legend/KompensatationnachArt_15_14.png" /> Uferrandstreifen<br />\
    <img src="styles/legend/KompensatationnachArt_15_15.png" /> Wald (standorttypischer Laubwald)<br />\
    <img src="styles/legend/KompensatationnachArt_15_16.png" /> Waldsaum<br />\
    <img src="styles/legend/KompensatationnachArt_15_17.png" /> <br />' });
var lyr_1292BUGA1Tesche_16 = new ol.layer.Image({
        opacity: 1,
        
    title: '1292 - BUGA 1 - Tesche<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1292BUGA1Tesche_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [786819.191000, 6663435.851200, 789379.068000, 6665332.627500]
        })
    });
var lyr_1212BUGA5Lokschuppenareal_17 = new ol.layer.Image({
        opacity: 1,
        
    title: '1212 - BUGA 5 - Lokschuppenareal<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/1212BUGA5Lokschuppenareal_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [787194.480993, 6662884.375282, 788287.320099, 6663683.554090]
        })
    });
var lyr_Geltungsbereich_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Geltungsbereich_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791930.331800, 6663975.841900, 793493.669800, 6666317.858600]
        })
    });
var lyr_Planteil3_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil3_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791975.096700, 6663919.015000, 795265.694500, 6666383.844900]
        })
    });
var lyr_Planteil2_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil2_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791958.536300, 6664097.974300, 793604.456100, 6665330.387200]
        })
    });
var lyr_Planteil1_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil1_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792044.113500, 6665042.813300, 793689.867800, 6666275.725900]
        })
    });
var lyr_Buswendeschleife3unten_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Buswendeschleife 3 unten<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Buswendeschleife3unten_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792310.744600, 6664770.629700, 792465.728600, 6664881.197600]
        })
    });
var lyr_Buswendeschleife2oben_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Buswendeschleife 2 oben<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Buswendeschleife2oben_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792599.355900, 6664324.450100, 792772.079700, 6664471.796500]
        })
    });
var lyr_Buswendeschleife1_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Buswendeschleife 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Buswendeschleife1_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792101.800900, 6664034.256800, 793342.489900, 6664923.154200]
        })
    });
var format_Buswendeschleife_25 = new ol.format.GeoJSON();
var features_Buswendeschleife_25 = format_Buswendeschleife_25.readFeatures(json_Buswendeschleife_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buswendeschleife_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buswendeschleife_25.addFeatures(features_Buswendeschleife_25);
var lyr_Buswendeschleife_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buswendeschleife_25, 
                style: style_Buswendeschleife_25,
                popuplayertitle: 'Buswendeschleife',
                interactive: true,
    title: 'Buswendeschleife<br />\
    <img src="styles/legend/Buswendeschleife_25_0.png" /> Buswendeschleife oben<br />\
    <img src="styles/legend/Buswendeschleife_25_1.png" /> Buswendeschleife unten<br />\
    <img src="styles/legend/Buswendeschleife_25_2.png" /> Eingangsbereich<br />\
    <img src="styles/legend/Buswendeschleife_25_3.png" /> Stützmauer<br />' });
var lyr_TeilaufhebungLSG_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Teilaufhebung LSG<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/TeilaufhebungLSG_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [792202.769300, 6665503.875500, 793241.230700, 6666266.755300]
        })
    });
var format_HerausnahmeLSGLSV1975_27 = new ol.format.GeoJSON();
var features_HerausnahmeLSGLSV1975_27 = format_HerausnahmeLSGLSV1975_27.readFeatures(json_HerausnahmeLSGLSV1975_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HerausnahmeLSGLSV1975_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HerausnahmeLSGLSV1975_27.addFeatures(features_HerausnahmeLSGLSV1975_27);
var lyr_HerausnahmeLSGLSV1975_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HerausnahmeLSGLSV1975_27, 
                style: style_HerausnahmeLSGLSV1975_27,
                popuplayertitle: 'Herausnahme LSG (LSV 1975)',
                interactive: true,
                title: '<img src="styles/legend/HerausnahmeLSGLSV1975_27.png" /> Herausnahme LSG (LSV 1975)'
            });
var lyr_SBStrfallschutz_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Störfallschutz<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBStrfallschutz_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [788501.783500, 6662597.845000, 794639.013700, 6666920.507100]
        })
    });
var lyr_SBSttzen_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Stützen<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBSttzen_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790950.993800, 6663303.284300, 791944.195900, 6664003.518300]
        })
    });
var lyr_SBDenkmalbereichssatzung_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Denkmalbereichssatzung<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBDenkmalbereichssatzung_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790301.456400, 6662815.926900, 792302.763100, 6664801.675100]
        })
    });
var lyr_SBVariantenprfung_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Variantenprüfung<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBVariantenprfung_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790688.722000, 6663372.307600, 792674.782400, 6664192.112000]
        })
    });
var lyr_Geltungsbereich_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Geltungsbereich_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790860.832300, 6663083.347500, 792732.654200, 6664261.032900]
        })
    });
var lyr_SBLageplan_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'SB-Lageplan<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SBLageplan_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790890.895200, 6663037.499800, 792748.625600, 6664428.472300]
        })
    });
var lyr_Entwsserungsflchen_34 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Entwsserungsflchen_34, 0]);
var lyr_Haltungen_35 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Haltungen_35, 0]);
var lyr_Schchte_36 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Schchte_36, 0]);
var lyr_Geltungsbereich_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Geltungsbereich_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790849.497900, 6663074.831600, 792751.115300, 6664471.222300]
        })
    });
var lyr_Planteil4_38 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil4_38.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790773.990600, 6661839.778600, 794062.668500, 6664318.437300]
        })
    });
var lyr_Planteil3_39 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil3_39.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791955.206400, 6663344.674200, 792775.364000, 6663972.607400]
        })
    });
var lyr_Planteil2_40 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil2_40.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791361.396500, 6663186.351300, 792183.941700, 6663805.521700]
        })
    });
var lyr_Planteil1_41 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Planteil 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Planteil1_41.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790912.183500, 6663492.525200, 791733.025100, 6664093.437300]
        })
    });
var lyr_BefreiungSeilbahn_42 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Befreiung Seilbahn<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BefreiungSeilbahn_42.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791711.769200, 6663406.933100, 792861.047000, 6664182.335300]
        })
    });
var format_BefreiungSeilbahnShape_43 = new ol.format.GeoJSON();
var features_BefreiungSeilbahnShape_43 = format_BefreiungSeilbahnShape_43.readFeatures(json_BefreiungSeilbahnShape_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BefreiungSeilbahnShape_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BefreiungSeilbahnShape_43.addFeatures(features_BefreiungSeilbahnShape_43);
var lyr_BefreiungSeilbahnShape_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BefreiungSeilbahnShape_43, 
                style: style_BefreiungSeilbahnShape_43,
                popuplayertitle: 'Befreiung Seilbahn Shape',
                interactive: true,
                title: '<img src="styles/legend/BefreiungSeilbahnShape_43.png" /> Befreiung Seilbahn Shape'
            });
var format_Seilbahn_44 = new ol.format.GeoJSON();
var features_Seilbahn_44 = format_Seilbahn_44.readFeatures(json_Seilbahn_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Seilbahn_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Seilbahn_44.addFeatures(features_Seilbahn_44);
var lyr_Seilbahn_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Seilbahn_44, 
                style: style_Seilbahn_44,
                popuplayertitle: 'Seilbahn',
                interactive: true,
                title: '<img src="styles/legend/Seilbahn_44.png" /> Seilbahn'
            });
var lyr_FaunaNachweise_45 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fauna - Nachweise<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FaunaNachweise_45.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791034.377900, 6663347.342500, 792717.172100, 6664563.507400]
        })
    });
var lyr_FledertiereKnigshhe_46 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fledertiere - Königshöhe<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/FledertiereKnigshhe_46.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791350.017400, 6663950.738600, 793033.038200, 6665169.178900]
        })
    });
var lyr_Fledertiere_47 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fledertiere<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fledertiere_47.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791042.627000, 6663393.558800, 792724.502600, 6664610.022300]
        })
    });
var lyr_HhlenbumeHorstbume_48 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Höhlenbäume - Horstbäume<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/HhlenbumeHorstbume_48.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791052.102900, 6663402.430500, 792711.274000, 6664573.532000]
        })
    });
var lyr_LuftleitbahnenHitzeGutachten2019_49 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LuftleitbahnenHitzeGutachten2019_49, 0]);
var lyr_KlimarelevanteFreiflchenHitzeGutachten2019_50 = new ol.layer.Tile({
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
              wms_layers.push([lyr_KlimarelevanteFreiflchenHitzeGutachten2019_50, 0]);
var lyr_HitzeinselnSzenario2050Gutachten2019_51 = new ol.layer.Tile({
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
              wms_layers.push([lyr_HitzeinselnSzenario2050Gutachten2019_51, 0]);
var lyr_HitzeinselnIstZustandGutachten2019_52 = new ol.layer.Tile({
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
              wms_layers.push([lyr_HitzeinselnIstZustandGutachten2019_52, 0]);
var lyr_HitzeinselnstarkIstZustandGutachten2019_53 = new ol.layer.Tile({
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
              wms_layers.push([lyr_HitzeinselnstarkIstZustandGutachten2019_53, 0]);
var lyr_Klimafunktionskarte_54 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Klimafunktionskarte_54, 0]);
var lyr_PlanhinweiskarteKlima_55 = new ol.layer.Tile({
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
              wms_layers.push([lyr_PlanhinweiskarteKlima_55, 0]);
var lyr_LandschaftsplneFestsetzungstexte_56 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplneFestsetzungstexte_56, 0]);
var lyr_LandschaftsplanWestFestsetzungskarte_57 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanWestFestsetzungskarte_57, 0]);
var lyr_LandschaftsplanWestEntwicklungskarte_58 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanWestEntwicklungskarte_58, 0]);
var lyr_LandschaftsplanOstFestsetzungskarte_59 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanOstFestsetzungskarte_59, 0]);
var lyr_LandschaftsplanOstEntwicklungskarte_60 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanOstEntwicklungskarte_60, 0]);
var lyr_LandschaftsplanNordFestsetzungskarte_61 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanNordFestsetzungskarte_61, 0]);
var lyr_LandschaftsplanNordEntwicklungskarte_62 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanNordEntwicklungskarte_62, 0]);
var lyr_LandschaftsplanGelpeFestsetzungskarte_63 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanGelpeFestsetzungskarte_63, 0]);
var lyr_LandschaftsplanGelpeEntwicklungskarte_64 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanGelpeEntwicklungskarte_64, 0]);
var lyr_LandschaftsundNaturschutz_65 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsundNaturschutz_65, 0]);
var lyr_BdenalsLebensraum_66 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BdenalsLebensraum_66, 0]);
var lyr_BdenfrdasKlima_67 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BdenfrdasKlima_67, 0]);
var lyr_BdenundWasserhaushalt_68 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BdenundWasserhaushalt_68, 0]);
var lyr_GesamtbewertungderBodenfunktionen_69 = new ol.layer.Tile({
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
              wms_layers.push([lyr_GesamtbewertungderBodenfunktionen_69, 0]);
var lyr_EinzelbaumKronenumringe2025twin4tree_70 = new ol.layer.Tile({
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
              wms_layers.push([lyr_EinzelbaumKronenumringe2025twin4tree_70, 0]);
var lyr_EinzelbaumKronenumringetwin4tree_71 = new ol.layer.Tile({
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
              wms_layers.push([lyr_EinzelbaumKronenumringetwin4tree_71, 0]);
var lyr_EinzelbaumStammpositionen2025twin4tree_72 = new ol.layer.Tile({
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
              wms_layers.push([lyr_EinzelbaumStammpositionen2025twin4tree_72, 0]);
var lyr_EinzelbaumStammpositionentwin4tree_73 = new ol.layer.Tile({
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
              wms_layers.push([lyr_EinzelbaumStammpositionentwin4tree_73, 0]);
var lyr_EinzelbaumBaumartentwin4tree_74 = new ol.layer.Tile({
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
              wms_layers.push([lyr_EinzelbaumBaumartentwin4tree_74, 0]);
var lyr_BaumdateistdtischeEinzelbume_75 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BaumdateistdtischeEinzelbume_75, 0]);
var lyr_Naturdenkmler_76 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Naturdenkmler_76, 0]);
var lyr_FNPnderungsverfahrenrechtsverbindlich_77 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnderungsverfahrenrechtsverbindlich_77, 0]);
var lyr_FNPnderungsverfahrenimVerfahren_78 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnderungsverfahrenimVerfahren_78, 0]);
var lyr_FNPnderungsverfahrenalle_79 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnderungsverfahrenalle_79, 0]);
var lyr_FNPArbeitskarteaktualisiertXplan_80 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPArbeitskarteaktualisiertXplan_80, 0]);
var lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_81 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_81, 0]);
var lyr_FNP2005Rechtsplan_82 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNP2005Rechtsplan_82, 0]);
var lyr_FNP2005_83 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNP2005_83, 0]);
var lyr_BPlanVerfahrenrechtsverbindlich_84 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BPlanVerfahrenrechtsverbindlich_84, 0]);
var lyr_BPlanVerfahrenimVerfahren_85 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BPlanVerfahrenimVerfahren_85, 0]);
var lyr_Talachse_86 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Talachse_86, 0]);
var lyr_FlchenanGrnanlagen_87 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FlchenanGrnanlagen_87, 0]);
var lyr_BedeutsameTeilrume_88 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BedeutsameTeilrume_88, 0]);
var lyr_Denkmalbereichssatzungenrechtsverbindlich_89 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Denkmalbereichssatzungenrechtsverbindlich_89, 0]);
var lyr_Kleingrten_90 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Kleingrten_90, 0]);
var lyr_Gewerbelrm2022DayEveningNight_91 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Gewerbelrm2022DayEveningNight_91, 0]);
var lyr_Gewerbelrm2022Night_92 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Gewerbelrm2022Night_92, 0]);
var lyr_VerkehrslrmBahn2022DayEveningNight_93 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerkehrslrmBahn2022DayEveningNight_93, 0]);
var lyr_VerkehrslrmBahn2022Night_94 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerkehrslrmBahn2022Night_94, 0]);
var lyr_VerkehrslrmSchwebebahn2022DayEveningNight_95 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerkehrslrmSchwebebahn2022DayEveningNight_95, 0]);
var lyr_VerkehrslrmSchwebebahnStrae2022Night_96 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerkehrslrmSchwebebahnStrae2022Night_96, 0]);
var lyr_VerkehrslrmStrae2022DayEveningNight_97 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerkehrslrmStrae2022DayEveningNight_97, 0]);
var lyr_VerkehrslrmStrae2022Night_98 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerkehrslrmStrae2022Night_98, 0]);
var lyr_Landschaftsschutzgebiete_99 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Landschaftsschutzgebiete_99, 0]);
var lyr_FFHGebiete_100 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FFHGebiete_100, 0]);
var lyr_Naturschutzgebiete_101 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Naturschutzgebiete_101, 0]);
var lyr_BiotopkatasterFlche_102 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BiotopkatasterFlche_102, 0]);
var lyr_BiotoptypenFlche_103 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BiotoptypenFlche_103, 0]);
var format_Biotopverbundflaechen_104 = new ol.format.GeoJSON();
var features_Biotopverbundflaechen_104 = format_Biotopverbundflaechen_104.readFeatures(json_Biotopverbundflaechen_104, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Biotopverbundflaechen_104 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Biotopverbundflaechen_104.addFeatures(features_Biotopverbundflaechen_104);
var lyr_Biotopverbundflaechen_104 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Biotopverbundflaechen_104, 
                style: style_Biotopverbundflaechen_104,
                popuplayertitle: 'Biotopverbundflaechen',
                interactive: true,
    title: 'Biotopverbundflaechen<br />\
    <img src="styles/legend/Biotopverbundflaechen_104_0.png" /> besondere Bedeutung<br />\
    <img src="styles/legend/Biotopverbundflaechen_104_1.png" /> herausragende Bedeutung<br />' });
var lyr_VerordnungersetzendeVertragsflche_105 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerordnungersetzendeVertragsflche_105, 0]);
var lyr_BereichefrdenSchutzderNatur_106 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BereichefrdenSchutzderNatur_106, 0]);
var lyr_geschtzteBiotopeFlche_107 = new ol.layer.Tile({
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
              wms_layers.push([lyr_geschtzteBiotopeFlche_107, 0]);
var format_FlurstimEigentumderStadtWuppertal2024_09_02_108 = new ol.format.GeoJSON();
var features_FlurstimEigentumderStadtWuppertal2024_09_02_108 = format_FlurstimEigentumderStadtWuppertal2024_09_02_108.readFeatures(json_FlurstimEigentumderStadtWuppertal2024_09_02_108, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_108 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_108.addFeatures(features_FlurstimEigentumderStadtWuppertal2024_09_02_108);
var lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_108, 
                style: style_FlurstimEigentumderStadtWuppertal2024_09_02_108,
                popuplayertitle: 'Flurst. im Eigentum der Stadt Wuppertal (2024_09_02)',
                interactive: true,
                title: '<img src="styles/legend/FlurstimEigentumderStadtWuppertal2024_09_02_108.png" /> Flurst. im Eigentum der Stadt Wuppertal (2024_09_02)'
            });
var group_StdtEigentum = new ol.layer.Group({
                                layers: [lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108,],
                                fold: 'close',
                                title: 'Städt. Eigentum'});
var group_Linfos = new ol.layer.Group({
                                layers: [lyr_Landschaftsschutzgebiete_99,lyr_FFHGebiete_100,lyr_Naturschutzgebiete_101,lyr_BiotopkatasterFlche_102,lyr_BiotoptypenFlche_103,lyr_Biotopverbundflaechen_104,lyr_VerordnungersetzendeVertragsflche_105,lyr_BereichefrdenSchutzderNatur_106,lyr_geschtzteBiotopeFlche_107,],
                                fold: 'close',
                                title: 'Linfos'});
var group_WMSWuppertalLrmDenkmalGrnanlagen = new ol.layer.Group({
                                layers: [lyr_Talachse_86,lyr_FlchenanGrnanlagen_87,lyr_BedeutsameTeilrume_88,lyr_Denkmalbereichssatzungenrechtsverbindlich_89,lyr_Kleingrten_90,lyr_Gewerbelrm2022DayEveningNight_91,lyr_Gewerbelrm2022Night_92,lyr_VerkehrslrmBahn2022DayEveningNight_93,lyr_VerkehrslrmBahn2022Night_94,lyr_VerkehrslrmSchwebebahn2022DayEveningNight_95,lyr_VerkehrslrmSchwebebahnStrae2022Night_96,lyr_VerkehrslrmStrae2022DayEveningNight_97,lyr_VerkehrslrmStrae2022Night_98,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Lärm, Denkmal, Grünanlagen'});
var group_WMSWuppertalPlanung = new ol.layer.Group({
                                layers: [lyr_FNPnderungsverfahrenrechtsverbindlich_77,lyr_FNPnderungsverfahrenimVerfahren_78,lyr_FNPnderungsverfahrenalle_79,lyr_FNPArbeitskarteaktualisiertXplan_80,lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_81,lyr_FNP2005Rechtsplan_82,lyr_FNP2005_83,lyr_BPlanVerfahrenrechtsverbindlich_84,lyr_BPlanVerfahrenimVerfahren_85,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Planung'});
var group_WMSWuppertalBumeBoden = new ol.layer.Group({
                                layers: [lyr_BdenalsLebensraum_66,lyr_BdenfrdasKlima_67,lyr_BdenundWasserhaushalt_68,lyr_GesamtbewertungderBodenfunktionen_69,lyr_EinzelbaumKronenumringe2025twin4tree_70,lyr_EinzelbaumKronenumringetwin4tree_71,lyr_EinzelbaumStammpositionen2025twin4tree_72,lyr_EinzelbaumStammpositionentwin4tree_73,lyr_EinzelbaumBaumartentwin4tree_74,lyr_BaumdateistdtischeEinzelbume_75,lyr_Naturdenkmler_76,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Bäume & Boden'});
var group_WMSWuppertalLandschaftsplne = new ol.layer.Group({
                                layers: [lyr_LandschaftsplneFestsetzungstexte_56,lyr_LandschaftsplanWestFestsetzungskarte_57,lyr_LandschaftsplanWestEntwicklungskarte_58,lyr_LandschaftsplanOstFestsetzungskarte_59,lyr_LandschaftsplanOstEntwicklungskarte_60,lyr_LandschaftsplanNordFestsetzungskarte_61,lyr_LandschaftsplanNordEntwicklungskarte_62,lyr_LandschaftsplanGelpeFestsetzungskarte_63,lyr_LandschaftsplanGelpeEntwicklungskarte_64,lyr_LandschaftsundNaturschutz_65,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Landschaftspläne'});
var group_WMSWuppertalKlima = new ol.layer.Group({
                                layers: [lyr_LuftleitbahnenHitzeGutachten2019_49,lyr_KlimarelevanteFreiflchenHitzeGutachten2019_50,lyr_HitzeinselnSzenario2050Gutachten2019_51,lyr_HitzeinselnIstZustandGutachten2019_52,lyr_HitzeinselnstarkIstZustandGutachten2019_53,lyr_Klimafunktionskarte_54,lyr_PlanhinweiskarteKlima_55,],
                                fold: 'close',
                                title: 'WMS Wuppertal - Klima'});
var group_BSMW2023kolErsteinsch = new ol.layer.Group({
                                layers: [lyr_FaunaNachweise_45,lyr_FledertiereKnigshhe_46,lyr_Fledertiere_47,lyr_HhlenbumeHorstbume_48,],
                                fold: 'open',
                                title: 'BSMW 2023 - Ökol. Ersteinsch.'});
var group_BPlan1257SeilbahnVerffBeschluss = new ol.layer.Group({
                                layers: [lyr_Geltungsbereich_37,lyr_Planteil4_38,lyr_Planteil3_39,lyr_Planteil2_40,lyr_Planteil1_41,lyr_BefreiungSeilbahn_42,lyr_BefreiungSeilbahnShape_43,lyr_Seilbahn_44,],
                                fold: 'open',
                                title: 'BPlan 1257 - Seilbahn - Veröff. Beschluss'});
var group_BPlan1257SeilbahnAufstBeschluss = new ol.layer.Group({
                                layers: [lyr_SBStrfallschutz_28,lyr_SBSttzen_29,lyr_SBDenkmalbereichssatzung_30,lyr_SBVariantenprfung_31,lyr_Geltungsbereich_32,lyr_SBLageplan_33,lyr_Entwsserungsflchen_34,lyr_Haltungen_35,lyr_Schchte_36,],
                                fold: 'close',
                                title: 'BPlan 1257 - Seilbahn - Aufst. Beschluss'});
var group_BPlan1294HngebrckeVerffBeschluss = new ol.layer.Group({
                                layers: [lyr_Geltungsbereich_18,lyr_Planteil3_19,lyr_Planteil2_20,lyr_Planteil1_21,lyr_Buswendeschleife3unten_22,lyr_Buswendeschleife2oben_23,lyr_Buswendeschleife1_24,lyr_Buswendeschleife_25,lyr_TeilaufhebungLSG_26,lyr_HerausnahmeLSGLSV1975_27,],
                                fold: 'open',
                                title: 'BPlan 1294 - Hängebrücke - Veröff. Beschluss'});
var group_WeitereBUGAPlne = new ol.layer.Group({
                                layers: [lyr_1292BUGA1Tesche_16,lyr_1212BUGA5Lokschuppenareal_17,],
                                fold: 'close',
                                title: 'Weitere BUGA Pläne'});
var group_Kompensation = new ol.layer.Group({
                                layers: [lyr_Kompensationsflchenverffentlicht_14,lyr_KompensatationnachArt_15,],
                                fold: 'close',
                                title: 'Kompensation'});
var group_Gewerbe28RPDnderung34ha = new ol.layer.Group({
                                layers: [lyr_DornerWeg_10,lyr_LichtscheidSd_11,lyr_SchllerWest_12,lyr_Scniedestr_13,],
                                fold: 'close',
                                title: 'Gewerbe - 28. RPD Änderung (34ha)'});
var group_Verwaltungsgrenzen = new ol.layer.Group({
                                layers: [lyr_WuppertalBezirke_7,lyr_WuppertalStadtgebiet_8,lyr_RegierungsbezirkDsseldorf_9,],
                                fold: 'close',
                                title: 'Verwaltungsgrenzen'});
var group_Basiskarten = new ol.layer.Group({
                                layers: [lyr_OSM_0,lyr_OpenStreetMap_1,lyr_OpenTopoMap_2,lyr_Gmaps_3,lyr_AmtlicheBasiskartegrau_4,lyr_WuppertalerOrthofoto2024_5,lyr_Reliefschummerung_6,],
                                fold: 'open',
                                title: 'Basiskarten'});

lyr_OSM_0.setVisible(false);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenTopoMap_2.setVisible(false);lyr_Gmaps_3.setVisible(false);lyr_AmtlicheBasiskartegrau_4.setVisible(false);lyr_WuppertalerOrthofoto2024_5.setVisible(false);lyr_Reliefschummerung_6.setVisible(false);lyr_WuppertalBezirke_7.setVisible(false);lyr_WuppertalStadtgebiet_8.setVisible(true);lyr_RegierungsbezirkDsseldorf_9.setVisible(true);lyr_DornerWeg_10.setVisible(true);lyr_LichtscheidSd_11.setVisible(true);lyr_SchllerWest_12.setVisible(true);lyr_Scniedestr_13.setVisible(true);lyr_Kompensationsflchenverffentlicht_14.setVisible(false);lyr_KompensatationnachArt_15.setVisible(false);lyr_1292BUGA1Tesche_16.setVisible(true);lyr_1212BUGA5Lokschuppenareal_17.setVisible(true);lyr_Geltungsbereich_18.setVisible(true);lyr_Planteil3_19.setVisible(false);lyr_Planteil2_20.setVisible(false);lyr_Planteil1_21.setVisible(false);lyr_Buswendeschleife3unten_22.setVisible(false);lyr_Buswendeschleife2oben_23.setVisible(false);lyr_Buswendeschleife1_24.setVisible(false);lyr_Buswendeschleife_25.setVisible(true);lyr_TeilaufhebungLSG_26.setVisible(false);lyr_HerausnahmeLSGLSV1975_27.setVisible(true);lyr_SBStrfallschutz_28.setVisible(false);lyr_SBSttzen_29.setVisible(false);lyr_SBDenkmalbereichssatzung_30.setVisible(false);lyr_SBVariantenprfung_31.setVisible(false);lyr_Geltungsbereich_32.setVisible(false);lyr_SBLageplan_33.setVisible(false);lyr_Entwsserungsflchen_34.setVisible(false);lyr_Haltungen_35.setVisible(false);lyr_Schchte_36.setVisible(false);lyr_Geltungsbereich_37.setVisible(true);lyr_Planteil4_38.setVisible(false);lyr_Planteil3_39.setVisible(false);lyr_Planteil2_40.setVisible(false);lyr_Planteil1_41.setVisible(false);lyr_BefreiungSeilbahn_42.setVisible(false);lyr_BefreiungSeilbahnShape_43.setVisible(true);lyr_Seilbahn_44.setVisible(true);lyr_FaunaNachweise_45.setVisible(false);lyr_FledertiereKnigshhe_46.setVisible(false);lyr_Fledertiere_47.setVisible(false);lyr_HhlenbumeHorstbume_48.setVisible(false);lyr_LuftleitbahnenHitzeGutachten2019_49.setVisible(false);lyr_KlimarelevanteFreiflchenHitzeGutachten2019_50.setVisible(false);lyr_HitzeinselnSzenario2050Gutachten2019_51.setVisible(false);lyr_HitzeinselnIstZustandGutachten2019_52.setVisible(false);lyr_HitzeinselnstarkIstZustandGutachten2019_53.setVisible(false);lyr_Klimafunktionskarte_54.setVisible(false);lyr_PlanhinweiskarteKlima_55.setVisible(false);lyr_LandschaftsplneFestsetzungstexte_56.setVisible(false);lyr_LandschaftsplanWestFestsetzungskarte_57.setVisible(false);lyr_LandschaftsplanWestEntwicklungskarte_58.setVisible(false);lyr_LandschaftsplanOstFestsetzungskarte_59.setVisible(false);lyr_LandschaftsplanOstEntwicklungskarte_60.setVisible(false);lyr_LandschaftsplanNordFestsetzungskarte_61.setVisible(false);lyr_LandschaftsplanNordEntwicklungskarte_62.setVisible(false);lyr_LandschaftsplanGelpeFestsetzungskarte_63.setVisible(false);lyr_LandschaftsplanGelpeEntwicklungskarte_64.setVisible(false);lyr_LandschaftsundNaturschutz_65.setVisible(false);lyr_BdenalsLebensraum_66.setVisible(false);lyr_BdenfrdasKlima_67.setVisible(false);lyr_BdenundWasserhaushalt_68.setVisible(false);lyr_GesamtbewertungderBodenfunktionen_69.setVisible(false);lyr_EinzelbaumKronenumringe2025twin4tree_70.setVisible(false);lyr_EinzelbaumKronenumringetwin4tree_71.setVisible(false);lyr_EinzelbaumStammpositionen2025twin4tree_72.setVisible(false);lyr_EinzelbaumStammpositionentwin4tree_73.setVisible(false);lyr_EinzelbaumBaumartentwin4tree_74.setVisible(false);lyr_BaumdateistdtischeEinzelbume_75.setVisible(false);lyr_Naturdenkmler_76.setVisible(false);lyr_FNPnderungsverfahrenrechtsverbindlich_77.setVisible(false);lyr_FNPnderungsverfahrenimVerfahren_78.setVisible(false);lyr_FNPnderungsverfahrenalle_79.setVisible(false);lyr_FNPArbeitskarteaktualisiertXplan_80.setVisible(false);lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_81.setVisible(false);lyr_FNP2005Rechtsplan_82.setVisible(false);lyr_FNP2005_83.setVisible(false);lyr_BPlanVerfahrenrechtsverbindlich_84.setVisible(false);lyr_BPlanVerfahrenimVerfahren_85.setVisible(false);lyr_Talachse_86.setVisible(false);lyr_FlchenanGrnanlagen_87.setVisible(false);lyr_BedeutsameTeilrume_88.setVisible(false);lyr_Denkmalbereichssatzungenrechtsverbindlich_89.setVisible(false);lyr_Kleingrten_90.setVisible(false);lyr_Gewerbelrm2022DayEveningNight_91.setVisible(false);lyr_Gewerbelrm2022Night_92.setVisible(false);lyr_VerkehrslrmBahn2022DayEveningNight_93.setVisible(false);lyr_VerkehrslrmBahn2022Night_94.setVisible(false);lyr_VerkehrslrmSchwebebahn2022DayEveningNight_95.setVisible(false);lyr_VerkehrslrmSchwebebahnStrae2022Night_96.setVisible(false);lyr_VerkehrslrmStrae2022DayEveningNight_97.setVisible(false);lyr_VerkehrslrmStrae2022Night_98.setVisible(false);lyr_Landschaftsschutzgebiete_99.setVisible(false);lyr_FFHGebiete_100.setVisible(false);lyr_Naturschutzgebiete_101.setVisible(false);lyr_BiotopkatasterFlche_102.setVisible(false);lyr_BiotoptypenFlche_103.setVisible(false);lyr_Biotopverbundflaechen_104.setVisible(true);lyr_VerordnungersetzendeVertragsflche_105.setVisible(false);lyr_BereichefrdenSchutzderNatur_106.setVisible(false);lyr_geschtzteBiotopeFlche_107.setVisible(true);lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108.setVisible(false);
var layersList = [group_Basiskarten,group_Verwaltungsgrenzen,group_Gewerbe28RPDnderung34ha,group_Kompensation,group_WeitereBUGAPlne,group_BPlan1294HngebrckeVerffBeschluss,group_BPlan1257SeilbahnAufstBeschluss,group_BPlan1257SeilbahnVerffBeschluss,group_BSMW2023kolErsteinsch,group_WMSWuppertalKlima,group_WMSWuppertalLandschaftsplne,group_WMSWuppertalBumeBoden,group_WMSWuppertalPlanung,group_WMSWuppertalLrmDenkmalGrnanlagen,group_Linfos,group_StdtEigentum];
lyr_WuppertalBezirke_7.set('fieldAliases', {'fid': 'fid', 'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', 'Fläche': 'Fläche', });
lyr_WuppertalStadtgebiet_8.set('fieldAliases', {'fid': 'fid', 'STADT': 'STADT', 'FLAECHE': 'FLAECHE', 'Fläche2': 'Fläche2', });
lyr_RegierungsbezirkDsseldorf_9.set('fieldAliases', {'ART': 'ART', 'GN': 'GN', 'KN': 'KN', 'KOORD_ORI': 'KOORD_ORI', 'KOORD_GEN': 'KOORD_GEN', 'LAENGE_ORI': 'LAENGE_ORI', 'LAENGE_GEN': 'LAENGE_GEN', 'STAND': 'STAND', });
lyr_DornerWeg_10.set('fieldAliases', {'id': 'id', 'Nsme': 'Nsme', });
lyr_LichtscheidSd_11.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_SchllerWest_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Scniedestr_13.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_KompensatationnachArt_15.set('fieldAliases', {'id': 'id', 'name': 'name', 'flaeche': 'flaeche', 'bezeichnun': 'bezeichnun', 'ziel1': 'ziel1', 'ziel2': 'ziel2', 'ziel3': 'ziel3', 'ziel4': 'ziel4', 'ziel5': 'ziel5', 'ziel6': 'ziel6', 'ziel7': 'ziel7', 'ziel8': 'ziel8', 'ziel9': 'ziel9', 'ziel10': 'ziel10', 'zielbio': 'zielbio', });
lyr_Buswendeschleife_25.set('fieldAliases', {'fid': 'fid', 'Bezeichnung': 'Bezeichnung', });
lyr_HerausnahmeLSGLSV1975_27.set('fieldAliases', {'fid': 'fid', 'Beschreibung': 'Beschreibung', });
lyr_BefreiungSeilbahnShape_43.set('fieldAliases', {'fid': 'fid', });
lyr_Seilbahn_44.set('fieldAliases', {'fid': 'fid', 'Bezeichnung': 'Bezeichnung', 'GH': 'GH', });
lyr_Biotopverbundflaechen_104.set('fieldAliases', {'LOCALID': 'LOCALID', 'DOMAINOBJE': 'DOMAINOBJE', 'BEDEUTUNG1': 'BEDEUTUNG1', 'LINK': 'LINK', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108.set('fieldAliases', {'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', });
lyr_WuppertalBezirke_7.set('fieldImages', {'fid': 'TextEdit', 'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche': 'TextEdit', });
lyr_WuppertalStadtgebiet_8.set('fieldImages', {'fid': 'TextEdit', 'STADT': 'TextEdit', 'FLAECHE': 'TextEdit', 'Fläche2': 'TextEdit', });
lyr_RegierungsbezirkDsseldorf_9.set('fieldImages', {'ART': 'TextEdit', 'GN': 'TextEdit', 'KN': 'TextEdit', 'KOORD_ORI': 'TextEdit', 'KOORD_GEN': 'TextEdit', 'LAENGE_ORI': 'TextEdit', 'LAENGE_GEN': 'TextEdit', 'STAND': 'DateTime', });
lyr_DornerWeg_10.set('fieldImages', {'id': 'TextEdit', 'Nsme': 'TextEdit', });
lyr_LichtscheidSd_11.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_SchllerWest_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Scniedestr_13.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_KompensatationnachArt_15.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'flaeche': 'TextEdit', 'bezeichnun': 'TextEdit', 'ziel1': 'TextEdit', 'ziel2': 'TextEdit', 'ziel3': 'TextEdit', 'ziel4': 'TextEdit', 'ziel5': 'TextEdit', 'ziel6': 'TextEdit', 'ziel7': 'TextEdit', 'ziel8': 'TextEdit', 'ziel9': 'TextEdit', 'ziel10': 'TextEdit', 'zielbio': 'TextEdit', });
lyr_Buswendeschleife_25.set('fieldImages', {'fid': 'TextEdit', 'Bezeichnung': 'TextEdit', });
lyr_HerausnahmeLSGLSV1975_27.set('fieldImages', {'fid': 'TextEdit', 'Beschreibung': 'TextEdit', });
lyr_BefreiungSeilbahnShape_43.set('fieldImages', {'fid': '', });
lyr_Seilbahn_44.set('fieldImages', {'fid': 'TextEdit', 'Bezeichnung': 'TextEdit', 'GH': 'Range', });
lyr_Biotopverbundflaechen_104.set('fieldImages', {'LOCALID': 'TextEdit', 'DOMAINOBJE': 'TextEdit', 'BEDEUTUNG1': 'TextEdit', 'LINK': 'TextEdit', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108.set('fieldImages', {'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', });
lyr_WuppertalBezirke_7.set('fieldLabels', {'fid': 'header label - visible with data', 'BEZIRK': 'header label - visible with data', 'NAME': 'header label - visible with data', 'FLAECHE': 'header label - visible with data', 'Fläche': 'header label - visible with data', });
lyr_WuppertalStadtgebiet_8.set('fieldLabels', {'fid': 'header label - visible with data', 'STADT': 'header label - visible with data', 'FLAECHE': 'header label - visible with data', 'Fläche2': 'header label - visible with data', });
lyr_RegierungsbezirkDsseldorf_9.set('fieldLabels', {'ART': 'header label - visible with data', 'GN': 'header label - visible with data', 'KN': 'header label - visible with data', 'KOORD_ORI': 'header label - visible with data', 'KOORD_GEN': 'header label - visible with data', 'LAENGE_ORI': 'header label - visible with data', 'LAENGE_GEN': 'header label - visible with data', 'STAND': 'header label - visible with data', });
lyr_DornerWeg_10.set('fieldLabels', {'id': 'header label - visible with data', 'Nsme': 'header label - visible with data', });
lyr_LichtscheidSd_11.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_SchllerWest_12.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_Scniedestr_13.set('fieldLabels', {'id': 'header label - visible with data', 'Name': 'header label - visible with data', });
lyr_KompensatationnachArt_15.set('fieldLabels', {'id': 'header label - visible with data', 'name': 'header label - visible with data', 'flaeche': 'header label - visible with data', 'bezeichnun': 'header label - visible with data', 'ziel1': 'header label - visible with data', 'ziel2': 'header label - visible with data', 'ziel3': 'header label - visible with data', 'ziel4': 'header label - visible with data', 'ziel5': 'header label - visible with data', 'ziel6': 'header label - visible with data', 'ziel7': 'header label - visible with data', 'ziel8': 'header label - visible with data', 'ziel9': 'header label - visible with data', 'ziel10': 'header label - visible with data', 'zielbio': 'header label - visible with data', });
lyr_Buswendeschleife_25.set('fieldLabels', {'fid': 'header label - visible with data', 'Bezeichnung': 'inline label - visible with data', });
lyr_HerausnahmeLSGLSV1975_27.set('fieldLabels', {'fid': 'header label - visible with data', 'Beschreibung': 'header label - visible with data', });
lyr_BefreiungSeilbahnShape_43.set('fieldLabels', {'fid': 'header label - visible with data', });
lyr_Seilbahn_44.set('fieldLabels', {'fid': 'header label - visible with data', 'Bezeichnung': 'header label - visible with data', 'GH': 'header label - visible with data', });
lyr_Biotopverbundflaechen_104.set('fieldLabels', {'LOCALID': 'header label - visible with data', 'DOMAINOBJE': 'header label - visible with data', 'BEDEUTUNG1': 'header label - visible with data', 'LINK': 'header label - visible with data', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108.set('fieldLabels', {'GEM': 'header label - visible with data', 'FLUR': 'header label - visible with data', 'FLURSTZ': 'header label - visible with data', 'FLURSTN': 'header label - visible with data', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_108.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});