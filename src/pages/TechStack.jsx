/**
 * TechStack Page
 * Halaman yang menampilkan teknologi-teknologi yang digunakan AkademiHub
 * Menggunakan styled-components untuk styling
 */
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #155e75 100%);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const TechCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-top: 4px solid ${props => props.$color};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const TechHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const TechIcon = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.$bgColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.75rem;
  flex-shrink: 0;
`;

const TechName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
`;

const TechVersion = styled.span`
  display: inline-block;
  background: ${props => props.$bgColor};
  color: ${props => props.$color};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-top: 0.25rem;
`;

const TechDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 0.95rem;
  margin-bottom: 1rem;
`;

const TechFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TechFeature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.85rem;
  margin-bottom: 0.4rem;

  &::before {
    content: '▸';
    color: ${props => props.$color};
    font-weight: 700;
  }
`;

const ArchitectureSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const ArchitectureTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 2rem;
`;

const ArchitectureDiagram = styled.div`
  max-width: 900px;
  margin: 0 auto;
  background: #f8fafc;
  border-radius: 16px;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ArchLayer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  border-left: 4px solid ${props => props.$color};
`;

const ArchLayerTitle = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.$color};
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ArchItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ArchItem = styled.span`
  background: #f1f5f9;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.8rem;
  color: #475569;
`;

const TechStack = () => {
  const technologies = [
    {
      name: 'React',
      version: 'v18 / v19',
      icon: '⚛️',
      description: 'Library JavaScript modern untuk membangun antarmuka pengguna yang interaktif dan responsif.',
      color: '#61dafb',
      bgColor: '#e0f2fe',
      features: [
        'Component-based architecture',
        'Virtual DOM untuk performa optimal',
        'Hooks & Context API',
        'React Router v7 untuk navigasi'
      ]
    },
    {
      name: 'AkademiHub Core API',
      version: 'RESTful API',
      icon: '🔌',
      description: 'API kustom yang dirancang khusus untuk kebutuhan sistem manajemen pendidikan AkademiHub.',
      color: '#2563eb',
      bgColor: '#dbeafe',
      features: [
        'RESTful architecture',
        'JSON response format',
        'Rate limiting & throttling',
        'Comprehensive documentation'
      ]
    },
    {
      name: 'Jasper Report Engine',
      version: 'Enterprise',
      icon: '📊',
      description: 'Engine pelaporan profesional untuk menghasilkan laporan akademik dan administrasi yang kompleks.',
      color: '#ea580c',
      bgColor: '#ffedd5',
      features: [
        'PDF & Excel export',
        'Custom report templates',
        'Chart & graph integration',
        'Scheduled report generation'
      ]
    },
    {
      name: 'MinIO S3',
      version: 'Object Storage',
      icon: '🗄️',
      description: 'Solusi penyimpanan objek high-performance yang kompatibel dengan Amazon S3 API.',
      color: '#c2410c',
      bgColor: '#fed7aa',
      features: [
        'S3-compatible API',
        'High availability',
        'Erasure coding',
        'Bucket policies & encryption'
      ]
    },
    {
      name: 'Docker',
      version: 'Containerization',
      icon: '🐳',
      description: 'Platform containerization untuk deployment yang konsisten dan scalable.',
      color: '#2496ed',
      bgColor: '#dbeafe',
      features: [
        'Container orchestration',
        'Microservices ready',
        'Environment consistency',
        'Easy scaling & rollback'
      ]
    },
    {
      name: 'Redis',
      version: 'In-Memory Store',
      icon: '⚡',
      description: 'Database in-memory untuk caching dan session management dengan performa tinggi.',
      color: '#dc2626',
      bgColor: '#fee2e2',
      features: [
        'Sub-millisecond latency',
        'Session management',
        'Real-time analytics',
        'Pub/Sub messaging'
      ]
    },
    {
      name: 'Laravel Sanctum',
      version: 'Authentication',
      icon: '🔐',
      description: 'Sistem autentikasi ringan untuk SPA dan mobile applications.',
      color: '#ef4444',
      bgColor: '#fee2e2',
      features: [
        'Token-based auth',
        'SPA authentication',
        'Mobile app support',
        'API token management'
      ]
    },
    {
      name: 'Laravel Passport',
      version: 'OAuth2 Server',
      icon: '🛡️',
      description: 'Implementasi OAuth2 server lengkap untuk autentikasi third-party.',
      color: '#f97316',
      bgColor: '#ffedd5',
      features: [
        'OAuth2 compliant',
        'Personal access tokens',
        'Client credential grants',
        'Scope management'
      ]
    }
  ];

  const architectureLayers = [
    {
      title: 'Presentation Layer',
      color: '#2563eb',
      items: ['React', 'Styled Components', 'React Router v7']
    },
    {
      title: 'API Gateway',
      color: '#7c3aed',
      items: ['AkademiHub Core API', 'Laravel Sanctum', 'Laravel Passport']
    },
    {
      title: 'Application Layer',
      color: '#059669',
      items: ['Business Logic', 'Jasper Reports', 'Queue Workers']
    },
    {
      title: 'Data Layer',
      color: '#dc2626',
      items: ['Primary Database', 'Redis Cache', 'MinIO S3 Storage']
    },
    {
      title: 'Infrastructure',
      color: '#0891b2',
      items: ['Docker Containers', 'Load Balancer', 'Monitoring']
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Tech Stack Kami</HeroTitle>
        <HeroSubtitle>
          AkademiHub dibangun dengan teknologi modern dan terpercaya untuk
          memastikan performa, keamanan, dan skalabilitas terbaik
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <TechGrid>
            {technologies.map((tech, index) => (
              <TechCard key={index} $color={tech.color}>
                <TechHeader>
                  <TechIcon $bgColor={tech.bgColor}>{tech.icon}</TechIcon>
                  <div>
                    <TechName>{tech.name}</TechName>
                    <TechVersion $bgColor={tech.bgColor} $color={tech.color}>
                      {tech.version}
                    </TechVersion>
                  </div>
                </TechHeader>
                <TechDescription>{tech.description}</TechDescription>
                <TechFeatures>
                  {tech.features.map((feature, idx) => (
                    <TechFeature key={idx} $color={tech.color}>
                      {feature}
                    </TechFeature>
                  ))}
                </TechFeatures>
              </TechCard>
            ))}
          </TechGrid>
        </Container>
      </ContentSection>

      <ArchitectureSection>
        <Container>
          <ArchitectureTitle>Arsitektur Sistem</ArchitectureTitle>
          <ArchitectureDiagram>
            {architectureLayers.map((layer, index) => (
              <ArchLayer key={index} $color={layer.color}>
                <ArchLayerTitle $color={layer.color}>{layer.title}</ArchLayerTitle>
                <ArchItems>
                  {layer.items.map((item, idx) => (
                    <ArchItem key={idx}>{item}</ArchItem>
                  ))}
                </ArchItems>
              </ArchLayer>
            ))}
          </ArchitectureDiagram>
        </Container>
      </ArchitectureSection>
    </PageContainer>
  );
};

export default TechStack;
