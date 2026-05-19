"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { DEMO_CREDENTIALS } from "@/lib/auth";
import { ArrowRight, ShieldCheck, Hexagon } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState<string>(DEMO_CREDENTIALS.email);
  const [password, setPassword] = useState<string>(DEMO_CREDENTIALS.password);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = (await response.json()) as { message?: string };
        setError(data.message ?? "Giriş başarısız. Bilgileri kontrol edin.");
        return;
      }

      window.location.href = "/dashboard";
    } catch {
      setError("Bağlantı hatası oluştu. Lütfen tekrar deneyin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 grid place-items-center px-6 py-12 font-sans">
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl shadow-slate-200/60 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
        <section className="relative p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-200 bg-gradient-to-br from-slate-50 to-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 rounded-lg shadow-sm shadow-emerald-200">
              <Hexagon className="h-5 w-5 text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800">
              OEM<span className="text-emerald-600">HUB</span>
            </span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Güvenli Giriş
          </span>

          <h1 className="mt-4 text-3xl font-black text-slate-900 leading-tight">
            Hesabınızla<br /> platforma bağlanın
          </h1>
          <p className="mt-3 text-sm text-slate-500 leading-relaxed max-w-md">
            OEMHUB paneline erişmek için aşağıdaki giriş bilgilerini kullanın.
            Gerçek bir kurumsal entegrasyon deneyimi için tasarlanmıştır.
          </p>

          <div className="mt-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-700">
              <ShieldCheck className="h-4 w-4" />
              <p className="text-xs font-bold uppercase tracking-wider">Hesap Bilgileri</p>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase w-16">E-posta</span>
                <code className="text-sm font-mono font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                  {DEMO_CREDENTIALS.email}
                </code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase w-16">Şifre</span>
                <code className="text-sm font-mono font-medium text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                  {DEMO_CREDENTIALS.password}
                </code>
              </div>
            </div>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 mt-6 text-sm font-medium text-slate-400 hover:text-slate-700 transition-colors"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180" />
            Ana sayfaya dön
          </Link>
        </section>

        <section className="p-8 lg:p-10 bg-white">
          <div className="flex flex-col h-full justify-center max-w-sm mx-auto w-full">
            <h2 className="text-2xl font-bold text-slate-900">Giriş yapın</h2>
            <p className="text-sm text-slate-500 mt-1">Panele erişmek için kimlik bilgilerinizi girin.</p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Kurumsal e-posta</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
                  placeholder="ornek@firma.com"
                />
              </label>

              <label className="block">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Şifre</span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all placeholder:text-slate-400"
                  placeholder="••••••••"
                />
              </label>

              {error ? (
                <p className="text-sm font-medium text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-4 py-3">
                  {error}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-60 disabled:cursor-not-allowed text-white px-4 py-3 text-sm font-bold transition-all shadow-sm shadow-emerald-200"
              >
                {loading ? "Giriş yapılıyor..." : "Paneli Aç"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-8 text-xs text-slate-400 text-center leading-relaxed">
              Kurumsal kullanım ve entegrasyon için
              <br />satış ekibimizle iletişime geçin.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}