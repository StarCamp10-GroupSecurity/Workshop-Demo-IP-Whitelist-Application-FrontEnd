import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EmailAnalyzer from './components/EmailAnalyzer';
import { Box, CssBaseline } from '@mui/material';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'var(--primary-white)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Navbar />
        <Hero />
        <EmailAnalyzer />
      </Box>
    </>
  );
}

export default App;
