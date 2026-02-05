import { Navbar, Container, Offcanvas, Button, Modal, Form } from 'react-bootstrap';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFilters } from '../contexts/FilterContext';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { filters, setFilters } = useFilters();

  const [min, setMin] = useState<string>(filters.minPrice ? String(filters.minPrice) : '');
  const [max, setMax] = useState<string>(filters.maxPrice ? String(filters.maxPrice) : '');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const applyFilters = () => {
    const minPrice = min === '' ? null : Number(min);
    const maxPrice = max === '' ? null : Number(max);
    setFilters({ minPrice, maxPrice });
    setShow(false);
  };

  const resetFilters = () => {
    setMin('');
    setMax('');
    setFilters({ minPrice: null, maxPrice: null });
  };

  return (
    <>
      <Navbar bg="white" sticky="top" className="border-bottom py-3">
        <Container fluid className="px-4 d-flex align-items-center">
          <button onClick={handleShow} className="btn border-0 p-0 me-3">
            <Menu size={24} />
          </button>

          <Navbar.Brand as={Link} to="/" className="fw-bold mx-auto text-uppercase" style={{ letterSpacing: '2px' }}>
            Mood Pink
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="fw-bold">Filtros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form>
            <Form.Group className="mb-3" controlId="minPrice">
              <Form.Label>Precio mínimo</Form.Label>
              <Form.Control type="number" placeholder="0" value={min} onChange={(e) => setMin(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="maxPrice">
              <Form.Label>Precio máximo</Form.Label>
              <Form.Control type="number" placeholder="999" value={max} onChange={(e) => setMax(e.target.value)} />
            </Form.Group>

            <div className="d-flex gap-2">
              <Button variant="dark" onClick={applyFilters}>Aplicar</Button>
              <Button variant="outline-secondary" onClick={resetFilters}>Restablecer</Button>
            </div>
          </Form>

          {/* Sobre nosotros oculto temporalmente */}
        </Offcanvas.Body>
      </Offcanvas>

      <Modal show={aboutOpen} onHide={() => setAboutOpen(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Sobre los dueños</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-2"><strong>María López</strong> — Fundadora y maquilladora profesional. Apasionada por hacer sentir bien a las personas a través del color.</p>
          <p className="mb-0"><strong>Carlos Méndez</strong> — Responsable de logística y atención al cliente. Siempre buscando la mejor experiencia para nuestros clientes.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setAboutOpen(false)}>Cerrar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CustomNavbar;