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
//loop through the data that comes back from the server after being requested "GET"
restaurants.loopThroughRestaurants = function (data) {
  $.each(data.restaurants, function (index, restaurant) {
    // console.log(restaurant);
    restaurants.createMarker(restaurant);
  });
};
//google map set up. creating a map
restaurants.mapSetup = function () {
  var mapId = document.getElementById("map");
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.515, -0.08)
  };
  this.map = new google.maps.Map(mapId, mapOptions); //this = #document. CREATING A FUNCTION
  this.getrestaurants();
};

//adding the marker on the map
restaurants.createMarker = function (restaurant) {
  console.log("restaurant:", restaurant);
  var latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  var markerOptions = {
    position: latLng,
    map: restaurants.map
  };
  var marker = new google.maps.Marker(markerOptions);
  restaurants.addInfoWindowForRestaurants(restaurant, marker);
};

restaurants.addInfoWindowForRestaurants = function (restaurant, marker) {
  var _this = this;

  google.maps.event.addListener(marker, "click", function () {
    if (_this.infowindow) {
      _this.infowindow.close();
    }
    _this.infowindow = new google.maps.InfoWindow({
      content: "<img src=\"" + restaurant.image + "\">\n      <p>" + restaurant.name + "</p>\n      <p>" + restaurant.description + "</p>"
    });
    _this.infowindow.open(_this.map, marker);
  });
};

$(restaurants.mapSetup.bind(restaurants));