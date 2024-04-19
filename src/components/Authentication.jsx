import { Outlet, Navigate } from "react-router-dom";
import { useAuthenticateContext } from "./context/Authenticate";


const Authentication = () => {
  const { authenticate } =  useAuthenticateContext()
  console.log(authenticate)
  return <div>{authenticate ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default Authentication;
