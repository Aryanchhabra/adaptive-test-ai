import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { Login } from '@mui/icons-material';
import Test from './Test';
import HomePage from './HomePage';  // Import HomePage component
import LoginPage from './LoginPage';  // Import LoginPage component
import './App.css';

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: '#1e1e1e', padding: '10px' }}>
        <Toolbar>
          {/* AdaptiveTestAI Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid white',
              borderRadius: '25px',
              padding: '5px 15px',
              marginRight: 'auto',
            }}
          >
            <Typography
              variant="h5"
              component={Link}
              to="/"
              style={{
                textDecoration: 'none',
                color: 'white',
                fontFamily: '"Roboto", sans-serif',
                fontWeight: 'bold',
              }}
            >
              AdaptiveTestAI
            </Typography>
          </Box>

          {/* Login Button */}
          <IconButton
            edge="end"
            color="inherit"
            component={Link}
            to="/login"
            style={{ color: 'white' }}
          >
            <Login />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Render HomePage here */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
