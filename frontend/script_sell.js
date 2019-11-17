$(document).ready(function () {
    $("#add").click(function (event) {
        event.preventDefault()
        if ($("#picture").val() == "") {
            $("#pictureerror").text("* Please input a photo url")
        }
        else {
            $("#pictureerror").text("")
        }

        if ($("#title").val() == "") {
            $("#titleerror").text("* Please create a title for your listing")
        }
        else {
            $("#titleerror").text("")
        }

        if ($("#price").val() == "") {
            $("#priceerror").text("* Please create a price for your listing")
        }
        else {
            $("#priceerror").text("")
        }

        if ($("#description").val() == "") {
            $("#descriptionerror").text("* Please create a description for your listing")
        }
        else {
            $("#descriptionerror").text("")
        }

        if ($("#gender").val() == "select") {
            $("#gendererror").text("* Please choose a gender for your listing")
        }
        else {
            $("#gendererror").text("")
        }

        if ($("#category").val() == "select") {
            $("#categoryerror").text("* Please choose a category for your listing")
        }
        else {
            $("#categoryerror").text("")
        }

        if ($("#size").val() == "select") {
            $("#sizeerror").text("* Please choose a size for your listing")
        }
        else {
            $("#sizeerror").text("")
        }

        if ($("#colour").val() == "select") {
            $("#colourerror").text("* Please choose a colour for your listing")
        }
        else {
            $("#colourerror").text("")
        }
    })
})