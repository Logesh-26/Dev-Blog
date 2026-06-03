const express = require('express');
const multer = require("multer");
const path = require("path");


const {renderCreateBlogPage, createNewBlogPost, renderBlogPostPage, handleDeleteBlog} = require("../controllers/blogController");
const Blog = require("../models/blog");
const { onlyGrantAccessTo, ensureAuthenticated} = require("../middlewares/auth");

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, `${req.user._id}-${Date.now()}-${file.originalname}`)
    }
});

const upload = multer({ storage });



//GET
router.get("/create", ensureAuthenticated,renderCreateBlogPage);

router.get("/view/:id",renderBlogPostPage);

router.get('/delete/:id', onlyGrantAccessTo('admin'), handleDeleteBlog);

//POST
router.post("/create", ensureAuthenticated, upload.single('coverImage'), createNewBlogPost);

module.exports = router;