"use strict";

// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes

var restaurants = restaurants || {};

restaurants.getrestaurants = function () {
  $.get("http://localhost:3000/api/restaurants/").done(this.loopThroughRestaurants);
};

restaurants.loopThroughRestaurants = function (data) {
  $.each(data.restaurants, function (index, restaurant) {
    // console.log(restaurant);
    restaurants.createMarker(restaurant);
  });
};

restaurants.mapSetup = function () {
  var mapId = document.getElementById("map");
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.515, -0.08)
  };
  this.map = new google.maps.Map(mapId, mapOptions); //this = #document. CREATING A FUNCTION
  this.getrestaurants();
};

restaurants.createMarker = function (restaurant) {
  console.log("restaurant:", restaurant);
  var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  var markerOptions = {
    position: latLng,
    map: restaurants.map
  };

  var marker = new google.maps.Marker(markerOptions);
};

$(restaurants.mapSetup.bind(restaurants));