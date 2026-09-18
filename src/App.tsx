import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { InvitationPage } from './routes/InvitationPage';
import { SharePage } from './routes/SharePage';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Toaster } from './components/ui/sonner';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <Routes>
        {/* Public Invitation Landing Page */}
        <Route path="/" element={<InvitationPage />} />

        {/* Protected WhatsApp Invitation Generator for Family/Organizers */}
        <Route
          path="/share"
          element={
            <ProtectedRoute>
              <SharePage />
            </ProtectedRoute>
          }
        />

        {/* Catch-all Fallback Redirection */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}
