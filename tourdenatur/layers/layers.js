var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'Open Topo Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
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

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Stadtgebiet_EPSG3857_SHAPEshp_3 = new ol.format.GeoJSON();
var features_Stadtgebiet_EPSG3857_SHAPEshp_3 = format_Stadtgebiet_EPSG3857_SHAPEshp_3.readFeatures(json_Stadtgebiet_EPSG3857_SHAPEshp_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtgebiet_EPSG3857_SHAPEshp_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtgebiet_EPSG3857_SHAPEshp_3.addFeatures(features_Stadtgebiet_EPSG3857_SHAPEshp_3);
var lyr_Stadtgebiet_EPSG3857_SHAPEshp_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtgebiet_EPSG3857_SHAPEshp_3, 
                style: style_Stadtgebiet_EPSG3857_SHAPEshp_3,
                popuplayertitle: 'Stadtgebiet_EPSG3857_SHAPE.shp',
                interactive: true,
                title: '<img src="styles/legend/Stadtgebiet_EPSG3857_SHAPEshp_3.png" /> Stadtgebiet_EPSG3857_SHAPE.shp'
            });
var format_Stadtbezirke_EPSG3857_SHAPEshp_4 = new ol.format.GeoJSON();
var features_Stadtbezirke_EPSG3857_SHAPEshp_4 = format_Stadtbezirke_EPSG3857_SHAPEshp_4.readFeatures(json_Stadtbezirke_EPSG3857_SHAPEshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadtbezirke_EPSG3857_SHAPEshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadtbezirke_EPSG3857_SHAPEshp_4.addFeatures(features_Stadtbezirke_EPSG3857_SHAPEshp_4);
var lyr_Stadtbezirke_EPSG3857_SHAPEshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadtbezirke_EPSG3857_SHAPEshp_4, 
                style: style_Stadtbezirke_EPSG3857_SHAPEshp_4,
                popuplayertitle: 'Stadtbezirke_EPSG3857_SHAPE.shp',
                interactive: true,
                title: '<img src="styles/legend/Stadtbezirke_EPSG3857_SHAPEshp_4.png" /> Stadtbezirke_EPSG3857_SHAPE.shp'
            });
var format_DornerWeg_5 = new ol.format.GeoJSON();
var features_DornerWeg_5 = format_DornerWeg_5.readFeatures(json_DornerWeg_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DornerWeg_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DornerWeg_5.addFeatures(features_DornerWeg_5);
var lyr_DornerWeg_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DornerWeg_5, 
                style: style_DornerWeg_5,
                popuplayertitle: 'Dorner Weg',
                interactive: true,
                title: '<img src="styles/legend/DornerWeg_5.png" /> Dorner Weg'
            });
var format_LichtscheidSd_6 = new ol.format.GeoJSON();
var features_LichtscheidSd_6 = format_LichtscheidSd_6.readFeatures(json_LichtscheidSd_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LichtscheidSd_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LichtscheidSd_6.addFeatures(features_LichtscheidSd_6);
var lyr_LichtscheidSd_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LichtscheidSd_6, 
                style: style_LichtscheidSd_6,
                popuplayertitle: 'Lichtscheid Süd',
                interactive: true,
                title: '<img src="styles/legend/LichtscheidSd_6.png" /> Lichtscheid Süd'
            });
var format_SchllerWest_7 = new ol.format.GeoJSON();
var features_SchllerWest_7 = format_SchllerWest_7.readFeatures(json_SchllerWest_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SchllerWest_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SchllerWest_7.addFeatures(features_SchllerWest_7);
var lyr_SchllerWest_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SchllerWest_7, 
                style: style_SchllerWest_7,
                popuplayertitle: 'Schöller West',
                interactive: true,
                title: '<img src="styles/legend/SchllerWest_7.png" /> Schöller West'
            });
var format_Scniedestr_8 = new ol.format.GeoJSON();
var features_Scniedestr_8 = format_Scniedestr_8.readFeatures(json_Scniedestr_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Scniedestr_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scniedestr_8.addFeatures(features_Scniedestr_8);
var lyr_Scniedestr_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scniedestr_8, 
                style: style_Scniedestr_8,
                popuplayertitle: 'Scniedestr',
                interactive: true,
                title: '<img src="styles/legend/Scniedestr_8.png" /> Scniedestr'
            });
var format_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9 = new ol.format.GeoJSON();
var features_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9 = format_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.readFeatures(json_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.addFeatures(features_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9);
var lyr_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9, 
                style: style_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9,
                popuplayertitle: 'Sonnen-Hügel-Klimapfad_ der Klasse 9b der Hauptschule Hügelstraße',
                interactive: true,
                title: '<img src="styles/legend/SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.png" /> Sonnen-Hügel-Klimapfad_ der Klasse 9b der Hauptschule Hügelstraße'
            });
