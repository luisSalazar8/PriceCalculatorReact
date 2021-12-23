import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCart/ShoppingCartIcon";

const NavBar = () => {
  return (
    <Navbar bg="base-green" expand="sm" className="navBarBorder">
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Link to={`/`} className="navElementLink">
            <Nav className="navBarElement">
              <h3>
                Products
              </h3>
            </Nav>
          </Link>

          <ShoppingCartIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
