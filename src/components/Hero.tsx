import React from 'react';
import { Box, Typography, Container, Fade } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        textAlign: 'center',
        backgroundColor: 'var(--primary-black)',
        color: 'var(--primary-white)',
        borderBottom: '4px solid var(--primary-red)',
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
              Welcome to <span style={{ color: 'var(--primary-red)' }}>IP Whitelisting</span>
            </Typography>

            <Typography
              variant="h6"
              maxWidth="md"
              mx="auto"
              sx={{
                opacity: 0.9,
                fontWeight: 300,
                letterSpacing: '0.5px'
              }}
            >
              Understand your online presence by analyzing your email and IP data with
              our professional security tools.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
