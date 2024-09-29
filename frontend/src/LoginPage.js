import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Container, Paper } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Basic email and password validation
    if (!email || !password) {
      setError('Please fill in all fields');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email');
    } else {
      setError('');
      // Perform login logic here
      console.log('Logged in:', { email, password });
      alert('Login successful!');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: '20px', marginTop: '50px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Login to AdaptiveTestAI
          </Typography>
          <form noValidate onSubmit={handleLogin} style={{ width: '100%' }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography variant="body2" color="error" sx={{ marginBottom: '10px' }}>
                {error}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#1976d2',
                color: 'white',
                fontWeight: 'bold',
                marginTop: '10px',
                marginBottom: '10px',
              }}
            >
              Login
            </Button>
          </form>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
