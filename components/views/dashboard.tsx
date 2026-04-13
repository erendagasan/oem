"use client";

import { useDemo } from "@/components/demo-provider";
import { formatCurrency, formatPercent, monthlyTrend } from "@/lib/smartsource-data";
import { 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckSquare,
  BarChart3,
  Package,
  Activity,
  Target,
  Zap
} from "lucide-react";

export default function DashboardView({ onNavigate }: { onNavigate: (tab: string) => void }) {
  const { stats, filteredOpportunities, approvedIds, approvalRate } = useDemo();

  const topAlerts = filteredOpportunities
    .filter((item) => item.savingsPct >= 0.25)
    .sort((a, b) => b.savingsAmount - a.savingsAmount)
    .slice(0, 4);

  const highConfidenceCount = filteredOpportunities.filter(o => o.confidence >= 0.9).length;
  const pendingCount = filteredOpportunities.length - approvedIds.length;

  // Kategori bazlı tasarruf hesaplama
  const categorySavings = filteredOpportunities.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + curr.savingsAmount;
    return acc;
  }, {} as Record<string, number>);

  const sortedCategories = Object.entries(categorySavings)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  const maxCategorySaving = sortedCategories.length > 0 ? sortedCategories[0][1] : 1;

  return (
    <div className="space-y-6 min-w-0 pb-10">
      {/* Welcome & Quick Action */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900">Gösterge Paneli</h2>
          <p className="text-sm text-slate-500 mt-1">
            Yüklenen {filteredOpportunities.length} adet satın alma verisinde OEM eşleşmeleri ve potansiyel fırsatlar.
          </p>
        </div>
        <button 
          onClick={() => onNavigate("analysis")}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm shadow-emerald-200 shrink-0"
        >
          Detaylı Analize Git
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Primary Financial KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Mevcut Maliyet</p>
            <div className="p-2 bg-slate-100 rounded-lg"><TrendingUp className="h-4 w-4 text-slate-600" /></div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(stats.totalSpend)}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            <span className="text-rose-600">Aracı firmalar</span> üzerinden
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">OEM Maliyeti (Tahmini)</p>
            <div className="p-2 bg-emerald-50 rounded-lg"><ShieldCheck className="h-4 w-4 text-emerald-600" /></div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{formatCurrency(stats.totalOemSpend)}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            <span className="text-emerald-600">Doğrudan OEM</span> üzerinden
          </div>
        </div>

        <div className="bg-emerald-600 p-5 rounded-xl border border-emerald-700 shadow-sm flex flex-col text-white relative overflow-hidden">
          <div className="absolute -right-4 -top-4 opacity-10">
            <BarChart3 className="h-24 w-24" />
          </div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <p className="text-sm font-semibold text-emerald-100">Net Tasarruf Potansiyeli</p>
            <div className="p-2 bg-emerald-500/50 rounded-lg"><TrendingDown className="h-4 w-4 text-white" /></div>
          </div>
          <p className="text-2xl font-bold relative z-10">{formatCurrency(stats.potentialSavings)}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-emerald-100 relative z-10">
            Ortalama <span className="bg-white text-emerald-700 px-1.5 py-0.5 rounded text-[10px]">{formatPercent(stats.savingsRate)}</span> maliyet düşüşü
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Tespit Edilen Gizli Marj</p>
            <div className="p-2 bg-amber-50 rounded-lg"><AlertTriangle className="h-4 w-4 text-amber-600" /></div>
          </div>
          <p className="text-2xl font-bold text-amber-600">{formatPercent(stats.avgMarkup)}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            Aracıların ortalama kâr eklentisi
          </div>
        </div>
      </div>

      {/* Secondary Operational KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
            <Package className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">İncelenen Parça</p>
            <p className="text-lg font-bold text-slate-900">{filteredOpportunities.length} SKU</p>
          </div>
        </div>
        
        <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg shrink-0">
            <Clock className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Ort. Lead-Time Kazancı</p>
            <p className="text-lg font-bold text-slate-900">{Math.round(stats.avgLeadTimeGain)} Gün / Parça</p>
          </div>
        </div>

        <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg shrink-0">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Yüksek Güven Skoru (&gt;%90)</p>
            <p className="text-lg font-bold text-slate-900">{highConfidenceCount} Eşleşme</p>
          </div>
        </div>

        <div className="bg-white px-4 py-3 rounded-xl border border-slate-200 flex items-center gap-4 shadow-sm">
          <div className="p-2.5 bg-slate-50 text-slate-600 rounded-lg shrink-0">
            <CheckSquare className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium text-slate-500">Onay Bekleyen İşlem</p>
            <p className="text-lg font-bold text-slate-900">{pendingCount} Adet</p>
          </div>
        </div>
      </div>

      {/* Main Charts & Lists */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        
        <div className="flex flex-col gap-6 min-w-0">
          {/* Monthly Trend Chart */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
            <div className="mb-6 flex justify-between items-start">
              <div>
                <h3 className="text-base font-bold text-slate-900">Aylık Harcama ve Tasarruf Projeksiyonu</h3>
                <p className="text-sm text-slate-500">Tedarik rotaları optimize edildiğinde beklenen aylık bütçe etkisi</p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-slate-300 shrink-0"></div> Toplam Harcama
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-sm bg-emerald-500 shrink-0"></div> Net Tasarruf
                </div>
              </div>
            </div>
            
            <div className="space-y-3.5">
              {monthlyTrend.map((row) => {
                const spendWidth = Math.max(5, (row.spend / 520000) * 100);
                const savingWidth = Math.max(5, (row.potentialSavings / 520000) * 100);
                
                return (
                  <div key={row.month} className="flex items-center gap-3 sm:gap-4 text-sm w-full group">
                    <span className="w-8 sm:w-10 text-slate-500 font-semibold shrink-0 group-hover:text-slate-900 transition-colors">{row.month}</span>
                    <div className="flex-1 h-7 bg-slate-50 rounded-md relative flex items-center overflow-hidden min-w-[50px] border border-slate-100">
                      <div 
                        className="absolute top-0 left-0 bottom-0 bg-slate-200/80 rounded-l-md"
                        style={{ width: `${spendWidth}%` }}
                      />
                      <div 
                        className="absolute top-0 left-0 bottom-0 bg-emerald-500 rounded-l-md transition-all relative overflow-hidden"
                        style={{ width: `${savingWidth}%` }}
                      >
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_2s_infinite]"></div>
                      </div>
                    </div>
                    <div className="w-24 sm:w-28 flex flex-col items-end shrink-0">
                      <span className="text-emerald-700 font-bold leading-none mb-0.5">
                        {formatCurrency(row.potentialSavings)}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        Bütçe: {formatCurrency(row.spend)}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
            <div className="mb-5">
              <h3 className="text-base font-bold text-slate-900">Kategori Bazlı Toplam Tasarruf</h3>
              <p className="text-sm text-slate-500">En yüksek maliyet optimizasyonu sağlanan ürün grupları</p>
            </div>
            <div className="space-y-4">
              {sortedCategories.map(([category, amount]) => {
                const pct = (amount / maxCategorySaving) * 100;
                return (
                  <div key={category} className="w-full">
                    <div className="flex justify-between items-end mb-1.5">
                      <span className="text-sm font-semibold text-slate-700">{category}</span>
                      <span className="text-sm font-bold text-slate-900">{formatCurrency(amount)}</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-slate-800 rounded-full"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Column - Insights & Actionables */}
        <div className="space-y-6 min-w-0 flex flex-col">
          
          <div className="bg-[#fffbeb] p-5 rounded-xl border border-[#fde68a] shadow-sm relative overflow-hidden">
            <div className="absolute -right-6 -top-6 opacity-[0.07] text-amber-900">
              <AlertTriangle className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-amber-600" />
                <h4 className="text-sm font-bold text-amber-900">Algoritma İçgörüsü</h4>
              </div>
              <p className="text-sm text-amber-800/90 leading-relaxed mb-3">
                Geçmiş satın alma verilerinizde aracı firmaların <strong>ortalama {formatPercent(stats.avgMarkup)}</strong> oranında gizli kâr marjı (markup) uyguladığı tespit edilmiştir. 
              </p>
              <div className="bg-amber-100/50 p-3 rounded-lg border border-amber-200/50">
                <div className="flex items-center gap-2 text-amber-900 text-xs font-semibold mb-1">
                  <Zap className="h-3.5 w-3.5" />
                  Hızlı Kazanım (Quick Win)
                </div>
                <p className="text-xs text-amber-800/80">
                  Motor Sürücü grubundaki aracılar devreden çıkarıldığında anında bütçe rahatlaması sağlanabilir.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-slate-900">Kritik Tasarruf Fırsatları</h3>
              <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">Top 4</span>
            </div>
            
            <div className="space-y-3">
              {topAlerts.map((item) => (
                <div key={item.id} className="p-3.5 border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors rounded-lg group cursor-default">
                  <div className="flex justify-between items-start mb-1.5">
                    <span className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.partCode}</span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                      {formatPercent(item.savingsPct)}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-2.5 flex items-center gap-1.5">
                    <span className="truncate max-w-[120px] line-through">{item.currentSupplier}</span>
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    <span className="truncate max-w-[120px] font-semibold text-slate-700">{item.oemSupplier}</span>
                  </p>
                  <div className="flex items-center justify-between text-xs font-medium pt-2 border-t border-slate-200/60">
                    <span className="flex items-center gap-1.5 text-emerald-700">
                      <TrendingDown className="h-3.5 w-3.5" />
                      {formatCurrency(item.savingsAmount)}
                    </span>
                    <span className="flex items-center gap-1.5 text-blue-600">
                      <Clock className="h-3.5 w-3.5" />
                      -{item.leadTimeGain} gün
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => onNavigate("decisions")}
              className="w-full mt-4 py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 bg-white rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
            >
              Tüm Fırsatları İncele
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
}
