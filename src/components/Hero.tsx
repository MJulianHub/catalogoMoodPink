import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div 
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2087&auto=format&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh', // Altura ideal para móviles y tablets
        width: '100%'
      }}
    >
      <Container>
        <div className="bg-white p-4 d-inline-block shadow-sm" style={{ opacity: '0.9' }}>
          <h2 className="text-dark fw-light mb-2 tracking-widest text-uppercase">
            Beauty that defines your style
          </h2>
          <p className="text-muted small mb-4">Nueva Colección 2026</p>
          <Button 
            variant="dark" 
            className="rounded-0 px-4 py-2 text-uppercase small"
            style={{ letterSpacing: '1px' }}
          >
            View Products
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;