var format_KlimarouteWuppertalSd_10 = new ol.format.GeoJSON();
var features_KlimarouteWuppertalSd_10 = format_KlimarouteWuppertalSd_10.readFeatures(json_KlimarouteWuppertalSd_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimarouteWuppertalSd_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimarouteWuppertalSd_10.addFeatures(features_KlimarouteWuppertalSd_10);
var lyr_KlimarouteWuppertalSd_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimarouteWuppertalSd_10, 
                style: style_KlimarouteWuppertalSd_10,
                popuplayertitle: 'Klimaroute Wuppertal Süd',
                interactive: true,
                title: '<img src="styles/legend/KlimarouteWuppertalSd_10.png" /> Klimaroute Wuppertal Süd'
            });
var format_Treppenlauf_11 = new ol.format.GeoJSON();
var features_Treppenlauf_11 = format_Treppenlauf_11.readFeatures(json_Treppenlauf_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Treppenlauf_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Treppenlauf_11.addFeatures(features_Treppenlauf_11);
var lyr_Treppenlauf_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Treppenlauf_11, 
                style: style_Treppenlauf_11,
                popuplayertitle: 'Treppenlauf',
                interactive: true,
                title: '<img src="styles/legend/Treppenlauf_11.png" /> Treppenlauf'
            });
var format_KlimarouteGelpetal_12 = new ol.format.GeoJSON();
var features_KlimarouteGelpetal_12 = format_KlimarouteGelpetal_12.readFeatures(json_KlimarouteGelpetal_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimarouteGelpetal_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimarouteGelpetal_12.addFeatures(features_KlimarouteGelpetal_12);
var lyr_KlimarouteGelpetal_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimarouteGelpetal_12, 
                style: style_KlimarouteGelpetal_12,
                popuplayertitle: 'Klimaroute Gelpetal',
                interactive: true,
                title: '<img src="styles/legend/KlimarouteGelpetal_12.png" /> Klimaroute Gelpetal'
            });
var format_KulinarischeFahrrad_Einkaufstour_13 = new ol.format.GeoJSON();
var features_KulinarischeFahrrad_Einkaufstour_13 = format_KulinarischeFahrrad_Einkaufstour_13.readFeatures(json_KulinarischeFahrrad_Einkaufstour_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KulinarischeFahrrad_Einkaufstour_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KulinarischeFahrrad_Einkaufstour_13.addFeatures(features_KulinarischeFahrrad_Einkaufstour_13);
var lyr_KulinarischeFahrrad_Einkaufstour_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KulinarischeFahrrad_Einkaufstour_13, 
                style: style_KulinarischeFahrrad_Einkaufstour_13,
                popuplayertitle: 'Kulinarische Fahrrad- _ Einkaufstour',
                interactive: true,
                title: '<img src="styles/legend/KulinarischeFahrrad_Einkaufstour_13.png" /> Kulinarische Fahrrad- _ Einkaufstour'
            });
var format_KlimarouteBeyenburg_14 = new ol.format.GeoJSON();
var features_KlimarouteBeyenburg_14 = format_KlimarouteBeyenburg_14.readFeatures(json_KlimarouteBeyenburg_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimarouteBeyenburg_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimarouteBeyenburg_14.addFeatures(features_KlimarouteBeyenburg_14);
var lyr_KlimarouteBeyenburg_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimarouteBeyenburg_14, 
                style: style_KlimarouteBeyenburg_14,
                popuplayertitle: 'Klimaroute Beyenburg',
                interactive: true,
                title: '<img src="styles/legend/KlimarouteBeyenburg_14.png" /> Klimaroute Beyenburg'
            });
var format_KlimaroutezumBotanischenGarten_15 = new ol.format.GeoJSON();
var features_KlimaroutezumBotanischenGarten_15 = format_KlimaroutezumBotanischenGarten_15.readFeatures(json_KlimaroutezumBotanischenGarten_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimaroutezumBotanischenGarten_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimaroutezumBotanischenGarten_15.addFeatures(features_KlimaroutezumBotanischenGarten_15);
var lyr_KlimaroutezumBotanischenGarten_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimaroutezumBotanischenGarten_15, 
                style: style_KlimaroutezumBotanischenGarten_15,
                popuplayertitle: 'Klimaroute zum Botanischen Garten',
                interactive: true,
                title: '<img src="styles/legend/KlimaroutezumBotanischenGarten_15.png" /> Klimaroute zum Botanischen Garten'
            });
var format_KlimawalkKunstKulturElberfeldI_16 = new ol.format.GeoJSON();
var features_KlimawalkKunstKulturElberfeldI_16 = format_KlimawalkKunstKulturElberfeldI_16.readFeatures(json_KlimawalkKunstKulturElberfeldI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimawalkKunstKulturElberfeldI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimawalkKunstKulturElberfeldI_16.addFeatures(features_KlimawalkKunstKulturElberfeldI_16);
var lyr_KlimawalkKunstKulturElberfeldI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimawalkKunstKulturElberfeldI_16, 
                style: style_KlimawalkKunstKulturElberfeldI_16,
                popuplayertitle: 'Klimawalk Kunst & Kultur Elberfeld I',
                interactive: true,
                title: '<img src="styles/legend/KlimawalkKunstKulturElberfeldI_16.png" /> Klimawalk Kunst & Kultur Elberfeld I'
            });
