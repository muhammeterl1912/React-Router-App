import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useAuthenticateContext } from "../components/context/Authenticate";
const NavBar = () => {
  
  const { setAuthenticate} = useAuthenticateContext()
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <ul className="nav-bar text-white ">
            <li className="text-white">
              <NavLink to="/" className="nav-li">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-li">
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className="nav-li"
                onClick={() => setAuthenticate(false)}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
