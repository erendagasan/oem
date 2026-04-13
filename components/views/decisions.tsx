"use client";

import { useState } from "react";
import { useDemo } from "@/components/demo-provider";
import { formatCurrency, formatPercent } from "@/lib/smartsource-data";
import { CheckCircle2, Circle, Clock, MessageSquare, Plus, AlertCircle } from "lucide-react";

export default function DecisionsView() {
  const {
    filteredOpportunities,
    approvedIds,
    toggleApproval,
    feedbackList,
    addFeedback,
    selectedRole,
  } = useDemo();

  const [feedbackText, setFeedbackText] = useState("");

  const pendingCount = filteredOpportunities.length - approvedIds.length;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Karar Merkezi</h2>
            <p className="text-sm text-slate-500 mt-1">
              {pendingCount > 0 
                ? `Onay bekleyen ${pendingCount} adet yüksek tasarruflu OEM tedarik rotası bulunuyor.`
                : "Tüm önerilen OEM tedarik rotaları onaylandı."}
            </p>
          </div>
          <div className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm font-semibold text-slate-700">
            {approvedIds.length} / {filteredOpportunities.length} Onaylandı
          </div>
        </div>

        <div className="space-y-3">
          {filteredOpportunities.map((item) => {
            const isApproved = approvedIds.includes(item.id);
            
            return (
              <div 
                key={item.id} 
                className={`p-4 rounded-xl border transition-all ${
                  isApproved 
                    ? "bg-emerald-50/50 border-emerald-200" 
                    : "bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-slate-900 text-base truncate">{item.partCode}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-medium shrink-0">
                        {item.plant}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                      <span className="line-through decoration-slate-400 truncate max-w-[120px] sm:max-w-none">{item.currentSupplier}</span>
                      <span className="text-slate-300">→</span>
                      <span className="font-semibold text-emerald-700 truncate max-w-[120px] sm:max-w-none">{item.oemSupplier}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap sm:flex-nowrap items-center justify-between sm:justify-end gap-4 sm:gap-6 w-full sm:w-auto shrink-0">
                    <div className="flex flex-col text-left sm:text-right">
                      <span className="text-xs text-slate-500 mb-0.5">Tasarruf</span>
                      <span className="font-bold text-emerald-600">{formatCurrency(item.savingsAmount)}</span>
                      <span className="text-xs font-semibold text-emerald-700/80 bg-emerald-50/80 rounded px-1 w-max ml-0 sm:ml-auto">
                        {formatPercent(item.savingsPct)}
                      </span>
                    </div>
                    
                    <div className="flex flex-col text-left sm:text-right">
                      <span className="text-xs text-slate-500 mb-0.5">Lead-Time</span>
                      <span className="font-bold text-blue-600">-{item.leadTimeGain} gün</span>
                      <span className="text-xs font-medium text-slate-400">
                        {item.currentLeadTimeDays} → {item.oemLeadTimeDays}
                      </span>
                    </div>

                    <button
                      onClick={() => toggleApproval(item.id)}
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-bold transition-all w-full sm:w-[120px] shrink-0 mt-2 sm:mt-0 ${
                        isApproved
                          ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {isApproved ? (
                        <>
                          <CheckCircle2 className="h-4 w-4" /> Onaylandı
                        </>
                      ) : (
                        <>
                          <Circle className="h-4 w-4" /> Onayla
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full max-h-[800px]">
          <div className="flex items-center gap-2 mb-6">
            <MessageSquare className="h-5 w-5 text-slate-400" />
            <h3 className="text-lg font-bold text-slate-900">Pilot Test Geri Bildirimleri</h3>
          </div>

          <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
            {feedbackList.map((fb) => (
              <div key={fb.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{fb.author}</p>
                    <p className="text-[11px] text-slate-500">{fb.role}</p>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                    fb.priority === "Hata" ? "bg-rose-100 text-rose-700" :
                    fb.priority === "İyileştirme" ? "bg-amber-100 text-amber-700" :
                    "bg-blue-100 text-blue-700"
                  }`}>
                    {fb.priority}
                  </span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed mb-3">{fb.note}</p>
                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500">
                  {fb.status === "Yeni" && <AlertCircle className="h-3 w-3 text-amber-500" />}
                  {fb.status === "Planlandı" && <Clock className="h-3 w-3 text-blue-500" />}
                  {fb.status === "Tamamlandı" && <CheckCircle2 className="h-3 w-3 text-emerald-500" />}
                  {fb.status}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100">
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Yeni bir geri bildirim notu ekleyin..."
              className="w-full min-h-[80px] p-3 text-sm bg-slate-50 border border-slate-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
            <button
              onClick={() => {
                if (feedbackText.trim()) {
                  addFeedback(feedbackText);
                  setFeedbackText("");
                }
              }}
              disabled={!feedbackText.trim()}
              className="mt-3 w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Plus className="h-4 w-4" />
              Not Ekle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
