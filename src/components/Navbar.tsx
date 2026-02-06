import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CustomNavbar = () => {
  return (
    <Navbar bg="white" sticky="top" className="border-bottom py-3">
      <Container fluid className="px-4 d-flex align-items-center justify-content-between gap-3">
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold text-uppercase m-0"
          style={{ letterSpacing: '2px', whiteSpace: 'nowrap' }}
        >
          Mood Pink
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;