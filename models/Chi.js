const mongoose = require("mongoose");


// Schema("template", optional configuration obj)
const chiSchema = new mongoose.Schema({
    name : {type: String, required: true},
    color : {type: String, required: true},
    // AGE CALCULATION IS NOT ACCURATE YET
    // =>{{user.age / 4) * 1461}  Chi ages in days
    // 1461 days in four years (leap year)
    age : {type: String, required: true},
    // 
    height : {type: String, required: true},
    weight : {type: String, required: true},
    radar : {type: String, required: true},
})

const Chi = mongoose.model("Chi", chiSchema);

module.exports = Chi;