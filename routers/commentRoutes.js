const express = require("express");
const router = express.Router();

const Comment = require('../models/comments');

const { handleCreateComment } = require('../controllers/commentController');
const {ensureAuthenticated } = require('../middlewares/auth');

router.post('/create', ensureAuthenticated, handleCreateComment);


module.exports = router;