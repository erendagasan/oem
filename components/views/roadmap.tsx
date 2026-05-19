"use client";

import { useMemo, useState } from "react";
import { roadmapItems } from "@/lib/smartsource-data";
import { MapPinned } from "lucide-react";

type RegionFilter = "Tümü" | "Türkiye" | "MENA";
type StatusFilter = "Tümü" | "Tamamlandı" | "Devam Ediyor" | "Planlandı";

export default function RoadmapView() {
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("Tümü");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("Tümü");

  const filteredRoadmap = useMemo(() => {
    return roadmapItems.filter((item) => {
      const byRegion = regionFilter === "Tümü" || item.region === regionFilter;
      const byStatus = statusFilter === "Tümü" || item.status === statusFilter;
      return byRegion && byStatus;
    });
  }, [regionFilter, statusFilter]);

  const statusClass = (status: string) => {
    if (status === "Tamamlandı") {
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    }
    if (status === "Devam Ediyor") {
      return "bg-amber-100 text-amber-700 border-amber-200";
    }
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-indigo-50 border border-indigo-100">
            <MapPinned className="h-5 w-5 text-indigo-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Etkileşimli Yol Haritası</h2>
            <p className="text-sm text-slate-500 mt-1">
              Türkiye&apos;den MENA pazarına uzanan genişleme adımları, RFID özellikleri ve planlanan güncellemeler.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3 sm:items-center">
        <div className="flex items-center gap-2 sm:w-1/2">
          <label htmlFor="regionFilter" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Bölge
          </label>
          <select
            id="regionFilter"
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value as RegionFilter)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          >
            <option value="Tümü">Tümü</option>
            <option value="Türkiye">Türkiye</option>
            <option value="MENA">MENA</option>
          </select>
        </div>

        <div className="flex items-center gap-2 sm:w-1/2">
          <label htmlFor="statusFilter" className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Durum
          </label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          >
            <option value="Tümü">Tümü</option>
            <option value="Tamamlandı">Tamamlandı</option>
            <option value="Devam Ediyor">Devam Ediyor</option>
            <option value="Planlandı">Planlandı</option>
          </select>
        </div>
      </div>

      <div className="relative pl-5 space-y-5 before:absolute before:left-[7px] before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-200">
        {filteredRoadmap.map((item) => (
          <article key={item.id} className="relative bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <span className="absolute -left-[19px] top-8 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500 shadow-sm" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.period}</p>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-1">Bölge: {item.region}</p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border h-fit ${statusClass(item.status)}`}>
                {item.status}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mt-3">{item.description}</p>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-1.5 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>İlerleme</span>
                <span>%{item.progress}</span>
              </div>
              <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500" style={{ width: `${item.progress}%` }} />
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {item.focus.map((focus) => (
                <span key={focus} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {focus}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
