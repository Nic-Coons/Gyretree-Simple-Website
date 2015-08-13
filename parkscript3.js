

//hides all elements until question answered

$(function () {
    
    $('#game').hide();
    $('#success').hide();
    var kittyButton1 = document.getElementById('kitties');     
    $(kittyButton1).hide();

   


})


//greeting popup with kitty destination
function substitute() {

    var myValue = prompt("Where should this kitty live?");

    var myTitle = document.getElementById('title');
    title.innerHTML = myValue + " Land!";

}




//personal greeting from textfield
$(function () {


    $('#game').hide();
    $('#success').hide();
    $('#nameButton').click(function () {
        var name = document.getElementById('visitorName').value;
        $('#success').text("Hello " + name + "!");
        $('#success').show('fast').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).delay("slow");
        $('#game').show();
        var kittyButton1 = document.getElementById('kitties');
        $(kittyButton1).show();
        
    })


});
 






function spy() {
    var imgSwap = document.getElementById('catpic');
    $(function () {
        imgSwap.src = 'Surprised-Kitten.jpg';
    });

    alert('Oh no meow! You found me!');

    //$('#kittenbutton3').toggle(function () {
    //    ('#catpic').attr('src', 'Surprised-Kitten.jpg');
    //}, function () {
    //    ('#catpic').attr('src', 'Kitten.jpg');
    //}

    //)

}



var $$ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
    var faqs = $$("faqs");
    var h2Elements = faqs.getElementsByTagName("h2");
    var h2Node;
    for (var i = 0; i < h2Elements.length; i++) {
        h2Node = h2Elements[i];
        //Attach Even handler
        h2Node.onmouseenter = function () {
            var h2 = this; //h2 is the current headingNode obj

            if (h2.nextElementSibling.getAttribute("class") == "closed") {
                h2.nextElementSibling.setAttribute("class", "open");
            }
            else {
                h2.nextElementSibling.setAttribute("class", "closed");
            }
        }
    }

}


//slideshow

$(function () {
    var nextSlide = $("#slides img:first-child");
    var nextCaption;
    var nextSlideSource;
    //start
    setInterval(
        function () {
            $("#caption").fadeOut(1000);
            $("#slide").fadeOut(1000,
                function () {
                    if (nextSlide.next().length == 0) {
                        nextSlide = $("#slides img:first-child");
                    } else {
                        nextSlide = nextSlide.next();
                    }
                    nextSlideSource = nextSlide.attr("src");
                    nextCaption = nextSlide.attr("alt");
                    $("#slide").attr("src", nextSlideSource).fadeIn(1000);
                    $("#caption").text(nextCaption).fadeIn(1000);
                }
           )
        },
    3000);
})






//window.onload = function () {
//    var faqs = $("faqs");
//    var h2Elements = faqs.getElementsByTagName("h2");
//    var h2Node;
//    for (var i = 0; i < h2Elements.length; i++) {
//        h2Node = h2Elements[i];
//        //Attach Even handler
//        h2Node.onclick = function () {
//            var h2 = this; //h2 is the current headingNode obj
            
//            if (h2.getAttribute("class") == "plus") {
//                h2.setAttribute("class", "minus");
//            }
//            else {
//                h2.getAttribute("class", "plus");
//            }
//            if (h2.nextElementSibling.getAttribute("class") == "closed") {
//                h2.nextElementSibling.setAttribute("class", "open");
//            }
//            else {
//                h2.nextElementSibling.setAttribute("class", "closed");
//            }
//        }
//    }
//    $("first_link").focus();
//}


















/////////////////////////////////////////////////////////////////////////////



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


////toggle images
//$(function () {
//    //var version = "1.2";
//    //alert(window.version);

//    /*
//    $('#clickMe').click(function() {
//      $('#main').append('You should only see this if you click the plus!');
//    }); 
//     */

//    $('#main').append("<img src='plus-8.png' alt='Click me to see the paragraph' id='clickMe' />");

//    $('#clickMe').toggle(function () {
//        $('#message').show('fast');
//        $('#clickMe').attr('src', 'minus-8.png');

//    }, function () {
//        $('#message').hide('slow');
//        $('#clickMe').attr('src', 'plus-8.png');
//    });

//    $('#message').hide();

//});