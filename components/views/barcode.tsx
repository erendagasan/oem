import React, { useState } from "react";
import { barcodeScans, formatCurrency, formatPercent } from "@/lib/smartsource-data";
import { ScanBarcode, CheckCircle2, AlertCircle, BarChart3, TrendingUp, Package, Calendar } from "lucide-react";

type FilterKey = "today" | "last_7_days" | "last_30_days";

const filterData = {
  today: {
    label: "Bugün",
    kpi: { total: 450, matched: 320, savings: 15400 },
    chart: [
      { label: "08:00", total: 50, matched: 35 },
      { label: "10:00", total: 120, matched: 85 },
      { label: "12:00", total: 90, matched: 60 },
      { label: "14:00", total: 110, matched: 80 },
      { label: "16:00", total: 80, matched: 60 },
    ],
  },
  last_7_days: {
    label: "Son 1 Hafta",
    kpi: { total: 8140, matched: 5460, savings: 245000 },
    chart: [
      { label: "12 Eki", total: 1240, matched: 840 },
      { label: "13 Eki", total: 1450, matched: 920 },
      { label: "14 Eki", total: 1100, matched: 750 },
      { label: "15 Eki", total: 1550, matched: 1050 },
      { label: "16 Eki", total: 1600, matched: 1100 },
      { label: "17 Eki", total: 800, matched: 550 },
      { label: "18 Eki", total: 400, matched: 250 },
    ],
  },
  last_30_days: {
    label: "Son 1 Ay",
    kpi: { total: 33700, matched: 23500, savings: 985000 },
    chart: [
      { label: "1. Hafta", total: 8200, matched: 5800 },
      { label: "2. Hafta", total: 8900, matched: 6100 },
      { label: "3. Hafta", total: 7500, matched: 5200 },
      { label: "4. Hafta", total: 9100, matched: 6400 },
    ],
  },
};

const topCategories = [
  { name: "Rulman", matchedCount: 3240, pct: 45 },
  { name: "Sensör", matchedCount: 1850, pct: 25 },
  { name: "Pnömatik", matchedCount: 1200, pct: 15 },
  { name: "Güç Aktarım", matchedCount: 850, pct: 10 },
  { name: "Diğer", matchedCount: 400, pct: 5 },
];

