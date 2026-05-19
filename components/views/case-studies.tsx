import { caseStudies, pilotMetrics, revisionLog } from "@/lib/smartsource-data";
import { Star, TrendingUp } from "lucide-react";

export default function CaseStudiesView() {
  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">Başarı Hikayeleri ve Vaka Analizleri</h2>
        <p className="text-sm text-slate-500 mt-1">
          Pilot kurumsal testlerden çıkan müşteri tepkileri, NPS sonuçları ve ölçülebilir operasyon etkileri.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {pilotMetrics.map((metric) => (
          <div key={metric.label} className="bg-white rounded-xl border border-slate-200 shadow-sm p-4">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{metric.label}</p>
            <p className="text-2xl font-bold text-slate-900 mt-2">{metric.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {caseStudies.map((study) => (
          <article key={study.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{study.sector}</p>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{study.company}</h3>
                <p className="text-sm text-slate-500 mt-1">Pilot Süresi: {study.pilotDuration}</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2 shrink-0">
                <div className="flex items-center gap-1.5 text-emerald-700">
                  <Star className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">NPS</span>
                </div>
                <p className="text-xl font-bold text-emerald-700 mt-1">+{study.nps}</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Başlangıç sorunu</p>
                <p className="text-sm text-slate-700 mt-2 leading-relaxed">{study.challenge}</p>
              </div>

              <div className="rounded-lg border border-slate-200 p-4">
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Uygulanan yaklaşım</p>
                <ul className="mt-2 space-y-2">
                  {study.approach.map((step) => (
                    <li key={step} className="text-sm text-slate-700 flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {study.outcomes.map((item) => (
                <div key={item.label} className="rounded-lg border border-slate-200 p-3">
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">{item.label}</p>
                  <p className="text-base font-bold text-slate-900 mt-1">{item.value}</p>
                </div>
              ))}
            </div>

            <blockquote className="mt-4 rounded-lg border border-emerald-100 bg-emerald-50/60 p-4 text-sm text-emerald-900 leading-relaxed">
              &ldquo;{study.testimonial}&rdquo;
            </blockquote>
          </article>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-4 text-slate-800">
          <TrendingUp className="h-4 w-4" />
          <h3 className="text-base font-bold">Revizyon ve ürün olgunlaşma geçmişi</h3>
        </div>
        <div className="space-y-3">
          {revisionLog.map((item) => (
            <div key={item.version} className="rounded-lg border border-slate-200 p-4">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.version}</p>
              <p className="text-sm font-semibold text-slate-800 mt-1">{item.title}</p>
              <p className="text-sm text-slate-600 mt-1">{item.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