var format_KlimawalkKunstKulturBarmen_17 = new ol.format.GeoJSON();
var features_KlimawalkKunstKulturBarmen_17 = format_KlimawalkKunstKulturBarmen_17.readFeatures(json_KlimawalkKunstKulturBarmen_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimawalkKunstKulturBarmen_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimawalkKunstKulturBarmen_17.addFeatures(features_KlimawalkKunstKulturBarmen_17);
var lyr_KlimawalkKunstKulturBarmen_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimawalkKunstKulturBarmen_17, 
                style: style_KlimawalkKunstKulturBarmen_17,
                popuplayertitle: 'Klimawalk Kunst & Kultur Barmen',
                interactive: true,
                title: '<img src="styles/legend/KlimawalkKunstKulturBarmen_17.png" /> Klimawalk Kunst & Kultur Barmen'
            });
var format_KlimawalkKunstKulturElberfeldII_18 = new ol.format.GeoJSON();
var features_KlimawalkKunstKulturElberfeldII_18 = format_KlimawalkKunstKulturElberfeldII_18.readFeatures(json_KlimawalkKunstKulturElberfeldII_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KlimawalkKunstKulturElberfeldII_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KlimawalkKunstKulturElberfeldII_18.addFeatures(features_KlimawalkKunstKulturElberfeldII_18);
var lyr_KlimawalkKunstKulturElberfeldII_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KlimawalkKunstKulturElberfeldII_18, 
                style: style_KlimawalkKunstKulturElberfeldII_18,
                popuplayertitle: 'Klimawalk Kunst & Kultur Elberfeld II',
                interactive: true,
                title: '<img src="styles/legend/KlimawalkKunstKulturElberfeldII_18.png" /> Klimawalk Kunst & Kultur Elberfeld II'
            });
var format_Klimaorte_19 = new ol.format.GeoJSON();
var features_Klimaorte_19 = format_Klimaorte_19.readFeatures(json_Klimaorte_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Klimaorte_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Klimaorte_19.addFeatures(features_Klimaorte_19);
var lyr_Klimaorte_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Klimaorte_19, 
                style: style_Klimaorte_19,
                popuplayertitle: 'Klimaorte',
                interactive: true,
                title: '<img src="styles/legend/Klimaorte_19.png" /> Klimaorte'
            });
var format_BikeRide_20 = new ol.format.GeoJSON();
var features_BikeRide_20 = format_BikeRide_20.readFeatures(json_BikeRide_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BikeRide_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BikeRide_20.addFeatures(features_BikeRide_20);
var lyr_BikeRide_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BikeRide_20, 
                style: style_BikeRide_20,
                popuplayertitle: 'Bike & Ride',
                interactive: true,
                title: '<img src="styles/legend/BikeRide_20.png" /> Bike & Ride'
            });
var format_LadestationenEBikes_21 = new ol.format.GeoJSON();
var features_LadestationenEBikes_21 = format_LadestationenEBikes_21.readFeatures(json_LadestationenEBikes_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LadestationenEBikes_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LadestationenEBikes_21.addFeatures(features_LadestationenEBikes_21);
var lyr_LadestationenEBikes_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LadestationenEBikes_21, 
                style: style_LadestationenEBikes_21,
                popuplayertitle: 'Ladestationen E-Bikes',
                interactive: true,
                title: '<img src="styles/legend/LadestationenEBikes_21.png" /> Ladestationen E-Bikes'
            });
var format_RadverkehrsnetzbeleuchteteStrecken_22 = new ol.format.GeoJSON();
var features_RadverkehrsnetzbeleuchteteStrecken_22 = format_RadverkehrsnetzbeleuchteteStrecken_22.readFeatures(json_RadverkehrsnetzbeleuchteteStrecken_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadverkehrsnetzbeleuchteteStrecken_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadverkehrsnetzbeleuchteteStrecken_22.addFeatures(features_RadverkehrsnetzbeleuchteteStrecken_22);
var lyr_RadverkehrsnetzbeleuchteteStrecken_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RadverkehrsnetzbeleuchteteStrecken_22, 
                style: style_RadverkehrsnetzbeleuchteteStrecken_22,
                popuplayertitle: 'Radverkehrsnetz (beleuchtete-Strecken)',
                interactive: true,
                title: '<img src="styles/legend/RadverkehrsnetzbeleuchteteStrecken_22.png" /> Radverkehrsnetz (beleuchtete-Strecken)'
            });
