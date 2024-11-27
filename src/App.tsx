import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
        <FloatingButtons />
      </div>
    </BrowserRouter>
  );
}

export default App;