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
              StarCamp Batch 10:<span style={{ color: 'var(--primary-red)' }}> IaC Practice with the Gatekeepers</span>
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
              Welcome to the StarCamp Batch 10 Gatekeepers' fun, interactive IaC experience! Send us your IP address via Teams, and we’ll select some of you to configure with IaC and add your IP to our firewall whitelist. After that, enter your NAB email, click "SEE OUR IMPRESSION ABOUT YOU" and you’ll instantly receive our impression of you. Ready to test your skills? Let’s go!
            </Typography>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default Hero;
