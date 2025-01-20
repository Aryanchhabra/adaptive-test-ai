import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} AdaptiveTestAI. All rights reserved.
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="#">
          Privacy Policy
        </Link>{' '}
        |{' '}
        <Link color="inherit" href="#">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
