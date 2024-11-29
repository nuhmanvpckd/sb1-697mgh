import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Sidebar } from './components/Layout/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { SocialDashboard } from './pages/social/SocialDashboard';
import { ContentCreator } from './pages/content/ContentCreator';
import { LiveStreaming } from './pages/streaming/LiveStreaming';
import { LinkManager } from './pages/links/LinkManager';
import { EmailDashboard } from './pages/email/EmailDashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/social" element={<SocialDashboard />} />
              <Route path="/content-creator" element={<ContentCreator />} />
              <Route path="/streaming" element={<LiveStreaming />} />
              <Route path="/links" element={<LinkManager />} />
              <Route path="/email" element={<EmailDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}