var format_RadverkehrsnetzSteigungen_23 = new ol.format.GeoJSON();
var features_RadverkehrsnetzSteigungen_23 = format_RadverkehrsnetzSteigungen_23.readFeatures(json_RadverkehrsnetzSteigungen_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadverkehrsnetzSteigungen_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadverkehrsnetzSteigungen_23.addFeatures(features_RadverkehrsnetzSteigungen_23);
var lyr_RadverkehrsnetzSteigungen_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RadverkehrsnetzSteigungen_23, 
                style: style_RadverkehrsnetzSteigungen_23,
                popuplayertitle: 'Radverkehrsnetz (Steigungen)',
                interactive: true,
    title: 'Radverkehrsnetz (Steigungen)<br />\
    <img src="styles/legend/RadverkehrsnetzSteigungen_23_0.png" /> bemerkbar (3% - 7%)<br />\
    <img src="styles/legend/RadverkehrsnetzSteigungen_23_1.png" /> schwer (>7%)<br />' });
var format_RadwegemarkanteBauwerke_24 = new ol.format.GeoJSON();
var features_RadwegemarkanteBauwerke_24 = format_RadwegemarkanteBauwerke_24.readFeatures(json_RadwegemarkanteBauwerke_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RadwegemarkanteBauwerke_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RadwegemarkanteBauwerke_24.addFeatures(features_RadwegemarkanteBauwerke_24);
var lyr_RadwegemarkanteBauwerke_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RadwegemarkanteBauwerke_24, 
                style: style_RadwegemarkanteBauwerke_24,
                popuplayertitle: 'Radwege (markante Bauwerke)',
                interactive: true,
                title: '<img src="styles/legend/RadwegemarkanteBauwerke_24.png" /> Radwege (markante Bauwerke)'
            });
var format_ZugaengeBahntrassenradwegePunkte_25 = new ol.format.GeoJSON();
var features_ZugaengeBahntrassenradwegePunkte_25 = format_ZugaengeBahntrassenradwegePunkte_25.readFeatures(json_ZugaengeBahntrassenradwegePunkte_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZugaengeBahntrassenradwegePunkte_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZugaengeBahntrassenradwegePunkte_25.addFeatures(features_ZugaengeBahntrassenradwegePunkte_25);
var lyr_ZugaengeBahntrassenradwegePunkte_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZugaengeBahntrassenradwegePunkte_25, 
                style: style_ZugaengeBahntrassenradwegePunkte_25,
                popuplayertitle: 'Zugaenge Bahntrassenradwege (Punkte)',
                interactive: true,
                title: '<img src="styles/legend/ZugaengeBahntrassenradwegePunkte_25.png" /> Zugaenge Bahntrassenradwege (Punkte)'
            });
var format_ZugaengeBahntrassenradwege_26 = new ol.format.GeoJSON();
var features_ZugaengeBahntrassenradwege_26 = format_ZugaengeBahntrassenradwege_26.readFeatures(json_ZugaengeBahntrassenradwege_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZugaengeBahntrassenradwege_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZugaengeBahntrassenradwege_26.addFeatures(features_ZugaengeBahntrassenradwege_26);
var lyr_ZugaengeBahntrassenradwege_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZugaengeBahntrassenradwege_26, 
                style: style_ZugaengeBahntrassenradwege_26,
                popuplayertitle: 'Zugaenge Bahntrassenradwege',
                interactive: true,
                title: '<img src="styles/legend/ZugaengeBahntrassenradwege_26.png" /> Zugaenge Bahntrassenradwege'
            });
var format_Radrouten_27 = new ol.format.GeoJSON();
var features_Radrouten_27 = format_Radrouten_27.readFeatures(json_Radrouten_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radrouten_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radrouten_27.addFeatures(features_Radrouten_27);
var lyr_Radrouten_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radrouten_27, 
                style: style_Radrouten_27,
                popuplayertitle: 'Radrouten',
                interactive: true,
    title: 'Radrouten<br />\
    <img src="styles/legend/Radrouten_27_0.png" /> Bergbahntrasse<br />\
    <img src="styles/legend/Radrouten_27_1.png" /> Deutsche Fußballroute NRW<br />\
    <img src="styles/legend/Radrouten_27_2.png" /> Korkenziehertrasse<br />\
    <img src="styles/legend/Radrouten_27_3.png" /> Nordbahntrasse<br />\
    <img src="styles/legend/Radrouten_27_4.png" /> Nordbahntrasse Umleitungsstrecke<br />\
    <img src="styles/legend/Radrouten_27_5.png" /> NRW-NETZ<br />\
    <img src="styles/legend/Radrouten_27_6.png" /> PanoramaRadweg Niederbergbahn<br />\
    <img src="styles/legend/Radrouten_27_7.png" /> R1<br />\
    <img src="styles/legend/Radrouten_27_8.png" /> R2<br />\
    <img src="styles/legend/Radrouten_27_9.png" /> R3<br />\
    <img src="styles/legend/Radrouten_27_10.png" /> R3a<br />\
    <img src="styles/legend/Radrouten_27_11.png" /> R4<br />\
    <img src="styles/legend/Radrouten_27_12.png" /> R4a<br />\
    <img src="styles/legend/Radrouten_27_13.png" /> R5<br />\
    <img src="styles/legend/Radrouten_27_14.png" /> R5a<br />\
    <img src="styles/legend/Radrouten_27_15.png" /> Sambatrasse<br />\
    <img src="styles/legend/Radrouten_27_16.png" /> Schwarzbachtrasse<br />\
    <img src="styles/legend/Radrouten_27_17.png" /> Veloroute1<br />\
    <img src="styles/legend/Radrouten_27_18.png" /> Verbindung R2 R4a<br />\
    <img src="styles/legend/Radrouten_27_19.png" /> Vorzugsroute Radring Variante<br />\
    <img src="styles/legend/Radrouten_27_20.png" /> <br />' });
