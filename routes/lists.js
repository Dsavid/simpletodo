const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/protect");
const {
  createList,
  getLists,
  updateList,
  deleteList,
  getList,
} = require("../controllers/lists");
router.route("/").post(protect, createList).get(protect, getLists);
router
  .route("/:id")
  .put(protect, updateList)
  .delete(protect, deleteList)
  .get(protect, getList);
module.exports = router;
