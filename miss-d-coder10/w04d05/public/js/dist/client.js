'use strict';

$(function () {
  getWands();
  $('form').on('submit', createWands);
});

var addWand = function addWand(wand) {
  $('#displaywands').prepend('<li> Wand Name: ' + wand.wandName + ' - Description: ' + wand.description + ' - Power Rating: ' + wand.power + ' - Size in inches: ' + wand.sizeInches + '  </li>');
};

var getWands = function getWands() {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/wands"
  }).done(function (wand) {
    console.log(wand);
    $.each(wand, function (index, wand) {
      addWand(wand);
    });
  });
};

var createWands = function createWands(e) {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/wands",
    data: $('form').serialize()
  }).done(function (wand) {
    addWand(wand);
  });
};