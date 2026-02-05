import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { products } from '../data/products'; // El archivo que creamos antes
import { useNavigate } from 'react-router-dom';
import { useFilters } from '../contexts/FilterContext';

const ProductGrid = () => {
  const navigate = useNavigate();
  const { filters } = useFilters();

  const filteredProducts = products.filter((product) => {
    const minOk = filters.minPrice == null ? true : product.price >= filters.minPrice;
    const maxOk = filters.maxPrice == null ? true : product.price <= filters.maxPrice;
    return minOk && maxOk;
  });

  return (
    <Container className="my-5">
      {/* row-cols-2: 2 columnas en móvil
        row-cols-md-3: 3 columnas en tablet
        row-cols-lg-4: 4 columnas en desktop 
      */}
      <Row className="g-3 row-cols-2 row-cols-md-3 row-cols-lg-4">
        {filteredProducts.map((product) => (
          <Col key={product.id}>
            <Card onClick={() => navigate(`/product/${product.id}`)} className="border-0 h-100 shadow-sm position-relative" style={{ cursor: 'pointer' }}>
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
                className="rounded-0"
                style={{ objectFit: 'cover', aspectRatio: '3/4' }}
              />
              <Card.Body className="px-1 py-3 text-center">
                <Card.Title className="small mb-1 text-uppercase fw-bold">
                  {product.name}
                </Card.Title>
                <Card.Text className="text-muted mb-0">${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;