const router = require("express").Router();

// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

// Set up GET all and POST at /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Set up POST reaction at /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);
router.route("/:thoughtId/reactions").post(addReaction);

module.exports = router;
