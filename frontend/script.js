// $('.dropdown-toggle').dropdown();

function fillProducts(){

    var product = {
        gender: "",
        title: "Jeans",
        description: "This Jeans is very new. The colour...",
        category: "",
        colour: "",
        price: 22.5,
        size: "M",
        uploadedBy: 1,
        likes: 0,
        boughtBy: 1,
    }

    var products = []
    for (var i= 0; i< 16; i++){
        products.push(product);
    }
    for (var i= 0; i< products.length; i++){
        $("#products").append ("<div class='card' style='width: 18rem;'> <img src='src/bild1.jpg' class='card-img-top' alt='...'> <div class='card-body'> <p style='float:left; width: 50%;'>$"+products[i].price.toFixed(2)+"</p> <p style='float:left; width: 40%;'>"+products[i].size+"</p> <span class='oi oi-heart'></span>  </div>  </div>")
    }
}

fillProducts();