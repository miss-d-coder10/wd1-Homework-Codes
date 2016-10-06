$(function(){
  // console.log("test");
  console.log(window.tweets); // all objects listed on this


  var $ol = $(".stream-items");
  var $form = $("#form");
  var $userInput = $("#new-tweet-form");

  var newInput = {
      created_at: "",
      name: "",
      screen_name: "",
      text: "",
      user_thumbnail: "",
  };
    // console.log(newInput);



  $.each(window.tweets, function(i, tweet){
    // console.log(i); this is the index
    $ol.append( '<li class="stream-item">' +
      '<div class="tweet">' +
          '<a href="#">' +
          '<img src="' + tweet.user_thumbnail + '"alt="User image goes here.">' +  '</a>' +
        '<div class="content">' +
          '<strong class="fullname">' + tweet.name + '</strong>' +
          '<span>&rlm;</span>' +
          '<span>@</span>' + '<b>'+ tweet.screen_name + '</b>' + '&nbsp;&middot;&nbsp;' +
          '<small class="time">' + tweet.created_at + '</small>' +
          '<p>' + tweet.text +  '</p>' +
        '</div>' +
      '</div>' +
    '</li>'

    );
  });

  // $(document).ready(function(){
  //     $("#btn1").click(function(){
  //         $("p").prepend("<b>Prepended text</b>. ");
  //     });
  //     $("#btn2").click(function(){
  //         $("ol").prepend("<li>Prepended item</li>");
  //     });


////////////////////doesnt work. text doesnt clear after submission. unable to capture the var object that will be added on the existing object
  $userInput.on("submit", function(e) {
        e.preventDefault();
        input = "";
      // console.log("submitted");
      var input = ($("#new-tweet-input").val());
      

      // console.log(input);
      // $.each(newInput, function(key, value){
      //   // console.log(b);

      $ol.prepend(
          '<li class="stream-item">' +
          '<div class="tweet">' +
              '<a href="#">' +
              '<img src="http://facehoff.herokuapp.com/50/50"' + 'alt="User image goes here.">' +  '</a>' +
            '<div class="content">' +
              '<strong class="fullname">' + newInput[3] + '</strong>' +
              '<span>&rlm;</span>' +
              '<span>@</span>' + '<b>'+ newInput[2] + '</b>' + '&nbsp;&middot;&nbsp;' +
              '<small class="time">' + "11mins" + '</small>' +
              '<p>' + input +  '</p>' +
            '</div>' +
          '</div>' +
        '</li>'




      );

    });


      // });
  });









//  $(function(){
//    console.log("js loaded");
//
//  $("#operations").click(function(){
//      console.log("clicked");
//
//  var $input1 =
//  var $input2 =
//  var $operations =
//    });
//
//
//
//
//
//
//
//
//
//
//
// });

// $.each(instructionalTeam, function(i, teamMember){
//   // console.log(i);
//   // console.log(teamMember);
//   $ul.append('<li><h3>' + teamMember.firstname + " " + teamMember.lastname +'</h3><p>' +  teamMember.role + '</p></li>');
// });
// });