var lyr_GeltungsbereichBUGASeilbahn_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich BUGA-Seilbahn<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GeltungsbereichBUGASeilbahn_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [790860.832300, 6663083.347500, 792732.654200, 6664261.032900]
        })
    });
var lyr_GeltungsbereichBUGAHngebrcke_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Geltungsbereich BUGA-Hängebrücke<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GeltungsbereichBUGAHngebrcke_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [791915.171533, 6663861.684971, 793528.396914, 6666256.923297]
        })
    });
var format_POIFlchen_30 = new ol.format.GeoJSON();
var features_POIFlchen_30 = format_POIFlchen_30.readFeatures(json_POIFlchen_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POIFlchen_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POIFlchen_30.addFeatures(features_POIFlchen_30);
var lyr_POIFlchen_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POIFlchen_30, 
                style: style_POIFlchen_30,
                popuplayertitle: 'POI-Flächen',
                interactive: true,
                title: '<img src="styles/legend/POIFlchen_30.png" /> POI-Flächen'
            });
var format_POI_31 = new ol.format.GeoJSON();
var features_POI_31 = format_POI_31.readFeatures(json_POI_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POI_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POI_31.addFeatures(features_POI_31);
var lyr_POI_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POI_31, 
                style: style_POI_31,
                popuplayertitle: 'POI',
                interactive: true,
                title: '<img src="styles/legend/POI_31.png" /> POI'
            });
var group_TourdeNatur = new ol.layer.Group({
                                layers: [lyr_GeltungsbereichBUGASeilbahn_28,lyr_GeltungsbereichBUGAHngebrcke_29,lyr_POIFlchen_30,lyr_POI_31,],
                                fold: "open",
                                title: 'Tour de Natur'});
var group_OffeneDatenWuppertal = new ol.layer.Group({
                                layers: [lyr_BikeRide_20,lyr_LadestationenEBikes_21,lyr_RadverkehrsnetzbeleuchteteStrecken_22,lyr_RadverkehrsnetzSteigungen_23,lyr_RadwegemarkanteBauwerke_24,lyr_ZugaengeBahntrassenradwegePunkte_25,lyr_ZugaengeBahntrassenradwege_26,lyr_Radrouten_27,],
                                fold: "open",
                                title: 'Offene Daten Wuppertal'});
var group_Klimaroutenorte = new ol.layer.Group({
                                layers: [lyr_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9,lyr_KlimarouteWuppertalSd_10,lyr_Treppenlauf_11,lyr_KlimarouteGelpetal_12,lyr_KulinarischeFahrrad_Einkaufstour_13,lyr_KlimarouteBeyenburg_14,lyr_KlimaroutezumBotanischenGarten_15,lyr_KlimawalkKunstKulturElberfeldI_16,lyr_KlimawalkKunstKulturBarmen_17,lyr_KlimawalkKunstKulturElberfeldII_18,lyr_Klimaorte_19,],
                                fold: "open",
                                title: 'Klimarouten & -orte'});
var group_Gewerbepotentialflchen = new ol.layer.Group({
                                layers: [lyr_DornerWeg_5,lyr_LichtscheidSd_6,lyr_SchllerWest_7,lyr_Scniedestr_8,],
                                fold: "open",
                                title: 'Gewerbepotentialflächen'});
var group_StadtWuppertal = new ol.layer.Group({
                                layers: [lyr_Stadtgebiet_EPSG3857_SHAPEshp_3,lyr_Stadtbezirke_EPSG3857_SHAPEshp_4,],
                                fold: "open",
                                title: 'Stadt Wuppertal'});
var group_Basiskarten = new ol.layer.Group({
                                layers: [lyr_OpenTopoMap_0,lyr_Gmaps_1,lyr_OpenStreetMap_2,],
                                fold: "open",
                                title: 'Basiskarten'});

