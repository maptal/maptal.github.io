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
var lyr_Talachse_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "talachse",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Talachse',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Talachse_1, 1]);
var lyr_FlchenanGrnanlagen_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gruen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Flächen an Grünanlagen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FlchenanGrnanlagen_2, 1]);
var lyr_ErhaltungsGestaltungssatzrechtsverbindl_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gestalt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Erhaltungs-/Gestaltungssatz. (rechtsverbindl.)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ErhaltungsGestaltungssatzrechtsverbindl_3, 1]);
var lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "gestaltn",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Erhaltungs-/Gestaltungssatz. (nicht rechtsverbindl.)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_4, 1]);
var lyr_BundesHauptverkehrsstraen_5 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadtbhstr",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bundes- Hauptverkehrsstraßen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BundesHauptverkehrsstraen_5, 1]);
var lyr_BedeutsameTeilrume_6 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "teilraeume",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bedeutsame Teilräume',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BedeutsameTeilrume_6, 1]);
var lyr_LandschaftsplanWestFestsetzungskarte_7 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanWestFestsetzungskarte_7, 1]);
var lyr_LandschaftsplanWestEntwicklungskarte_8 = new ol.layer.Tile({
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
              wms_layers.push([lyr_LandschaftsplanWestEntwicklungskarte_8, 1]);
var lyr_LandschaftsplanOstFestsetzungskarte_9 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpost:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Ost Festsetzungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanOstFestsetzungskarte_9, 1]);
var lyr_LandschaftsplanOstEntwicklungskarte_10 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpost:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Ost Entwicklungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanOstEntwicklungskarte_10, 1]);
var lyr_LandschaftsplanNordFestlegungskarte_11 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpnord:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Nord Festlegungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanNordFestlegungskarte_11, 1]);
var lyr_LandschaftsplanNordEntwicklungskarte_12 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpnord:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Nord Entwicklungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanNordEntwicklungskarte_12, 1]);
var lyr_LandschaftsplanGelpeFestsetzungskarte_13 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpgelpe:festsetzung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Gelpe Festsetzungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanGelpeFestsetzungskarte_13, 1]);
var lyr_LandschaftsplanGelpeEntwicklungskarte_14 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lpgelpe:entwicklung",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschaftsplan Gelpe Entwicklungskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsplanGelpeEntwicklungskarte_14, 1]);
var lyr_LandschaftsundNaturschutz_15 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "landschaft:lundsschutz",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Landschafts- und Naturschutz',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_LandschaftsundNaturschutz_15, 1]);
var lyr_FNPnderungsverfahrenrechtsverbindlich_16 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren-r",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (rechtsverbindlich)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenrechtsverbindlich_16, 1]);
var lyr_FNPnderungsverfahrenimVerfahren_17 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren-n",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (im Verfahren)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenimVerfahren_17, 1]);
var lyr_FNPnderungsverfahrenaufgehoben_18 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren-a",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (aufgehoben)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenaufgehoben_18, 1]);
var lyr_FNPnderungsverfahrenalle_19 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Fnpaenderungsverfahren",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Änderungsverfahren (alle)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnderungsverfahrenalle_19, 1]);
var lyr_FNPArbeitskarteaktualisiertXplan_20 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102_fnp_haupt_fl",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP-Arbeitskarte (aktualisiert) Xplan',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPArbeitskarteaktualisiertXplan_20, 1]);
var lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_21 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102:fnp_ngF",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP nicht genehmigte Flächen (nachrichtl. Übernahmen)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_21, 1]);
var lyr_FNP2005Xplanclip_22 = new ol.layer.Tile({
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
              wms_layers.push([lyr_FNP2005Xplanclip_22, 1]);
var lyr_FNP2005Xplan_23 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "r102:fnp",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'FNP 2005 Xplan',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FNP2005Xplan_23, 1]);
var lyr_Denkmalbereichssatzungenrechtsverbindlich_24 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Denkmalbereichssatzungenrechtsverbindlich_24, 1]);
var lyr_Denkmalbereichssatzungennichtrechtsverbindlich_25 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "denkmalbn",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Denkmalbereichssatzungen (nicht rechtsverbindlich)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Denkmalbereichssatzungennichtrechtsverbindlich_25, 1]);
var lyr_Bodendenkmler_26 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bodendenkmale",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bodendenkmäler',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bodendenkmler_26, 1]);
var lyr_Baudenkmler_27 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Baudenkmler_27, 1]);
var lyr_Innenbereichssatzungen_28 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "innenr",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Innenbereichssatzungen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Innenbereichssatzungen_28, 1]);
var lyr_BPlanverfahrenrechtsverbindlich_29 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bverfahren-r",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'B-Planverfahren (rechtsverbindlich)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BPlanverfahrenrechtsverbindlich_29, 1]);
var lyr_BPlanverfahrenimVerfahren_30 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/planung?version%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "bverfahren-n",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'B-Planverfahren (im Verfahren)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BPlanverfahrenimVerfahren_30, 1]);
var lyr_Gewerbelrm2022DayEveningNight_31 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:IND_RAST_DEN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Gewerbelärm 2022 (Day, Evening, Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewerbelrm2022DayEveningNight_31, 1]);
var lyr_Gewerbelrm2022Night_32 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:IND_RAST_NGT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Gewerbelärm 2022 (Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Gewerbelrm2022Night_32, 1]);
var lyr_VerkehrslrmBahn2022DayEveningNight_33 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm:LDEN_BAHN_4",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Bahn 2022 (Day, Evening, Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmBahn2022DayEveningNight_33, 1]);
var lyr_VerkehrslrmBahn2022Night_34 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm:LNIGHT_BAHN_4",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Bahn 2022 (Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmBahn2022Night_34, 1]);
var lyr_VerkehrslrmSchwebebahn2022DayEveningNight_35 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:SCS_RAST_DEN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Schwebebahn 2022 (Day, Evening, Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmSchwebebahn2022DayEveningNight_35, 1]);
var lyr_VerkehrslrmSchwebebahnStrae2022Night_36 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:SCS_RAST_NGT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Schwebebahn Straße 2022 (Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmSchwebebahnStrae2022Night_36, 1]);
var lyr_VerkehrslrmStrae2022DayEveningNight_37 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:STR_RAST_DEN",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Straße 2022 (Day, Evening, Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmStrae2022DayEveningNight_37, 1]);
var lyr_VerkehrslrmStrae2022Night_38 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "laerm2022:STR_RAST_NGT",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Verkehrslärm Straße 2022 (Night)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerkehrslrmStrae2022Night_38, 1]);
var lyr_SolarpotenzialDcherWrme_39 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "solar_zy_therm",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Solarpotenzial Dächer (Wärme)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SolarpotenzialDcherWrme_39, 1]);
var lyr_SolarpotenzialDcherStrom_40 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "solar_zy_photo",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Solarpotenzial Dächer (Strom)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SolarpotenzialDcherStrom_40, 1]);
var lyr_JahresSolarpotenzialflchendeckend_41 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "solar_year",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Jahres-Solarpotenzial (flächendeckend)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_JahresSolarpotenzialflchendeckend_41, 1]);
var lyr_Dachflchenumringe_42 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "solar_umring",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Dachflächenumringe',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Dachflchenumringe_42, 1]);
var lyr_Naturdenkmale_43 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Naturdenkmale_43, 1]);
var lyr_Kompensationsflchenverffentlicht_44 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "stadt:kompensationoe",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Kompensationsflächen (veröffentlicht)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kompensationsflchenverffentlicht_44, 1]);
var lyr_UmweltzonenTopicMaps_45 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "uwz",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Umweltzonen (TopicMaps)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_UmweltzonenTopicMaps_45, 1]);
var lyr_Umweltzonen_46 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "umweltzonen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Umweltzonen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Umweltzonen_46, 1]);
var lyr_Luftmessstationen_47 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "no2",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Luftmessstationen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Luftmessstationen_47, 1]);
var lyr_Luftgte2000_48 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lugi2000",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Luftgüte 2000',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Luftgte2000_48, 1]);
var lyr_Luftgte1987_49 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "lugi1987",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Luftgüte 1987',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Luftgte1987_49, 1]);
var lyr_WrmebildTagsituation_50 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Tagsituation",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Wärmebild Tagsituation',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WrmebildTagsituation_50, 1]);
var lyr_WrmebildNachtsituation_51 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Nachtsituation",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Wärmebild Nachtsituation',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WrmebildNachtsituation_51, 1]);
var lyr_PlanhinweiskarteKlima_52 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Planhinweise",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Planhinweiskarte Klima',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_PlanhinweiskarteKlima_52, 1]);
var lyr_Klimafunktionskarte_53 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Klimafunktion",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Klimafunktionskarte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Klimafunktionskarte_53, 1]);
var lyr_Luftleitbahnen_54 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Frischluftschneisen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Luftleitbahnen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Luftleitbahnen_54, 1]);
var lyr_HitzeinselnIstZustand_55 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln Ist-Zustand',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnIstZustand_55, 1]);
var lyr_HitzeinselnAusweitungZukunftsszenario2050_56 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-2050",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln Ausweitung Zukunftsszenario 2050',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnAusweitungZukunftsszenario2050_56, 1]);
var lyr_HitzeinselnstarkIstZustand_57 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Hitze-Stark-Ist",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hitzeinseln (stark) Ist-Zustand',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_HitzeinselnstarkIstZustand_57, 1]);
var lyr_Freiflchen_58 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Freiflaechen",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Freiflächen',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Freiflchen_58, 1]);
var lyr_StarkregenSRI7maxWassertiefe_59 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:100md",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 7 max. Wassertiefe',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI7maxWassertiefe_59, 1]);
var lyr_StarkregenSRI7Flierichtung_60 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:100d",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 7 Fließrichtung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI7Flierichtung_60, 1]);
var lyr_StarkregenSRI7Fliegeschwindigkeit_61 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:100v",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 7 Fließgeschwindigkeit',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI7Fliegeschwindigkeit_61, 1]);
var lyr_StarkregenSRI10maxWassertiefe_62 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:90md",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 10 max. Wassertiefe',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI10maxWassertiefe_62, 1]);
var lyr_StarkregenSRI10Flierichtung_63 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:90d",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 10 Fließrichtung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI10Flierichtung_63, 1]);
var lyr_StarkregenSRI10Fliegeschwindigkeit_64 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:90v",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Starkregen SRI 10 Fließgeschwindigkeit',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StarkregenSRI10Fliegeschwindigkeit_64, 1]);
var lyr_Regen29052018SRI11maxWassertiefe_65 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:SRmd",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Regen 29.05.2018 (SRI 11) max. Wassertiefe',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Regen29052018SRI11maxWassertiefe_65, 1]);
var lyr_Regen29052018SRI11Flierichtung_66 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:SRd",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Regen 29.05.2018 (SRI 11) Fließrichtung',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Regen29052018SRI11Flierichtung_66, 1]);
var lyr_Regen29052018SRI11Fliegeschwindigkeit_67 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "R102:SRv",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Regen 29.05.2018 (SRI 11) Fließgeschwindigkeit',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Regen29052018SRI11Fliegeschwindigkeit_67, 1]);
var lyr_berschwemmungsgebietevorlgesichert_68 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "uschwemm_vor",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Überschwemmungsgebiete (vorl. gesichert)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_berschwemmungsgebietevorlgesichert_68, 1]);
var lyr_berschwemmungsgebietefestgesetzt_69 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "uschwemm_fest",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Überschwemmungsgebiete (festgesetzt)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_berschwemmungsgebietefestgesetzt_69, 1]);
var lyr_berschwemmungsgebieteermittelt_70 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "uschwemm_ermittelt",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Überschwemmungsgebiete (ermittelt)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_berschwemmungsgebieteermittelt_70, 1]);
var lyr_RadonPotenzialkarteBodenschutz_71 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "boden:radon",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Radon Potenzialkarte (Bodenschutz)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_RadonPotenzialkarteBodenschutz_71, 1]);
var lyr_Kleingrten_72 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "kga",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Kleingärten',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Kleingrten_72, 1]);
var lyr_Bume_73 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.wuppertal.de/umwelt?VERSION%3D1.1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "baeume",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Bäume',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Bume_73, 1]);
var lyr_VegetationsaufnahmenFlche_74 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "Vegetationsaufnahmen_Flaeche",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Vegetationsaufnahmen (Fläche)',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VegetationsaufnahmenFlche_74, 1]);
var lyr_Landschaftsschutzgebiete_75 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Landschaftsschutzgebiete_75, 1]);
var lyr_FFHGebiete_76 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "FFH-Gebiete",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'FFH-Gebiete',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_FFHGebiete_76, 1]);
var lyr_Naturschutzgebiete_77 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Naturschutzgebiete_77, 1]);
var lyr_BiotopkatasterFlche_78 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BiotopkatasterFlche_78, 1]);
var lyr_BiotoptypenFlche_79 = new ol.layer.Tile({
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
              wms_layers.push([lyr_BiotoptypenFlche_79, 1]);
var lyr_VerbundflchenherausragendebesondereBedeutung_80 = new ol.layer.Tile({
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
              wms_layers.push([lyr_VerbundflchenherausragendebesondereBedeutung_80, 1]);
var lyr_VerordnungersetzendeVertragsflche_81 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "SCH_V",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Verordnung ersetzende Vertragsfläche',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_VerordnungersetzendeVertragsflche_81, 1]);
var lyr_BereichefrdenSchutzderNatur_82 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://www.wms.nrw.de/umwelt/linfos",
                              attributions: ' ',
                              params: {
                                "LAYERS": "BSN",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Bereiche für den Schutz der Natur',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_BereichefrdenSchutzderNatur_82, 1]);
var lyr_geschtzteBiotopeFlche_83 = new ol.layer.Tile({
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
              wms_layers.push([lyr_geschtzteBiotopeFlche_83, 1]);
var lyr_SonderbauwerkeWupperverband_84 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Siedlungswasserwirtschaft",
                              attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Sonderbauwerke / Wupperverband',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SonderbauwerkeWupperverband_84, 1]);
var lyr_StationierungWVkmund100mPunkte_85 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "6",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Stationierung WV / km- und 100-m-Punkte',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_StationierungWVkmund100mPunkte_85, 1]);
var lyr_GewEZGab1kmGewsserlnge_86 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "4",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Gew.-EZG ab 1 km Gewässerlänge',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_GewEZGab1kmGewsserlnge_86, 1]);
var lyr_TalsperrenEZG_87 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "2",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Talsperren-EZG',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TalsperrenEZG_87, 1]);
var lyr_WRRLrelevanteGewsserEZGber10qkm_88 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://fluggs.wupperverband.de/WMS_WV_Oberflaechengewaesser_EZG",
                              attributions: ' ',
                              params: {
                                "LAYERS": "11",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'WRRL relevante Gewässer / EZG über 10 qkm',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_WRRLrelevanteGewsserEZGber10qkm_88, 1]);
var lyr_Gewsserbeschriftung_89 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Gewsserbeschriftung_89, 1]);
var lyr_AlleGewsser_90 = new ol.layer.Tile({
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
              wms_layers.push([lyr_AlleGewsser_90, 1]);
var format_FlurstimEigentumderStadtWuppertal2024_09_02_91 = new ol.format.GeoJSON();
var features_FlurstimEigentumderStadtWuppertal2024_09_02_91 = format_FlurstimEigentumderStadtWuppertal2024_09_02_91.readFeatures(json_FlurstimEigentumderStadtWuppertal2024_09_02_91, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_91 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_91.addFeatures(features_FlurstimEigentumderStadtWuppertal2024_09_02_91);
var lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FlurstimEigentumderStadtWuppertal2024_09_02_91, 
                style: style_FlurstimEigentumderStadtWuppertal2024_09_02_91,
                popuplayertitle: 'Flurst. im Eigentum der Stadt Wuppertal (2024_09_02)',
                interactive: true,
                title: '<img src="styles/legend/FlurstimEigentumderStadtWuppertal2024_09_02_91.png" /> Flurst. im Eigentum der Stadt Wuppertal (2024_09_02)'
            });
var lyr_Kaltluftmodellierung_92 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Kaltluftmodellierung',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Kaltluftmodellierung_92.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [788269.920300, 6660004.714300, 808113.693200, 6673140.123400]
                            })
                        });
var lyr_BPlan1203GeltungsbereichAnl04_93 = new ol.layer.Image({
                            opacity: 1,
                            title: 'BPlan 1203 - Geltungsbereich (Anl. 04)',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/BPlan1203GeltungsbereichAnl04_93.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [801958.997700, 6660604.996900, 802802.959900, 6661227.496200]
                            })
                        });
