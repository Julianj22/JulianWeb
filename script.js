
  // $(".header").hover(function(){
  //   $("#ulian").animate({
  //     width: 'toggle'
  //   });
  //   $("#acklin").animate({
  //     width: 'toggle'
      
  //   });
  // });
$('.imgcont').css('opacity', '0');

$(document).ready(function() {
  // Set opacity to 1 to fade in the images
  $('.imgcont').each(function(index) {
    $(this).delay(500 * index).animate({ opacity: 1 });
  });
});

$('.wall_img').css('opacity', '0');

$(document).ready(function() {
  // Set opacity to 1 to fade in the images
  $('.wall_img').each(function(index) {
    $(this).delay(400 * index).animate({ opacity: 1 });
  });
});

$(document).ready(function() {
  // Set opacity to 1 to fade in the images
  $('.bot').each(function() {
    $(this).delay(1600).animate({ opacity: 1 });
  });
});




$(document).ready(function() {
  // Set opacity to 1 to fade in the images
  $('.pageText').each(function() {
    $(this).delay(200).animate({ opacity: 1 });
  });
});




