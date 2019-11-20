let mongoose = require('mongoose');
let bcrypt = require('bcryptjs');

mongoose.Promise = global.Promise;

let userSchema = mongoose.Schema({
	username : { type : String, 
				 required : true, 
				 unique : true },
	password : { type : String,
				 required : true },
	uploadedItems : {type : Array},
	boughtItems : {type : Array},
	likedItems : {type : Array}
});

let productSchema = mongoose.Schema({
    gender: {type : String},
    pictureUrl: {type : String},
    title: {type : String},
    description: {type : String},
    category: {type : String},
    colour: {type : String},
    price: {type : Number},
    size: {type : String},
    uploadedBy: {type : String},
    boughtBy: {type : String},
    forSale: {type : Boolean}
});

let User = mongoose.model( 'user', userSchema );
let Product = mongoose.model( 'products', productSchema );

let UserList = {
	register : function( user ){
		return User.find( {username : user.username} )
			.then( checkUser => {
				if ( checkUser.length == 0 ){
					return bcrypt.hash(user.password, 10)
				}
			})
			.then( hashPassword =>{
				return User.create({
					username : user.username, 
					password : hashPassword
				})
				.then( newUser => {
					return newUser;
				})
				.catch( error => {
					throw Error( error );
				});
			})
			.catch( error => {
				throw Error( error );
			});
	},
	login : function( user ){
		return User.findOne( {username : user.username} )
			.then( checkUser => {
				if ( checkUser ){
					return bcrypt.compare(user.password, checkUser.password)
				}
			})
			.then( validUser => {
				if( validUser ){
					return "Valid User";
				}
				else{
					throw Error("Invalid User");
				}
			})
			.catch( error => {
				throw Error( error );
			});
	}
};

let ProductList = {
	get : function(){
		return Product.find()
				.then( products => {
					return products;
				})
				.catch( error => {
					throw Error( error );
				});
	},
	getByID : function(id){
		return Product.findOne({id : id})
			.then(product => {
				return product;
			})
			.catch( error => {
				throw Error( error );
			});

	},
	post : function( newProduct ){
		return Product.create( newProduct )
				.then( product => {
					return product;
				})
				.catch( error => {
					throw Error(error);
				});
	},
    deleteById: function(id) {
		return Product.findOneAndRemove({id : id})
                .then( product => {
                    return product;
                })
                .catch( error => {
                    throw Error( error );
                });
    },
	put : function( updatedProduct ){
		return ProductList.getByID( updatedProduct.id )
			.then( product => {
				if ( product ){
					return Product.findOneAndUpdate( {id : product.id}, {$set : updatedProduct}, {new : true})
						.then( newProduct => {
							return newProduct;
						})
						.catch( error => {
							throw Error( error );
						});
				}
				else{
					throw Error( "404" );
				}
			})
			.catch( error => {
				throw Error(error);
			});
	}
};

module.exports = { UserList, ProductList };