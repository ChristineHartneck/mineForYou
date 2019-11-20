var items = [{
    gender: "Male",
    pictureUrl: "https://static.kiabishop.com/en/images/slim-fit-plain-eco-design-t-shirt-brown-men-size-s-to-xxl-wr061_1_zc1.jpg",
    title: "Shirt",
    description: "Nice shirt. 1x worn. by urban outfitters. super soft material.",
    category: "Tops",
    colour: "Brown",
    price: 22.5,
    size: "L",
    uploadedBy: 1,
    likes: 0,
    boughtBy: 1,
},
{
    gender: "Female",
    pictureUrl: "https://1335481946.rsc.cdn77.org/temp/1552046350_5eec3b2abdb4e1ab79996a37b93a6d00.JPG",
    title: "Black Dress",
    description: "Offer here a knitted dress from vero moda. Without belt. Top condition.",
    category: "Dresses",
    colour: "Black",
    price: 25.0,
    size: "S",
    uploadedBy: 1,
    likes: 0,
    boughtBy: 1,
},
{
    gender: "Female",
    pictureUrl: "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/05/28/goods-first-img/1560118755030994715.jpg",
    title: "Nice Top",
    description: "White t-shirt with flamingo print, it was worn only a few times, the size is normal, it fits figure-hugging but not skintight.",
    category: "Tops",
    colour: "white",
    price: 10.0,
    size: "M",
    uploadedBy: 1,
    likes: 0,
    boughtBy: 1,
},
{
    gender: "Male",
    pictureUrl: "http://sumbersinar.co/wp-content/uploads/2018/05/levis-jeans-men-slim-taper-fit-adapt-light-wash-performance-denim-men-jeans-levi-505-jeans-mens-uk.jpg",
    title: "Levi's",
    description: "Well preserved jeans from Armani. Smoke and animal free household. Pockets from the inside have a hole.",
    category: "Trousers",
    colour: "Blue",
    price: 35.5,
    size: "XL",
    uploadedBy: 1,
    likes: 0,
    boughtBy: 1,
}]

function fillProducts() {
    for (var i = 0; i < items.length; i++) {
        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }
    for (var i = 0; i < items.length; i++) {
        $("#models").append(
            '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content>' +
            '<div class="modal-body">' +
            '<div class="modal-body">' +
            '<div class="table">' +
            '<img class="modal-img" scr=' + items[i].pictureUrl + '>' +
            '</div>' +
            '<div class="table" id="modal-details">' +
            '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
            '<div id="price-wrapper">' +
            '<h4>'+ 'PRICE' + '</h4>' +
            '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
            '</div>' +
            items[i].description + '<br>' +
            'Size: ' +
            items[i].gender + '<br>' +
            'Gender: ' +
            items[i].size + '<br>' +
            'Category: ' + 
            items[i].category + '<br>' +
            'Colour: ' +
            items[i].colour + '<br>' +
            '<div id="buttons-modal">' + 
            '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancel</button>' +
            '<button type="button" id="btn-buy" class="btn btn-primary btn-modal" data-dismiss="modal" onclick="thanks()">Buy now</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }
}
fillProducts();

$('#filt-bt').on('click', function (event) {
    event.preventDefault();
    $('#products').empty();
    $('#models').empty();
    for (i = items.length - 1; i >= 0; --i) {
        if ($('#gender').val() != items[i].gender && $('#gender').val() != 'select') {
            items.splice(i, 1);
        } else if ($('#category').val() != items[i].category && $('#category').val() != 'select') {
            items.splice(i, 1);
        } else if ($('#size').val() != items[i].size && $('#size').val() != 'select') {
            items.splice(i, 1);
        } else if ($('#colour').val() != items[i].colour && $('#colour').val() != 'select') {
            items.splice(i, 1);
        }
    }
    for (var i = 0; i < items.length; i++) {
        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }
    for (var i = 0; i < items.length; i++) {
        $("#models").append(
            '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content>' +
            '<div class="modal-body">' +
            '<div class="modal-body">' +
            '<div class="table">' +
            '<img class="modal-img" scr=' + items[i].pictureUrl + '>' + 
            '</div>' +
            '<div class="table" id="modal-details">' +
            '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
            '<div id="price-wrapper">' +
            '<h4>'+ 'PRICE' + '</h4>' +
            '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
            '</div>' +
            items[i].description + '<br>' +
            'Size: ' +
            items[i].gender + '<br>' +
            'Gender: ' +
            items[i].size + '<br>' +
            'Category: ' + 
            items[i].category + '<br>' +
            'Colour: ' +
            items[i].colour + '<br>' +
            '<div id="buttons-modal">' + 
            '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancel</button>' +
            '<button type="button" id="btn-buy" class="btn btn-primary btn-modal" data-dismiss="modal" onclick="thanks()">Buy now</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }
})

$('#srch-bt').on('click', function (event) {
    event.preventDefault();
    $('#products').empty();
    $('#models').empty();
    for (i = items.length - 1; i >= 0; --i) {
        if (items[i].description.search($('#srch-fld').val()) == -1 ) {
            items.splice(i, 1);
        }
    }
    $('#srch-fld').val('');
    for (var i = 0; i < items.length; i++) {
        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <div class='card-wrapper'> <img src='" + items[i].pictureUrl + "'class='card-img-top' alt='...'></div> <div class='card-body'> <p style='float:left; width: 48%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }
    for (var i = 0; i < items.length; i++) {
        $("#models").append(
            '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content>' +
            '<div class="modal-body">' +
            '<div class="modal-body">' +
            '<div class="table">' +
            '<img class="modal-img" scr=' + items[i].pictureUrl + '>' + 
            '</div>' +
            '<div class="table" id="modal-details">' +
            '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
            '<div id="price-wrapper">' +
            '<h4>'+ 'PRICE' + '</h4>' +
            '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
            '</div>' +
            items[i].description + '<br>' +
            'Size: ' +
            items[i].gender + '<br>' +
            'Gender: ' +
            items[i].size + '<br>' +
            'Category: ' + 
            items[i].category + '<br>' +
            'Colour: ' +
            items[i].colour + '<br>' +
            '<div id="buttons-modal">' + 
            '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancel</button>' +
            '<button type="button" id="btn-buy" class="btn btn-primary btn-modal" data-dismiss="modal" onclick="thanks()">Buy now</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>');
    }
})

function myfunc(elmnt) {
    $(elmnt).attr('class', 'oi oi-check');
}
function thanks() {
    console.log("test thanks");
    console.log($('#thanks'));
    $('#thanks').css("display", "flex");
}
function finishBuying() {
    $('#thanks').css("display", "none");
}
//$(document).on("click", ".openImageDialog", function () {
   // var myImageId = $(this).data('id');
   // $(".modal-body #myImage").attr("src", myImageId);
//});

function modalOpen() {
		$('.card-img-top').on('click', function() {
			$('.modal-img').attr('src', $(this).find('img').attr('src'));
			$('#exampleModalCenter').modal('show');   
		});		
}