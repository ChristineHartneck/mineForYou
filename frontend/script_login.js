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

$.ajax({
	url: "/api/user/register",
	method: "POST",
	success : function(responseJSON){
		console.log(responseJSON);
	}
})