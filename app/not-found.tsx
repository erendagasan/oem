import Link from "next/link";
import { Hexagon, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 grid place-items-center px-6 font-sans">
      <div className="text-center max-w-md">
        <div className="inline-flex bg-gradient-to-br from-emerald-500 to-teal-700 p-3 rounded-xl shadow-sm shadow-emerald-200 mb-8">
          <Hexagon className="h-8 w-8 text-white" fill="currentColor" strokeWidth={1} />
        </div>
        <h1 className="text-6xl font-black text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-500 mb-2">Sayfa bulunamadı</p>
        <p className="text-sm text-slate-400 mb-8">
          Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 text-sm font-bold transition-all shadow-sm shadow-emerald-200"
        >
          <ArrowLeft className="h-4 w-4" />
          Ana Sayfaya Dön
        </Link>
      </div>
    </main>
  );
}