var lyr_BPlan1203Bebauungsvorschlag_94 = new ol.layer.Image({
                            opacity: 1,
                            title: 'BPlan 1203 - Bebauungsvorschlag',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/BPlan1203Bebauungsvorschlag_94.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [801980.125400, 6660645.843200, 802664.243100, 6661136.390700]
                            })
                        });
var lyr_BPlan1203StdtebaulicherEntwurf_95 = new ol.layer.Image({
                            opacity: 1,
                            title: 'BPlan 1203 - Städtebaulicher Entwurf',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/BPlan1203StdtebaulicherEntwurf_95.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [801920.464000, 6660575.256400, 802876.721500, 6661264.234700]
                            })
                        });
var group_BPlan1270NVZUellendahl = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'BPlan 1270 - NVZ Uellendahl'});
var group_20240901_1044GPX = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: '2024-09-01_10-44 GPX'});
var group_Kaltenbachtal = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Kaltenbachtal'});
var group_BPlan1203Ronsdorf = new ol.layer.Group({
                                layers: [lyr_BPlan1203GeltungsbereichAnl04_93,lyr_BPlan1203Bebauungsvorschlag_94,lyr_BPlan1203StdtebaulicherEntwurf_95,],
                                fold: "open",
                                title: 'BPlan 1203 - Ronsdorf'});
