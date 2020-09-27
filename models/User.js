const mongoose = require("mongoose");


// Schema("template", optional configuration obj)
const userSchema = new mongoose.Schema({
    username : {type: String, required: true},
    email : {type: String, required: true},
    // =>{{user.age / 4) * 1461} NOT ACCURACTE CALCULATION
    age : {type: String, required: true},
    height : {type: String, required: true},
    weight : {type: String, required: true},
    radar : {type: String, required: true},
})

const User = mongoose.model("User", userSchema);

module.exports = User;


