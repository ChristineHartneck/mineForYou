$(document).ready(function(){
    $("#Login").click(function(){
        event.preventDefault()
        if($("#username").val()==""){
            $("#usernameerror").text("* Please provide your name")
        }
        else{
            $("#usernameerror").text("")
        }

        if($("#password").val()==""){
            $("#passworderror").text("* Please provide your password")
        }
        else{
            $("#passworderror").text("")
        }
    })
    $("#Sign-up").click(function(){
        event.preventDefault()
        if($("#username").val()==""){
            $("#usernameerror").text("* Please provide your name")
        }
        else{
            $("#usernameerror").text("")
        }

        if($("#password").val()==""){
            $("#passworderror").text("* Please provide your password")
        }
        else{
            $("#passworderror").text("")
        }
    })
})

$('#Sign-up').on('click',function(){
    let obj = {
        username: $('#username').val(),
        password: $('#password').val()
    }
    console.log(obj);
    $.ajax({
        url: "/api/user/register",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json",
        success : function(responseJSON){
            $(location).attr('href','main.html');
        },
        error: function(responseJSON){
            console.log(responseJSON);
        }
    })
})
