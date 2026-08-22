import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InvitationPage } from './routes/InvitationPage';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitationPage />} />
        <Route path="*" element={<InvitationPage />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}
