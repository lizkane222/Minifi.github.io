const mongoose = require("mongoose");


// Schema("template", optional configuration obj)
const motivateSchema = new mongoose.Schema({
    // fitness: {
        name: {type: String, require: true},
        type: {type: String, require: true},
        duration: {type: Number, require: true},
        groupSize: {type: String, require: false},
        perExercise: [{
            type: {type: String, require: false},
            duration: {type: Number, require: false},
            caloriesBurned: {type: Number, require: false}
        },
        ]
    // }
})


const Motivate = mongoose.model("Motivate", motivateSchema);

module.exports = Motivate;