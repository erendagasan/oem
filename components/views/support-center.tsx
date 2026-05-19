"use client";

import { useMemo, useState } from "react";
import { faqItems, supportBotIntents } from "@/lib/smartsource-data";
import { Bot, ChevronDown, LifeBuoy, Send } from "lucide-react";

type ChatRole = "assistant" | "user";

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

export default function SupportCenterView() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: "welcome",
      role: "assistant",
      text: "Merhaba! KVKK, entegrasyon, donanım veya ROI sorularınız için buradayım.",
    },
  ]);
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqItems[0]?.id ?? null);
  const [faqCategory, setFaqCategory] = useState<"Tümü" | string>("Tümü");

  const faqCategories = useMemo(
    () => ["Tümü", ...Array.from(new Set(faqItems.map((item) => item.category)))],
    [],
  );

  const filteredFaq = useMemo(
    () => faqItems.filter((item) => faqCategory === "Tümü" || item.category === faqCategory),
    [faqCategory],
  );

  const resolveIntent = (input: string) => {
    const normalized = input.toLocaleLowerCase("tr-TR");
    const intent = supportBotIntents.find((candidate) =>
      candidate.keywords.some((keyword) => normalized.includes(keyword)),
    );

    if (!intent) {
      return "Bu konu için hazır bir yanıtım yok, ancak canlı destek ekibine yönlendirebilirim. İsterseniz şirket adınızı ve ihtiyacınızı yazarak talep oluşturabilirsiniz.";
    }

    return intent.reply;
  };

  const sendMessage = () => {
    const clean = message.trim();
    if (!clean) {
      return;
    }

    const reply = resolveIntent(clean);
    setChatHistory((prev) => [
      ...prev,
      { id: `u-${Date.now()}`, role: "user", text: clean },
      { id: `a-${Date.now() + 1}`, role: "assistant", text: reply },
    ]);
    setMessage("");
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Canlı Destek ve SSS Merkezi</h2>
        <p className="text-sm text-slate-500 mt-1">
          Dolaylı satın alma uzmanları ve lojistik analistler için anlık çözüm botu, satış ekibine yönlendirme akışı ve operasyonel SSS içeriği.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1.2fr_1fr] gap-5">
        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col min-h-[620px]">
          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100">
                <Bot className="h-4 w-4 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Canlı Çözüm Botu</h3>
                <p className="text-xs text-slate-500">Yapay zeka destekli akıllı yanıt akışı</p>
              </div>
            </div>

            <button className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
              Satış Ekibine Yönlendir
            </button>
          </div>

          <div className="flex-1 overflow-y-auto rounded-lg border border-slate-200 bg-slate-50 p-3 space-y-3 custom-scrollbar">
            {chatHistory.map((chat) => (
              <div
                key={chat.id}
                className={`max-w-[90%] rounded-lg px-3 py-2 text-sm leading-relaxed ${
                  chat.role === "assistant"
                    ? "bg-white border border-slate-200 text-slate-700"
                    : "ml-auto bg-emerald-600 text-white"
                }`}
              >
                {chat.text}
              </div>
            ))}
          </div>

          <div className="mt-4 flex gap-2">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Örn: KVKK uyumluluğu nasıl sağlanıyor?"
              className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
            />
            <button
              onClick={sendMessage}
              className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
              aria-label="Mesaj gönder"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {supportBotIntents.map((intent) => (
              <button
                key={intent.id}
                onClick={() => {
                  setMessage(intent.label);
                }}
                className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
              >
                {intent.label}
              </button>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
          <div className="flex items-center gap-2 mb-4">
            <LifeBuoy className="h-4 w-4 text-slate-600" />
            <h3 className="text-base font-bold text-slate-900">Sıkça Sorulan Sorular (SSS)</h3>
          </div>

          <div className="mb-4">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Kategori</label>
            <select
              value={faqCategory}
              onChange={(e) => setFaqCategory(e.target.value)}
              className="mt-1 w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
            >
              {faqCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            {filteredFaq.map((faq) => {
              const isOpen = faq.id === openFaqId;
              return (
                <article key={faq.id} className="rounded-lg border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-3 px-4 py-3 bg-white text-left"
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">{faq.category}</p>
                      <p className="text-sm font-semibold text-slate-800">{faq.question}</p>
                    </div>
                    <ChevronDown className={`h-4 w-4 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen ? (
                    <div className="px-4 py-3 border-t border-slate-200 bg-slate-50 text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
