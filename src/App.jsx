/**
 * App Component
 * Komponen root aplikasi yang menyusun layout dengan Header, Outlet, dan Footer
 * Menggunakan React Router v7 Outlet untuk render child routes
 */
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <AppContainer>
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content - Render child routes via Outlet */}
      <MainContent>
        <Outlet />
      </MainContent>
      
      {/* Footer */}
      <Footer />
    </AppContainer>
  );
}

export default App;
