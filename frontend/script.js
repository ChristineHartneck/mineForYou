// $('.dropdown-toggle').dropdown();

function fillProducts(){

    var items = [{
        gender: "Men",
        title: "Shirt",
        description: "Nice shirt. 1x worn. by urban outfitters. super soft material.",
        category: "Shorts",
        colour: "Braun",
        price: 22.5,
        size: "L",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    },
    {
        gender: "Woman",
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
        gender: "Woman",
        title: "nice Top",
        description: "White t-shirt with flamingo print, it was worn only a few times, the size is normal, it fits figure-hugging but not skintight.",
        category: "Shirts",
        colour: "White",
        price: 10.0,
        size: "M",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    },
    {
        gender: "Men",
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
    

    var products = []
    for (var i= 0; i< 4; i++){
        products.push(items);
    }
    for (var i= 0; i< products.length; i++){
        
        $("#products").append ("<div data-toggle='modal' data-target='#exampleModalCenter"+i+"' class='card' style='width: 25rem; '> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$ "+items[i].price.toFixed(2)+"</p> <p style='float:left; width: 40%;'>"+items[i].size+"</p> <span class='oi oi-heart'></span>  </div>  </div>")
    }
    for (var i= 0; i< products.length; i++){
        $("#models").append ('  <div class="modal fade" id="exampleModalCenter'+i+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">'+
            '<div class="modal-dialog modal-lg" role="document">'+
                '<div class="modal-content>'+
                    '<div class="modal-body">'+ 
                        '<div class="modal-body row">'+ 
                            '<div class="col-mb-5">'+
                                '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">' +
                                    '<div class="carousel-inner" role="listbox">'+
                                        '<div class="carousel-item active">'+
                      '<img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(23).jpg" alt="First slide"> </div>'+ 
               // '<div class="carousel-item">'+
                  //    '<img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(24).jpg" alt="Second slide">'+
               // '</div>'+
               // '<div class="carousel-item">'+
               //       '<img class="d-block w-100" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(25).jpg" alt="Third slide">'+
               // '</div>'+
                 //   '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">'+
                 //       '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'+
                  //      '<span class="sr-only">' + 'Previous' + '</span>'+
                  //  '</a>'+
                  //  '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">'+
                    //    '<span class="carousel-control-next-icon" aria-hidden="true"></span>'+
                      //  '<span class="sr-only">' + 'Next' + '</span>'+
                    //'</a>'+
                '</div>'+
                '<div class="col-mb-7">'+
                '<h5 class="modal-title" id="exampleModalCenterTitle">' + items[i].title + '</h5>'+
                'PRICE' +
                '<h3 class="modal-price">$ ' + items[i].price.toFixed(2) + '</h3>' +
                
                items[i].description +
                items[i].size +
                items[i].category +
                '<button type="button" id="button_1" class="btn btn-outline-success" data-dismiss="modal">Cancle</button>'+
                '<button type="button" id="button_2"class="btn btn-primary">Buy now</button>'+
                    '</div>'+
                 '</div>'+
             '</div>'+
             '</div>' )
    }
    let dropdown = document.getElementById( "dropdownMenu1" ).href;
    for (var i= 0; i< products.length; i++){
        
    }
    $(".btn btn-outline-success").on("click", function( event ){
        console.log($(".form-control").val());
        event.preventDefault();
    
        // Check if empty textfield exists
        if ($(".form-control").val() === "") {
        return;
      };
    
})
if ( products.value === items[i] ){
$("#products").append('<li class="shoppingList">');
event.preventDefault();

$(".form-control").val(" ");
};
}
fillProducts();