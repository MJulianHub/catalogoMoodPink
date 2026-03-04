import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { products } from "../data/products";

function shuffle<T>(arr: T[]) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  const formatCurrency = new Intl.NumberFormat("es-NI", {
    style: "currency",
    currency: "NIO",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (!product) {
    return (
      <Container className="py-5">
        <p>Producto no encontrado.</p>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Volver
        </Button>
      </Container>
    );
  }

  // Mostrar otros productos del catálogo disponibles (excluyendo el actual), ordenados aleatoriamente
  const similar = shuffle(products.filter((p) => p.id !== product.id)).slice(
    0,
    4,
  );

  return (
    <Container className="my-5">
      <Row className="g-4">
        <Col md={6}>
          <Carousel color="black">
            {product.images.map((img, idx) => (
              <Carousel.Item key={idx}>
                <img
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className="d-block w-100"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col md={6}>
          <h2 className="fw-bold text-uppercase">{product.name}</h2>
          <p className="h5 text-muted">
            {formatCurrency.format(product.price)}
          </p>
          <p className="text-muted">{product.description}</p>
          <div className="mt-3">
            <Button
              as="a"
              href={`https://wa.me/50575057933?text=${encodeURIComponent(
                `Hola, quiero consultar por: ${product.name} (ID: ${product.id})`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="success"
              className="me-2"
            >
              Consultar
            </Button>
            <Button variant="outline-secondary" onClick={() => navigate(-1)}>
              Volver
            </Button>
          </div>
        </Col>
      </Row>

      <hr className="my-5" />

      <h5 className="mb-3">También te puede interesar</h5>
      <Row className="g-3 row-cols-2 row-cols-md-3 row-cols-lg-4">
        {similar.map((p) => (
          <Col key={p.id}>
            <Card
              onClick={() => navigate(`/product/${p.id}`)}
              className="border-0 h-100 shadow-sm"
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                src={p.images[0]}
                className="rounded-0"
                style={{ objectFit: "cover", aspectRatio: "3/4" }}
              />
              <Card.Body className="px-1 py-3 text-center">
                <Card.Title className="small mb-1 text-uppercase fw-bold">
                  {p.name}
                </Card.Title>
                <Card.Text className="text-muted mb-0">
                  {formatCurrency.format(p.price)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductPage;