var group_BPlan1253Beyenburg = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'BPlan 1253 - Beyenburg'});
var group_Wupperverband = new ol.layer.Group({
                                layers: [lyr_SonderbauwerkeWupperverband_84,lyr_StationierungWVkmund100mPunkte_85,lyr_GewEZGab1kmGewsserlnge_86,lyr_TalsperrenEZG_87,lyr_WRRLrelevanteGewsserEZGber10qkm_88,lyr_Gewsserbeschriftung_89,lyr_AlleGewsser_90,],
                                fold: "open",
                                title: 'Wupperverband'});
var group_Linfos = new ol.layer.Group({
                                layers: [lyr_VegetationsaufnahmenFlche_74,lyr_Landschaftsschutzgebiete_75,lyr_FFHGebiete_76,lyr_Naturschutzgebiete_77,lyr_BiotopkatasterFlche_78,lyr_BiotoptypenFlche_79,lyr_VerbundflchenherausragendebesondereBedeutung_80,lyr_VerordnungersetzendeVertragsflche_81,lyr_BereichefrdenSchutzderNatur_82,lyr_geschtzteBiotopeFlche_83,],
                                fold: "open",
                                title: 'Linfos'});
var group_Umwelt = new ol.layer.Group({
                                layers: [lyr_RadonPotenzialkarteBodenschutz_71,lyr_Kleingrten_72,lyr_Bume_73,],
                                fold: "open",
                                title: 'Umwelt'});
