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
        title: "",
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
        $("#products").append ("<div class='card' style='width: 18rem;'> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$"+items[i].price.toFixed(2)+"</p> <p style='float:left; width: 40%;'>"+items[i].size+"</p> <span class='oi oi-heart'></span>  </div>  </div>")
    }
}

fillProducts();