var products = [{
    gender: "Male",
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
    title: "Nice Top",
    description: "White t-shirt with flamingo print, it was worn only a few times, the size is normal, it fits figure-hugging but not skintight.",
    category: "Tops",
    colour: "White",
    price: 10.0,
    size: "M",
    uploadedBy: 1,
    likes: 0,
    boughtBy: 1,
},
{
    gender: "Male",
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

function fillProducts(items) {
    console.log("fill products");
    console.log(items);
    for (var i = 0; i < items.length; i++) {
        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 30%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }
    for (var i = 0; i < items.length; i++) {
        $("#models").append(
            '<div class="modal fade" id="exampleModalCenter' + i + '" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog modal-lg" role="document">' +
            '<div class="modal-content>' +
            '<div class="modal-body">' +
            '<div class="modal-body">' +
            '<div class="table">' +
            '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
            '<div class="carousel-inner" role="listbox">' +
            '<div class="carousel-item">' +
            '<img class="d-block w-100 modal-img" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" alt="First slide">' + 
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '<div class="table" id="modal-details">' +
            '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
            '<div id="price-wrapper">' +
            '<h4>'+ 'PRICE' + '</h4>' +
            '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
            '</div>' +
            items[i].description + '<br>' + '<br>' +
            'Size: ' +
            items[i].size + '<br>' + '<br>' +
            'Category: ' + 
            items[i].category + '<br>' +
            'Colour: ' +
            items[i].colour + '<br>' +
            '<div id="buttons-modal">' + 
            '<button type="button" id="btn-cancel" class="btn btn-outline-success btn-modal" data-dismiss="modal">Cancle</button>' +
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
fillProducts(products);

var filterGender = 'none';
var filterSize = 'none';
var filterColor = 'none';
var filterCat = 'none';

// dropdown color right
function filterItem(data, filter) {
    console.log(data);
    console.log(data.parentElement.parentElement.children[0]);
    var getValue = data.innerHTML;
    data.parentElement.parentElement.children[0].innerHTML = getValue;
    switch (filter) {
        case 'gender': 
            filterGender = getValue;
            break;
        case 'cat': 
            filterCat = getValue;
            break;
        case 'size': 
            filterSize = getValue;
            break;
        case 'color': 
            filterColor = getValue;
            break;
        default: 
            console.log('default filter');
    }
    console.log("size: " + filterSize);
    console.log("gender: " + filterGender);
    console.log("color: " + filterColor);
    console.log("cat: " + filterCat);
    //$('.dropdown-select').text(getValue);
}
/*
$('.dropdown-menu li').on('click', function () {
    console.log(this);
    var getValue = $(this).text();
    $('.dropdown-select').text(getValue);
    console.log("dropdown: " + getValue);
}); */
  
function thanks() {
    console.log("test thanks");
    console.log($('#thanks'));
    $('#thanks').css("display", "flex");
}
function finishBuying() {
    $('#thanks').css("display", "none");
}


$('#filt-bt').on('click', function (event) {
    var items = [];
    event.preventDefault();
    $('#products').empty();
    $('#models').empty();
    for (i = products.length - 1; i >= 0; --i) {
        /*
        if ($('#gender').val() != items[i].gender && $('#gender').val() != 'select') {
            items.splice(i, 1);
        } else if ($('#category').val() != items[i].category && $('#category').val() != 'select') {
            items.splice(i, 1);
        } else if ($('#size').val() != items[i].size && $('#size').val() != 'select') {
            items.splice(i, 1);
        } else if ($('#colour').val() != items[i].colour && $('#colour').val() != 'select') {
            items.splice(i, 1);
        }
        */
        if (filterSize != 'none') {
            console.log(products[i].size + " " + filterSize);
            console.log(products[i].size == filterSize);
            if (products[i].size.toString() == filterSize.toString()) {
                console.log(items.includes(products[i]));
                if (!items.includes(products[i])) {
                    items.push(products[i])
                    console.log(items);
                }
            }
        }
    }
    fillProducts(items);
    /*for (var i = 0; i < items.length; i++) {
        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 35%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }*/
    for (var i = 0; i < items.length; i++) {
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
            '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
            '<div id="price-wrapper">' +
            '<h4>'+ 'PRICE' + '</h4>' +
            '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
            items[i].description + '<br>' + '<br>' +
            'Size: ' +
            items[i].size + '<br>' + '<br>' +
            'Category: ' + 
            items[i].category + '<br>' +
            'Colour: ' +
            items[i].colour + '<br>' +
            '<button type="button" id="button_1" class="btn btn-outline-success" data-dismiss="modal">Cancel</button>' +
            '<button type="button" id="button_2" class="btn btn-primary" data-dismiss="modal" onclick="thanks()">Buy now</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>')
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
        $("#products").append("<div data-toggle='modal' data-target='#exampleModalCenter" + i + "' class='card' style='width: 25rem; '> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$ " + items[i].price.toFixed(2) + "</p> <p style='float:left; width: 40%;'>" + items[i].size + "</p> <button class='oi oi-heart' onclick='myfunc(this)'></button>  </div>  </div>")
    }
    for (var i = 0; i < items.length; i++) {
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
            '<h2 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h2>' +
            '<div id="price-wrapper">' +
            '<h4>'+ 'PRICE' + '</h4>' +
            '<h1 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h1>' +
            items[i].description + '<br>' + '<br>' +
            'Size: ' +
            items[i].size + '<br>' + '<br>' +
            'Category: ' + 
            items[i].category + '<br>' +
            'Colour: ' +
            items[i].colour + '<br>' +
            '<button type="button" id="button_1" class="btn btn-outline-success" data-dismiss="modal">Cancel</button>' +
            '<button type="button" id="button_2"class="btn btn-primary">Buy now</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>')
    }
})

function myfunc(elmnt) {
    $(elmnt).attr('class', 'oi oi-check');
}