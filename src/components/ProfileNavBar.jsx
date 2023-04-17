import { useSelector } from "react-redux";
import {Navbar, Container, NavDropdown} from 'react-bootstrap';

const ProfileNavBar = () => {
    // const userName = useSelector((state) => state.common.currentUser.firstName);
    // console.log(userName);
  
    // const displayName = userName.toUpperCase();
    const displayName = "HH";
return(
    <Navbar bg="dark" variant="dark">
        <Container className="nav">
          <Navbar.Brand>Welcome !!</Navbar.Brand>
          <NavDropdown title={ <span className="text-white">User </span>} id="navbarScrollingDropdown">
            <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
            <NavDropdown.Item href="/Profile/Settings">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/">
              Log out
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
);
};

export default ProfileNavBar;