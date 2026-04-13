import React, { useState } from "react";
import { rfidEvents } from "@/lib/smartsource-data";
import { Truck, ArrowRight, PackageOpen, LayoutDashboard, Calendar, Users, BarChart } from "lucide-react";

type FilterKey = "today" | "last_7_days" | "last_30_days";

const filterData = {
  today: {
    label: "Bugün",
    kpi: { in: 12, out: 8 },
    chart: [
      { label: "08:00", in: 2, out: 1 },
      { label: "10:00", in: 4, out: 2 },
      { label: "12:00", in: 3, out: 3 },
      { label: "14:00", in: 1, out: 1 },
      { label: "16:00", in: 2, out: 1 },
    ],
  },
  last_7_days: {
    label: "Son 1 Hafta",
    kpi: { in: 145, out: 138 },
    chart: [
      { label: "12 Eki", in: 18, out: 16 },
      { label: "13 Eki", in: 22, out: 20 },
      { label: "14 Eki", in: 15, out: 14 },
      { label: "15 Eki", in: 25, out: 24 },
      { label: "16 Eki", in: 28, out: 25 },
      { label: "17 Eki", in: 12, out: 10 },
      { label: "18 Eki", in: 25, out: 29 },
    ],
  },
  last_30_days: {
    label: "Son 1 Ay",
    kpi: { in: 525, out: 515 },
    chart: [
      { label: "1. Hafta", in: 120, out: 115 },
      { label: "2. Hafta", in: 140, out: 138 },
      { label: "3. Hafta", in: 110, out: 112 },
      { label: "4. Hafta", in: 155, out: 150 },
    ],
  },
};

const topSuppliers = [
  { name: "Doğu Marmara Rulman A.Ş.", count: 48, pct: 35 },
  { name: "Ege Elektrik Toptan", count: 32, pct: 25 },
  { name: "İleri Otomasyon A.Ş.", count: 24, pct: 18 },
  { name: "Pnomatik Çözümler A.Ş.", count: 18, pct: 12 },
  { name: "Makine-Market Toptan", count: 12, pct: 10 },
];

