import React, { useState, useEffect, useMemo } from 'react';
import { weddingData } from '../../data/weddingData';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card';
import { FloralDivider } from '../common/FloralDivider';
import { FloralCorner } from '../common/FloralCorner';
import { Send, Copy, ExternalLink, Sparkles, Check, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Zero-dependency clipboard writer with textarea fallback
 */
async function copyText(text: string): Promise<boolean> {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
    }
  }

  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const success = document.execCommand('copy');
    textArea.remove();
    return success;
  } catch {
    textArea.remove();
    return false;
  }
}

export const WhatsAppSharePortal: React.FC = () => {
  const [guestName, setGuestName] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [isCopiedLink, setIsCopiedLink] = useState(false);
  const [isCopiedMessage, setIsCopiedMessage] = useState(false);

  // Compute baseUrl dynamically
  const baseUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      return `${window.location.protocol}//${window.location.host}`;
    }
    return '';
  }, []);

  // Compute personalized invitation URL
  const invitationUrl = useMemo(() => {
    const trimmed = guestName.trim();
    if (!trimmed) {
      return `${baseUrl}/`;
    }
    return `${baseUrl}/?to=${encodeURIComponent(trimmed)}`;
  }, [baseUrl, guestName]);

  // Update default message whenever guestName or invitationUrl changes
  useEffect(() => {
    const nameToDisplay = guestName.trim() || 'Bapak/Ibu/Saudara/i';
    setCustomMessage(weddingData.whatsappTemplate(nameToDisplay, invitationUrl));
  }, [guestName, invitationUrl]);

  // Reset to default template
  const handleResetTemplate = () => {
    const nameToDisplay = guestName.trim() || 'Bapak/Ibu/Saudara/i';
    setCustomMessage(weddingData.whatsappTemplate(nameToDisplay, invitationUrl));
    toast.info('Pesan dikembalikan ke format awal.');
  };

  // WhatsApp Deep Link
  const whatsappUrl = useMemo(() => {
    return `https://api.whatsapp.com/send?text=${encodeURIComponent(customMessage)}`;
  }, [customMessage]);

  const handleCopyLink = async () => {
    const success = await copyText(invitationUrl);
    if (success) {
      setIsCopiedLink(true);
      toast.success('Tautan undangan berhasil disalin!');
      setTimeout(() => setIsCopiedLink(false), 2500);
    } else {
      toast.error('Gagal menyalin tautan.');
    }
  };

  const handleCopyMessage = async () => {
    const success = await copyText(customMessage);
    if (success) {
      setIsCopiedMessage(true);
      toast.success('Pesan WhatsApp lengkap berhasil disalin!');
      setTimeout(() => setIsCopiedMessage(false), 2500);
    } else {
      toast.error('Gagal menyalin pesan.');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 py-8">
      <Card className="relative border-gold-500/40 shadow-xl bg-white/90 backdrop-blur-md rounded-3xl overflow-hidden">
        <FloralCorner position="top-left" size={48} className="absolute top-2 left-2 opacity-60" />
        <FloralCorner position="top-right" size={48} className="absolute top-2 right-2 opacity-60" />

        <CardHeader className="text-center pt-8 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/15 text-maroon-900 text-xs font-serif font-semibold uppercase tracking-wider mx-auto mb-2 border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            Portal Keluarga &amp; Panitia
          </div>
          <CardTitle className="text-2xl md:text-3xl font-serif text-maroon-900">
            Pembuat Undangan WhatsApp
          </CardTitle>
          <CardDescription className="text-xs md:text-sm text-maroon-800/80 max-w-md mx-auto mt-1">
            Buat tautan personal dan kirim pesan undangan formal secara langsung ke kontak WhatsApp tamu.
          </CardDescription>
        </CardHeader>

        <FloralDivider className="my-2" />

        <CardContent className="space-y-6 p-6 md:p-8">
          {/* Guest Name Input */}
          <div className="space-y-2">
            <Label htmlFor="guestName" className="font-serif text-sm font-semibold text-maroon-900">
              Nama Tamu / Penerima Undangan
            </Label>
            <Input
              id="guestName"
              placeholder="Contoh: Bpk. H. Hendra Wijaya &amp; Keluarga"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="text-base font-sans rounded-xl border-gold-500/50 focus-visible:ring-gold-500"
            />
            <p className="text-[11px] text-maroon-900/60">
              Nama ini akan otomatis ditampilkan pada Cover Screen dan halaman utama undangan.
            </p>
          </div>

          {/* Generated Link Display Box */}
          <div className="p-4 rounded-2xl bg-ivory-100 border border-gold-500/30 space-y-2">
            <div className="flex items-center justify-between text-xs font-serif font-bold text-maroon-900">
              <span>Tautan Khusus Undangan:</span>
              <a
                href={invitationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold-700 hover:text-maroon-900 hover:underline font-sans font-medium text-[11px]"
              >
                <span>Lihat Tampilan Tamu</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="p-2.5 rounded-xl bg-white border border-gold-500/20 font-mono text-xs text-maroon-950 break-all select-all">
              {invitationUrl}
            </div>
            <div className="flex justify-end pt-1">
              <Button
                onClick={handleCopyLink}
                variant="outline"
                size="sm"
                className="text-xs border-gold-500/40 hover:bg-gold-500/15"
              >
                {isCopiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-gold-600" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-maroon-800" />
                    <span>Salin Tautan Saja</span>
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Editable WhatsApp Message Preview */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="customMessage" className="font-serif text-sm font-semibold text-maroon-900">
                Pesan WhatsApp (Dapat Diedit):
              </Label>
              <button
                type="button"
                onClick={handleResetTemplate}
                className="inline-flex items-center gap-1 text-[11px] text-maroon-800/70 hover:text-maroon-950"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Format</span>
              </button>
            </div>
            <textarea
              id="customMessage"
              rows={8}
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full rounded-xl border border-gold-500/40 bg-white p-3.5 text-xs md:text-sm text-maroon-950 font-sans leading-relaxed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500/50"
            />
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Button
              asChild
              variant="gold"
              size="lg"
              className="w-full rounded-xl font-serif text-sm font-bold shadow-md hover:scale-[1.02] transition-transform"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-maroon-950" />
                <span>Kirim via WhatsApp</span>
              </a>
            </Button>

            <Button
              onClick={handleCopyMessage}
              variant="default"
              size="lg"
              className="w-full rounded-xl font-serif text-sm font-semibold border-gold-500/40"
            >
              {isCopiedMessage ? (
                <>
                  <Check className="w-4 h-4 text-gold-300" />
                  <span>Pesan Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-gold-300" />
                  <span>Salin Pesan Lengkap</span>
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
