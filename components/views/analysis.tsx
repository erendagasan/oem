"use client";

import { useDemo } from "@/components/demo-provider";
import { formatCurrency, formatPercent } from "@/lib/smartsource-data";
import { Search, Filter, ShieldAlert, ArrowRight, Download } from "lucide-react";

export default function AnalysisView() {
  const {
    search,
    setSearch,
    selectedCategory,
    setSelectedCategory,
    selectedPlant,
    setSelectedPlant,
    categories,
    plants,
    filteredOpportunities,
  } = useDemo();

  return (
    <div className="space-y-6">
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900">OEM Çapraz Referans Analizi</h2>
            <p className="text-sm text-slate-500">
              Yüklenen parçaların asıl üreticileri, maliyet kıyaslaması ve gizli aracı marjları (markup).
            </p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors">
            <Download className="h-4 w-4" />
            Excel İndir
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Parça kodu, barkod veya ürün adı ile ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-2 sm:w-1/3">
            <Filter className="h-4 w-4 text-slate-400 shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            >
              <option value="Tümü">Tüm Kategoriler</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 sm:w-1/3">
            <select
              value={selectedPlant}
              onChange={(e) => setSelectedPlant(e.target.value)}
              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
            >
              <option value="Tümü">Tüm Tesisler</option>
              {plants.map((plant) => (
                <option key={plant} value={plant}>{plant}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-w-0">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left text-sm whitespace-nowrap min-w-[900px]">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold text-slate-600">Parça & Tesis</th>
                <th className="px-6 py-4 font-semibold text-slate-600">Rota Değişimi</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-right">Mevcut Maliyet</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-right">OEM Maliyeti</th>
                <th className="px-6 py-4 font-semibold text-emerald-700 text-right">Potansiyel Tasarruf</th>
                <th className="px-6 py-4 font-semibold text-amber-700 text-center">Gizli Markup</th>
                <th className="px-6 py-4 font-semibold text-slate-600 text-center">Güven Skoru</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOpportunities.length > 0 ? (
                filteredOpportunities.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-900">{item.partCode}</p>
                      <p className="text-xs text-slate-500 truncate max-w-[200px]">{item.name}</p>
                      <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded text-[10px] font-medium bg-slate-100 text-slate-600">
                        {item.plant}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-slate-500 text-xs line-through">{item.currentSupplier}</span>
                        <div className="flex items-center gap-1 text-emerald-700 font-medium">
                          <ArrowRight className="h-3 w-3" />
                          {item.oemSupplier}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="font-medium text-slate-900">{formatCurrency(item.currentTotal)}</p>
                      <p className="text-xs text-slate-500">{item.currentUnitPrice} / adet</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="font-medium text-emerald-700">{formatCurrency(item.oemTotal)}</p>
                      <p className="text-xs text-emerald-600/70">{item.oemUnitPrice} / adet</p>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <p className="font-bold text-emerald-600">{formatCurrency(item.savingsAmount)}</p>
                      <div className="flex items-center justify-end gap-1 mt-0.5 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded w-max ml-auto">
                        ↓ {formatPercent(item.savingsPct)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-amber-50 text-amber-700 font-bold text-xs border border-amber-200">
                        <ShieldAlert className="h-3 w-3" />
                        {formatPercent(item.markupPct)}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`text-xs font-bold ${
                          item.confidence >= 0.9 ? "text-emerald-600" :
                          item.confidence >= 0.85 ? "text-amber-600" : "text-rose-600"
                        }`}>
                          {Math.round(item.confidence * 100)}%
                        </span>
                        <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${
                              item.confidence >= 0.9 ? "bg-emerald-500" :
                              item.confidence >= 0.85 ? "bg-amber-500" : "bg-rose-500"
                            }`}
                            style={{ width: `${item.confidence * 100}%` }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7} className="px-6 py-8 text-center text-slate-500">
                    Arama veya filtrelere uygun veri bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 text-sm text-slate-500 flex justify-between items-center">
          <span>Toplam {filteredOpportunities.length} parça listeleniyor</span>
          <span className="flex items-center gap-1">Güven skoru algoritma referans gücünü ifade eder.</span>
        </div>
      </div>
    </div>
  );
}
