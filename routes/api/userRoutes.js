const router = require("express").Router();

// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// Set up GET all and POST at /api/users
router.route("/").get(getAllUsers).post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Set up POST reaction at /api/users/:id/friends/:friendsId
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
