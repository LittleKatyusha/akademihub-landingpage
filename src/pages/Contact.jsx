/**
 * Contact Page
 * Halaman kontak dengan informasi email, telepon, dan alamat
 * Menggunakan styled-components untuk styling
 */
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: calc(100vh - 70px);
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%);
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
`;

const ContactIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, ${props => props.$color1} 0%, ${props => props.$color2} 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const ContactLabel = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const ContactValue = styled.p`
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
`;

const ContactLink = styled.a`
  color: #2563eb;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
`;

const FormSection = styled.section`
  padding: 4rem 2rem;
  background: white;
`;

const FormContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const FormSubtitle = styled.p`
  text-align: center;
  color: #64748b;
  margin-bottom: 2rem;
`;

const ContactForm = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.875rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  justify-self: start;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(37, 99, 235, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MapSection = styled.section`
  padding: 0;
  background: #f8fafc;
`;

const MapPlaceholder = styled.div`
  background: linear-gradient(135deg, #e0e7ff 0%, #dbeafe 100%);
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #4b5563;
`;

const MapIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const MapText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'info@akamedihub.id',
      link: 'mailto:info@akamedihub.id',
      color1: '#2563eb',
      color2: '#3b82f6'
    },
    {
      icon: '📞',
      label: 'Telepon',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890',
      color1: '#059669',
      color2: '#10b981'
    },
    {
      icon: '📍',
      label: 'Alamat',
      value: 'Jl. Pendidikan No. 123, Jakarta Selatan, 12345',
      color1: '#dc2626',
      color2: '#ef4444'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroTitle>Hubungi Kami</HeroTitle>
        <HeroSubtitle>
          Kami siap membantu Anda dalam transformasi digital pendidikan.
          Jangan ragu untuk menghubungi kami melalui berbagai channel berikut.
        </HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <Container>
          <ContactGrid>
            {contactInfo.map((info, index) => (
              <ContactCard key={index}>
                <ContactIcon $color1={info.color1} $color2={info.color2}>
                  {info.icon}
                </ContactIcon>
                <ContactLabel>{info.label}</ContactLabel>
                <ContactValue>
                  {info.link ? (
                    <ContactLink href={info.link}>{info.value}</ContactLink>
                  ) : (
                    info.value
                  )}
                </ContactValue>
              </ContactCard>
            ))}
          </ContactGrid>
        </Container>
      </ContentSection>

      <FormSection>
        <Container>
          <FormContainer>
            <FormTitle>Kirim Pesan</FormTitle>
            <FormSubtitle>
              Isi form di bawah ini dan tim kami akan merespons dalam 24 jam
            </FormSubtitle>
            <ContactForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="name">Nama Lengkap</FormLabel>
                  <FormInput
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan alamat email"
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormRow>
                <FormGroup>
                  <FormLabel htmlFor="phone">Nomor Telepon</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Masukkan nomor telepon"
                  />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="subject">Subjek</FormLabel>
                  <FormInput
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Masukkan subjek pesan"
                    required
                  />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <FormLabel htmlFor="message">Pesan</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                />
              </FormGroup>
              <SubmitButton type="submit">
                Kirim Pesan
              </SubmitButton>
            </ContactForm>
          </FormContainer>
        </Container>
      </FormSection>

      <MapSection>
        <MapPlaceholder>
          <MapIcon>🗺️</MapIcon>
          <MapText>Peta Lokasi - Jl. Pendidikan No. 123, Jakarta Selatan</MapText>
        </MapPlaceholder>
      </MapSection>
    </PageContainer>
  );
};

export default Contact;
