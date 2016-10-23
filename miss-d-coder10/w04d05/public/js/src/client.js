$(function() {
    getWands();
    $('form').on('submit', createWands);
});

const addWand = (wand) => {
  $('#displaywands').prepend(`<li> Wand Name: ${wand.wandName} - Description: ${wand.description} - Power Rating: ${wand.power} - Size in inches: ${wand.sizeInches}  </li>`);
};

const getWands = () => {
  $.ajax({
    method: 'GET',
    url: "http://localhost:8000/wands"
  })
  .done((wand) => {
    console.log(wand);
    $.each(wand, (index, wand) => {
      addWand(wand);
    });
  });
};

const createWands = (e) => {
  e.preventDefault();

  $.ajax({
    method: 'POST',
    url: "http://localhost:8000/wands",
    data: $('form').serialize()
  }).done((wand) => {
    addWand(wand);
  });
};
