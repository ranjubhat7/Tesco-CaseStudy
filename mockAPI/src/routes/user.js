import { userLogin,getProducts,getProductById} from "../controllers/user.js";
import { authenticateToken } from "../services/auth.js";

const routes = (app) => {
  //to authenticate user
  app.post("/userLogin", userLogin);
  app.get("/products",getProducts)
  app.post("/productById",authenticateToken,getProductById)
};
export default routes;
