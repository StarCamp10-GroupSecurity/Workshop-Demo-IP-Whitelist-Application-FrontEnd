import React, { useState } from 'react';
import {
  TextField,
  Button,
  Paper,
  Typography,
  CircularProgress,
  Box,
  Container,
  Fade,
  Grow,
  Alert
} from '@mui/material';

const EmailAnalyzer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('https://w4r1mw61pe.execute-api.us-east-1.amazonaws.com/production/starcampnocors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      setResult(data.description || 'No impression available.');
      setSuccess(true);
    } catch (error) {
      setError('Error fetching analysis. Please try again.');
    }
    setLoading(false);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError('');
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Fade in={true} timeout={800}>
        <Paper
          elevation={3}
          sx={{
            mx: 'auto',
            p: 4,
            borderRadius: 2,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderTop: '4px solid var(--primary-red)',
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: 'var(--primary-black)',
              mb: 3
            }}
          >
            Email Analysis Tool
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              type="email"
              label="Enter your email address"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              required
              sx={{
                mb: 3,
                '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--primary-red)',
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'var(--primary-red)',
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: 'var(--primary-red)',
                }
              }}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={loading}
              sx={{
                py: 1.5,
                backgroundColor: 'var(--primary-red)',
                '&:hover': {
                  backgroundColor: 'rgba(237, 0, 0, 0.8)',
                },
                '&:disabled': {
                  backgroundColor: 'rgba(237, 0, 0, 0.5)',
                }
              }}
            >
              {loading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Analyze Email'}
            </Button>
          </form>

          {error && (
            <Grow in={!!error} timeout={500}>
              <Alert severity="error" sx={{ mt: 3 }}>
                {error}
              </Alert>
            </Grow>
          )}

          {result && (
            <Grow in={!!result} timeout={500}>
              <Box
                mt={3}
                p={3}
                bgcolor={success ? 'rgba(0, 0, 0, 0.05)' : 'rgba(237, 0, 0, 0.05)'}
                borderRadius={2}
                border="1px solid rgba(0, 0, 0, 0.1)"
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 'medium',
                    lineHeight: 1.6
                  }}
                >
                  {result}
                </Typography>
              </Box>
            </Grow>
          )}
        </Paper>
      </Fade>
    </Container>
  );
};

export default EmailAnalyzer;
