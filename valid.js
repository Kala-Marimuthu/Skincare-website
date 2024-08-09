function validateForm() {
    var email = document.getElementById("email1").value;
    var password = document.getElementById("password1").value;
    var emailError = document.getElementById("email_error");
    var passError = document.getElementById("pass_error");
    var valid = true;

    if (email === "") {
        emailError.style.display = "block";
        valid = false;
    } else {
        emailError.style.display = "none";
    }

    if (password === "") {
        passError.style.display = "block";
        valid = false;
    } else {
        passError.style.display = "none";
    }

    return valid;
}
