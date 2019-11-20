let express = require("express");
let morgan = require("morgan");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let { UserList, ProductList } = require('./model');
let { DATABASE_URL, PORT } = require('./config');

let app = express();
let jsonParser = bodyParser.json();
mongoose.Promise = global.Promise;

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");
	res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
	if (req.method === "OPTIONS") {
		return res.send(204);
	}
	next();
});

app.use(express.static("frontend"));

app.use(morgan("dev"));

app.post("/api/users/register", jsonParser, (req, res, next) => {
	let { username, password } = req.body;
	// all 5 attributes?
	//username: "Jessica",
	//password: "2d3345",
	//uploadedItems: [],
	//boughtItems:[],
	//likedItems: []

	// Validations missing

	let user = { username, password };
	UserList.register(user)
		.then(newUser => {
			return res.status(201).json(newUser);
		})
		.catch(error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status(500).json({
				status: 500,
				message: "Something went wrong with the DB. Try again later."
			})
		});
});

app.post("/api/users/login", jsonParser, (req, res, next) => {
	let { username, password } = req.body;
	// all 5 attributes?
	//username: "Jessica",
	//password: "2d3345",
	//uploadedItems: [],
	//boughtItems:[],
	//likedItems: []

	// Validations missing

	let user = { username, password };
	UserList.login(user)
		.then(goodUser => {
			return res.status(202).json(goodUser);
		})
		.catch(error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status(500).json({
				status: 500,
				message: "Something went wrong with the DB. Try again later."
			})
		});
});

app.get("/api/products", (req, res, next) => {
	ProductList.get()
		.then(products => {
			return res.status(200).json(products);
		})
		.catch(error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status(500).json({
				status: 500,
				message: "Something went wrong with the DB. Try again later."
			})
		});
});

app.post("/api/postProduct", jsonParser, (req, res, next) => {
	let gender = req.body.gender;
	let pictureUrl = req.body.pictureUrl;
	let title = req.body.title;
	let description = req.body.description;
	let category = req.body.category;
	let colour = req.body.colour;
	let price = req.body.price;
	let size = req.body.size;
	let uploadedBy = req.body.uploadedBy;
	let boughtBy = req.body.boughtBy;
	let forSale = req.body.forSale;

	let newProduct = {
		gender,
		pictureUrl,
		title,
		description,
		category,
		colour,
		price,
		size,
		uploadedBy,
		boughtBy,
		forSale
	};

	ProductList.post(newProduct)
		.then(product => {
			return res.status(201).json({
				message: "Student added to the list",
				status: 201,
				product: product
			});
		})
		.catch(error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status(500).json({
				status: 500,
				message: "Something went wrong with the DB. Try again later."
			});
		});
});

// $.ajax({
// 	url: "/api/products",
// 	method: "GET",
// 	success : function(responseJSON){
// 		console.log(responseJSON);
// 	}
// })

app.put("/api/updateProduct", jsonParser, (req, res, next) => {
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let id = req.body.id;

	/*if ( !id ){
		res.statusMessage = "Missing 'id' field in body!";
		return res.status( 406 ).json({
			message : "Missing 'id' field in body!",
			status : 406
		});
	}
	
	if( !firstName && !lastName ){
		res.statusMessage = "You must at least send either firstName or lastName to update!";
		return res.status( 406 ).json({
			message : "You must at least send either firstName or lastName to update!",
			status : 406
		});
	}
	
	let updatedStudent = { id : id };
	
	if ( firstName ){
		updatedStudent.firstName = firstName;
	}
	
	if ( lastName ){
		updatedStudent.lastName = lastName;
	}*/

	ProductList.put(updatedProduct)
		.then(product => {
			res.status(200).json({
				message: "Product is successfully updated",
				status: 200,
				product: product
			});
		})
		.catch(err => {
			if (err.message == 404) {
				return res.status(404).json({
					message: "Product is not found in the list",
					status: 404
				});
			}
			else {
				res.statusMessage = "Something went wrong with the DB. Try again later.";
				return res.status(500).json({
					status: 500,
					message: "Something went wrong with the DB. Try again later."
				})
			}
		});
});

app.delete("/api/removeProduct", (req, res) => {
	let id = req.params._id;

	ProductList.deleteById(req.params._id)
		.then(product => {
			if (!product) {
				res.statusMessage = "Product id not found on the list";
				return res.status(404).json({
					message: "Product id not found on the list",
					status: 404
				});
			}
			return res.status(200).json(product);
		})
		.catch(error => {
			res.statusMessage = "Something went wrong with the DB. Try again later.";
			return res.status(500).json({
				message: "Something went wrong with the DB. Try again later.",
				status: 500
			});
		})
});


let server;

function runServer(port, databaseUrl) {
	return new Promise((resolve, reject) => {
		mongoose.connect(databaseUrl, response => {
			if (response) {
				return reject(response);
			}
			else {
				server = app.listen(port, () => {
					console.log("App is running on port " + port);
					resolve();
				})
					.on('error', err => {
						mongoose.disconnect();
						return reject(err);
					})
			}
		});
	});
}

function closeServer() {
	return mongoose.disconnect()
		.then(() => {
			return new Promise((resolve, reject) => {
				console.log('Closing the server');
				server.close(err => {
					if (err) {
						return reject(err);
					}
					else {
						resolve();
					}
				});
			});
		});
}

runServer(PORT, DATABASE_URL)
	.catch(err => {
		console.log(err);
	});

module.exports = { app, runServer, closeServer };