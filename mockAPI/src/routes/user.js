import { userLogin,getProducts,getProductById,userDetails,getBanners} from "../controllers/user.js";
import { authenticateToken } from "../services/auth.js";

const routes = (app) => {
  //to authenticate user
  app.post("/userLogin", userLogin);
  app.get("/products",getProducts)
  app.get("/banners",getBanners)
  app.post("/productById",getProductById)
  app.post("/userDetails",userDetails)
};
export default routes;
