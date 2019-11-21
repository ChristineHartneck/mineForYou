let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	uploadedItems: { type: Array },
	boughtItems: { type: Array },
	likedItems: { type: Array }
});

let productSchema = mongoose.Schema({
	gender: { type: String },
	pictureUrl: { type: String },
	title: { type: String },
	description: { type: String },
	category: { type: String },
	colour: { type: String },
	price: { type: Number },
	size: { type: String },
	uploadedBy: { type: String },
	boughtBy: { type: String },
	forSale: { type: Boolean }
});

let User = mongoose.model('users', userSchema);
let Product = mongoose.model('products', productSchema);

let UserList = {
	get: function (user) {
		return User.find({ username: user.username })
			.then(user => {
				return user;
			})
			.catch(error => {
				throw Error(error);
			});
	},
	register: function (user) {
		return User.find({ username: user.username })
			.then(checkUser => {
				if (checkUser.length == 0) {
					return bcrypt.hash(user.password, 10)
				}
			})
			.then(hashPassword => {
				return User.create({
					username: user.username,
					password: hashPassword
				})
					.then(newUser => {
						return newUser;
					})
					.catch(error => {
						throw Error(error);
					});
			})
			.catch(error => {
				throw Error(error);
			});
	},
	put: function (updatedUser) {
		return User.findOneAndUpdate({ username: updatedUser[0].username }, { $push: { uploadedItems: updatedUser[0].uploadedItems } }, { new: true })
			.then(newUser => {
				console.log(newUser);
				return newUser;
			})
			.catch(error => {
				throw Error(error);
			});
	},
	login: function (user) {
		return User.findOne({ username: user.username })
			.then(checkUser => {
				if (checkUser) {
					return bcrypt.compare(user.password, checkUser.password)
				}
			})
			.then(validUser => {
				if (validUser) {
					return "Valid User";
				}
				else {
					throw Error("Invalid User");
				}
			})
			.catch(error => {
				throw Error(error);
			});
	},
	deleteById: function (username) {
		return User.findOneAndRemove({ username: username })
			.then(user => {
				return user;
			})
			.catch(error => {
				throw Error(error);
			});
	}
};

let ProductList = {
	get: function () {
		return Product.find()
			.then(products => {
				return products;
			})
			.catch(error => {
				throw Error(error);
			});
	},
	getByID: function (id) {
		console.log(id);
		return Product.findOne({ _id: id })
			.then(product => {
				console.log(product);
				return product;
			})
			.catch(error => {
				throw Error(error);
			});

	},
	post: function (newProduct) {
		return Product.create(newProduct)
			.then(product => {
				return product;
			})
			.catch(error => {
				throw Error(error);
			});
	},
	put: function (updatedProduct) {
		return ProductList.getByID(updatedProduct._id)
			.then(product => {
				if (product) {
					return Product.findOneAndUpdate({ _id: product._id }, { $set: updatedProduct }, { new: true })
						.then(newProduct => {
							return newProduct;
						})
						.catch(error => {
							throw Error(error);
						});
				}
				else {
					throw Error("404");
				}
			})
			.catch(error => {
				throw Error(error);
			});
	}
};

module.exports = { UserList, ProductList };