import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FeaturesPage from './pages/Features';
import MainPage from './pages/Main';
import Footer from './components/Footer/Footer';
import DocsPage from './pages/Docs';
import BlogPage from './pages/Blog';
import SubjectPage from './pages/Subject';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/subject" element={<SubjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
