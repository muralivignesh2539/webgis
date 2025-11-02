var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_DIGITALELEVATIONMODEL_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DIGITALELEVATIONMODEL<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_1_0.png" /> 0<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_1_1.png" /> 6<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_1_2.png" /> 11<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_1_3.png" /> 17<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_1_4.png" /> 22<br />\
    <img src="styles/legend/DIGITALELEVATIONMODEL_1_5.png" /> 28<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DIGITALELEVATIONMODEL_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8520718.507169, 998648.804769, 8525109.442639, 1004377.450625]
        })
    });
var lyr_LULC_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'LULC<br />\
    <img src="styles/legend/LULC_2_0.png" /> WATER<br />\
    <img src="styles/legend/LULC_2_1.png" /> VEGETATION<br />\
    <img src="styles/legend/LULC_2_2.png" /> AGRICULTURE<br />\
    <img src="styles/legend/LULC_2_3.png" /> BUILT-UP/BARREN<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/LULC_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8520710.000056, 998625.251845, 8525120.000052, 1004415.914826]
        })
    });
var format_TKBMPOP_3 = new ol.format.GeoJSON();
var features_TKBMPOP_3 = format_TKBMPOP_3.readFeatures(json_TKBMPOP_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKBMPOP_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKBMPOP_3.addFeatures(features_TKBMPOP_3);
var lyr_TKBMPOP_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKBMPOP_3, 
                style: style_TKBMPOP_3,
                popuplayertitle: 'TKBMPOP',
                interactive: true,
    title: 'TKBMPOP<br />\
    <img src="styles/legend/TKBMPOP_3_0.png" /> 1105 - 1150<br />\
    <img src="styles/legend/TKBMPOP_3_1.png" /> 1150 - 1200<br />\
    <img src="styles/legend/TKBMPOP_3_2.png" /> 1200 - 1250<br />\
    <img src="styles/legend/TKBMPOP_3_3.png" /> 1250 - 1300<br />\
    <img src="styles/legend/TKBMPOP_3_4.png" /> 1300 - 1323<br />' });
var format_TKBMBOUND_4 = new ol.format.GeoJSON();
var features_TKBMBOUND_4 = format_TKBMBOUND_4.readFeatures(json_TKBMBOUND_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKBMBOUND_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKBMBOUND_4.addFeatures(features_TKBMBOUND_4);
var lyr_TKBMBOUND_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKBMBOUND_4, 
                style: style_TKBMBOUND_4,
                popuplayertitle: 'TKBMBOUND',
                interactive: true,
    title: 'TKBMBOUND<br />\
    <img src="styles/legend/TKBMBOUND_4_0.png" /> AMMAYARNADA<br />\
    <img src="styles/legend/TKBMBOUND_4_1.png" /> AZHAKATHU<br />\
    <img src="styles/legend/TKBMBOUND_4_2.png" /> DALAVAPURAM<br />\
    <img src="styles/legend/TKBMBOUND_4_3.png" /> DESAKKALLU<br />\
    <img src="styles/legend/TKBMBOUND_4_4.png" /> GUHANANDAPURAM<br />\
    <img src="styles/legend/TKBMBOUND_4_5.png" /> KUDAVOOR<br />\
    <img src="styles/legend/TKBMBOUND_4_6.png" /> MUTTATHU<br />\
    <img src="styles/legend/TKBMBOUND_4_7.png" /> NADAKKAVU<br />\
    <img src="styles/legend/TKBMBOUND_4_8.png" /> NJARAMMOODU<br />\
    <img src="styles/legend/TKBMBOUND_4_9.png" /> PALLIKKODI<br />\
    <img src="styles/legend/TKBMBOUND_4_10.png" /> PANAVILA<br />\
    <img src="styles/legend/TKBMBOUND_4_11.png" /> THEKKUMVILA<br />\
    <img src="styles/legend/TKBMBOUND_4_12.png" /> UDAYADITHYAPURAM<br />\
    <img src="styles/legend/TKBMBOUND_4_13.png" /> VADAKKEVILA<br />' });
