function login() {
    alert(name2);
}






function validate() {
    var name = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var verify = document.getElementById("verify").value;
    var firstName = document.getElementById("first_name").value;
    if (name == null || name == "") {
        alert("Email can't be blank");
        return false;
    } 
    else if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    } else if (firstName == null || firstName == "") {
        alert("Please enter your name")
        return false;
    }
    if (verify !== password) {
        alert("Passwords Don't Match");
        return false;
    }

    
}




//$(function () {
   
//    //adds span element for validation errors
//    $(":text, :password").after("<span>*</span>");

//    //validation
//    $("#member_form").submit(
//        function (event) {
//            var isValid = true;
//            ////validates with regular expression
//            //var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
//            //var email = $("#email").val();
//            //if (email == "") {
//            //    $("#email").next().text("This Field is Required.");
//            //    isValid = false;
//            //} else if (!emailPattern.test(email)) {
//            //    $("#email").next().text("Must be a Valid Email.");
//            //    isValid = false;
//            //} else {
//            //    $("#email").next().text("");
//            //}

//            //val for pw
//            var password = $("#password").val();
//            if (password.length < 6) {
//                $("#password").next().text("Must be at least 6 characters");
//                isValid = false;
//            } else {
//                $("#password").next().text("");
//            }

//            //val first name
//            var firstName = $("#first_name").val().trim;
//            if (firstname == "") {
//                $("#first_name").next().text("This Field is Required.");
//                isValid = false;
//            } else {
//                $("#first_name").val(firstname);
//                $("#first_name").next().text("");
//            }

//            //prevents invalid submission
//            if (isValid == false) {
//                event.preventDefault();
//            }

//        }
//    );
//});