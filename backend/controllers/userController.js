
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
module.exports.login = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });
    console.log("Request body:", req.body);

    if (user) {
      const validity = await bcrypt.compare(password, user.password);

      if (!validity) {
        console.log("Wrong password");
        return res.status(400).json("Wrong password");
      } else {
        const token = jwt.sign(
          { email: user.email, id: user._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }
        );
        console.log(token);
        return res.status(200).json({ user, token });
      }
    } else {
      console.log("User not found");
      return res.status(404).json("User not found");
    }
  } catch (error) {
    console.error("Error:", error.message);
    return res.status(500).json({ message: error.message });
  }
};




module.exports.signup = async (req,res,next)=>{

  console.log("req.body",req.body)



const salt = await bcrypt.genSalt(10);
const hashedPass = await bcrypt.hash(req.body.password, salt);
req.body.password = hashedPass
const role= "admin"
const newUser = new User({
  ...req.body, 
  role, 
});
const {email} = req.body

try {

    const existingUser = await User.findOne({email});
  
    if(existingUser){
        return res.status(200).json('user already exists')
    }

   const user = await newUser.save()

   const token = jwt.sign(
    { username: user.email, id: user._id },
    process.env.JWTKEY,
    { expiresIn: "1h" }
  );
  console.log(user,token)
  
  res.status(200).json({ user, token });


    
} catch (error) {
    res.status(500).json({ message: error.message });  
}



}