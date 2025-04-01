import { Box, CssBaseline } from '@mui/material';
import EmailAnalyzer from './components/EmailAnalyzer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: 'var(--primary-black)',
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
