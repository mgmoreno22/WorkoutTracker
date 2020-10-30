const db = require("../models");

module.exports = function(app) {
    app.get("/api/workouts", (req, res) => {
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

    app.put("/api/workouts/:id", function({params}, res) {
        db.Workout.update(
            {
                _id: mongojs.ObjectId(params.id)
            },
            {
                $set: {
                    read: true
                }
            },
            (error, edit) => {
                if (error) {
                    console.log(error);
                    res.send(error);
                } else {
                    console.log(edit)
                    res.send(edited)
                }
            }
        )
    })
}