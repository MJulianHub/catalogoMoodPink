import { Container, Row, Col, Card, Badge, Form, Button, InputGroup, Modal, Carousel } from 'react-bootstrap';
import { products, type Product } from '../data/products';
import { useContext, useMemo, useState } from 'react';
import FilterContext from '../contexts/FilterContext';

const ProductGrid = () => {
  const filterCtx = useContext(FilterContext);

  if (!filterCtx) {
    throw new Error('ProductGrid must be used within a <FilterProvider>.');
  }

  const { filters, setFilters } = filterCtx;

  const [min, setMin] = useState<string>(filters.minPrice ? String(filters.minPrice) : '');
  const [max, setMax] = useState<string>(filters.maxPrice ? String(filters.maxPrice) : '');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const applyFilters = () => {
    const minNum = min === '' ? null : Number(min);
    const maxNum = max === '' ? null : Number(max);
    const minPrice = minNum === null || Number.isFinite(minNum) ? minNum : null;
    const maxPrice = maxNum === null || Number.isFinite(maxNum) ? maxNum : null;
    setFilters({ minPrice, maxPrice });
  };

  const resetFilters = () => {
    setMin('');
    setMax('');
    setFilters({ minPrice: null, maxPrice: null });
  };

  const formatCurrency = useMemo(() => {
    return new Intl.NumberFormat('es-NI', {
      style: 'currency',
      currency: 'NIO',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }, []);

  const filteredProducts = useMemo(() => {
    const min =
      typeof filters.minPrice === 'number' && Number.isFinite(filters.minPrice)
        ? filters.minPrice
        : null;
    const max =
      typeof filters.maxPrice === 'number' && Number.isFinite(filters.maxPrice)
        ? filters.maxPrice
        : null;

    return products.filter((p) => {
      if (min !== null && p.price < min) return false;
      if (max !== null && p.price > max) return false;
      return true;
    });
  }, [filters.maxPrice, filters.minPrice]);

  const closeModal = () => setSelectedProduct(null);

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-center mb-4">
        <div className="w-100" style={{ maxWidth: 720 }}>
          <div className="text-center mb-2 fw-semibold" style={{ color: 'var(--pink-2)' }}>
            Filtro de precios (C$)
          </div>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Row className="g-2 justify-content-center align-items-end">
              <Col xs={6} sm={6} md="auto">
                <InputGroup className="w-100">
                  <InputGroup.Text>C$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    inputMode="numeric"
                    placeholder="Precio mínimo"
                    value={min}
                    onChange={(e) => setMin(e.target.value)}
                  />
                </InputGroup>
              </Col>

              <Col xs={6} sm={6} md="auto">
                <InputGroup className="w-100">
                  <InputGroup.Text>C$</InputGroup.Text>
                  <Form.Control
                    type="number"
                    inputMode="numeric"
                    placeholder="Precio máximo"
                    value={max}
                    onChange={(e) => setMax(e.target.value)}
                  />
                </InputGroup>
              </Col>

              <Col xs={6} sm="auto" className="d-grid">
                <Button variant="dark" onClick={applyFilters}>
                  Aplicar
                </Button>
              </Col>
              <Col xs={6} sm="auto" className="d-grid">
                <Button variant="outline-secondary" onClick={resetFilters}>
                  Restablecer
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>

      <Row className="g-3 row-cols-2 row-cols-md-3 row-cols-lg-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card
              onClick={() => setSelectedProduct(product)}
              className="border-0 h-100 shadow-sm position-relative"
              style={{ cursor: 'pointer' }}
            >
              {product.tag && (
                <Badge
                  bg="dark"
                  className="position-absolute m-2 rounded-0 px-3 py-2"
                  style={{ top: 0, left: 0, zIndex: 1 }}
                >
                  {product.tag}
                </Badge>
              )}

              <Card.Img
                variant="top"
                src={product.images[0]}
                alt={product.name}
                className="rounded-0"
                style={{ objectFit: 'cover', aspectRatio: '3/4' }}
              />

              <Card.Body className="px-1 py-3 text-center">
                <Card.Title className="small mb-1 text-uppercase fw-bold">
                  {product.name}
                </Card.Title>
                <Card.Text className="text-muted mb-0">
                  {formatCurrency.format(product.price)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={selectedProduct !== null} onHide={closeModal} centered size="lg">
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="text-uppercase fw-bold">{selectedProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="g-4 align-items-stretch">
                <Col md={6}>
                  <Carousel>
                    {selectedProduct.images.map((img, idx) => (
                      <Carousel.Item key={idx}>
                        <img
                          src={img}
                          alt={`${selectedProduct.name} ${idx + 1}`}
                          className="d-block w-100"
                          style={{ objectFit: 'cover', aspectRatio: '3/4', borderRadius: 12 }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </Col>
                <Col md={6} className="d-flex align-items-center justify-content-center text-center">
                  <div className="w-100 h-100 d-flex flex-column justify-content-center">
                    <div className="h5 mb-3 text-muted">
                      {formatCurrency.format(selectedProduct.price)}
                    </div>
                    {selectedProduct.description && (
                      <p className="text-muted mb-0">{selectedProduct.description}</p>
                    )}
                  </div>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button
                as="a"
                href={`https://wa.me/50585696708?text=${encodeURIComponent(
                  `Hola, quiero consultar por: ${selectedProduct.name} (ID: ${selectedProduct.id})`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="success"
              >
                Consultar por WhatsApp
              </Button>
              <Button variant="outline-secondary" onClick={closeModal}>
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default ProductGrid;