var format_TKBMWARDCONTOUR_5 = new ol.format.GeoJSON();
var features_TKBMWARDCONTOUR_5 = format_TKBMWARDCONTOUR_5.readFeatures(json_TKBMWARDCONTOUR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKBMWARDCONTOUR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKBMWARDCONTOUR_5.addFeatures(features_TKBMWARDCONTOUR_5);
var lyr_TKBMWARDCONTOUR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKBMWARDCONTOUR_5, 
                style: style_TKBMWARDCONTOUR_5,
                popuplayertitle: 'TKBMWARDCONTOUR',
                interactive: true,
    title: 'TKBMWARDCONTOUR<br />\
    <img src="styles/legend/TKBMWARDCONTOUR_5_0.png" /> 0<br />\
    <img src="styles/legend/TKBMWARDCONTOUR_5_1.png" /> 10.000000000000000<br />\
    <img src="styles/legend/TKBMWARDCONTOUR_5_2.png" /> 20.000000000000000<br />' });
var format_TOURISTPOINTS_6 = new ol.format.GeoJSON();
var features_TOURISTPOINTS_6 = format_TOURISTPOINTS_6.readFeatures(json_TOURISTPOINTS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOURISTPOINTS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOURISTPOINTS_6.addFeatures(features_TOURISTPOINTS_6);
var lyr_TOURISTPOINTS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOURISTPOINTS_6, 
                style: style_TOURISTPOINTS_6,
                popuplayertitle: 'TOURISTPOINTS',
                interactive: true,
    title: 'TOURISTPOINTS<br />\
    <img src="styles/legend/TOURISTPOINTS_6_0.png" /> attraction<br />' });
var format_TKBMHOSPITAL_7 = new ol.format.GeoJSON();
var features_TKBMHOSPITAL_7 = format_TKBMHOSPITAL_7.readFeatures(json_TKBMHOSPITAL_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TKBMHOSPITAL_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TKBMHOSPITAL_7.addFeatures(features_TKBMHOSPITAL_7);
var lyr_TKBMHOSPITAL_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TKBMHOSPITAL_7, 
                style: style_TKBMHOSPITAL_7,
                popuplayertitle: 'TKBMHOSPITAL',
                interactive: true,
                title: '<img src="styles/legend/TKBMHOSPITAL_7.png" /> TKBMHOSPITAL'
            });
var format_AMENITYPOINTS_8 = new ol.format.GeoJSON();
var features_AMENITYPOINTS_8 = format_AMENITYPOINTS_8.readFeatures(json_AMENITYPOINTS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AMENITYPOINTS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AMENITYPOINTS_8.addFeatures(features_AMENITYPOINTS_8);
var lyr_AMENITYPOINTS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AMENITYPOINTS_8, 
                style: style_AMENITYPOINTS_8,
                popuplayertitle: 'AMENITYPOINTS',
                interactive: true,
    title: 'AMENITYPOINTS<br />\
    <img src="styles/legend/AMENITYPOINTS_8_0.png" /> bank<br />\
    <img src="styles/legend/AMENITYPOINTS_8_1.png" /> fuel<br />\
    <img src="styles/legend/AMENITYPOINTS_8_2.png" /> internet_cafe<br />\
    <img src="styles/legend/AMENITYPOINTS_8_3.png" /> library<br />\
    <img src="styles/legend/AMENITYPOINTS_8_4.png" /> place_of_worship<br />\
    <img src="styles/legend/AMENITYPOINTS_8_5.png" /> school<br />\
    <img src="styles/legend/AMENITYPOINTS_8_6.png" /> veterinary<br />' });
