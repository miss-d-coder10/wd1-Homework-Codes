window.addEventListener("DOMContentLoaded", run);

function run(){
  // objects
  var boomer = document.getElementById('boomBox');
  var buttons = document.getElementsByTagName('button');
  var ary_sounds = ['Work It','Make It', 'Do it', 'Makes Us', 'Harder', 'Better', 'Faster', 'Stronger','More Than','Hour','Our','Never','Ever','After','Work Is','Over'];

  for (var i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', addSound);
    buttons[i].setAttribute("data-number", i);
  }
  function addSound(){
    var n = this.getAttribute('data-number');
    boomer.src = 'media/' + ary_sounds[n].replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.wav';
    boomer.play();
  }
}
