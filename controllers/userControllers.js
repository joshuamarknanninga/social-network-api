const { User } = require("../models")

const getAllUsers = async (req, res) => {
    const allUsers = await User.find();

    res.json(allUsers)
}

const getUserById = async (req, res) => {
    const singleUser = await User.findById(req.params.userId);

    res.json(singleUser)
}

const createUser = async (req, res) => {
    const newUser = await User.create(req.body);

    res.json(newUser)
}

const updateUserById = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
        username: req.body.username
    }, { new: true});

    res.json(updatedUser)
}

const deleteUserById = async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.userId);

    res.json(deletedUser)
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
}