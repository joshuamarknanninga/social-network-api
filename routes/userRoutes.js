const router = require("express").Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require("../controllers/userControllers")

router.get("/", getAllUsers)
router.get("/:userId", getUserById)

router.post("/", createUser)
router.put("/:userId", updateUserById)
router.delete("/:userId", deleteUserById)

// router.post("/:userId/friends/:friendId")
// router.delete(":userId/friends/:friendId")


module.exports = router;