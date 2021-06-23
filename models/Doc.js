const mongoose = require("mongoose");


// Schema("template", optional configuration obj)
const docSchema = new mongoose.Schema({
    name : {type: String, required: true},
    link : {type: String, required: true},
    title : {type: String, required: false},
    notes : {type: String, required: false},
    notesLink : {type: String, required: false}
})

const Doc = mongoose.model("Doc", docSchema);

module.exports = Doc;