var format_WETLANDPOINTS_9 = new ol.format.GeoJSON();
var features_WETLANDPOINTS_9 = format_WETLANDPOINTS_9.readFeatures(json_WETLANDPOINTS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WETLANDPOINTS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WETLANDPOINTS_9.addFeatures(features_WETLANDPOINTS_9);
var lyr_WETLANDPOINTS_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WETLANDPOINTS_9, 
                style: style_WETLANDPOINTS_9,
                popuplayertitle: 'WETLANDPOINTS',
                interactive: true,
    title: 'WETLANDPOINTS<br />\
    <img src="styles/legend/WETLANDPOINTS_9_0.png" /> <br />' });

lyr_OpenTopoMap_0.setVisible(true);lyr_DIGITALELEVATIONMODEL_1.setVisible(true);lyr_LULC_2.setVisible(true);lyr_TKBMPOP_3.setVisible(true);lyr_TKBMBOUND_4.setVisible(true);lyr_TKBMWARDCONTOUR_5.setVisible(true);lyr_TOURISTPOINTS_6.setVisible(true);lyr_TKBMHOSPITAL_7.setVisible(true);lyr_AMENITYPOINTS_8.setVisible(true);lyr_WETLANDPOINTS_9.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_DIGITALELEVATIONMODEL_1,lyr_LULC_2,lyr_TKBMPOP_3,lyr_TKBMBOUND_4,lyr_TKBMWARDCONTOUR_5,lyr_TOURISTPOINTS_6,lyr_TKBMHOSPITAL_7,lyr_AMENITYPOINTS_8,lyr_WETLANDPOINTS_9];
lyr_TKBMPOP_3.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'Population': 'Population', });
lyr_TKBMBOUND_4.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', 'Population': 'Population', });
lyr_TKBMWARDCONTOUR_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_TOURISTPOINTS_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'sport': 'sport', 'operator_e': 'operator_e', 'panchayath': 'panchayath', 'opening_ho': 'opening_ho', 'ref': 'ref', 'website': 'website', 'phone': 'phone', 'man_made': 'man_made', 'content': 'content', 'tourism': 'tourism', 'shop': 'shop', 'healthcare': 'healthcare', 'email': 'email', 'healthca_1': 'healthca_1', 'addr_house': 'addr_house', 'addr_block': 'addr_block', 'government': 'government', 'office': 'office', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'fuel_gasol': 'fuel_gasol', 'fuel_diese': 'fuel_diese', 'leisure': 'leisure', 'salt': 'salt', 'intermitte': 'intermitte', 'religion': 'religion', 'building_l': 'building_l', 'landuse': 'landuse', 'layer': 'layer', 'bus': 'bus', 'public_tra': 'public_tra', 'wetland': 'wetland', 'place': 'place', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'operator_t': 'operator_t', 'operator': 'operator', 'grades': 'grades', 'building': 'building', 'amenity': 'amenity', 'addr_villa': 'addr_villa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'local_auth': 'local_auth', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'water': 'water', 'type': 'type', 'natural': 'natural', 'name_ml': 'name_ml', 'name': 'name', });
lyr_TKBMHOSPITAL_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'healthcare': 'healthcare', 'email': 'email', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_postc': 'addr_postc', 'ref': 'ref', 'operator_t': 'operator_t', 'operator': 'operator', 'name': 'name', 'healthca_1': 'healthca_1', 'descriptio': 'descriptio', 'addr_state': 'addr_state', 'addr_full': 'addr_full', 'addr_distr': 'addr_distr', 'addr_city': 'addr_city', });
lyr_AMENITYPOINTS_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'sport': 'sport', 'operator_e': 'operator_e', 'panchayath': 'panchayath', 'opening_ho': 'opening_ho', 'ref': 'ref', 'website': 'website', 'phone': 'phone', 'man_made': 'man_made', 'content': 'content', 'tourism': 'tourism', 'shop': 'shop', 'healthcare': 'healthcare', 'email': 'email', 'healthca_1': 'healthca_1', 'addr_house': 'addr_house', 'addr_block': 'addr_block', 'government': 'government', 'office': 'office', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'fuel_gasol': 'fuel_gasol', 'fuel_diese': 'fuel_diese', 'leisure': 'leisure', 'salt': 'salt', 'intermitte': 'intermitte', 'religion': 'religion', 'building_l': 'building_l', 'landuse': 'landuse', 'layer': 'layer', 'bus': 'bus', 'public_tra': 'public_tra', 'wetland': 'wetland', 'place': 'place', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'operator_t': 'operator_t', 'operator': 'operator', 'grades': 'grades', 'building': 'building', 'amenity': 'amenity', 'addr_villa': 'addr_villa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'local_auth': 'local_auth', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'water': 'water', 'type': 'type', 'natural': 'natural', 'name_ml': 'name_ml', 'name': 'name', });
lyr_WETLANDPOINTS_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'surface': 'surface', 'sport': 'sport', 'operator_e': 'operator_e', 'panchayath': 'panchayath', 'opening_ho': 'opening_ho', 'ref': 'ref', 'website': 'website', 'phone': 'phone', 'man_made': 'man_made', 'content': 'content', 'tourism': 'tourism', 'shop': 'shop', 'healthcare': 'healthcare', 'email': 'email', 'healthca_1': 'healthca_1', 'addr_house': 'addr_house', 'addr_block': 'addr_block', 'government': 'government', 'office': 'office', 'brand_wiki': 'brand_wiki', 'brand_wi_1': 'brand_wi_1', 'brand': 'brand', 'fuel_gasol': 'fuel_gasol', 'fuel_diese': 'fuel_diese', 'leisure': 'leisure', 'salt': 'salt', 'intermitte': 'intermitte', 'religion': 'religion', 'building_l': 'building_l', 'landuse': 'landuse', 'layer': 'layer', 'bus': 'bus', 'public_tra': 'public_tra', 'wetland': 'wetland', 'place': 'place', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_city': 'addr_city', 'operator_t': 'operator_t', 'operator': 'operator', 'grades': 'grades', 'building': 'building', 'amenity': 'amenity', 'addr_villa': 'addr_villa', 'addr_state': 'addr_state', 'addr_distr': 'addr_distr', 'local_auth': 'local_auth', 'boundary': 'boundary', 'admin_leve': 'admin_leve', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'water': 'water', 'type': 'type', 'natural': 'natural', 'name_ml': 'name_ml', 'name': 'name', });
lyr_TKBMPOP_3.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'Population': 'TextEdit', });
lyr_TKBMBOUND_4.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', 'Population': 'TextEdit', });
lyr_TKBMWARDCONTOUR_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_TOURISTPOINTS_6.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'sport': 'TextEdit', 'operator_e': 'TextEdit', 'panchayath': 'TextEdit', 'opening_ho': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'man_made': 'TextEdit', 'content': 'TextEdit', 'tourism': 'TextEdit', 'shop': 'TextEdit', 'healthcare': 'TextEdit', 'email': 'TextEdit', 'healthca_1': 'TextEdit', 'addr_house': 'TextEdit', 'addr_block': 'TextEdit', 'government': 'TextEdit', 'office': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'fuel_gasol': 'TextEdit', 'fuel_diese': 'TextEdit', 'leisure': 'TextEdit', 'salt': 'TextEdit', 'intermitte': 'TextEdit', 'religion': 'TextEdit', 'building_l': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'bus': 'TextEdit', 'public_tra': 'TextEdit', 'wetland': 'TextEdit', 'place': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'grades': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_villa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'local_auth': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'water': 'TextEdit', 'type': 'TextEdit', 'natural': 'TextEdit', 'name_ml': 'TextEdit', 'name': 'TextEdit', });
lyr_TKBMHOSPITAL_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'healthcare': 'TextEdit', 'email': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'addr_postc': 'TextEdit', 'ref': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'healthca_1': 'TextEdit', 'descriptio': 'TextEdit', 'addr_state': 'TextEdit', 'addr_full': 'TextEdit', 'addr_distr': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_AMENITYPOINTS_8.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'sport': 'TextEdit', 'operator_e': 'TextEdit', 'panchayath': 'TextEdit', 'opening_ho': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'man_made': 'TextEdit', 'content': 'TextEdit', 'tourism': 'TextEdit', 'shop': 'TextEdit', 'healthcare': 'TextEdit', 'email': 'TextEdit', 'healthca_1': 'TextEdit', 'addr_house': 'TextEdit', 'addr_block': 'TextEdit', 'government': 'TextEdit', 'office': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'fuel_gasol': 'TextEdit', 'fuel_diese': 'TextEdit', 'leisure': 'TextEdit', 'salt': 'TextEdit', 'intermitte': 'TextEdit', 'religion': 'TextEdit', 'building_l': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'bus': 'TextEdit', 'public_tra': 'TextEdit', 'wetland': 'TextEdit', 'place': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'grades': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_villa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'local_auth': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'water': 'TextEdit', 'type': 'TextEdit', 'natural': 'TextEdit', 'name_ml': 'TextEdit', 'name': 'TextEdit', });
lyr_WETLANDPOINTS_9.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'surface': 'TextEdit', 'sport': 'TextEdit', 'operator_e': 'TextEdit', 'panchayath': 'TextEdit', 'opening_ho': 'TextEdit', 'ref': 'TextEdit', 'website': 'TextEdit', 'phone': 'TextEdit', 'man_made': 'TextEdit', 'content': 'TextEdit', 'tourism': 'TextEdit', 'shop': 'TextEdit', 'healthcare': 'TextEdit', 'email': 'TextEdit', 'healthca_1': 'TextEdit', 'addr_house': 'TextEdit', 'addr_block': 'TextEdit', 'government': 'TextEdit', 'office': 'TextEdit', 'brand_wiki': 'TextEdit', 'brand_wi_1': 'TextEdit', 'brand': 'TextEdit', 'fuel_gasol': 'TextEdit', 'fuel_diese': 'TextEdit', 'leisure': 'TextEdit', 'salt': 'TextEdit', 'intermitte': 'TextEdit', 'religion': 'TextEdit', 'building_l': 'TextEdit', 'landuse': 'TextEdit', 'layer': 'TextEdit', 'bus': 'TextEdit', 'public_tra': 'TextEdit', 'wetland': 'TextEdit', 'place': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_city': 'TextEdit', 'operator_t': 'TextEdit', 'operator': 'TextEdit', 'grades': 'TextEdit', 'building': 'TextEdit', 'amenity': 'TextEdit', 'addr_villa': 'TextEdit', 'addr_state': 'TextEdit', 'addr_distr': 'TextEdit', 'local_auth': 'TextEdit', 'boundary': 'TextEdit', 'admin_leve': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'water': 'TextEdit', 'type': 'TextEdit', 'natural': 'TextEdit', 'name_ml': 'TextEdit', 'name': 'TextEdit', });
lyr_TKBMPOP_3.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'inline label - visible with data', 'LSGD': 'inline label - visible with data', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'inline label - always visible', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'Population': 'inline label - always visible', });
lyr_TKBMBOUND_4.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - always visible', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', 'Population': 'no label', });
lyr_TKBMWARDCONTOUR_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_TOURISTPOINTS_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'surface': 'no label', 'sport': 'no label', 'operator_e': 'no label', 'panchayath': 'no label', 'opening_ho': 'no label', 'ref': 'no label', 'website': 'no label', 'phone': 'no label', 'man_made': 'no label', 'content': 'no label', 'tourism': 'inline label - always visible', 'shop': 'no label', 'healthcare': 'no label', 'email': 'no label', 'healthca_1': 'no label', 'addr_house': 'no label', 'addr_block': 'no label', 'government': 'no label', 'office': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'fuel_gasol': 'no label', 'fuel_diese': 'no label', 'leisure': 'no label', 'salt': 'no label', 'intermitte': 'no label', 'religion': 'no label', 'building_l': 'no label', 'landuse': 'no label', 'layer': 'no label', 'bus': 'no label', 'public_tra': 'no label', 'wetland': 'no label', 'place': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'grades': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_villa': 'no label', 'addr_state': 'no label', 'addr_distr': 'no label', 'local_auth': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'water': 'no label', 'type': 'no label', 'natural': 'no label', 'name_ml': 'no label', 'name': 'inline label - always visible', });
lyr_TKBMHOSPITAL_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'healthcare': 'no label', 'email': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'addr_postc': 'no label', 'ref': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'name': 'inline label - always visible', 'healthca_1': 'no label', 'descriptio': 'no label', 'addr_state': 'no label', 'addr_full': 'no label', 'addr_distr': 'no label', 'addr_city': 'no label', });
lyr_AMENITYPOINTS_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'surface': 'no label', 'sport': 'no label', 'operator_e': 'no label', 'panchayath': 'no label', 'opening_ho': 'no label', 'ref': 'no label', 'website': 'no label', 'phone': 'no label', 'man_made': 'no label', 'content': 'no label', 'tourism': 'no label', 'shop': 'no label', 'healthcare': 'no label', 'email': 'no label', 'healthca_1': 'no label', 'addr_house': 'no label', 'addr_block': 'no label', 'government': 'no label', 'office': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'fuel_gasol': 'no label', 'fuel_diese': 'no label', 'leisure': 'no label', 'salt': 'no label', 'intermitte': 'no label', 'religion': 'no label', 'building_l': 'no label', 'landuse': 'no label', 'layer': 'no label', 'bus': 'no label', 'public_tra': 'no label', 'wetland': 'no label', 'place': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'grades': 'no label', 'building': 'no label', 'amenity': 'inline label - always visible', 'addr_villa': 'no label', 'addr_state': 'no label', 'addr_distr': 'no label', 'local_auth': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'water': 'no label', 'type': 'no label', 'natural': 'no label', 'name_ml': 'no label', 'name': 'no label', });
lyr_WETLANDPOINTS_9.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'surface': 'no label', 'sport': 'no label', 'operator_e': 'no label', 'panchayath': 'no label', 'opening_ho': 'no label', 'ref': 'no label', 'website': 'no label', 'phone': 'no label', 'man_made': 'no label', 'content': 'no label', 'tourism': 'no label', 'shop': 'no label', 'healthcare': 'no label', 'email': 'no label', 'healthca_1': 'no label', 'addr_house': 'no label', 'addr_block': 'no label', 'government': 'no label', 'office': 'no label', 'brand_wiki': 'no label', 'brand_wi_1': 'no label', 'brand': 'no label', 'fuel_gasol': 'no label', 'fuel_diese': 'no label', 'leisure': 'no label', 'salt': 'no label', 'intermitte': 'no label', 'religion': 'no label', 'building_l': 'no label', 'landuse': 'no label', 'layer': 'no label', 'bus': 'no label', 'public_tra': 'no label', 'wetland': 'inline label - always visible', 'place': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_city': 'no label', 'operator_t': 'no label', 'operator': 'no label', 'grades': 'no label', 'building': 'no label', 'amenity': 'no label', 'addr_villa': 'no label', 'addr_state': 'no label', 'addr_distr': 'no label', 'local_auth': 'no label', 'boundary': 'no label', 'admin_leve': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'water': 'no label', 'type': 'no label', 'natural': 'no label', 'name_ml': 'no label', 'name': 'no label', });
lyr_WETLANDPOINTS_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});