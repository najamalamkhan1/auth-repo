const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    }
)
const signup = new mongoose.model('users_signup', signupSchema);
module.exports = signup;