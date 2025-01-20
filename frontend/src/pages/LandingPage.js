import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button, Box, Container } from '@mui/material';
import feature1Img from '../assets/feature1.jpg'; // Add your downloaded images
import feature2Img from '../assets/feature2.jpg';
import feature3Img from '../assets/feature3.jpg';

const LandingPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/1920x1080/?technology,education)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
          Welcome to AdaptiveTestAI
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Personalized testing that adapts to your performance for better results.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: '#007bff',
            color: 'white',
            fontWeight: 'bold',
            '&:hover': { backgroundColor: '#0056b3' },
          }}
          href="/test"
        >
          Start Your Test Now
        </Button>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          Why Choose AdaptiveTestAI?
        </Typography>
        <Grid container spacing={4}>
          {/* Feature 1 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={feature1Img} alt="Adaptive Testing" />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Adaptive Testing
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Dynamically adjusts question difficulty based on your performance.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 2 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={feature2Img} alt="Real-Time Analytics" />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Real-Time Analytics
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Get detailed insights into your performance with dynamic analytics.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Feature 3 */}
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ boxShadow: 3 }}>
              <CardMedia component="img" height="200" image={feature3Img} alt="Personalized Feedback" />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Personalized Feedback
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Receive actionable feedback tailored to your strengths and weaknesses.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{ mt: 8 }}>
        <Typography variant="h4" sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
          What Our Users Say
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3, padding: 2 }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                "AdaptiveTestAI has transformed how I prepare for exams. The adaptive tests make studying much more effective."
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
                - Jane Doe, Student
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card sx={{ boxShadow: 3, padding: 2 }}>
              <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                "Finally, a platform that understands my learning needs. The detailed feedback has helped me improve significantly."
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'right', fontWeight: 'bold' }}>
                - John Smith, Learner
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box
        sx={{
          backgroundColor: '#1e1e1e',
          color: 'white',
          textAlign: 'center',
          padding: 2,
          mt: 8,
        }}
      >
        <Typography variant="body2">
          &copy; 2025 AdaptiveTestAI. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <a href="/about" style={{ color: '#007bff', textDecoration: 'none', marginRight: '10px' }}>
            About
          </a>
          <a href="/contact" style={{ color: '#007bff', textDecoration: 'none', marginRight: '10px' }}>
            Contact
          </a>
          <a href="/terms" style={{ color: '#007bff', textDecoration: 'none' }}>
            Terms & Conditions
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