export function RFIDView() {
  const [dateFilter, setDateFilter] = useState<FilterKey>("last_7_days");
  
  const currentData = filterData[dateFilter];
  const chartData = currentData.chart;

  // Gerçek zamanlı gelen eventleri dummy dataya eklemek için basit bir kurgu
  const incomingTrucks = currentData.kpi.in;
  const outgoingTrucks = currentData.kpi.out;

  return (
    <div className="space-y-6 min-w-0 pb-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div>
          <h2 className="text-xl font-bold text-slate-900">RFID Tır/Kapı Geçişi</h2>
          <p className="text-sm text-slate-500 mt-1">
            Kapıdan geçen araçların yük analizleri ve OEM malzeme dökümü.
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
            <p className="text-sm font-semibold text-slate-500">Giren Tır</p>
            <div className="p-2 bg-emerald-50 rounded-lg">
              <Truck className="h-4 w-4 text-emerald-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{incomingTrucks}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            {currentData.label} Giriş Hareketi
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Çıkan Tır</p>
            <div className="p-2 bg-rose-50 rounded-lg">
              <ArrowRight className="h-4 w-4 text-rose-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{outgoingTrucks}</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            {currentData.label} Çıkış Hareketi
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <p className="text-sm font-semibold text-slate-500">Aktif Kapı Sensörleri</p>
            <div className="p-2 bg-indigo-50 rounded-lg">
              <LayoutDashboard className="h-4 w-4 text-indigo-600" />
            </div>
          </div>
          <p className="text-2xl font-bold text-indigo-600">4 / 4</p>
          <div className="flex items-center gap-1 mt-2 text-xs font-medium text-slate-500">
            Sistem durumu sağlıklı
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <BarChart className="h-4 w-4 text-slate-500" />
                Tır ve Sevkiyat Trafiği
              </h3>
              <p className="text-sm text-slate-500">
                {currentData.label} içindeki lojistik hacmi
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-4 text-xs font-medium text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#52C47C] shrink-0"></div> Giriş
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] shrink-0"></div> Çıkış
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-4 min-h-[280px]">
            {chartData.map((row) => {
              const maxTotal = Math.max(...chartData.map(r => r.in + r.out));
              const inWidth = Math.max(5, (row.in / maxTotal) * 100);
              const outWidth = Math.max(5, (row.out / maxTotal) * 100);
              
              return (
                <div key={row.label} className="flex items-center gap-3 sm:gap-4 text-sm w-full group">
                  <span className="w-16 sm:w-20 text-slate-500 font-medium shrink-0 flex items-center gap-1.5 truncate" title={row.label}>
                    {dateFilter === "last_30_days" && <Calendar className="h-4 w-4 text-slate-400" />}
                    {row.label}
                  </span>
                  <div className="flex-1 h-6 bg-slate-50 rounded-full relative flex items-center min-w-[50px]">
                    <div 
                      className="absolute top-0 left-0 bottom-0 bg-[#52C47C] rounded-l-full transition-all"
                      style={{ width: `${inWidth}%` }}
                    />
                    <div 
                      className="absolute top-0 bottom-0 bg-[#F43F5E] rounded-r-full transition-all"
                      style={{ left: `${inWidth}%`, width: `${outWidth}%` }}
                    />
                  </div>
                  <div className="w-24 sm:w-28 flex justify-between shrink-0 pl-2">
                    <div className="flex flex-col items-center">
                      <span className="text-[#059669] font-bold text-sm leading-none mb-0.5">{row.in}</span>
                      <span className="text-[9px] text-slate-400 font-medium">Giriş</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[#E11D48] font-bold text-sm leading-none mb-0.5">{row.out}</span>
                      <span className="text-[9px] text-slate-400 font-medium">Çıkış</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
          <div className="mb-5">
            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <Users className="h-4 w-4 text-indigo-600" />
              En Sık Gelen Tedarikçiler
            </h3>
            <p className="text-sm text-slate-500">Kapıyı en yoğun kullanan firmalar</p>
          </div>
          <div className="space-y-4 mt-6">
            {topSuppliers.map((supplier) => (
              <div key={supplier.name} className="w-full">
                <div className="flex justify-between items-end mb-1.5">
                  <span className="text-sm font-semibold text-slate-900 truncate mr-2" title={supplier.name}>
                    {supplier.name}
                  </span>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-slate-900">{supplier.count}</span>
                    <span className="text-xs ml-1 text-slate-500 font-medium">Sefer</span>
                  </div>
                </div>
                <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
                  <div 
                    className="h-full bg-indigo-500 rounded-full transition-all"
                    style={{ width: `${supplier.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-4">
        <div className="mb-5 flex flex-col gap-1">
          <h3 className="text-lg font-bold text-slate-900">Bugün Geçen Tırlar</h3>
          <p className="text-sm text-slate-500">Kapıdan gerçekleşen canlı araç giriş/çıkış kayıtları</p>
        </div>
        <div className="space-y-4">
          {rfidEvents.map((event) => (
          <div key={event.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg ${
                  event.type === "Giriş" ? "bg-emerald-50 text-emerald-600" : "bg-slate-50 text-slate-600"
                }`}>
                  <Truck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 flex items-center gap-2">
                    {event.plate}
                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${
                      event.type === "Giriş" 
                        ? "bg-emerald-100 text-emerald-700 border-emerald-200" 
                        : "bg-slate-100 text-slate-700 border-slate-200"
                    }`}>
                      {event.type}
                    </span>
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">{event.supplier}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-900">{event.timestamp}</p>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">İşlem No: {event.id}</p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold flex items-center gap-2 text-slate-700 mb-3">
                <PackageOpen className="h-4 w-4" /> Yük Detayı
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm whitespace-nowrap">
                  <thead className="bg-slate-50 text-slate-500 font-semibold">
                    <tr>
                      <th className="px-4 py-2 rounded-l-lg">Parça Kodu</th>
                      <th className="px-4 py-2">Açıklama</th>
                      <th className="px-4 py-2 text-right rounded-r-lg">Miktar</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {event.payload.map((item, index) => (
                      <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                        <td className="px-4 py-2.5 font-bold text-slate-800">{item.partCode}</td>
                        <td className="px-4 py-2.5 text-slate-600">{item.name}</td>
                        <td className="px-4 py-2.5 text-right font-bold text-slate-900">{item.quantity} Adet</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
