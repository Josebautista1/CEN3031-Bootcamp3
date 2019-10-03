//You can replace this entire file with your Bootcamp Assignment #2 - ListingSchema.js File

/* Import mongoose and define any variables needed to create the schema */
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema;

/* Create your schema */
var listingSchema = new Schema({
  /* your code here from Bootcamp Assignment #2 - ListingSchema.js File*/
	name: {type: String, required: true},
	code: {type: String, required: true},
	address: String,
	coordinates: {
		latitude: {type: Number},
		longitude: {type: Number}
		},
	address: {type: String},
	created_at: {type: Date, default: Date.now},
	updated_at: {type: Date}
});

/* create a 'pre' function that adds the updated_at and created_at if not already there property */
listingSchema.pre('save', function(next) {
  /* your code here from Bootcamp Assignment #2 - ListingSchema.js File */
  this.update_at = Date.now;
  var currentDate = new Date();
  this.updated_at = currentDate;
  this.created_at = currentDate;

  next();
});

/* Use your schema to instantiate a Mongoose model */
var Listing = mongoose.model('Listing', listingSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Listing;
