import {
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="base-green" expand="sm">
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav>
            <div href="/" className="navBarElement">
              Products
            </div>
          </Nav>

          <Nav>
            <FormControl
              type="text"
              placeholder="Search"
              className="navBarSearchBar"
              aria-label="Search"
            />
          </Nav>
          <Nav>
            <div href="/" className="navBarElement">
              Shopping Cart
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
