import { Outlet, Navigate } from "react-router-dom";

const Authentication = ({ authenticate }) => {
    console.log(authenticate)
  return <div>{authenticate ? <Outlet /> : <Navigate to={"/login"} />}</div>;
};

export default Authentication;
