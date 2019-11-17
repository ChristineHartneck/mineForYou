$(document).ready(function(){
    $("#login-bn").click(function(){
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
    $("#sign-up-bn").click(function(){
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