lyr_OpenTopoMap_0.setVisible(false);lyr_Gmaps_1.setVisible(false);lyr_OpenStreetMap_2.setVisible(true);lyr_Stadtgebiet_EPSG3857_SHAPEshp_3.setVisible(true);lyr_Stadtbezirke_EPSG3857_SHAPEshp_4.setVisible(true);lyr_DornerWeg_5.setVisible(false);lyr_LichtscheidSd_6.setVisible(false);lyr_SchllerWest_7.setVisible(false);lyr_Scniedestr_8.setVisible(false);lyr_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.setVisible(false);lyr_KlimarouteWuppertalSd_10.setVisible(false);lyr_Treppenlauf_11.setVisible(false);lyr_KlimarouteGelpetal_12.setVisible(false);lyr_KulinarischeFahrrad_Einkaufstour_13.setVisible(false);lyr_KlimarouteBeyenburg_14.setVisible(false);lyr_KlimaroutezumBotanischenGarten_15.setVisible(false);lyr_KlimawalkKunstKulturElberfeldI_16.setVisible(false);lyr_KlimawalkKunstKulturBarmen_17.setVisible(false);lyr_KlimawalkKunstKulturElberfeldII_18.setVisible(false);lyr_Klimaorte_19.setVisible(true);lyr_BikeRide_20.setVisible(true);lyr_LadestationenEBikes_21.setVisible(true);lyr_RadverkehrsnetzbeleuchteteStrecken_22.setVisible(false);lyr_RadverkehrsnetzSteigungen_23.setVisible(false);lyr_RadwegemarkanteBauwerke_24.setVisible(false);lyr_ZugaengeBahntrassenradwegePunkte_25.setVisible(true);lyr_ZugaengeBahntrassenradwege_26.setVisible(true);lyr_Radrouten_27.setVisible(true);lyr_GeltungsbereichBUGASeilbahn_28.setVisible(false);lyr_GeltungsbereichBUGAHngebrcke_29.setVisible(false);lyr_POIFlchen_30.setVisible(true);lyr_POI_31.setVisible(true);
var layersList = [group_Basiskarten,group_StadtWuppertal,group_Gewerbepotentialflchen,group_Klimaroutenorte,group_OffeneDatenWuppertal,group_TourdeNatur];
lyr_Stadtgebiet_EPSG3857_SHAPEshp_3.set('fieldAliases', {'STADT': 'STADT', 'FLAECHE': 'FLAECHE', });
lyr_Stadtbezirke_EPSG3857_SHAPEshp_4.set('fieldAliases', {'BEZIRK': 'BEZIRK', 'NAME': 'NAME', 'FLAECHE': 'FLAECHE', });
lyr_DornerWeg_5.set('fieldAliases', {'id': 'id', });
lyr_LichtscheidSd_6.set('fieldAliases', {'id': 'id', });
lyr_SchllerWest_7.set('fieldAliases', {'id': 'id', });
lyr_Scniedestr_8.set('fieldAliases', {'id': 'id', });
lyr_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimarouteWuppertalSd_10.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Treppenlauf_11.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimarouteGelpetal_12.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KulinarischeFahrrad_Einkaufstour_13.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimarouteBeyenburg_14.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimaroutezumBotanischenGarten_15.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimawalkKunstKulturElberfeldI_16.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimawalkKunstKulturBarmen_17.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_KlimawalkKunstKulturElberfeldII_18.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Klimaorte_19.set('fieldAliases', {'STANDORT': 'STANDORT', 'STRASSE': 'STRASSE', 'HAUSNUMMER': 'HAUSNUMMER', 'PLZ': 'PLZ', 'STADT': 'STADT', 'ANGEBOT': 'ANGEBOT', 'BESCHREIB': 'BESCHREIB', 'BEMERKUNG': 'BEMERKUNG', 'KOMMENTAR': 'KOMMENTAR', 'WEBSITE': 'WEBSITE', 'BILD': 'BILD', 'Pic': 'Pic', 'URL': 'URL', 'PICTURE': 'PICTURE', });
lyr_BikeRide_20.set('fieldAliases', {'Name': 'Name', 'Plaetze': 'Plaetze', 'Beschreib': 'Beschreib', 'Umweltzone': 'Umweltzone', 'URL': 'URL', 'Bild': 'Bild', 'Foto': 'Foto', 'Pic': 'Pic', });
lyr_LadestationenEBikes_21.set('fieldAliases', {'STANDORT': 'STANDORT', 'STATUS': 'STATUS', 'ADRESSE': 'ADRESSE', 'BETREIBER': 'BETREIBER', 'ZEITEN': 'ZEITEN', 'LADEKOSTEN': 'LADEKOSTEN', 'ANZ_LADEPL': 'ANZ_LADEPL', 'BEMERKUNG': 'BEMERKUNG', 'ZUSATZINFO': 'ZUSATZINFO', 'URL': 'URL', 'Pic': 'Pic', });
lyr_RadverkehrsnetzbeleuchteteStrecken_22.set('fieldAliases', {'STR_NR': 'STR_NR', 'BELEUCHT': 'BELEUCHT', });
lyr_RadverkehrsnetzSteigungen_23.set('fieldAliases', {'KLASSE': 'KLASSE', 'LAENGE': 'LAENGE', });
lyr_RadwegemarkanteBauwerke_24.set('fieldAliases', {'BAUWERK': 'BAUWERK', });
lyr_ZugaengeBahntrassenradwegePunkte_25.set('fieldAliases', {'NAME': 'NAME', 'TYP': 'TYP', 'TRASSE': 'TRASSE', });
lyr_ZugaengeBahntrassenradwege_26.set('fieldAliases', {'NAME': 'NAME', 'TYP': 'TYP', 'BREITE': 'BREITE', 'BARRIEREFR': 'BARRIEREFR', 'TRASSE': 'TRASSE', });
lyr_Radrouten_27.set('fieldAliases', {'ROUTE': 'ROUTE', });
lyr_POIFlchen_30.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'URL': 'URL', 'PIC': 'PIC', });
lyr_POI_31.set('fieldAliases', {'id': 'id', 'NAME': 'NAME', 'WEB': 'WEB', 'BILD': 'BILD', 'PIC': 'PIC', 'URL': 'URL', });
lyr_Stadtgebiet_EPSG3857_SHAPEshp_3.set('fieldImages', {'STADT': 'TextEdit', 'FLAECHE': 'TextEdit', });
lyr_Stadtbezirke_EPSG3857_SHAPEshp_4.set('fieldImages', {'BEZIRK': 'TextEdit', 'NAME': 'TextEdit', 'FLAECHE': 'TextEdit', });
lyr_DornerWeg_5.set('fieldImages', {'id': 'TextEdit', });
lyr_LichtscheidSd_6.set('fieldImages', {'id': 'TextEdit', });
lyr_SchllerWest_7.set('fieldImages', {'id': 'TextEdit', });
lyr_Scniedestr_8.set('fieldImages', {'id': 'TextEdit', });
lyr_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimarouteWuppertalSd_10.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Treppenlauf_11.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimarouteGelpetal_12.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KulinarischeFahrrad_Einkaufstour_13.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimarouteBeyenburg_14.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimaroutezumBotanischenGarten_15.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimawalkKunstKulturElberfeldI_16.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimawalkKunstKulturBarmen_17.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_KlimawalkKunstKulturElberfeldII_18.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'Range', 'type': 'TextEdit', });
lyr_Klimaorte_19.set('fieldImages', {'STANDORT': 'TextEdit', 'STRASSE': 'TextEdit', 'HAUSNUMMER': 'TextEdit', 'PLZ': 'TextEdit', 'STADT': 'TextEdit', 'ANGEBOT': 'TextEdit', 'BESCHREIB': 'TextEdit', 'BEMERKUNG': 'TextEdit', 'KOMMENTAR': 'TextEdit', 'WEBSITE': 'Hidden', 'BILD': 'Hidden', 'Pic': 'Hidden', 'URL': 'ExternalResource', 'PICTURE': 'ExternalResource', });
lyr_BikeRide_20.set('fieldImages', {'Name': 'TextEdit', 'Plaetze': 'Range', 'Beschreib': 'TextEdit', 'Umweltzone': 'TextEdit', 'URL': 'Hidden', 'Bild': 'Hidden', 'Foto': 'Hidden', 'Pic': 'ExternalResource', });
lyr_LadestationenEBikes_21.set('fieldImages', {'STANDORT': 'TextEdit', 'STATUS': 'TextEdit', 'ADRESSE': 'TextEdit', 'BETREIBER': 'TextEdit', 'ZEITEN': 'TextEdit', 'LADEKOSTEN': 'TextEdit', 'ANZ_LADEPL': 'Range', 'BEMERKUNG': 'TextEdit', 'ZUSATZINFO': 'TextEdit', 'URL': 'Hidden', 'Pic': 'ExternalResource', });
lyr_RadverkehrsnetzbeleuchteteStrecken_22.set('fieldImages', {'STR_NR': 'Range', 'BELEUCHT': 'TextEdit', });
lyr_RadverkehrsnetzSteigungen_23.set('fieldImages', {'KLASSE': 'TextEdit', 'LAENGE': 'TextEdit', });
lyr_RadwegemarkanteBauwerke_24.set('fieldImages', {'BAUWERK': 'TextEdit', });
lyr_ZugaengeBahntrassenradwegePunkte_25.set('fieldImages', {'NAME': 'TextEdit', 'TYP': 'TextEdit', 'TRASSE': 'TextEdit', });
lyr_ZugaengeBahntrassenradwege_26.set('fieldImages', {'NAME': 'TextEdit', 'TYP': 'TextEdit', 'BREITE': 'TextEdit', 'BARRIEREFR': 'TextEdit', 'TRASSE': 'TextEdit', });
lyr_Radrouten_27.set('fieldImages', {'ROUTE': 'TextEdit', });
lyr_POIFlchen_30.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'URL': 'TextEdit', 'PIC': 'TextEdit', });
lyr_POI_31.set('fieldImages', {'id': 'TextEdit', 'NAME': 'TextEdit', 'WEB': 'Hidden', 'BILD': 'Hidden', 'PIC': 'ExternalResource', 'URL': 'TextEdit', });
lyr_Stadtgebiet_EPSG3857_SHAPEshp_3.set('fieldLabels', {'STADT': 'header label - visible with data', 'FLAECHE': 'header label - visible with data', });
lyr_Stadtbezirke_EPSG3857_SHAPEshp_4.set('fieldLabels', {'BEZIRK': 'header label - visible with data', 'NAME': 'header label - visible with data', 'FLAECHE': 'header label - visible with data', });
lyr_DornerWeg_5.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_LichtscheidSd_6.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_SchllerWest_7.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_Scniedestr_8.set('fieldLabels', {'id': 'header label - visible with data', });
lyr_SonnenHgelKlimapfad_derKlasse9bderHauptschuleHgelstrae_9.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimarouteWuppertalSd_10.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_Treppenlauf_11.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimarouteGelpetal_12.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KulinarischeFahrrad_Einkaufstour_13.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimarouteBeyenburg_14.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimaroutezumBotanischenGarten_15.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimawalkKunstKulturElberfeldI_16.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimawalkKunstKulturBarmen_17.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_KlimawalkKunstKulturElberfeldII_18.set('fieldLabels', {'name': 'header label - visible with data', 'cmt': 'header label - visible with data', 'desc': 'header label - visible with data', 'src': 'header label - visible with data', 'link1_href': 'header label - visible with data', 'link1_text': 'header label - visible with data', 'link1_type': 'header label - visible with data', 'link2_href': 'header label - visible with data', 'link2_text': 'header label - visible with data', 'link2_type': 'header label - visible with data', 'number': 'header label - visible with data', 'type': 'header label - visible with data', });
lyr_Klimaorte_19.set('fieldLabels', {'STANDORT': 'header label - visible with data', 'STRASSE': 'header label - visible with data', 'HAUSNUMMER': 'header label - visible with data', 'PLZ': 'header label - visible with data', 'STADT': 'header label - visible with data', 'ANGEBOT': 'header label - visible with data', 'BESCHREIB': 'header label - visible with data', 'BEMERKUNG': 'header label - visible with data', 'KOMMENTAR': 'header label - visible with data', 'URL': 'header label - visible with data', 'PICTURE': 'header label - visible with data', });
lyr_BikeRide_20.set('fieldLabels', {'Name': 'header label - visible with data', 'Plaetze': 'header label - visible with data', 'Beschreib': 'header label - visible with data', 'Umweltzone': 'header label - visible with data', 'Pic': 'header label - visible with data', });
lyr_LadestationenEBikes_21.set('fieldLabels', {'STANDORT': 'header label - visible with data', 'STATUS': 'header label - visible with data', 'ADRESSE': 'header label - visible with data', 'BETREIBER': 'header label - visible with data', 'ZEITEN': 'header label - visible with data', 'LADEKOSTEN': 'header label - visible with data', 'ANZ_LADEPL': 'header label - visible with data', 'BEMERKUNG': 'header label - visible with data', 'ZUSATZINFO': 'header label - visible with data', 'Pic': 'header label - visible with data', });
lyr_RadverkehrsnetzbeleuchteteStrecken_22.set('fieldLabels', {'STR_NR': 'header label - visible with data', 'BELEUCHT': 'header label - visible with data', });
lyr_RadverkehrsnetzSteigungen_23.set('fieldLabels', {'KLASSE': 'header label - visible with data', 'LAENGE': 'header label - visible with data', });
lyr_RadwegemarkanteBauwerke_24.set('fieldLabels', {'BAUWERK': 'header label - visible with data', });
lyr_ZugaengeBahntrassenradwegePunkte_25.set('fieldLabels', {'NAME': 'header label - visible with data', 'TYP': 'header label - visible with data', 'TRASSE': 'header label - visible with data', });
lyr_ZugaengeBahntrassenradwege_26.set('fieldLabels', {'NAME': 'header label - visible with data', 'TYP': 'header label - visible with data', 'BREITE': 'header label - always visible', 'BARRIEREFR': 'header label - visible with data', 'TRASSE': 'header label - visible with data', });
lyr_Radrouten_27.set('fieldLabels', {'ROUTE': 'header label - visible with data', });
lyr_POIFlchen_30.set('fieldLabels', {'id': 'no label', 'Name': 'header label - visible with data', 'URL': 'no label', 'PIC': 'no label', });
lyr_POI_31.set('fieldLabels', {'id': 'header label - visible with data', 'NAME': 'header label - visible with data', 'PIC': 'header label - visible with data', 'URL': 'header label - visible with data', });
lyr_POI_31.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});