// You will need to get your GoogleMaps API key
// Make a request to the API to get all of the restaurants
// Display then on the page with GMaps
// BONUS: Mark your current location on the map
// BONUS BONUS: Add restul routes

var restaurants = restaurants || {};

restaurants.getrestaurants = function (){
  $.get("http://localhost:3000/api/restaurants/")
    .done(this.loopThroughRestaurants);

};
//loop through the data that comes back from the server after being requested "GET"
restaurants.loopThroughRestaurants = (data) =>{
  $.each(data.restaurants, (index, restaurant) => {
    // console.log(restaurant);
    restaurants.createMarker(restaurant);
  });
};
//google map set up. creating a map
restaurants.mapSetup = function() {
  let mapId = document.getElementById("map");
  let mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.515, -0.08)
  };
  this.map = new google.maps.Map(mapId, mapOptions); //this = #document. CREATING A FUNCTION
  this.getrestaurants();
};

//adding the marker on the map
restaurants.createMarker = (restaurant) => {
  console.log("restaurant:", restaurant);
  let latLng = new google.maps.LatLng(restaurant.lat, restaurant.lng);
  let markerOptions = {
    position: latLng,
    map: restaurants.map,
  };
  let marker = new google.maps.Marker(markerOptions);
  restaurants.addInfoWindowForRestaurants(restaurant, marker);
};


restaurants.addInfoWindowForRestaurants = function (restaurant, marker){
  google.maps.event.addListener(marker, "click", () => {
    if(this.infowindow){
      this.infowindow.close();
    }
    this.infowindow = new google.maps.InfoWindow({
      content: `<img src="${restaurant.image}">
      <p>${restaurant.name}</p>
      <p>${restaurant.description}</p>`
    });
    this.infowindow.open(this.map, marker);
  });
};

$(restaurants.mapSetup.bind(restaurants));


navigator.geolocation.getCurrentPosition((position) => {
  let latLng = {lat: position.coords.latitude,
                lng: position.coords.longitude

  };
  console.log(latLng);

    let marker = new google.maps.Marker({
      position: latLng,
      animation: google.maps.Animation.DROP,
      map: googleMaps.map
    });
  });
