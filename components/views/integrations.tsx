import { integrationEcosystem } from "@/lib/smartsource-data";
import { BadgeCheck, Cloud, DatabaseZap, ShieldCheck } from "lucide-react";

export default function IntegrationsView() {
  const statusClass = (status: string) => {
    if (status === "Canlıya Hazır") {
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    }
    if (status === "Pilotta") {
      return "bg-amber-100 text-amber-700 border-amber-200";
    }
    return "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-sky-50 border border-sky-100 rounded-lg">
            <Cloud className="h-5 w-5 text-sky-700" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Entegrasyon Ekosistemi</h2>
            <p className="text-sm text-slate-500 mt-1">
              SAP, Ariba, Coupa ve Azure uyumluluğunu; bağlantı tipi, gecikme ve güvenlik katmanlarıyla birlikte tek vitrinde görün.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {integrationEcosystem.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col gap-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{item.layer}</p>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{item.name}</h3>
                <p className="text-sm text-slate-500">Sağlayıcı: {item.vendor}</p>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${statusClass(item.status)}`}>
                {item.status}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Bağlantı tipi</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">{item.integrationType}</p>
              </div>
              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">Senkron gecikmesi</p>
                <p className="text-sm font-semibold text-slate-700 mt-1">{item.syncLatency}</p>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-3">
              <div className="flex items-center gap-2 text-slate-700">
                <DatabaseZap className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-wider">Uyumluluk</p>
              </div>
              <p className="text-sm text-slate-700 mt-2">{item.compatibility}</p>
            </div>

            <div className="rounded-lg border border-slate-200 p-3">
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="h-4 w-4" />
                <p className="text-xs font-semibold uppercase tracking-wider">Güvenlik katmanı</p>
              </div>
              <p className="text-sm text-slate-700 mt-2">{item.security}</p>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Teknik öne çıkanlar</p>
              <ul className="space-y-2">
                {item.highlights.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <BadgeCheck className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
