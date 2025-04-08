import { Box, Container, Fade, Typography } from '@mui/material';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
        backgroundColor: 'var(--primary-black)',
        color: 'var(--primary-white)',
        // borderBottom: '4px solid var(--primary-red)',
      }}
    >
      <Container maxWidth="lg">
        <Fade in={true} timeout={1000}>
          <Box>
            <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
            >
            IP Whitelisting Hands-On Lab:
            <span style={{ color: 'var(--primary-red)' }}> IaC Practice with the Gatekeepers</span>
            </Typography>

            <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: 500,
              letterSpacing: '0.5px',
            }}
            >
            StarCamp Batch 10
            </Typography>

            <Typography
            variant="h6"
            maxWidth="md"
            mx="auto"
            sx={{
              opacity: 0.9,
              fontWeight: 300,
              letterSpacing: '0.5px',
              marginTop: '1rem'
            }}
            >
            Welcome to our interactive Infrastructure as Code workshop! Send your IP address via Teams, and we'll select participants to implement IaC for whitelist configuration. Once added to our firewall, enter your NAB email, click "SEE OUR IMPRESSION ABOUT YOU" and discover it. Cheers!
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
