const authModel=require("../auth/auth-model");
const bcrypt = require("bcryptjs");



function checkPayload(req,res,next){
try {
    const {username,password}=req.body;
    if(!username || !password){
        res.status(400).json({message:"Kullanıcı bilgilerinizi kontrol ediniz!"});
    }else{
        next()
    }
} catch (error) {
    next(error)
}
}


async function isUserNameExist(req,res,next){
try {
    let {username}=req.body;
    const isExist= await authModel.getBy({username:username});
    if(isExist ){
        res.status(400).json({message:"Bu kullanıcı zaten bulunuyor."})
    }else{
        next();
    }
} catch (error) {
    next(error);
    
}


}

async function checkUser(req,res,next){
 try {
   const { username, password } = req.body;
   const user = await authModel.getBy({ username: username });
   const isPasswordMatched = bcrypt.compareSync(password, user.password);
   if (!isPasswordMatched) {
     res.status(400).json({ message: "geçersiz kriterler" });
   } else {
    req.currentUser=user;
    next();
     };
    
   }
  catch (error) {
   next(error);
 }


}

module.exports = {
  checkPayload,
  isUserNameExist,
checkUser,


};