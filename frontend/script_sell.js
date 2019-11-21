$('#add').on('click', function () {
    event.preventDefault()
    if ($("#picture").val() == "") {
        return $("#pictureerror").text("* Please input a photo url")
    }
    else {
        $("#pictureerror").text("")
    }

    if ($("#title").val() == "") {
        return $("#titleerror").text("* Please create a title for your listing")
    }
    else {
        $("#titleerror").text("")
    }

    if ($("#price").val() == "") {
        return $("#priceerror").text("* Please create a price for your listing")
    }
    else {
        $("#priceerror").text("")
    }

    if ($("#description").val() == "") {
        return $("#descriptionerror").text("* Please create a description for your listing")
    }
    else {
        $("#descriptionerror").text("")
    }

    if ($("#gender").val() == "select") {
        return $("#gendererror").text("* Please choose a gender for your listing")
    }
    else {
        $("#gendererror").text("")
    }

    if ($("#category").val() == "select") {
        return $("#categoryerror").text("* Please choose a category for your listing")
    }
    else {
        $("#categoryerror").text("")
    }

    if ($("#size").val() == "select") {
        return $("#sizeerror").text("* Please choose a size for your listing")
    }
    else {
        $("#sizeerror").text("")
    }

    if ($("#colour").val() == "select") {
        return $("#colourerror").text("* Please choose a colour for your listing")
    }
    else {
        $("#colourerror").text("")
    }
    var username = localStorage.getItem("username");
    let obj = {
        gender: $('#gender').val(),
        pictureUrl: $('#picture').val(),
        title: $('#title').val(),
        description: $('#description').val(),
        category: $('#category').val(),
        colour: $('#colour').val(),
        price: $('#price').val(),
        size: $('#size').val(),
        uploadedBy: username,
        boughtBy: "",
        forSale: true
    }
    creat();
    $.ajax({
        url: "/api/Product/post",
        method: "POST",
        data: JSON.stringify(obj),
        contentType: "application/json",
        success: function () {
            var username = localStorage.getItem("username");
            $.ajax({
                url: "/api/user/sellput",
                method: "PUT",
                data: JSON.stringify({"obj": obj, "username": username}),
                contentType: "application/json",
                success: function () {
                },
                error: function (responseJSON) {
                    $('#errpst').text("There was an error, please try again later");
                }
            })
        },
        error: function (responseJSON) {
            $('#errpst').text("There was an error, please try again later");
        }
    })
})

function creat() {
    $('#creat').css("display", "flex");
}
function finishCreat() {
    $('#creat').css("display", "none");
    $(location).attr('href', 'sell.html');
}