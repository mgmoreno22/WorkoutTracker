const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please enter Exercise Type"
        },
        name: {
            type: String,
            trim: true,
            required: "Please enter Exercise Name"
        },
        duration: {
            type: Number,
            required: "Please enter Exercise Duration"
        },
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
    }],
},
{
    toJSON: {
        virtuals: true
    }
});

workoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.redue((total, exercise) => {
        return total + exercise.duration
    }, 0)
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;