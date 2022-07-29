import products from "../db/products";
import users from "../db/user";
import { generateAccessToken, compare } from "../services/auth";
import winston from "winston";
import { logConfiguration } from "../config/loggers";


const logger = winston.createLogger(logConfiguration);

const findUser = async (email) => {
  const user = users.find((user) => {
    return user.email == email;
  });
  return user;
};

// Admin Login API
export const userLogin = async (req, res) => {
  /**
   * body = {
   * "email": "abc@gmail.com",
   * "password": "password"}
   */
  const { email, password } = req.body;
  try {
    //Finding user
    const user = await findUser(email);
    console.log(user); //Generating token
   

    if (user) {
      // validating password
      // compare function in utils/auth.js
      let validate = await compare(password, user.password);

      if (validate) {
        logger.log("info", "User Logged in " + user);
        const token = generateAccessToken({ userEmail: email });

        logger.log("info", "Token for authorization : " + token);
        res.cookie("token", token, {
          maxAge: 300000,
          httpOnly: true,
        });
        return res.status(200).json({
          success: true,
          msg: "Successfully Logged in",
          user:user.email,
          token
        });
      } else {
        logger.log("error", "Passwords donot match");
        return res.status(502).json({
          success: false,
          msg: "Your password is incorrect, try again",
        });
      }
    } else {
      logger.log("error", "User donot exist with email id " + email);
      return res.status(502).json({
        success: false,
        msg: "This email does not exist, try again",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, msg: "Internal server error" });
  }
};

export const userDeatails=(token)=>{
  const userEmail=users.filter(user=>user.token===token)
  return userEmail[0]["email"]
}

export const getProducts = async (req, res) => {
  res.header("Content-Type", "application/json");
  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRW1haWwiOiJkZWZAZ21haWwuY29tIiwiaWF0IjoxNjU5MDc1MjcxLCJleHAiOjE2NTkwOTMyNzF9.uNjg4UziPtUiXSDX9s0Wi_7JaLX4getHpEZ9S_GI2cs"
 
  const userEmail=userDeatails(token)
  if(userEmail)
    res.status(200).json({products,userEmail});
    else
    res.status(401).json({success:false,msg:"invalid token"})
};


export const getProductById=async(req,res)=>{
  res.header("Content-Type", "application/json");
  const filteredProduct=products.filter(product=>product.id===req.body.id)
  res.send(filteredProduct)
}
