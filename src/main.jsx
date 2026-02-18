/**
 * Entry Point Aplikasi
 * Menginisialisasi React root dan BrowserRouter
 * React Router v7 dengan data API future flag
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import AppRoutes from './routes/AppRoutes.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout Route - App component sebagai layout wrapper */}
        <Route path="/" element={<App />}>
          {/* Nested routes akan di-render via Outlet di App.jsx */}
          <Route path="*" element={<AppRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
