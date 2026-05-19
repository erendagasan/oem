"use client";

import { useMemo, useState } from "react";
import { knowledgeArticles } from "@/lib/smartsource-data";
import { BookOpenText, Search } from "lucide-react";

type CategoryFilter = "Tümü" | (typeof knowledgeArticles)[number]["category"];

export default function KnowledgeBaseView() {
  const [query, setQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("Tümü");

  const categories = useMemo(
    () => ["Tümü", ...Array.from(new Set(knowledgeArticles.map((item) => item.category)))],
    [],
  );

  const filteredArticles = useMemo(() => {
    return knowledgeArticles.filter((article) => {
      const byCategory = categoryFilter === "Tümü" || article.category === categoryFilter;
      const q = query.trim().toLocaleLowerCase("tr-TR");
      const byQuery =
        !q ||
        article.title.toLocaleLowerCase("tr-TR").includes(q) ||
        article.excerpt.toLocaleLowerCase("tr-TR").includes(q) ||
        article.tags.some((tag) => tag.toLocaleLowerCase("tr-TR").includes(q));
      return byCategory && byQuery;
    });
  }, [categoryFilter, query]);

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-amber-50 border border-amber-100">
            <BookOpenText className="h-5 w-5 text-amber-700" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">Bilgi Bankası ve Sektörel Blog</h2>
            <p className="text-sm text-slate-500 mt-1">
              Tedarik zinciri optimizasyonu, akıllı depo dönüşümü, enflasyon döneminde maliyet düşürme ve RFID uygulamaları üzerine kaynak merkezi.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Makale başlığı, konu veya etiket ara..."
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
          />
        </div>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value as CategoryFilter)}
          className="sm:w-64 px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {filteredArticles.map((article) => (
          <article key={article.id} className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-100 px-2 py-1 rounded">
                {article.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">{article.publishedAt}</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900 mt-3 leading-snug">{article.title}</h3>
            <p className="text-sm text-slate-600 mt-2 leading-relaxed">{article.excerpt}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
              <span>{article.readMinutes} dk okuma</span>
              <button className="text-emerald-700 font-semibold hover:text-emerald-800">Devamını Oku</button>
            </div>
          </article>
        ))}
      </div>

      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-8 text-center text-slate-500 text-sm">
          Seçtiğiniz filtrelere uygun içerik bulunamadı.
        </div>
      ) : null}
    </div>
  );
}
