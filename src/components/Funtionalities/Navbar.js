import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Barrnav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#listrobots">Robotlist</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Barrnav;