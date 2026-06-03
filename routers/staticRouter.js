const express = require('express');
const router = express.Router();

const { renderHomePage, renderLoginPage, renderSignupPage} = require("../controllers/staticController");

//GET
router.get("/", renderHomePage);

router.get("/login", renderLoginPage);
router.get("/signup", renderSignupPage);
module.exports = router;