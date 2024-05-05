import React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import ClippedDrawer from '../components/homeNav';
import '../styles/home.css'
import cow from '../assets/grass.jpg';
import milk from '../assets/milk.jpg';
import product from '../assets/products.jpg';
import vet from '../assets/vet.jpg';
import sale from '../assets/sale.jpg';
import hr from '../assets/HR.jpg';
import fin from '../assets/fin.jpg';
import sup from '../assets/sup.jpg';

const RootContainer = styled('div')({
  marginTop: 100,
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center', 
  alignItems: 'flex-start', 
  padding: '20px',
});

const StyledCard = styled(Card)({
  minWidth: 275,
  maxWidth: 300,
  margin: '20px',
  backgroundColor: '#E7F1F7',
  flex: '1 1 calc(25% - 40px)',
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'space-between',
  minHeight: '300px',
});


const Title = styled(Typography)({
  fontSize: 20,
  color: '#38775B',
  marginBottom: '10px',
  fontFamily: 'Poppins, sans-serif',
});

const StyledButton = styled(Button)({
  backgroundColor: '#38775B',
  color: '#FFFFFF',
  marginTop: '10px',
  fontFamily: 'Poppins, sans-serif',
});

const FooterContainer = styled(Box)({
  backgroundColor: '#38775B',
  color: '#FFFFFF',
  padding: '20px',
  marginTop: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const SocialMediaContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

const HomePage = () => {
  
  const cards = [
    {
      title: 'Grazing Management',
      image: cow,
      link: '/dashboard',
    },
    {
      title: 'Milking Management',
      image: milk,
      link: '/milkingdashboard',
    },
    {
      title: 'Product Management',
      image: product,
      link: '/ProductionDashboard',
    },
    {
      title: 'Veterinary Management',
      image: vet,
      link: '/vetdashboard',
    },
    {
      title: 'Sales Management',
      image: sale,
      link: '/SalesDashboard',
    },
    {
      title: 'Employee Management',
      image: hr,
      link: '/employeedashboard',
    },
    {
      title: 'Finance Management',
      image: fin,
      link: '/financedashboard',
    },
    {
      title: 'Supplier Management',
      image: sup,
      link: '/inventory',
    },
  ];

  return (
    <>
      <RootContainer>
        <ClippedDrawer />
        {cards.map((card, index) => (
          <StyledCard key={index}>
            
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Title>{card.title}</Title>
              <StyledButton variant="contained" href={card.link}>
                View Dashboard
              </StyledButton>
            </CardContent>
          </StyledCard>
        ))}
      </RootContainer>
      {/* Footer */}
      <FooterContainer>
        
        <div>
          <Typography variant="body1" fontWeight="bold">
            Contact Us
          </Typography>
          <Typography variant="body2">
            Address: No. 14, Main Street, Colombo
          </Typography>
          <Typography variant="body2">
            Phone: +94 123 456 789
          </Typography>
        </div>
       
        <div>
          <Typography variant="body1" fontWeight="bold">
            About Us
          </Typography>
          <Typography variant="body2">
            We provide the best veterinary and farming services.
          </Typography>
        </div>
        
        <SocialMediaContainer>
          <Facebook style={{ color: '#FFFFFF', marginRight: '10px' }} />
          <Twitter style={{ color: '#FFFFFF', marginRight: '10px' }} />
          <Instagram style={{ color: '#FFFFFF' }} />
        </SocialMediaContainer>
      </FooterContainer>
    </>
  );
};

export default HomePage;
