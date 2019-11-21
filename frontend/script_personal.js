var username = localStorage.getItem("username");
$('#person').text(username);

function fillProds() {
    $.ajax({
        url: "/api/user/sales",
        method: "POST",
        data: JSON.stringify(username),
        success: function (responseJSON) {
            var items = responseJSON;
            console.log(items);
            for (i = 0; i < items.length; i++) {
                $("#sales").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this,event)'></button>  </div>  </div>")
            }
        },
        error: function () {
            //$('#errpers').text("There was an error, please try again later");
        }
    });
}
fillProds();

$("#remove-btn").on('click', function () {
    $.ajax({
        url: "/api/removeUser",
        method: "DELETE",
        data: JSON.stringify(username),
        success: function () {

        },
        error: function () {
            //$('#errpers').text("There was an error, please try again later");
        }
    });
})