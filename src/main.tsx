import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Dev-only: opt out of BFCache to avoid noisy extension errors like:
// "The page keeping the extension port is moved into back/forward cache..."
if (import.meta.env.DEV) {
  window.addEventListener('beforeunload', () => {});
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
