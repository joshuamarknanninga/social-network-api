const { Thought, User } = require('../models');

const getAllThoughts = async (req, res) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (err) {
        res.status(500).json(err);
    }
};

const getThoughtById = async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
};

const createThought = async (req, res) => {
    try {
        const newThought = await Thought.create(req.body);
        await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });
        res.json(newThought);
    } catch (err) {
        res.status(500).json(err);
    }
};

const updateThoughtById = async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, { new: true });
        if (!updatedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        res.json(updatedThought);
    } catch (err) {
        res.status(500).json(err);
    }
};

const deleteThoughtById = async (req, res) => {
    try {
        const deletedThought = await Thought.findByIdAndDelete(req.params.thoughtId);
        if (!deletedThought) {
            return res.status(404).json({ message: 'Thought not found' });
        }
        await User.findByIdAndUpdate(req.body.userId, { $pull: { thoughts: req.params.thoughtId } });
        res.json(deletedThought);
    } catch (err) {
        res.status(500).json(err);
    }
};

module.exports = {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById
};
