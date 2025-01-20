import React from 'react';
import { Typography, Button, Box, Grid, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { School, TrendingUp, Psychology } from '@mui/icons-material';

const FeatureCard = ({ icon, title, description }) => (
  <Paper elevation={3} sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      {icon}
    </Box>
    <Typography variant="h6" component="h3" gutterBottom align="center">
      {title}
    </Typography>
    <Typography variant="body2" color="text.secondary" align="center">
      {description}
    </Typography>
  </Paper>
);

const HomePage = () => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to AdaptiveTestAI
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
        Experience personalized learning with our AI-powered adaptive testing platform.
      </Typography>
      <Button
        component={RouterLink}
        to="/test"
        variant="contained"
        size="large"
        sx={{ mb: 6 }}
      >
        Start Your Test Now
      </Button>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <FeatureCard 
            icon={<School fontSize="large" color="primary" />}
            title="Personalized Learning"
            description="Our AI adapts to your skill level, providing a tailored learning experience."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard 
            icon={<TrendingUp fontSize="large" color="primary" />}
            title="Track Your Progress"
            description="Monitor your improvement over time with detailed analytics and insights."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureCard 
            icon={<Psychology fontSize="large" color="primary" />}
            title="Cognitive Enhancement"
            description="Strengthen your cognitive abilities through challenging, adaptive tests."
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
