import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import ProductPage from './components/ProductPage.tsx';
import { FilterProvider } from './contexts/FilterContext';

function App() {
  return (
    <BrowserRouter>
      <FilterProvider>
        <div className="min-vh-100 bg-white">
          <CustomNavbar />

          <Routes>
            <Route path="/" element={<ProductGrid />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>

          <footer className="py-4 text-center border-top mt-5">
            <p className="small text-muted mb-0">Mood Pink 2026</p>
          </footer>
        </div>
      </FilterProvider>
    </BrowserRouter>
  );
}

export default App;