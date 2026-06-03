const Comment = require('../models/comments');

exports.handleCreateComment = async function (req, res) {
    if (!req.user) return res.json({ error: "You are not logged In" });
    const { blogId, comment } = req.body;
    await Comment.create({ blogId, comment, createdBy: req.user._id });
    return res.json({ message: "success" });
}