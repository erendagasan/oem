import { competitorRows } from "@/lib/smartsource-data";
import { CheckCircle2, MinusCircle, AlertTriangle } from "lucide-react";

export default function CompetitorAnalysisView() {
  const verdictClass = (verdict: string) => {
    if (verdict === "Avantaj") {
      return {
        row: "bg-emerald-50/50",
        badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
        Icon: CheckCircle2,
      };
    }
    if (verdict === "Risk") {
      return {
        row: "bg-amber-50/40",
        badge: "bg-amber-100 text-amber-700 border-amber-200",
        Icon: AlertTriangle,
      };
    }
    return {
      row: "bg-slate-50/40",
      badge: "bg-slate-100 text-slate-700 border-slate-200",
      Icon: MinusCircle,
    };
  };

  const advantageCount = competitorRows.filter((item) => item.verdict === "Avantaj").length;
  const riskCount = competitorRows.filter((item) => item.verdict === "Risk").length;

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Karşılaştırmalı Rakip Analizi</h2>
        <p className="text-sm text-slate-500 mt-1">
          Türkçe destek, kurulum kolaylığı, RFID entegrasyonu ve ERP uyumluluğu gibi farkları objektif tabloda karşılaştırın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Toplam kriter</p>
          <p className="text-2xl font-bold text-slate-900 mt-2">{competitorRows.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Avantaj alanı</p>
          <p className="text-2xl font-bold text-emerald-700 mt-2">{advantageCount}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">İzlenecek risk</p>
          <p className="text-2xl font-bold text-amber-700 mt-2">{riskCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[920px] text-sm whitespace-nowrap text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-600">Kriter</th>
                <th className="px-4 py-3 font-semibold text-slate-600">OEMHUB</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Rakip / Manuel Yöntem</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Değerlendirme</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {competitorRows.map((row) => {
                const tone = verdictClass(row.verdict);
                const Icon = tone.Icon;

                return (
                  <tr key={row.criterion} className={tone.row}>
                    <td className="px-4 py-3 font-semibold text-slate-800">{row.criterion}</td>
                    <td className="px-4 py-3 text-slate-700">{row.smartSource}</td>
                    <td className="px-4 py-3 text-slate-600">{row.manual}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-bold ${tone.badge}`}>
                        <Icon className="h-3.5 w-3.5" />
                        {row.verdict}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
