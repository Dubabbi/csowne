import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import FeaturesPage from './pages/Features';
import MainPage from './pages/Main';
import Footer from './components/Footer/Footer';
import DocsPage from './pages/Docs';
import BlogPage from './pages/Blog';
import SubjectPage from './pages/Subject';
import OsDetailPage from './components/SubjectDetail/OsDetail';
import ObjectPage from './components/SubjectDetail/Object';
import NetworkPage from './components/SubjectDetail/Network';
import ArchitecturePage from './components/SubjectDetail/Architecture';
import DataStructuresPage from './components/SubjectDetail/DataStructures';
import AlgorithmsPage from './components/SubjectDetail/Algorithms';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/object" element={<ObjectPage />} />
        <Route path="/osdetail" element={<OsDetailPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/datastructures" element={<DataStructuresPage />} />
        <Route path="/algorithms" element={<AlgorithmsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
