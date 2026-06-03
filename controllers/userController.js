const { generateTokenForUser } = require('../utils/auth');
const User = require('../models/user');
const Blog = require('../models/blog');

exports.handleUserLogin = async function (req, res) {
    const { email, password } = req.body;
    try {
        if (!email || !password) throw new Error("Email and password are required");
        const user = await User.findOne({ email });

        if (!user) throw new Error(`User with ${ email } does not exist, Please signup to continue`);

        if (user.password !== password) throw new Error("Invalid password, Please try again.");

        //token

        const token = await generateTokenForUser(user._id);
        console.log(token);

        // return res.cookie("token", token).render('login', { message: "Login success" }); //for testing purpose, in production we should redirect to home page or dashboard
        
        return res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
        }).redirect("/");

    } catch (error) {
        res.render('login', {
            error,
        });
    }
}

exports.handleUserSignup = async function (req, res) {
    const { fullName, email, password } = req.body;
    try {
        if (!fullName) throw new Error("Full Name is required");
        if (!email) throw new Error("Email is required");
        if (!password || password.length < 5) throw new Error("password is required and must be 5 characters long");

        const user = await User.create({ fullName, email, password });
        
        const token = await generateTokenForUser(user._id);

        // return res.render("Login", { message: "Signup successful, Please Login to continue" }); //for testing purpose, in production we should redirect to home page or dashboard

        return res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "Lax",
        }).redirect("/");
    } catch (error) {
        res.render('signup', {
            error,
        })
    };
};

exports.handleUserLogout = function (req, res) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "Lax",
    }).redirect("/login");

    console.log(`${req.user.fullName} logged out`);
}

exports.renderUsersBlogs = async function (req, res) {
    if (!req.user) return res.redirect('/login');
    const blogs = await Blog.find({ createdBy: req.user._id });
    return res.render('usersBlogs', {
        user: req.user,
        blogs,
    })
}