const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
        console.log("~~~~~~~~~~~~~~~~~~")
        console.log(req.body)
        console.log(req.params)
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.post("/api/workouts/range", (req, res) => {
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.put("/api/workouts/:id", function ({ body, params }, res) {
        console.log("******************")
        console.log(body)
        console.log(params)
        db.Workout.findByIdAndUpdate(
            params.id,
            {$push: { exercises: body}},
            {new: true, runvalidators: true}).then(dbWorkout => {
                res.json(dbWorkout)
            }).catch(err => {
                res.json(err)
            })
    })
}