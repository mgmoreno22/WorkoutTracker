const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        console.log("Get (Workouts) Method:")
        console.log(req.body)
        console.log(req.params)
        console.log("----------------------")
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err);
            });
    })

    app.post("/api/workouts", (req, res) => {
        console.log("Post Method:")
        console.log(req.body)
        console.log(req.params)
        console.log("----------------------")
        db.Workout.create(req.body)
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.get("/api/workouts/range", (req, res) => {
        console.log("Get (Find) Method:")
        console.log(req.body)
        console.log(req.params)
        console.log("----------------------")
        db.Workout.find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.post("/api/workouts/range", (req, res) => {
        console.log("Post (create) Method:")
        console.log(req.body)
        console.log(req.params)
        console.log("----------------------")
        db.Workout.create({})
            .then(dbWorkout => {
                res.json(dbWorkout);
            })
            .catch(err => {
                res.json(err)
            })
    })

    app.put("/api/workouts/:id", function ({ body, params }, res) {
        console.log("Post (id) Method:")
        console.log(body)
        console.log(params)
        console.log("----------------------")
        db.Workout.findByIdAndUpdate(
            params.id,
            {$push: { exercises: body}}
        ).then(dbWorkout => {
            res.json(dbWorkout)
        }).catch(err => {
            res.json(err)
        })
    })
}