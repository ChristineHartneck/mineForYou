function fillProducts() {
    var j = -1;
    $.ajax({
        url: "/api/products",
        method: "GET",
        success: function (responseJSON) {
            var items = responseJSON;
            for (var i = 0; i < items.length; i++) {
                if (items[i].forSale == true) {
                    $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this,event)'></button>  </div>  </div>")
                }
            }
            for (var i = 0; i < items.length; i++) {
                if (items[i].forSale == true) {
                    j++;
                    $("#models").append(
                        '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                        '<div class="modal-dialog modal-lg" role="document">' +
                        '<div class="modal-content>' +
                        '<div class="modal-body">' +
                        '<div class="modal-body">' +
                        '<div class="table">' +
                        '<img class="modal-img" src=' + items[i].pictureUrl + ' height=100% width=100%>' +
                        '</div>' +
                        '<div class="table" id="modal-details">' +
                        '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
                        '<div id="price-wrapper">' +
                        '<h4>' + 'PRICE' + '</h4>' +
                        '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
                        '</div>' +
                        items[i].description + '<br>' +
                        'Size: ' +
                        items[i].size + '<br>' +
                        'Gender: ' +
                        items[i].gender + '<br>' +
                        'Category: ' +
                        items[i].category + '<br>' +
                        'Colour: ' +
                        items[i].colour + '<br>' +
                        '<div id="buttons-modal">' +
                        '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancel</button>' +
                        '<button type="button" id="btn-buy" class="btn btn-primary btn-modal" onclick="thanks(' + j + ')" data-dismiss="modal">Buy now</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>');
                }
            }
        },
        error: function () {
            $('#errmain').text("There was an error, please try again later");
        }
    })
}
fillProducts();

$('#filt-bt').on('click', function (event) {
    event.preventDefault();
    $.ajax({
        url: "/api/products",
        method: "GET",
        success: function (responseJSON) {
            var items = responseJSON;
            var jumps = [];
            for (i = 0; i < items.length; i++) {
                jumps.push(i);
            }
            $('#products').empty();
            $('#models').empty();
            for (i = items.length - 1; i >= 0; --i) {
                if ($('#gender').val() != items[i].gender && $('#gender').val() != 'select') {
                    jumps.splice(i, 1);
                } else if ($('#category').val() != items[i].category && $('#category').val() != 'select') {
                    jumps.splice(i, 1);
                } else if ($('#size').val() != items[i].size && $('#size').val() != 'select') {
                    jumps.splice(i, 1);
                } else if ($('#colour').val() != items[i].colour && $('#colour').val() != 'select') {
                    jumps.splice(i, 1);
                } else if (items[i].forSale == false) {
                    jumps.splice(i, 1);
                }
            }
            for (j in jumps) {
                var i = jumps[j];
                $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this,event)'></button>  </div>  </div>")
            }
            for (j in jumps) {
                var i = jumps[j];
                $("#models").append(
                    '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                    '<div class="modal-dialog modal-lg" role="document">' +
                    '<div class="modal-content>' +
                    '<div class="modal-body">' +
                    '<div class="modal-body">' +
                    '<div class="table">' +
                    '<img class="modal-img" src=' + items[i].pictureUrl + ' height=100% width=100%>' +
                    '</div>' +
                    '<div class="table" id="modal-details">' +
                    '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
                    '<div id="price-wrapper">' +
                    '<h4>' + 'PRICE' + '</h4>' +
                    '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
                    '</div>' +
                    items[i].description + '<br>' +
                    'Size: ' +
                    items[i].size + '<br>' +
                    'Gender: ' +
                    items[i].gender + '<br>' +
                    'Category: ' +
                    items[i].category + '<br>' +
                    'Colour: ' +
                    items[i].colour + '<br>' +
                    '<div id="buttons-modal">' +
                    '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancel</button>' +
                    '<button type="button" id="btn-buy" class="btn btn-primary btn-modal" data-dismiss="modal" onclick="thanks(' + i + ')">Buy now</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
            }
        },
        error: function () {
            $('#errmain').text("There was an error, please try again later");
        }
    })
});

$('#srch-bt').on('click', function (event) {
    event.preventDefault();
    $.ajax({
        url: "/api/products",
        method: "GET",
        success: function (responseJSON) {
            var items = responseJSON;
            var jumps = [];
            for (i = 0; i < items.length; i++) {
                jumps.push(i);
            }
            $('#products').empty();
            $('#models').empty();
            for (i = items.length - 1; i >= 0; --i) {
                if (items[i].description.search($('#srch-fld').val()) == -1) {
                    jumps.splice(i, 1);
                } else if (items[i].forSale == false) {
                    jumps.splice(i, 1);
                }
            }
            $('#srch-fld').val('');
            for (j in jumps) {
                var i = jumps[j];
                $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this,event)'></button>  </div>  </div>")
            }
            for (j in jumps) {
                var i = jumps[j];
                $("#models").append(
                    '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
                    '<div class="modal-dialog modal-lg" role="document">' +
                    '<div class="modal-content>' +
                    '<div class="modal-body">' +
                    '<div class="modal-body">' +
                    '<div class="table">' +
                    '<img class="modal-img" src=' + items[i].pictureUrl + ' height=100% width=100%>' +
                    '</div>' +
                    '<div class="table" id="modal-details">' +
                    '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
                    '<div id="price-wrapper">' +
                    '<h4>' + 'PRICE' + '</h4>' +
                    '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
                    '</div>' +
                    items[i].description + '<br>' +
                    'Size: ' +
                    items[i].size + '<br>' +
                    'Gender: ' +
                    items[i].gender + '<br>' +
                    'Category: ' +
                    items[i].category + '<br>' +
                    'Colour: ' +
                    items[i].colour + '<br>' +
                    '<div id="buttons-modal">' +
                    '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancel</button>' +
                    '<button type="button" id="btn-buy" class="btn btn-primary btn-modal" data-dismiss="modal" onclick="thanks(' + i + ')">Buy now</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>');
            }
        },
        error: function () {
            $('#errmain').text("There was an error, please try again later");
        }
    })
});

function myfunc(elmnt, event) {
    event.stopPropagation();
    $(elmnt).attr('class', 'oi oi-check');
}
function thanks(e) {
    $.ajax({
        url: "/api/products",
        method: "GET",
        success: function (responseJSON) {
            var items = [];
            for (i = 0; i < responseJSON.length; i++) {
                if (responseJSON[i].forSale == true) {
                    items.push(responseJSON[i]);
                }
            };
            $.ajax({
                url: "/api/Product/put",
                method: "PUT",
                data: JSON.stringify(items[e]),
                contentType: "application/json",
                success: function () {

                    $('#thanks').css("display", "flex");
                },
                error: function () {
                    $('#errmain').text("There was an error in buying, please try again later")
                }
            })
        },
        error: function (responseJSON) {
            $('#errmain').text("There was an error, please try again later");
        }
    })
};

function finishBuying() {
    $('#thanks').css("display", "none");
    $(location).attr('href', 'main.html');
}


function modalOpen() {
    $('.card-img-top').on('click', function () {
        $('.modal-img').attr('src', $(this).find('img').attr('src'));
        $('#exampleModalCenter').modal('show');
    });
}