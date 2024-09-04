const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    title : {type:String,require:true},
    author : {type:String,require:true},
    published_year : {type:Number,require:true},
    genre : {type:String,require:true},
    available : {type:Boolean,require:true}, 
},{timestamps:true,versionkey:false});

module.exports = mongoose.model('Books',booksSchema);