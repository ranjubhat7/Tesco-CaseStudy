import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, reDirectPath, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={reDirectPath} replace />;
  }
  return children;
};
export default Protected;
