const express = require('express');
const router = express.Router();

const { handleUserLogin, handleUserSignup, handleUserLogout, renderUsersBlogs} = require("../controllers/userController");
const { ensureAuthenticated } = require('../middlewares/auth');

//GET
router.get('/logout', handleUserLogout);
router.get('/blogs', ensureAuthenticated, renderUsersBlogs);


//POST
router.post('/login', handleUserLogin);

router.post('/signup', handleUserSignup);

module.exports = router;