
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className='nav'>
          <Navbar.Brand href="#home">MOTOR TRAFFIC VIOLATION SYSTEM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/References">References</Nav.Link>
           
          </Nav>
         <div>
          <Button varient = "primary" href="/Login"> Login </Button> {''}
          <Button  href="/SignUp">SignUp</Button>
         </div>
        </Container>
      </Navbar>
      </>
  );
}

export default Navigation;