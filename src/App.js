import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import FeaturesPage from './pages/Features';
import MainPage from './pages/Main';
import Footer from './components/Footer/Footer';
import DocsPage from './pages/Docs';
import CommunityPage from './pages/Community';
import BlogPage from './pages/Blog';
import BlogPost1 from './components/Blog/BlogPost1';
import BlogPost2 from './components/Blog/BlogPost2';
import SubjectPage from './pages/Subject';
import OsDetailPage from './components/SubjectDetail/OsDetail';
import ObjectPage from './components/SubjectDetail/Object';
import NetworkPage from './components/SubjectDetail/Network';
import ArchitecturePage from './components/SubjectDetail/Architecture';
import DataStructuresPage from './components/SubjectDetail/DataStructures';
import AlgorithmsPage from './components/SubjectDetail/Algorithms';
import ScrollToTop from './components/ScrollToTop';
import Topbtn from './components/Topbtn/Topbtn';

function AppContent() {
  const location = useLocation();
  const isBlogPage = location.pathname === '/blog';
  console.log('Current Pathname:', location.pathname);
  console.log('Is Blog Page:', isBlogPage);

  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/1" element={<BlogPost1 />} />
        <Route path="/blog/2" element={<BlogPost2 />} /> 
        <Route path="/subject" element={<SubjectPage />} />
        <Route path="/object" element={<ObjectPage />} />
        <Route path="/osdetail" element={<OsDetailPage />} />
        <Route path="/architecture" element={<ArchitecturePage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/datastructures" element={<DataStructuresPage />} />
        <Route path="/algorithms" element={<AlgorithmsPage />} />
      </Routes>
      <Topbtn />
      <Footer />
      </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;