/**
 * Pillars Page
 * Halaman yang menampilkan 7 pilar utama AkademiHub
 * Menggunakan styled-components untuk styling
 */
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
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
  max-width: 600px;
  margin: 0 auto;
`;

const ContentSection = styled.section`
  padding: 4rem 2rem;
  background: #f8fafc;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PillarCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-left: 4px solid ${props => props.$color};

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const PillarHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const PillarNumber = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.$color};
  color: white;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  flex-shrink: 0;
`;

const PillarIcon = styled.div`
  width: 50px;
  height: 50px;
  background: ${props => props.$bgColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const PillarTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
`;

const PillarDescription = styled.p`
  color: #64748b;
  line-height: 1.7;
  font-size: 0.95rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #475569;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;

  &::before {
    content: '✓';
    color: #10b981;
    font-weight: 700;
  }
`;

const Pillars = () => {
  const pillars = [
    {
      number: '01',
      icon: '🏛️',
      title: 'Manajemen & Master',
      description: 'Kelola data master sekolah dengan mudah. Sistem manajemen yang komprehensif untuk mengatur seluruh informasi penting institusi pendidikan.',
      color: '#2563eb',
      bgColor: '#dbeafe',
      features: [
        'Manajemen data sekolah & yayasan',
        'Pengaturan tahun ajaran & semester',
        'Manajemen kelas & ruangan',
        'Data guru & karyawan'
      ]
    },
    {
      number: '02',
      icon: '📚',
      title: 'Akademik Digital',
      description: 'Platform pembelajaran digital lengkap untuk mendukung proses belajar mengajar yang modern dan efektif.',
      color: '#7c3aed',
      bgColor: '#ede9fe',
      features: [
        'E-Rapor & nilai digital',
        'Jurnal KBM online',
        'RPP & silabus elektronik',
        'Analisis hasil belajar'
      ]
    },
    {
      number: '03',
      icon: '💰',
      title: 'Keuangan (SPP)',
      description: 'Sistem manajemen keuangan terintegrasi untuk mengelola pembayaran SPP dan administrasi keuangan sekolah secara efisien.',
      color: '#059669',
      bgColor: '#d1fae5',
      features: [
        'Pembayaran SPP online',
        'Generate invoice otomatis',
        'Laporan keuangan real-time',
        'Integrasi dengan bank'
      ]
    },
    {
      number: '04',
      icon: '🤝',
      title: 'Bimbingan Konseling (BK)',
      description: 'Modul BK digital untuk membantu guru konseling dalam memberikan layanan bimbingan kepada peserta didik.',
      color: '#dc2626',
      bgColor: '#fee2e2',
      features: [
        'Catatan kasus siswa',
        'Jadwal konseling',
        'Rekomendasi karir',
        'Laporan perkembangan'
      ]
    },
    {
      number: '05',
      icon: '📖',
      title: 'Perpustakaan Digital',
      description: 'Sistem perpustakaan modern dengan katalog digital, peminjaman online, dan manajemen koleksi yang efisien.',
      color: '#d97706',
      bgColor: '#fef3c7',
      features: [
        'Katalog buku digital',
        'Peminjaman & pengembalian online',
        'Tracking keterlambatan',
        'E-book repository'
      ]
    },
    {
      number: '06',
      icon: '📝',
      title: 'PPDB Online',
      description: 'Sistem Penerimaan Peserta Didik Baru berbasis online yang memudahkan proses pendaftaran dan seleksi calon siswa.',
      color: '#0891b2',
      bgColor: '#cffafe',
      features: [
        'Pendaftaran online 24/7',
        'Verifikasi dokumen digital',
        'Sistem seleksi otomatis',
        'Pengumuman hasil online'
      ]
    },
    {
      number: '07',
      icon: '🎯',
      title: 'SPK (Decision Support)',
      description: 'Sistem Pendukung Keputusan dengan algoritma canggih untuk membantu pengambilan keputusan akademik yang objektif.',
      color: '#be123c',
      bgColor: '#ffe4e6',
      features: [
        'Perangkingan siswa otomatis',
        'Rekomendasi beasiswa',
        'Analisis kelulusan',
        'Laporan statistik'
      ]
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>7 Pilar AkademiHub</HeroTitle>
        <HeroSubtitle>
          Solusi komprehensif yang mencakup seluruh aspek manajemen pendidikan
          untuk memastikan transformasi digital yang sempurna
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <PillarsGrid>
            {pillars.map((pillar, index) => (
              <PillarCard key={index} $color={pillar.color}>
                <PillarHeader>
                  <PillarNumber $color={pillar.color}>{pillar.number}</PillarNumber>
                  <PillarIcon $bgColor={pillar.bgColor}>{pillar.icon}</PillarIcon>
                  <PillarTitle>{pillar.title}</PillarTitle>
                </PillarHeader>
                <PillarDescription>{pillar.description}</PillarDescription>
                <FeatureList>
                  {pillar.features.map((feature, idx) => (
                    <FeatureItem key={idx}>{feature}</FeatureItem>
                  ))}
                </FeatureList>
              </PillarCard>
            ))}
          </PillarsGrid>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default Pillars;
