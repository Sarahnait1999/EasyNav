"use strict";

// initialize map
var map = new GMaps({
  div: '#map',
  lat: 48.85966593647314,
  lng: 2.3526007291381346
});
// initialize map geolocation
GMaps.geolocate({
  // when geolocation is allowed by user
  success: function(position) {
    // set center map according to user position
    map.setCenter(position.coords.latitude, position.coords.longitude);
    // add a marker to the map
    map.addMarker({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      title: 'You'
    });
  },
  // when geolocation is blocked by the user
  error: function(error) {
    toastr.error('Geolocation failed: '+error.message);
  },
  // when the user's browser does not support
  not_supported: function() {
    toastr.error("Your browser does not support geolocation");
  }
});
