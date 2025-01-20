// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import { Login } from '@mui/icons-material';
import Test from './Test';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from './AuthContext';

function App() {
  const { isAuthenticated } = React.useContext(AuthContext);

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
              component="a"
              href="/"
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
            href="/login"
            style={{ color: 'white' }}
          >
            <Login />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/test"
          element={
            <PrivateRoute>
              <Test />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
