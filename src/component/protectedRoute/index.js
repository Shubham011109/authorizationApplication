
import Cookies from "js-cookie";
import LoginForm from "../loginForm";
import Home from "../home";

const ProtectedRoute = (props) => {

    

    const token = Cookies.get("jwttoken");
    if (token === undefined) {
      return <><LoginForm /></>
    } 
      return <Home/>
};

export default ProtectedRoute;
