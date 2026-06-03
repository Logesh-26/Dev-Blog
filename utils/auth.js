const jwt = require('jsonwebtoken');

const User = require('../models/user');
const secretKey = process.env.JWT_SECRET;


async function generateTokenForUser(id) {
    const user = await User.findById(id);
    const payload = {
        _id: user._id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
    };

    const token = jwt.sign(payload, secretKey);
    return token;
}

function validateToken(token) {
    return jwt.verify(token, secretKey);
}

module.exports = {
    generateTokenForUser,
    validateToken,
};