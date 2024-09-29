import React from 'react';
import { Button, Box, Typography, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <Container component="main" maxWidth="lg" sx={{ marginTop: '50px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#1e1e1e',
          color: 'white',
          padding: '50px',
          borderRadius: '10px',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Welcome to AdaptiveTestAI
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '30px', textAlign: 'center' }}>
          Experience adaptive testing that adjusts question difficulty based on your performance.
          Start now and get personalized feedback!
        </Typography>
        <Button
          component={Link}
          to="/test"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            backgroundColor: '#1976d2',
            padding: '10px 30px',
            fontWeight: 'bold',
            fontSize: '16px',
          }}
        >
          Start Test
        </Button>

        {/* Features Section */}
        <Grid container spacing={4} sx={{ marginTop: '40px' }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#333',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Real-Time Adaptation
              </Typography>
              <Typography>
                Our AI adapts questions dynamically to your ability, ensuring an optimal testing
                experience.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#333',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Detailed Analytics
              </Typography>
              <Typography>
                Get comprehensive insights into your performance and areas for improvement.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              sx={{
                backgroundColor: '#333',
                padding: '20px',
                borderRadius: '10px',
                textAlign: 'center',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Responsive Design
              </Typography>
              <Typography>
                Enjoy a seamless testing experience on any device, anywhere, anytime.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default HomePage;
