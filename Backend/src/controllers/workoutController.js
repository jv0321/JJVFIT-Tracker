const Workout = require('../models/Workout');

const createWorkout = async (req, res) => {
  try {
    const workout = await Workout.create({ ...req.body, user: req.user.id });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ user: req.user.id });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createWorkout, getWorkouts };
