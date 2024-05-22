const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName: String,
    email: String,
    password:String,
    role:String,
    IsVeryfied:
    {type:Boolean,
    default:false
    }
});

module.exports =mongoose.model("UserData",userSchema);