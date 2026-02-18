/**
 * Home Page
 * Halaman beranda dengan hero banner dan section "Kenapa Memilih Kami?"
 * Menggunakan styled-components untuk styling
 */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #06b6d4 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="0.5"/></svg>');
    background-size: 100px 100px;
    opacity: 0.5;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 1;
  animation: fadeIn 0.8s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.95;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;

  ${props => props.$variant === 'primary' ? `
    background: white;
    color: #2563eb;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
  ` : `
    background: transparent;
    color: white;
    border: 2px solid rgba(255, 255, 255, 0.5);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: white;
    }
  `}
`;

const WhyChooseSection = styled.section`
  padding: 5rem 2rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #64748b;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const StatsSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  text-align: center;
  padding: 1.5rem;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #64748b;
  font-size: 1rem;
`;

const Home = () => {
  const features = [
    {
      icon: '🎯',
      title: 'Terintegrasi Penuh',
      description: 'Semua kebutuhan manajemen sekolah dalam satu platform yang saling terhubung.'
    },
    {
      icon: '🔒',
      title: 'Keamanan Data',
      description: 'Sistem keamanan berlapis dengan enkripsi modern untuk melindungi data sekolah.'
    },
    {
      icon: '📱',
      title: 'Akses Mobile',
      description: 'Akses dari mana saja melalui aplikasi mobile yang user-friendly.'
    },
    {
      icon: '⚡',
      title: 'Performa Tinggi',
      description: 'Teknologi modern dengan respon cepat dan uptime 99.9%.'
    },
    {
      icon: '🎓',
      title: 'Sesuai Kurikulum',
      description: 'Didesain sesuai standar kurikulum pendidikan Indonesia terkini.'
    },
    {
      icon: '🤝',
      title: 'Dukungan 24/7',
      description: 'Tim support profesional siap membantu kapan saja Anda membutuhkan.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Sekolah Mitra' },
    { number: '50K+', label: 'Pengguna Aktif' },
    { number: '99.9%', label: 'Uptime' },
    { number: '7', label: 'Modul Utama' }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Transformasi Digital Pendidikan Indonesia</HeroTitle>
          <HeroSubtitle>
            AkademiHub adalah solusi manajemen sekolah terintegrasi yang membantu
            institusi pendidikan bertransformasi ke era digital dengan 7 pilar utama.
          </HeroSubtitle>
          <HeroButtons>
            <Button to="/pillars" $variant="primary">
              Jelajahi Fitur
            </Button>
            <Button to="/contact">
              Hubungi Kami
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <StatsSection>
        <Container>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatItem key={index}>
                <StatNumber>{stat.number}</StatNumber>
                <StatLabel>{stat.label}</StatLabel>
              </StatItem>
            ))}
          </StatsGrid>
        </Container>
      </StatsSection>

      <WhyChooseSection>
        <Container>
          <SectionTitle>Kenapa Memilih Kami?</SectionTitle>
          <SectionSubtitle>
            AkademiHub hadir dengan berbagai keunggulan yang membuatnya menjadi
            pilihan tepat untuk sekolah Anda
          </SectionSubtitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </WhyChooseSection>
    </>
  );
};

export default Home;
