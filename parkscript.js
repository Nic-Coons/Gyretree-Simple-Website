// JavaScript source code
$(function () {

    $('#success').hide();

    // var Visitor = prompt("Welcome! Whats your name?")

    //$('#welcomeSign').text("Visitor");

    /*$('#nameButton').onClick(function () {
        $('#welcomeSign').text(visitorName);
    });*/

});

function substitute() {

    

    var myValue = prompt("Where should this kitty live?");
    
    var myTitle = document.getElementById('title');
    title.innerHTML = myValue + " Land!";
    
}





//var $ = function (id) {
//    return document.getElementById(id);
//}

var calculateKpm = function () {
    
    var kittens = parseFloat($("kittens").value);
    var miles = parseFloat($("miles").value);
    
    if (isNaN(kittens) || isNaN(miles)) {
        alert("Both entries must be numbers");
    } else {
        var kpm = kittens / miles;
        $("kpm").value = kpm.toFixed(1)
    }
}

window.onload = function() {
    $("calculate").onclick = calculateKpm;
   // $("kittens").focus();
}