var group_berschwemmungsgebieteinNRW = new ol.layer.Group({
                                layers: [lyr_berschwemmungsgebietevorlgesichert_68,lyr_berschwemmungsgebietefestgesetzt_69,lyr_berschwemmungsgebieteermittelt_70,],
                                fold: "open",
                                title: 'Überschwemmungsgebiete in NRW'});
var group_Regen29052018SRI11 = new ol.layer.Group({
                                layers: [lyr_Regen29052018SRI11maxWassertiefe_65,lyr_Regen29052018SRI11Flierichtung_66,lyr_Regen29052018SRI11Fliegeschwindigkeit_67,],
                                fold: "open",
                                title: 'Regen 29.05.2018 (SRI 11)'});
var group_StarkregenSRI10 = new ol.layer.Group({
                                layers: [lyr_StarkregenSRI10maxWassertiefe_62,lyr_StarkregenSRI10Flierichtung_63,lyr_StarkregenSRI10Fliegeschwindigkeit_64,],
                                fold: "open",
                                title: 'Starkregen SRI 10'});
var group_StarkregenSRI7 = new ol.layer.Group({
                                layers: [lyr_StarkregenSRI7maxWassertiefe_59,lyr_StarkregenSRI7Flierichtung_60,lyr_StarkregenSRI7Fliegeschwindigkeit_61,],
                                fold: "open",
                                title: 'Starkregen SRI 7'});
