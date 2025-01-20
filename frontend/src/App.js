import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import LoginPage from './pages/LoginPage'; 
import LandingPage from './pages/LandingPage';

import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Container component="main" maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Routes>
            
            <Route path="/test" element={<TestPage />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} /> {/* If you have this page */}
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;