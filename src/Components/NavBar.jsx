import {
  Col,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "./ShoppingCart/ShoppingCartIcon";

const NavBar = () => {
  return (
    <Navbar bg="base-green" expand="sm">
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Link to={`/`} className="navElementLink">
            <Nav>
              <div href="/" className="navBarElement">
                Products
              </div>
            </Nav>
          </Link>
          {/* <Nav>
            <FormControl
              type="text"
              placeholder="Search"
              className="navBarSearchBar"
              aria-label="Search"
            />
          </Nav> */}
          <ShoppingCartIcon />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
