function fillProducts() {

    var items = [{
        gender: "male",
        title: "Shirt",
        description: "Nice shirt. 1x worn. by urban outfitters. super soft material.",
        category: "tops",
        colour: "brown",
        price: 22.5,
        size: "L",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    },
    {
        gender: "female",
        title: "Black Dress",
        description: "Offer here a knitted dress from vero moda. Without belt. Top condition.",
        category: "dresses",
        colour: "black",
        price: 25.0,
        size: "S",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    },
    {
        gender: "female",
        title: "nice Top",
        description: "White t-shirt with flamingo print, it was worn only a few times, the size is normal, it fits figure-hugging but not skintight.",
        category: "tops",
        colour: "white",
        price: 10.0,
        size: "M",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    },
    {
        gender: "male",
        title: "Levi's",
        description: "Well preserved jeans from Armani. Smoke and animal free household. Pockets from the inside have a hole.",
        category: "trousers",
        colour: "blue",
        price: 35.5,
        size: "XL",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    }]

    var products = []
    for (var i = 0; i < 4; i++) {
        products.push(items);
    }
    for (var i = 0; i < products.length; i++) {

        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }
    for (var i = 0; i < products.length; i++) {
        $("#models").append('  <div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content>' +
            '<div class="modal-body">' +
            '<div class="modal-body row">' +
            '<div class="col-mb-5">' +
            '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
            '<div class="carousel-inner" role="listbox">' +
            '<div class="carousel-item active">' +
            '<img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" alt="First slide"> </div>' +
            '</div>' +
            '<div class="col-mb-7">' +
            '<h5 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h5>' +
            'PRICE' +
            '<h3 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h3>' +
            items[i].description +
            items[i].size +
            items[i].category +
            '<button type="button" id="button_1" class="btn btn-outline-success" data-dismiss="modal">Cancel</button>' +
            '<button type="button" id="button_2"class="btn btn-primary">Buy now</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>')
    }
}
fillProducts();

function myfunc(elmnt) {
    $(elmnt).attr('class', 'oi oi-check');
}

$('#filt-bt').on('click', function (event) {
    event.preventDefault();
    for (i = 0; i < products.length; i++) {
        if ($('#gender').val() != products[i].gender && $('#gender').val() != 'select'){
            products[i].empty();
        } else if ($('#category').val() != products[i].category && $('#category').val() != 'select'){
            products[i].empty();
        } else if ($('#size').val() != products[i].size && $('#size').val() != 'select'){
            products[i].empty();
        } else if ($('#colour').val() != products[i].colour && $('#colour').val() != 'select'){
            products[i].empty();
        }
    }
})