var group_Hitzeinseln = new ol.layer.Group({
                                layers: [lyr_Luftleitbahnen_54,lyr_HitzeinselnIstZustand_55,lyr_HitzeinselnAusweitungZukunftsszenario2050_56,lyr_HitzeinselnstarkIstZustand_57,lyr_Freiflchen_58,],
                                fold: "open",
                                title: 'Hitzeinseln'});
var group_Klimakarten = new ol.layer.Group({
                                layers: [lyr_WrmebildTagsituation_50,lyr_WrmebildNachtsituation_51,lyr_PlanhinweiskarteKlima_52,lyr_Klimafunktionskarte_53,],
                                fold: "open",
                                title: 'Klimakarten'});
var group_Luftreinhaltung = new ol.layer.Group({
                                layers: [lyr_UmweltzonenTopicMaps_45,lyr_Umweltzonen_46,lyr_Luftmessstationen_47,lyr_Luftgte2000_48,lyr_Luftgte1987_49,],
                                fold: "open",
                                title: 'Luftreinhaltung'});
var group_LandschaftsundNaturschutz = new ol.layer.Group({
                                layers: [lyr_Naturdenkmale_43,lyr_Kompensationsflchenverffentlicht_44,],
                                fold: "open",
                                title: 'Landschafts- und Naturschutz'});
