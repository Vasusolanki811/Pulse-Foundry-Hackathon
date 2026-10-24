import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Check, Copy } from 'lucide-react';
import { FAQS } from '../data/restaurantData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCopyAnswer = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF7F2] border-b border-[#3D5A40]/15 scroll-mt-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3D5A40] uppercase mb-2">
            <span>Conversational AI & Diner Discovery FAQ</span>
          </div>
          <h2 className="font-serif-greek text-3xl sm:text-4xl font-bold text-[#1B3044] text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#2C3539]/80 text-balance">
            Direct, factual answers to common questions about dining at Café Athena on Garnet Avenue in Pacific Beach.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className="bg-[#F4EFE6] rounded-lg border border-[#3D5A40]/15 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF7F2] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif-greek text-base sm:text-lg font-bold text-[#1B3044]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#3D5A40] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C86446]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#2C3539]/85 leading-relaxed border-t border-[#3D5A40]/10 bg-white/50">
                    <p className="mt-2">{faq.answer}</p>
                    <div className="mt-4 pt-3 border-t border-[#3D5A40]/10 flex items-center justify-between text-xs text-[#2C3539]/60">
                      <span>Verified Kitchen Policy · Updated 2026</span>
                      <button
                        onClick={() => handleCopyAnswer(faq.id, faq.answer)}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1B3044] hover:text-[#C86446] transition-colors"
                        title="Copy answer text"
                      >
                        {copiedId === faq.id ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Answer</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
