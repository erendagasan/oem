"use client";

import { useMemo, useState } from "react";
import { apiEndpointCatalog, apiPortalSections } from "@/lib/smartsource-data";
import { Code, Database, KeyRound } from "lucide-react";

type SnippetTab = "curl" | "python" | "sql";
type SectionId = (typeof apiPortalSections)[number]["id"];

export default function ApiPortalView() {
  const [activeSectionId, setActiveSectionId] = useState<SectionId>(apiPortalSections[0].id);
  const [snippetTab, setSnippetTab] = useState<SnippetTab>("curl");

  const activeSection = useMemo(
    () => apiPortalSections.find((item) => item.id === activeSectionId) ?? apiPortalSections[0],
    [activeSectionId],
  );

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900">API Dokümantasyon Portalı</h2>
        <p className="text-sm text-slate-500 mt-1">
          IT ekipleri için SQL/Python tabanlı backend bağlantı rehberi, endpoint kataloğu ve örnek entegrasyon akışı.
        </p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2 text-slate-700">
          <Database className="h-4 w-4" />
          <h3 className="text-base font-bold">Endpoint Kataloğu</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[880px] text-sm whitespace-nowrap text-left">
            <thead className="bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-600">Method</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Path</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Amaç</th>
                <th className="px-4 py-3 font-semibold text-slate-600">Yetkilendirme</th>
                <th className="px-4 py-3 font-semibold text-slate-600">SLA</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {apiEndpointCatalog.map((endpoint) => (
                <tr key={endpoint.path}>
                  <td className="px-4 py-3">
                    <span className="inline-flex px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs">
                      {endpoint.method}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-slate-800">{endpoint.path}</td>
                  <td className="px-4 py-3 text-slate-600">{endpoint.purpose}</td>
                  <td className="px-4 py-3 text-slate-600">{endpoint.auth}</td>
                  <td className="px-4 py-3 text-slate-600">{endpoint.sla}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-5">
        <aside className="bg-white rounded-xl border border-slate-200 shadow-sm p-3 h-fit">
          <p className="px-2 py-1 text-xs uppercase tracking-wider font-semibold text-slate-500">Doküman bölümleri</p>
          <nav className="mt-2 space-y-1">
            {apiPortalSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium border transition-colors ${
                  section.id === activeSectionId
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-white border-transparent text-slate-700 hover:bg-slate-50"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </aside>

        <section className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-start gap-2 mb-3 text-slate-800">
            <KeyRound className="h-4 w-4 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold">{activeSection.title}</h3>
              <p className="text-sm text-slate-600 mt-1">{activeSection.summary}</p>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 p-4 bg-slate-50">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Uygulama kontrol listesi</p>
            <ul className="mt-2 space-y-2">
              {activeSection.checklist.map((item) => (
                <li key={item} className="text-sm text-slate-700 flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between gap-3 mb-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Kod örnekleri</p>
              <div className="flex items-center gap-2">
                {(["curl", "python", "sql"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setSnippetTab(tab)}
                    className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${
                      tab === snippetTab
                        ? "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 border-slate-200"
                    }`}
                  >
                    {tab.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 bg-slate-900 text-slate-100 overflow-x-auto">
              <div className="px-4 py-2 border-b border-slate-700 text-xs text-slate-300 flex items-center gap-1.5">
                <Code className="h-3.5 w-3.5" />
                {snippetTab === "curl"
                  ? "cURL"
                  : snippetTab === "python"
                    ? "Python"
                    : "SQL"}
              </div>
              <pre className="p-4 text-xs leading-relaxed whitespace-pre min-w-[620px]">
                {activeSection.snippets[snippetTab]}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