var group_Solarkataster = new ol.layer.Group({
                                layers: [lyr_SolarpotenzialDcherWrme_39,lyr_SolarpotenzialDcherStrom_40,lyr_JahresSolarpotenzialflchendeckend_41,lyr_Dachflchenumringe_42,],
                                fold: "open",
                                title: 'Solarkataster'});
var group_StrategischeLrmkarten2022 = new ol.layer.Group({
                                layers: [lyr_Gewerbelrm2022DayEveningNight_31,lyr_Gewerbelrm2022Night_32,lyr_VerkehrslrmBahn2022DayEveningNight_33,lyr_VerkehrslrmBahn2022Night_34,lyr_VerkehrslrmSchwebebahn2022DayEveningNight_35,lyr_VerkehrslrmSchwebebahnStrae2022Night_36,lyr_VerkehrslrmStrae2022DayEveningNight_37,lyr_VerkehrslrmStrae2022Night_38,],
                                fold: "open",
                                title: 'Strategische Lärmkarten 2022'});
var group_Planung = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Planung'});
var group_Bebauungsplanung = new ol.layer.Group({
                                layers: [lyr_Innenbereichssatzungen_28,lyr_BPlanverfahrenrechtsverbindlich_29,lyr_BPlanverfahrenimVerfahren_30,],
                                fold: "open",
                                title: 'Bebauungsplanung'});
var group_Denkmal = new ol.layer.Group({
                                layers: [lyr_Denkmalbereichssatzungenrechtsverbindlich_24,lyr_Denkmalbereichssatzungennichtrechtsverbindlich_25,lyr_Bodendenkmler_26,lyr_Baudenkmler_27,],
                                fold: "open",
                                title: 'Denkmal'});
var group_FlchennutzungsplanFNP = new ol.layer.Group({
                                layers: [lyr_FNPnderungsverfahrenrechtsverbindlich_16,lyr_FNPnderungsverfahrenimVerfahren_17,lyr_FNPnderungsverfahrenaufgehoben_18,lyr_FNPnderungsverfahrenalle_19,lyr_FNPArbeitskarteaktualisiertXplan_20,lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_21,lyr_FNP2005Xplanclip_22,lyr_FNP2005Xplan_23,],
                                fold: "open",
                                title: 'Flächennutzungsplan (FNP)'});
var group_Landschaftsplnerechtsverbindlich = new ol.layer.Group({
                                layers: [lyr_LandschaftsplanWestFestsetzungskarte_7,lyr_LandschaftsplanWestEntwicklungskarte_8,lyr_LandschaftsplanOstFestsetzungskarte_9,lyr_LandschaftsplanOstEntwicklungskarte_10,lyr_LandschaftsplanNordFestlegungskarte_11,lyr_LandschaftsplanNordEntwicklungskarte_12,lyr_LandschaftsplanGelpeFestsetzungskarte_13,lyr_LandschaftsplanGelpeEntwicklungskarte_14,lyr_LandschaftsundNaturschutz_15,],
                                fold: "open",
                                title: 'Landschaftspläne (rechtsverbindlich)'});
