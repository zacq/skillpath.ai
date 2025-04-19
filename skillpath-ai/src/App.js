import { Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ChatInterface from './pages/ChatInterface';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatButton from './components/ChatButton';

function App() {
  return (
    <Box bg="#eaf1f6" minH="100vh">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatInterface />} />
        </Routes>
        <Footer />
        <ChatButton />
      </Router>
    </Box>
  );
}

export default App;