import React, { useState } from "react";
import { BankAccount } from "../../types/wedding";
import { Button } from "../ui/button";
import { FloralDivider } from "../common/FloralDivider";
import { FloralCorner } from "../common/FloralCorner";
import { CreditCard, Copy, Check, Gift } from "lucide-react";
import { toast } from "sonner";

interface DigitalEnvelopeProps {
  bankAccounts: BankAccount[];
}

/**
 * Modern Asynchronous Clipboard API copy helper via navigator.clipboard
 */
async function copyToClipboard(text: string): Promise<boolean> {
  if (!navigator?.clipboard?.writeText) {
    return false;
  }
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error(
      "Failed to copy to clipboard via Asynchronous Clipboard API:",
      err,
    );
    return false;
  }
}

export const DigitalEnvelope: React.FC<DigitalEnvelopeProps> = ({
  bankAccounts,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (account: BankAccount) => {
    const success = await copyToClipboard(account.accountNumber);
    if (success) {
      setCopiedId(account.id);
      toast.success(`Nomor rekening ${account.bankName} berhasil disalin!`);
      setTimeout(() => {
        setCopiedId((curr) => (curr === account.id ? null : curr));
      }, 2500);
    } else {
      toast.error("Gagal menyalin. Silakan salin secara manual.");
    }
  };

  return (
    <section className="my-12 w-full max-w-2xl mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-1.5 text-gold-600 mb-2">
        <Gift className="w-4 h-4" />
        <p className="font-serif italic text-sm tracking-wider">Tanda Kasih</p>
      </div>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-maroon-900 tracking-wide mb-3">
        Amplop Digital
      </h2>

      <p className="font-sans text-xs md:text-sm text-maroon-900/80 leading-relaxed max-w-lg mx-auto px-2">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Dan jika
        memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara
        digital melalui:
      </p>

      <FloralDivider className="my-4" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {bankAccounts.map((account) => {
          const isCopied = copiedId === account.id;

          return (
            <div
              key={account.id}
              className="relative rounded-3xl border border-gold-500/35 bg-white/95 p-6 shadow-sm flex flex-col justify-between items-center text-center transition-all hover:border-gold-500/70"
            >
              <FloralCorner
                position="top-left"
                size={36}
                className="absolute top-2 left-2 opacity-60"
              />
              <FloralCorner
                position="bottom-right"
                size={36}
                className="absolute bottom-2 right-2 opacity-60"
              />

              <div className="w-full">
                {/* Bank Header Badge */}
                <div className="flex items-center justify-between mb-4 px-1">
                  <span className="font-serif font-bold text-sm text-maroon-950 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-gold-600" />
                    {account.bankName}
                  </span>
                  <span className="text-[10px] uppercase font-sans font-semibold tracking-wider px-2 py-0.5 rounded-full bg-gold-500/15 text-maroon-900 border border-gold-500/30">
                    {account.recipientCategory}
                  </span>
                </div>

                {/* Account Number */}
                <div className="my-4 py-3 px-4 rounded-xl bg-ivory-50 border border-gold-500/25">
                  <div className="font-mono text-xl md:text-2xl font-bold text-maroon-900 tracking-wider select-all">
                    {account.accountNumber}
                  </div>
                  <div className="text-xs text-maroon-800/80 font-sans mt-1">
                    a.n.{" "}
                    <span className="font-semibold text-maroon-950">
                      {account.accountHolder}
                    </span>
                  </div>
                </div>
              </div>

              {/* Copy Button */}
              <Button
                onClick={() => handleCopy(account)}
                variant={isCopied ? "secondary" : "default"}
                size="default"
                className={`w-full rounded-xl text-xs font-semibold tracking-wide transition-all ${
                  isCopied
                    ? "bg-gold-500/20 text-maroon-950 border-gold-500"
                    : "bg-maroon-800 text-gold-300 hover:bg-maroon-700"
                }`}
              >
                {isCopied ? (
                  <>
                    <Check className="w-4 h-4 text-gold-600" />
                    <span>Tersalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Salin Nomor Rekening</span>
                  </>
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
