import { userLogin,getProducts} from "../controllers/user.js";

const routes = (app) => {
  //to authenticate user
  app.post("/userLogin", userLogin);
  app.get("/products",getProducts)
};
export default routes;
