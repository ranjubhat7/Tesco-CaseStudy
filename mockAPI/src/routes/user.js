import { userLogin,getProducts,getProductById,userDetails} from "../controllers/user.js";
import { authenticateToken } from "../services/auth.js";

const routes = (app) => {
  //to authenticate user
  app.post("/userLogin", userLogin);
  app.get("/products",getProducts)
  app.post("/productById",authenticateToken,getProductById)
  app.post("/userDetails",userDetails)
};
export default routes;