var group_StadtgestalterischeInteressengebiete = new ol.layer.Group({
                                layers: [lyr_Talachse_1,lyr_FlchenanGrnanlagen_2,lyr_ErhaltungsGestaltungssatzrechtsverbindl_3,lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_4,lyr_BundesHauptverkehrsstraen_5,lyr_BedeutsameTeilrume_6,],
                                fold: "open",
                                title: 'Stadtgestalterische Interessengebiete'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Talachse_1.setVisible(false);lyr_FlchenanGrnanlagen_2.setVisible(false);lyr_ErhaltungsGestaltungssatzrechtsverbindl_3.setVisible(false);lyr_ErhaltungsGestaltungssatznichtrechtsverbindl_4.setVisible(false);lyr_BundesHauptverkehrsstraen_5.setVisible(false);lyr_BedeutsameTeilrume_6.setVisible(false);lyr_LandschaftsplanWestFestsetzungskarte_7.setVisible(false);lyr_LandschaftsplanWestEntwicklungskarte_8.setVisible(false);lyr_LandschaftsplanOstFestsetzungskarte_9.setVisible(false);lyr_LandschaftsplanOstEntwicklungskarte_10.setVisible(false);lyr_LandschaftsplanNordFestlegungskarte_11.setVisible(false);lyr_LandschaftsplanNordEntwicklungskarte_12.setVisible(false);lyr_LandschaftsplanGelpeFestsetzungskarte_13.setVisible(false);lyr_LandschaftsplanGelpeEntwicklungskarte_14.setVisible(false);lyr_LandschaftsundNaturschutz_15.setVisible(true);lyr_FNPnderungsverfahrenrechtsverbindlich_16.setVisible(false);lyr_FNPnderungsverfahrenimVerfahren_17.setVisible(false);lyr_FNPnderungsverfahrenaufgehoben_18.setVisible(false);lyr_FNPnderungsverfahrenalle_19.setVisible(false);lyr_FNPArbeitskarteaktualisiertXplan_20.setVisible(false);lyr_FNPnichtgenehmigteFlchennachrichtlbernahmen_21.setVisible(false);lyr_FNP2005Xplanclip_22.setVisible(false);lyr_FNP2005Xplan_23.setVisible(false);lyr_Denkmalbereichssatzungenrechtsverbindlich_24.setVisible(false);lyr_Denkmalbereichssatzungennichtrechtsverbindlich_25.setVisible(false);lyr_Bodendenkmler_26.setVisible(false);lyr_Baudenkmler_27.setVisible(false);lyr_Innenbereichssatzungen_28.setVisible(false);lyr_BPlanverfahrenrechtsverbindlich_29.setVisible(false);lyr_BPlanverfahrenimVerfahren_30.setVisible(false);lyr_Gewerbelrm2022DayEveningNight_31.setVisible(false);lyr_Gewerbelrm2022Night_32.setVisible(false);lyr_VerkehrslrmBahn2022DayEveningNight_33.setVisible(false);lyr_VerkehrslrmBahn2022Night_34.setVisible(false);lyr_VerkehrslrmSchwebebahn2022DayEveningNight_35.setVisible(false);lyr_VerkehrslrmSchwebebahnStrae2022Night_36.setVisible(false);lyr_VerkehrslrmStrae2022DayEveningNight_37.setVisible(false);lyr_VerkehrslrmStrae2022Night_38.setVisible(false);lyr_SolarpotenzialDcherWrme_39.setVisible(false);lyr_SolarpotenzialDcherStrom_40.setVisible(false);lyr_JahresSolarpotenzialflchendeckend_41.setVisible(false);lyr_Dachflchenumringe_42.setVisible(false);lyr_Naturdenkmale_43.setVisible(false);lyr_Kompensationsflchenverffentlicht_44.setVisible(false);lyr_UmweltzonenTopicMaps_45.setVisible(false);lyr_Umweltzonen_46.setVisible(false);lyr_Luftmessstationen_47.setVisible(false);lyr_Luftgte2000_48.setVisible(false);lyr_Luftgte1987_49.setVisible(false);lyr_WrmebildTagsituation_50.setVisible(false);lyr_WrmebildNachtsituation_51.setVisible(false);lyr_PlanhinweiskarteKlima_52.setVisible(false);lyr_Klimafunktionskarte_53.setVisible(false);lyr_Luftleitbahnen_54.setVisible(false);lyr_HitzeinselnIstZustand_55.setVisible(false);lyr_HitzeinselnAusweitungZukunftsszenario2050_56.setVisible(false);lyr_HitzeinselnstarkIstZustand_57.setVisible(false);lyr_Freiflchen_58.setVisible(false);lyr_StarkregenSRI7maxWassertiefe_59.setVisible(false);lyr_StarkregenSRI7Flierichtung_60.setVisible(false);lyr_StarkregenSRI7Fliegeschwindigkeit_61.setVisible(false);lyr_StarkregenSRI10maxWassertiefe_62.setVisible(false);lyr_StarkregenSRI10Flierichtung_63.setVisible(false);lyr_StarkregenSRI10Fliegeschwindigkeit_64.setVisible(false);lyr_Regen29052018SRI11maxWassertiefe_65.setVisible(false);lyr_Regen29052018SRI11Flierichtung_66.setVisible(false);lyr_Regen29052018SRI11Fliegeschwindigkeit_67.setVisible(false);lyr_berschwemmungsgebietevorlgesichert_68.setVisible(false);lyr_berschwemmungsgebietefestgesetzt_69.setVisible(false);lyr_berschwemmungsgebieteermittelt_70.setVisible(false);lyr_RadonPotenzialkarteBodenschutz_71.setVisible(false);lyr_Kleingrten_72.setVisible(false);lyr_Bume_73.setVisible(false);lyr_VegetationsaufnahmenFlche_74.setVisible(false);lyr_Landschaftsschutzgebiete_75.setVisible(false);lyr_FFHGebiete_76.setVisible(false);lyr_Naturschutzgebiete_77.setVisible(false);lyr_BiotopkatasterFlche_78.setVisible(false);lyr_BiotoptypenFlche_79.setVisible(false);lyr_VerbundflchenherausragendebesondereBedeutung_80.setVisible(false);lyr_VerordnungersetzendeVertragsflche_81.setVisible(false);lyr_BereichefrdenSchutzderNatur_82.setVisible(false);lyr_geschtzteBiotopeFlche_83.setVisible(false);lyr_SonderbauwerkeWupperverband_84.setVisible(false);lyr_StationierungWVkmund100mPunkte_85.setVisible(false);lyr_GewEZGab1kmGewsserlnge_86.setVisible(true);lyr_TalsperrenEZG_87.setVisible(false);lyr_WRRLrelevanteGewsserEZGber10qkm_88.setVisible(false);lyr_Gewsserbeschriftung_89.setVisible(true);lyr_AlleGewsser_90.setVisible(true);lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91.setVisible(false);lyr_Kaltluftmodellierung_92.setVisible(false);lyr_BPlan1203GeltungsbereichAnl04_93.setVisible(true);lyr_BPlan1203Bebauungsvorschlag_94.setVisible(false);lyr_BPlan1203StdtebaulicherEntwurf_95.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,group_StadtgestalterischeInteressengebiete,group_Landschaftsplnerechtsverbindlich,group_FlchennutzungsplanFNP,group_Denkmal,group_Bebauungsplanung,group_StrategischeLrmkarten2022,group_Solarkataster,group_LandschaftsundNaturschutz,group_Luftreinhaltung,group_Klimakarten,group_Hitzeinseln,group_StarkregenSRI7,group_StarkregenSRI10,group_Regen29052018SRI11,group_berschwemmungsgebieteinNRW,group_Umwelt,group_Linfos,group_Wupperverband,lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91,lyr_Kaltluftmodellierung_92,group_BPlan1203Ronsdorf];
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91.set('fieldAliases', {'GEM': 'GEM', 'FLUR': 'FLUR', 'FLURSTZ': 'FLURSTZ', 'FLURSTN': 'FLURSTN', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91.set('fieldImages', {'GEM': 'TextEdit', 'FLUR': 'TextEdit', 'FLURSTZ': 'TextEdit', 'FLURSTN': 'TextEdit', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91.set('fieldLabels', {'GEM': 'inline label - visible with data', 'FLUR': 'inline label - visible with data', 'FLURSTZ': 'inline label - visible with data', 'FLURSTN': 'inline label - visible with data', });
lyr_FlurstimEigentumderStadtWuppertal2024_09_02_91.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});