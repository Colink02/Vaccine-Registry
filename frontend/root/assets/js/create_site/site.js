proj4.defs("ESRI:102696","+proj=tmerc +lat_0=35.8333333333333 +lon_0=-90.5 +k=0.999933333333333 +x_0=250000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs +type=crs");
proj4.defs("ESRI:102697","+proj=tmerc +lat_0=35.8333333333333 +lon_0=-92.5 +k=0.999933333333333 +x_0=500000.000000001 +y_0=0 +datum=NAD83 +units=us-ft +no_defs +type=crs");
proj4.defs("ESRI:102698","+proj=tmerc +lat_0=36.1666666666667 +lon_0=-94.5 +k=0.999941176470588 +x_0=850000 +y_0=0 +datum=NAD83 +units=us-ft +no_defs +type=crs");
ol.proj.proj4.register(proj4);
var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    //MIN X, Y, MAX X, Y
    extent: [-10661067.63327181, 4297869.751737669, -9918566.629680675, 4954985.832353976],
    center: [-10382285.999155946,4273342.734820133],
    projection: "EPSG:3857",
    zoom: 1
  })
});
map.on('postcompose',function(e){
  document.querySelector('canvas').style.filter="invert(90%)";
});
