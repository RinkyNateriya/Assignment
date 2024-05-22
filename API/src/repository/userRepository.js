const User = require("../schema/userSchema");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Mailsend = require("../Handller/sendmailer");


async function userRepository(req, res) {
   try {
      const User1 = new User({
         firstName: req.body.firstName,
         lastName: req.body.lastName,
         email: req.body.email,
         password: req.body.password,
         role: req.body.role,
      });

      const result = User1.save();
      const url = `${"http://localhost:8010/api/user"}/?userId=${User1._id.toString()}`;

      const link = `<a href="${url}">Verify mail</a>`;

      Mailsend(link);
      return result;
   }
   catch (e) {

   }
}

async function loginRepository(req, res) {
   try {
      const loginData = await User.findOne({ email: req.body.email, password: req.body.password, role: "Admin",IsVeryfied:true }).exec();
      if (loginData != null) {
         const token = await generateToken(loginData);
         return loginData.token = token;
      }
      return loginData;
   }
   catch (e) {
      console.log("errroorrorrorro", e);
   }
}
async function generateToken(userData) {
   const payload = {
      user_id: userData._id.toString(),
      user_name: userData.email,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
   };
   const api_access_token = jwt.sign(payload, "this is my key");
   return api_access_token;
}

async function verifyuserRepository(req, res) {
   try {
      return await User.findOneAndUpdate({ _id: req.query.userId }, { IsVeryfied:true }, { new: true });
   }

   catch (e) {
      console.log("errroorrorrorro", e);
   }
}


module.exports = {
   userRepository, loginRepository, verifyuserRepository
};