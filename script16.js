$(function () {

    $('#success').hide();
    $('#startover').addClass('hoverOut');


    var score = 0;



    $('#bobhead').click(function () {

        score++;
        $('#score').text(score);
        $('#success').show('fast').fadeOut(400);
    })

    $('#startover').hover(function () {

        score = 0;
        $('#score').text(score);
        $('#startover').addClass('hoverIn').remove('hoverOut');
    }, function () {
        $('#startover').removeClass('hoverIn').addClass('hoverOut');
        

    });

});






/*$(function() {

  $('#success').hide();
  $('#startover').addClass('hoverOut');
  var score = 0;

  $('#bobhead').click(function() {

    score++;
    $('#score').text(score); 
    $('#success').show('slow').fadeOut(2000);     

  });

  $('#startover').hover(function() {
    score = 0;
    $('#score').text(score); 
    $('#startover').addClass('hoverIn').removeClass('hoverOut');
  }, function() {
    $('#startover').removeClass('hoverIn').addClass('hoverOut');

  });


});*/