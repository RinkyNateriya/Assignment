const { userRepository,loginRepository,verifyuserRepository} = require("../repository/userRepository");

async function userService(req,res)
{

  const result= await userRepository(req,res);
res.json({ message: "User registration Sucessfully", data:result });
}

async function loginService(req,res)
{
  const result= await loginRepository(req,res);
  if(result){
    res.json({ message: "login sucesss", Token:result });
  }
  else{

    res.json({ message: "you are not allowed to login from here", Token:result });
  }

}


async function verifyuserService(req,res)
{
  const result= await verifyuserRepository(req,res);
  if(result){
    res.json({ message: "veryfication success" });
  }
  else{

    res.json({ message: "you are not allowed to login from here"});
  }

}


module.exports = {
    userService,
    loginService,
    verifyuserService
};