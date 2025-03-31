import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Fade } from '@mui/material';

const Navbar: React.FC = () => {
  const [ip, setIP] = useState<string>('Loading...');
  const [loadingDots, setLoadingDots] = useState<string>('');

  useEffect(() => {
    // Animated loading dots effect
    if (ip === 'Loading...') {
      const interval = setInterval(() => {
        setLoadingDots((prev) => (prev.length >= 3 ? '' : prev + '.'));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [ip]);

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(data => setIP(data.ip))
      .catch(() => setIP('Unavailable'));
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'var(--primary-black)',
        boxShadow: '0 4px 6px rgba(237, 0, 0, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/nab.png"
            alt="NAB Logo"
            style={{
              height: '75px',
              width: 'auto',
              marginLeft: '25px',
              marginRight: '12px'
            }}
          />
        </Box>

        <Fade in={true} timeout={1000}>
          <Box
            sx={{
              backgroundColor: 'rgba(237, 0, 0, 0.1)',
              px: 2,
              py: 1,
              borderRadius: 1,
              border: '1px solid rgba(237, 0, 0, 0.3)'
            }}
          >
            <Typography variant="body2" sx={{ fontSize: 'large', fontWeight: 'medium' }}>
              Your IP: {' '}
              <span style={{ fontFamily: 'monospace', fontWeight: 'bold' }}>
                {ip === 'Loading...' ? `Loading${loadingDots}` : ip}
              </span>
            </Typography>
          </Box>
        </Fade>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
