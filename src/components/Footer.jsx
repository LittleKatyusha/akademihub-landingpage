/**
 * Footer Component
 * Footer dengan informasi copyright dan link cepat
 * Menggunakan styled-components untuk styling
 */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  padding: 3rem 0 1.5rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    color: #60a5fa;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    font-size: 0.9rem;
  }
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  span {
    background: linear-gradient(90deg, #60a5fa 0%, #a78bfa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.5rem;
  }
`;

const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;

  &:hover {
    color: #60a5fa;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  span {
    font-size: 1rem;
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1.5rem 2rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85rem;
    margin: 0;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <span>📚</span>
            <span>AkademiHub</span>
          </FooterLogo>
          <p>
            Solusi manajemen sekolah terintegrasi yang membantu institusi pendidikan
            di Indonesia bertransformasi ke era digital.
          </p>
        </FooterSection>

        <FooterSection>
          <h3>Menu Cepat</h3>
          <FooterLinks>
            <li><FooterLink to="/">Beranda</FooterLink></li>
            <li><FooterLink to="/pillars">7 Pilar</FooterLink></li>
            <li><FooterLink to="/techstack">Tech Stack</FooterLink></li>
            <li><FooterLink to="/contact">Kontak</FooterLink></li>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>Hubungi Kami</h3>
          <ContactInfo>
            <ContactItem>
              <span>📧</span>
              <span>info@akamedihub.id</span>
            </ContactItem>
            <ContactItem>
              <span>📞</span>
              <span>+62 812-3456-7890</span>
            </ContactItem>
            <ContactItem>
              <span>📍</span>
              <span>Jl. Pendidikan No. 123, Jakarta</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>© {currentYear} AkademiHub. Hak Cipta Dilindungi. | akamedihub.id</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
