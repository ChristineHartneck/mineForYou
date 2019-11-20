$('#Sign-up').on('click', function () {
    event.preventDefault()
    if ($("#username").val() == "") {
        return $("#usernameerror").text("* Please provide your username")
    }
    else {
        $("#usernameerror").text("")
    }

    if ($("#password").val() == "") {
        return $("#passworderror").text("* Please provide your password")
    }
    else {
        $("#passworderror").text("")
    }
    let obj = {
        username: $('#username').val(),
        password: $('#password').val()
    }
    $.ajax({
        url: "/api/user/register",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json",
        success: function () {
            $('#successlog').text("Account created, try logging in!");
        },
        error: function () {
            $('#passworderror').text("Username already exists, please try a different one")
        }
    })
})

$('#Login').on('click', function () {
    event.preventDefault()
    if ($("#username").val() == "") {
        return $("#usernameerror").text("* Please provide your username")
    }
    else {
        $("#usernameerror").text("")
    }

    if ($("#password").val() == "") {
        return $("#passworderror").text("* Please provide your password")
    }
    else {
        $("#passworderror").text("")
    }
    let obj = {
        username: $('#username').val(),
        password: $('#password').val()
    }
    $.ajax({
        url: "/api/user/login",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json",
        success: function () {
            window.localStorage;
            var username = obj.username;
            localStorage.setItem("username", username);
            $(location).attr('href', 'main.html');
        },
        error: function () {
            $('#passworderror').text("Username or password not correct, please try again")
        }
    })
})

