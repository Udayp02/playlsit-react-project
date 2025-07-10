import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Marketplace from './components/Marketplace';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import BidModal from './components/BidModal';
import HowItWorksVideoModal from './components/HowItWorksVideoModal';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showBidModal, setShowBidModal] = useState(false);
  const [showHowItWorksVideo, setShowHowItWorksVideo] = useState(false);
  const [userType, setUserType] = useState('load_provider');

  const handleLogin = (e) => {
    e.preventDefault();
    setShowLoginModal(false);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    setShowRegisterModal(false);
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    setShowBidModal(false);
  };

  const openModal = (modalName, type) => {
    if (type) setUserType(type);
    if (modalName === 'login-modal') setShowLoginModal(true);
    else if (modalName === 'register-modal') setShowRegisterModal(true);
    else if (modalName === 'bid-modal') setShowBidModal(true);
    else if (modalName === 'how-it-works-video') setShowHowItWorksVideo(true);
  };

  const closeModal = (modalName) => {
    if (modalName === 'login-modal') setShowLoginModal(false);
    else if (modalName === 'register-modal') setShowRegisterModal(false);
    else if (modalName === 'bid-modal') setShowBidModal(false);
    else if (modalName === 'how-it-works-video') setShowHowItWorksVideo(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <Features />
        <HowItWorks />
        <Marketplace showBidForm={() => openModal('bid-modal')} />
        <Testimonials />
        <CTA openModal={openModal} userType={userType} />
      </main>
      <Footer />

      {/* Modals */}
      <LoginModal 
        show={showLoginModal}
        onClose={() => closeModal('login-modal')}
        onLogin={handleLogin}
        switchToRegister={() => {
          closeModal('login-modal');
          openModal('register-modal');
        }}
      />

      <RegisterModal 
        show={showRegisterModal}
        onClose={() => closeModal('register-modal')}
        onRegister={handleRegister}
        userType={userType}
        setUserType={setUserType}
        switchToLogin={() => {
          closeModal('register-modal');
          openModal('login-modal');
        }}
      />

      <BidModal 
        show={showBidModal}
        onClose={() => closeModal('bid-modal')}
        onSubmit={handleBidSubmit}
      />

      <HowItWorksVideoModal 
        show={showHowItWorksVideo}
        onClose={() => closeModal('how-it-works-video')}
      />
    </div>
  );
}

export default App;