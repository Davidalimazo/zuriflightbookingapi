const mongoose = require('mongoose');

const FlightSchema= mongoose.Schema({
    title:{type:String},
    time:{type:String},
    price:{type:Number},
    date:{type:String},
}, {timestamps:true})

const Flight = mongoose.model('Flight', FlightSchema);
module.exports = Flight
