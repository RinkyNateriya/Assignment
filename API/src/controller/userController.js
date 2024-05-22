const express = require ("express");
const { userService,loginService, verifyuserService } = require("../service/userService"); 
const router = express.Router();

router.post("/userdata", async (req, res) => {
    try {
        console.log("Received a POST request to /userdata",req.body);
         return await userService(req,res);
    } catch (error) {
        throw error;
    }
});

router.post("/login", async (req, res) => {
    try {
         return await loginService(req,res);
    } catch (error) {
        throw error;
    }
});

router.get("/", async (req, res) => {
    try {
        console.log(req.query.userId)
         return await verifyuserService(req,res);
    } catch (error) {
        throw error;
    }
});


module.exports = router;
