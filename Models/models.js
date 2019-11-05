const mongoose = require('mongoose');

const HobbySchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, minlength: [10, "You have to leave a description of at least 10 characters."]}
}, { timestamps: true });

const UserSchema = new mongoose.Schema({
    name: {type: String, required: [true, "You must include a name."], minlength: [2, "Your name must be at least 2 characters long."]},
    age: {
        type: Number,
        required: [true, "You must include an age for this user."], 
        validate: {
            validator: function(number){
                return number >= 18;
            },
            message: "You must be at least 18 years of age or older."
        }
    },
    isYudong: Boolean,
    hobbies: [String]
}, { timestamps: true });

const User = mongoose.model('users', UserSchema);
const Hobby = mongoose.model('hobbies', HobbySchema);

module.exports = {
    User: User,
    Hobby: Hobby
}