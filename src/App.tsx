/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { BookMeetingModal } from './components/BookMeetingModal';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Products } from './pages/Products';
import { Markets } from './pages/Markets';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';
import { BookMeeting } from './pages/BookMeeting';

function AppContent() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenQuoteModal = (query?: string) => {
    if (query) {
      setSearchQuery(query);
    }
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleOpenMeetingModal = () => {
    setIsMeetingModalOpen(true);
  };

  const handleCloseMeetingModal = () => {
    setIsMeetingModalOpen(false);
  };

  return (
    <div id="home" className="min-h-screen flex flex-col bg-[#FBFAF6] text-[#082F49] selection:bg-[#38BDF8]/30">
      {/* Main Sticky Header with Jadon Pharmaceuticals Brand & Navigation */}
      <Header
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenMeetingModal={handleOpenMeetingModal}
      />

      {/* Page Routing */}
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenMeetingModal={handleOpenMeetingModal}
            />
          }
        />
        <Route
          path="/home"
          element={
            <Home
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenMeetingModal={handleOpenMeetingModal}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              onOpenQuoteModal={handleOpenQuoteModal}
              onOpenMeetingModal={handleOpenMeetingModal}
            />
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/markets" element={<Markets />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-a-meeting" element={<BookMeeting />} />
        <Route path="/book-meeting" element={<BookMeeting />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* 4-Column Footer with Corporate Governance & Gwalior Hub */}
      <Footer
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenMeetingModal={handleOpenMeetingModal}
      />

      {/* Interactive Quotation & Inquiries Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        initialQuery={searchQuery}
      />

      {/* Commercial & Institutional Consultation Booking Modal */}
      <BookMeetingModal
        isOpen={isMeetingModalOpen}
        onClose={handleCloseMeetingModal}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
