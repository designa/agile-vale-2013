;(function(w, d, g, u) {

  var marker, position, config, map, gMaps = g.maps;

  position = new gMaps.LatLng(-23.156371,-45.792925),

  config = {
      center: position,
      mapTypeControl: false,
      mapTypeId: gMaps.MapTypeId.ROADMAP,
      scrollwheel: false,
      zoom: 16
  };

  map = new gMaps.Map(d.getElementById("location-map"), config);

  marker = new gMaps.Marker({
      animation: gMaps.Animation.BOUNCE,
      map: map,
      position: position
  });

}(window, document, google, undefined));