export function BarcodeView() {
  const [dateFilter, setDateFilter] = useState<FilterKey>("last_7_days");
  
  const currentData = filterData[dateFilter];
  const chartData = currentData.chart;

  // Real-time integration fallback variables
  const totalScans = currentData.kpi.total;
  const matchedScans = currentData.kpi.matched;
  const totalSavings = currentData.kpi.savings;

  return (
    <div className="space-y-6 min-w-0 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Barkod Okuyucu Entegrasyonu</h2>
          <p className="text-sm text-slate-500 mt-1">
            Canlı barkod okuyucu verileri ve anlık OEM eşleştirmeleri.
          </p>
        </div>
        <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg shadow-sm">
          <Calendar className="h-4 w-4 text-slate-500" />
          <select 
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value as FilterKey)}
            className="text-sm font-semibold text-slate-700 outline-none bg-transparent cursor-pointer"
          >
            <option value="today">Bugün</option>
            <option value="last_7_days">Son 1 Hafta</option>
            <option value="last_30_days">Son 1 Ay</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Toplam Okuma</p>
            <div className="p-2 bg-slate-100 rounded-lg">
              <ScanBarcode className="h-4 w-4 text-slate-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{totalScans}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            {currentData.label} içinde
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Başarılı Eşleşme</p>
            <div className="p-2 bg-emerald-50 rounded-lg">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-emerald-600">{matchedScans}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            {currentData.label} başarılı tespit
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Tespit Edilen Tasarruf</p>
            <div className="p-2 bg-indigo-50 rounded-lg">
              <AlertCircle className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-indigo-600">{formatCurrency(totalSavings)}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            {currentData.label} potansiyel fayda
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-slate-500" />
                Tarama Performansı
              </h3>
              <p className="text-sm text-slate-500">
                {currentData.label} okutulan ürünler
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300 shrink-0"></div> Toplam Okuma
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52C47C] shrink-0"></div> Başarılı Eşleşme
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[280px]">
            {chartData.map((row) => {
              const maxTotal = Math.max(...chartData.map(r => r.total));
              const totalWidth = Math.max(5, (row.total / maxTotal) * 100);
              const matchWidth = Math.max(5, (row.matched / maxTotal) * 100);
              
              return (
                <div key={row.label} className="flex items-center gap-3 sm:gap-4 text-sm w-full group">
                  <span className="w-16 sm:w-20 text-slate-500 font-medium shrink-0 flex items-center gap-1.5 truncate" title={row.label}>
                    {dateFilter === "last_30_days" && <Calendar className="h-4 w-4 text-slate-400" />}
                    {dateFilter === "last_30_days" ? row.label.split('.')[0] : row.label}
                  </span>
                  <div className="flex-1 h-6 bg-slate-50 rounded-full relative flex items-center min-w-[50px]">
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-slate-200/80 rounded-l-full transition-all"
                      style={{ width: `${totalWidth}%` }}
                    />
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-[#52C47C] rounded-l-full transition-all"
                      style={{ width: `${matchWidth}%` }}
                    />
                  </div>
                  <div className="w-24 sm:w-28 flex flex-col items-end shrink-0 pl-2">
                    <span className="text-[#059669] font-bold text-sm leading-none mb-0.5">
                      {row.matched} <span className="text-[10px] text-slate-400 font-medium">Adet</span>
                    </span>
                    <span className="text-[9px] text-slate-400 font-medium">
                      Toplam: {row.total}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
          <div className="mb-5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Package className="h-4 w-4 text-emerald-600" />
              En Çok Eşleşen Kategoriler
            </h3>
            <p className="text-sm text-slate-500">OEM rotası en başarılı ürün grupları</p>
          </div>
          <div className="space-y-5 mt-6">
            {topCategories.map((cat) => (
              <div key={cat.name} className="w-full">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-sm font-semibold text-slate-900">{cat.name}</span>
                  <div className="text-right">
                    <span className="text-sm font-bold text-slate-900">{cat.matchedCount}</span>
                    <span className="text-[10px] ml-1 text-slate-500 font-medium">Adet</span>
                  </div>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    className="h-full bg-[#52C47C] rounded-full transition-all"
                    style={{ width: `${cat.pct}%` }}
                  />
                </div>
                <p className="text-[10px] text-slate-400 font-medium mt-1">%{cat.pct} oranında başarı</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="mb-5 flex flex-col gap-1">
          <h3 className="text-lg font-bold text-slate-900">Bugün Okutulan Barkodlar</h3>
          <p className="text-sm text-slate-500">Depo girişinde gerçekleştirilen canlı parça okumaları</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-w-0">
          <div className="overflow-x-auto min-w-0">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-5 py-3">Zaman</th>
                <th className="px-5 py-3">Parça Kodu</th>
                <th className="px-5 py-3">Açıklama</th>
                <th className="px-5 py-3">Durum</th>
                <th className="px-5 py-3">OEM Alternatifi</th>
                <th className="px-5 py-3 text-right">Fiyat Farkı</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {barcodeScans.map((scan) => (
                <tr key={scan.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-5 py-3 text-slate-500 font-medium">{scan.timestamp}</td>
                  <td className="px-5 py-3 font-bold text-slate-900">{scan.partCode}</td>
                  <td className="px-5 py-3 text-slate-600 truncate max-w-[200px]">{scan.name}</td>
                  <td className="px-5 py-3">
                    {scan.status === "Eşleşti" ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        {scan.status}
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-600 border border-slate-200">
                        {scan.status}
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 font-medium text-slate-800">{scan.oem}</td>
                  <td className="px-5 py-3 text-right">
                    {scan.savingsAmount > 0 ? (
                      <span className="text-emerald-600 font-bold flex items-center justify-end gap-1">
                        +{formatCurrency(scan.savingsAmount)}
                        <span className="text-xs bg-emerald-50 px-1.5 py-0.5 rounded text-emerald-700 font-bold">
                          {formatPercent(scan.savingsPct)}
                        </span>
                      </span>
                    ) : (
                      <span className="text-slate-400 font-medium">-</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </div>
  );
}
