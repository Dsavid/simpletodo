const List = require("../models/List");
// @desc create list
// @route POST /api/v1/lists
// @acess PRIVATE
exports.createList = async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const list = await List.create(req.body);
    res.status(200).json({ success: true, list });
  } catch (err) {
    console.log(err);
  }
};
// @desc GET list
// @route GET /api/v1/lists
// @acess PRIVATE
exports.getLists = async (req, res, next) => {
  try {
    const lists = await List.find({ user: req.user.id });
    res.status(200).json({ success: true, count: lists.length, lists });
  } catch (err) {
    console.log(err);
  }
};
// @desc GET list
// @route GET /api/v1/lists/:id
// @acess PRIVATE
exports.getList = async (req, res, next) => {
  try {
    const list = await List.findById(req.params.id);
    res.status(200).json({ success: true, list });
  } catch (err) {
    next(err);
  }
};
// @desc update list
// @route PUT /api/v1/lists/:id
// @acess PRIVATE
exports.updateList = async (req, res, next) => {
  try {
    let list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ success: false, msg: "cant find list" });
    }
    if (list.user != req.user.id) {
      return res.status(401).json({ success: false, msg: "wrong user" });
    }
    list = await List.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ success: true, list });
  } catch (err) {
    next(err);
  }
};
// @desc delete list
// @route DELETE /api/v1/lists/:id
// @acess PRIVATE
exports.deleteList = async (req, res, next) => {
  try {
    let list = await List.findById(req.params.id);
    if (!list) {
      return res.status(404).json({ success: false, msg: "cant find list" });
    }
    if (list.user != req.user.id) {
      return res.status(401).json({ success: false, msg: "wrong user" });
    }
    await list.remove();
    res.status(200).json({ success: true });
  } catch (err) {
    next(err);
  }
};
