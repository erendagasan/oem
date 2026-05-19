import Link from "next/link";
import {
  apiEndpointCatalog,
  caseStudies,
  competitorRows,
  faqItems,
  integrationEcosystem,
  knowledgeArticles,
  packagePlans,
  pilotMetrics,
  roadmapItems,
} from "@/lib/smartsource-data";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BookOpen,
  Calculator,
  ChevronRight,
  Clock,
  Code2,
  Database,
  ExternalLink,
  Hexagon,
  LayoutDashboard,
  LineChart,
  Milestone,
  PlugZap,
  QrCode,
  Radio,
  Scale,
  ShieldCheck,
  Zap,
} from "lucide-react";

const howItWorksSteps = [
  {
    step: "01",
    title: "RFID / QR Etiket",
    description:
      "Parça ve ekipmanlar RFID etiket ya da QR kod ile işaretlenir. Her fiziksel varlık dijital kimlik kazanır.",
    icon: QrCode,
  },
  {
    step: "02",
    title: "Mobil Okuyucu",
    description:
      "Depo girişinde el terminali veya sabit okuyucu ile etiket taranır. Parça kodu anında sisteme iletilir.",
    icon: Radio,
  },
  {
    step: "03",
    title: "ERP Entegrasyonu",
    description:
      "Taranan veri SAP, Ariba veya Coupa'daki satın alma kaydıyla eşleştirilir. Mevcut fiyat ve tedarikçi bilgisi çekilir.",
    icon: Database,
  },
  {
    step: "04",
    title: "OEM Algoritması",
    description:
      "Yapay zeka destekli eşleştirme motoru, orijinal üretici alternatifini ve güncel OEM fiyatını saniyeler içinde bulur.",
    icon: Zap,
  },
  {
    step: "05",
    title: "Dashboard Raporu",
    description:
      "Tasarruf farkı, lead-time kazancı ve onay akışı tek ekranda görüntülenir. Karar merkezi üzerinden aksiyon alınır.",
    icon: LayoutDashboard,
  },
];

const featureCards = [
  {
    title: "OEM Eşleştirme Motoru",
    description:
      "%90+ güven skoruyla anında OEM alternatifi ve güncel üretici fiyatı. Saniyeler içinde karşılaştırmalı analiz.",
    icon: Zap,
  },
  {
    title: "Canlı Demo (Sandbox)",
    description:
      "Örnek ERP verisiyle platformu hiçbir risk almadan deneyimleyin. Gerçek senaryolar üzerinde test edin.",
    icon: LayoutDashboard,
  },
  {
    title: "Entegrasyon Ekosistemi",
    description:
      "SAP, Ariba, Coupa ve Azure ile hazır bağlantı. Mevcut altyapınıza haftalar içinde entegre olur.",
    icon: PlugZap,
  },
  {
    title: "Şeffaf Fiyatlandırma",
    description:
      "Ücretsiz denemeden kurumsal ölçeğe kadar esnek paketler. %6 başarı komisyonu — yalnızca tasarruf ettirirseniz.",
    icon: Calculator,
  },
  {
    title: "Global Yol Haritası",
    description:
      "Türkiye'den MENA'ya ve Avrupa'ya uzanan kademeli büyüme vizyonu. Her çeyrek yeni özellik.",
    icon: Milestone,
  },
  {
    title: "KVKK Uyumlu Güvenlik",
    description:
      "Rol bazlı erişim, denetim izi ve veri maskeleme. Kurumsal siber güvenlik standartlarıyla tam uyum.",
    icon: ShieldCheck,
  },
];

export default function LandingPage() {
  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 rounded-lg shadow-sm shadow-emerald-200">
              <Hexagon className="h-5 w-5 text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800">
              OEM<span className="text-emerald-600">HUB</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/giris" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              Müşteri Girişi
            </Link>
            <Link
              href="/giris"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 text-sm font-bold transition-all shadow-sm shadow-emerald-200"
            >
              Demoyu Başlat
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28 border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.06),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.04),transparent_40%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              Kurumsal Tedarik Zekası Platformu
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-slate-900">
              Tedarik zincirinizdeki{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                gizli maliyetleri
              </span>{" "}
              görünür kılın.
            </h1>

            <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-500 leading-relaxed max-w-3xl mx-auto">
              OEMHUB, ERP satın alma verilerinizi saniyeler içinde analiz ederek orijinal ekipman
              üreticisi (OEM) alternatiflerini, potansiyel maliyet tasarrufunu ve tedarik süresi
              avantajlarını tek bir merkezden yönetmenizi sağlar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/giris"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-base font-bold transition-all shadow-sm shadow-emerald-200 hover:shadow-md hover:shadow-emerald-200/50"
              >
                İnteraktif Demoyu İncele
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#nasil-calisir"
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 px-8 py-4 text-base font-semibold text-slate-700 transition-all shadow-sm"
              >
                Nasıl Çalışır?
              </a>
            </div>

            <div className="mt-20 pt-10 border-t border-slate-200">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                Pilot Program Başarı Metrikleri
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                {pilotMetrics.map((metric) => (
                  <div key={metric.label} className="flex flex-col items-center justify-center space-y-2">
                    <div className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                      {metric.value}
                    </div>
                    <div className="text-xs md:text-sm font-medium text-slate-500 uppercase tracking-wide text-center">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="nasil-calisir" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-600 mb-4 justify-center">
            <Zap className="h-5 w-5" />
            <p className="text-sm uppercase tracking-wider font-bold">5 Adımda Operasyonel Akış</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Nasıl Çalışır?
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            RFID etiketten dashboard raporuna kadar uçtan uca dijital tedarik zinciri.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-200 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {howItWorksSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="flex flex-col items-center text-center group">
                  <div className="relative">
                    <div className="h-14 w-14 rounded-2xl bg-white border-2 border-emerald-200 flex items-center justify-center text-emerald-600 shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600 transition-all duration-300 mb-4">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                  {index < howItWorksSteps.length - 1 && (
                    <div className="md:hidden mt-4 text-emerald-300">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden shadow-lg">
          <div className="px-8 py-10 md:px-10 border-b border-slate-700/50">
            <div className="flex items-center gap-2 text-emerald-400 mb-3">
              <LayoutDashboard className="h-5 w-5" />
              <p className="text-sm uppercase tracking-wider font-bold text-slate-300">Platform Önizleme</p>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">Dashboard Arayüzü</h3>
            <p className="text-slate-400 mt-3 text-lg max-w-2xl">
              Tüm operasyonel verileri tek ekranda görün. KPI kartları, trend grafikleri ve
              karar merkeziyle anlık aksiyon alın.
            </p>
          </div>

          <div className="p-6 md:p-8">
            {/* Mock dashboard frame */}
            <div className="rounded-xl border border-slate-700 bg-slate-950/50 overflow-hidden">
              {/* Mock header */}
              <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-rose-500/60" />
                  <div className="h-3 w-3 rounded-full bg-amber-500/60" />
                  <div className="h-3 w-3 rounded-full bg-emerald-500/60" />
                </div>
                <div className="h-5 w-48 rounded bg-slate-800" />
              </div>

              {/* Mock content */}
              <div className="p-6 space-y-4">
                {/* KPI row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { label: "Yıllık Harcama", value: "₺5,1M", change: "+%12" },
                    { label: "Tespit Edilen Tasarruf", value: "₺1,4M", change: "%27" },
                    { label: "Ort. Lead-Time Kazancı", value: "8,2 gün", change: "-%34" },
                    { label: "Aktif Parça Kodu", value: "12", change: "+4" },
                  ].map((card) => (
                    <div key={card.label} className="rounded-lg bg-slate-900/60 border border-slate-800 p-4">
                      <p className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold">
                        {card.label}
                      </p>
                      <p className="text-xl font-bold text-white mt-1">{card.value}</p>
                      <span className="inline-flex items-center text-[10px] font-semibold text-emerald-400 mt-1">
                        {card.change}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Chart + Table row */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-4">
                  {/* Chart placeholder */}
                  <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-5">
                    <p className="text-xs font-semibold text-slate-400 mb-4">Aylık Harcama ve Tasarruf Trendi (Son 12 Ay)</p>
                    <div className="h-40 flex items-end gap-2">
                      {[65, 72, 68, 80, 75, 85, 78, 92, 88, 95, 90, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1">
                          <div className="w-full bg-emerald-500/30 rounded-t" style={{ height: `${h * 0.3}px` }}>
                            <div className="w-full bg-emerald-500/60 rounded-t" style={{ height: `${h * 0.2}px` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-3 text-[10px] text-slate-600">
                      {["May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara", "Oca", "Şub", "Mar", "Nis"].map((m, i) => (
                        <span key={m} className={i % 2 !== 0 ? "hidden sm:inline" : ""}>{m}</span>
                      ))}
                    </div>
                  </div>

                  {/* Table placeholder */}
                  <div className="rounded-lg bg-slate-900/60 border border-slate-800 p-5">
                    <p className="text-xs font-semibold text-slate-400 mb-3">Öne Çıkan Tasarruf Fırsatları</p>
                    <div className="space-y-2">
                      {[
                        { part: "6205-2Z/C3", oem: "SKF", saving: "₺15.600", pct: "%35" },
                        { part: "VUVS-L25-M52", oem: "Festo", saving: "₺15.040", pct: "%35" },
                        { part: "IME18-08BPS", oem: "SICK", saving: "₺11.475", pct: "%32" },
                        { part: "LC1D09M7", oem: "Schneider", saving: "₺26.350", pct: "%30" },
                      ].map((row) => (
                        <div key={row.part} className="flex items-center justify-between text-xs p-2 rounded bg-slate-950/40">
                          <div>
                            <span className="text-slate-300 font-mono">{row.part}</span>
                            <span className="text-slate-600 ml-2">→ {row.oem}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-emerald-400 font-bold">{row.saving}</span>
                            <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-bold px-1.5 py-0.5 rounded">
                              {row.pct}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/giris"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Tam sürümü demo panele giriş yaparak deneyimleyin
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-600 mb-4 justify-center">
            <BadgeCheck className="h-5 w-5" />
            <p className="text-sm uppercase tracking-wider font-bold">Platform Modülleri</p>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Kurumsal satın alma için özel olarak tasarlandı
          </h2>
          <p className="text-slate-500 mt-4 text-lg">
            Veri analizinden entegrasyona kadar tedarik süreçlerinizin her aşamasında stratejik avantaj.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="group relative rounded-2xl border border-slate-200 bg-white p-8 hover:border-emerald-300 transition-all duration-300 shadow-sm overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/70 group-hover:via-emerald-500 group-hover:to-emerald-500/70 transition-all duration-500" />
                <div className="h-12 w-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-slate-500 leading-relaxed text-sm">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="px-8 py-10 md:px-10 border-b border-slate-100 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 mb-3 justify-center md:justify-start">
                <LineChart className="h-5 w-5" />
                <p className="text-sm uppercase tracking-wider font-bold">Şeffaf Fiyatlandırma</p>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
                İhtiyaca göre ölçeklenen paketler
              </h3>
              <p className="text-slate-500 mt-3 text-lg max-w-2xl">
                Ücretsiz denemeden kurumsal ölçeğe kadar, operasyon büyüklüğünüze uygun esnek SaaS modeli.
                Başarı komisyonu yalnızca sağlanan tasarruf üzerinden tahsil edilir.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto overflow-y-visible pt-0.5">
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-5 text-slate-500 font-semibold border-b border-slate-100 w-1/5">Özellik / Paket</th>
                  {packagePlans.map((plan) => (
                    <th key={plan.id} className="px-6 pt-7 pb-4 border-b border-slate-100 relative">
                      {plan.id === "pro" && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest py-1 px-3 rounded-b-full whitespace-nowrap">
                          En Çok Tercih Edilen
                        </div>
                      )}
                      <div className="text-lg font-bold text-slate-900">{plan.name}</div>
                      <div className="text-xs font-normal text-slate-500 mt-1">{plan.targetAudience}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                <LandingTableRow label="Abonelik Ücreti" values={packagePlans.map((plan) => plan.subscriptionLabel)} highlight />
                <LandingTableRow label="Başarı Komisyonu" values={packagePlans.map((plan) => plan.successCommissionLabel)} />
                <LandingTableRow label="Kullanım Sınırı" values={packagePlans.map((plan) => plan.usageLimit)} />
                <LandingTableRow label="Veri Yükleme" values={packagePlans.map((plan) => plan.dataUpload)} />
                <LandingTableRow label="Donanım ve Takip" values={packagePlans.map((plan) => plan.hardwareTracking)} />
                <LandingTableRow label="Ekstra Modüller" values={packagePlans.map((plan) => plan.extraModules)} />
              </tbody>
            </table>
          </div>
          <div className="p-5 bg-slate-50 border-t border-slate-100 text-center text-sm text-slate-400">
            * Başarı komisyonu (%6), yalnızca platform üzerinden sağlanan kanıtlanmış satın alma tasarrufları üzerinden tahsil edilir.
            Pro paket aylık ₺18.000 / yıllık ₺180.000 kurumsal lisans fiyatını yansıtmaktadır.
          </div>
        </div>
      </section>

      {/* Integration & Roadmap */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Integration */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 mb-4">
              <PlugZap className="h-5 w-5" />
              <p className="text-sm uppercase tracking-wider font-bold">Kusursuz Entegrasyon</p>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">Mevcut sistemlerinizle uyumlu</h3>
            <p className="text-slate-500 mb-8">SAP, Ariba, Coupa ve Azure altyapılarına doğrudan bağlanır.</p>

            <div className="space-y-3">
              {integrationEcosystem.slice(0, 4).map((item) => (
                <div key={item.id} className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-4 hover:border-emerald-200 hover:bg-white transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                      <span className="font-bold text-sm">{item.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.integrationType}</p>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 lg:p-10 shadow-sm">
            <div className="flex items-center gap-2 text-amber-600 mb-4">
              <Milestone className="h-5 w-5" />
              <p className="text-sm uppercase tracking-wider font-bold">Global Yol Haritası</p>
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-2">
              Türkiye &rarr; MENA &rarr; Avrupa
            </h3>
            <p className="text-slate-500 mb-8">Çeyrek dönemlerle planlanan stratejik büyüme ve teknoloji haritası.</p>

            <div className="relative border-l-2 border-slate-200 ml-4 space-y-6">
              {roadmapItems.slice(0, 4).map((item, index) => (
                <div key={item.id} className="relative pl-6">
                  <div className={`absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-white ${index === 0 ? "bg-amber-500" : "bg-slate-300"}`} />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${index === 0 ? "bg-amber-50 text-amber-700" : "bg-slate-100 text-slate-500"}`}>
                        {item.period}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">
                        {item.status}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-slate-700 mt-1">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies & FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 mb-4">
            <BarChart3 className="h-5 w-5" />
            <p className="text-sm uppercase tracking-wider font-bold">Başarı Hikayeleri</p>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Kanıtlanmış değer</h3>
          <p className="text-slate-500 mb-8">Pilot projelerimizde elde edilen somut sonuçlar.</p>

          <div className="space-y-4">
            {caseStudies.map((study) => (
              <article key={study.id} className="rounded-xl border border-slate-100 bg-slate-50 p-5 hover:border-emerald-200 hover:bg-white transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{study.company}</h4>
                    <p className="text-sm text-slate-500">{study.sector}</p>
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                    NPS: +{study.nps}
                  </div>
                </div>
                <p className="text-sm text-slate-600 mt-4 leading-relaxed line-clamp-2 italic">
                  &ldquo;{study.testimonial}&rdquo;
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
          <div className="flex items-center gap-2 text-emerald-600 mb-4">
            <ShieldCheck className="h-5 w-5" />
            <p className="text-sm uppercase tracking-wider font-bold">Sıkça Sorulanlar</p>
          </div>
          <h3 className="text-3xl font-bold text-slate-900 mb-2">Operasyonel güvence</h3>
          <p className="text-slate-500 mb-8">Güvenlik, entegrasyon ve süreç hakkında merak edilenler.</p>

          <div className="space-y-4">
            {faqItems.slice(0, 4).map((faq) => (
              <article key={faq.id} className="rounded-xl border border-slate-100 bg-slate-50 p-5 hover:border-emerald-200 hover:bg-white transition-colors">
                <div className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-2">
                  {faq.category}
                </div>
                <h4 className="text-sm font-bold text-slate-800 leading-snug">{faq.question}</h4>
                <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* API Portal */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="px-8 py-10 md:px-10 border-b border-slate-100">
            <div className="flex items-center gap-2 text-emerald-600 mb-3">
              <Code2 className="h-5 w-5" />
              <p className="text-sm uppercase tracking-wider font-bold">Geliştirici Kaynakları</p>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">API Portalı</h3>
            <p className="text-slate-500 mt-3 text-lg max-w-2xl">
              OEMHUB&apos;ı mevcut sistemlerinize entegre edin. REST API uç noktaları,
              örnek kod parçacıkları ve kimlik doğrulama rehberiyle hızlı başlangıç yapın.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100 w-20">Metot</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100">Uç Nokta</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100">Amaç</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100 w-36">Kimlik</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100 w-28">SLA</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {apiEndpointCatalog.map((ep) => (
                  <tr key={ep.path} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-8 py-4">
                      <span className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-bold text-emerald-700 uppercase">
                        {ep.method}
                      </span>
                    </td>
                    <td className="px-8 py-4 font-mono text-sm text-slate-800">{ep.path}</td>
                    <td className="px-8 py-4 text-slate-600">{ep.purpose}</td>
                    <td className="px-8 py-4 text-slate-500 text-xs font-medium">{ep.auth}</td>
                    <td className="px-8 py-4 text-slate-500 text-xs font-medium">{ep.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-6 bg-slate-50 border-t border-slate-100 text-center">
            <Link
              href="/giris"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 hover:text-emerald-500 transition-colors"
            >
              Tam dokümantasyon ve örnek kodlar için demo panele giriş yapın
              <ExternalLink className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-emerald-600 mb-4 justify-center">
            <BookOpen className="h-5 w-5" />
            <p className="text-sm uppercase tracking-wider font-bold">Bilgi Bankası</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
            Tedarik zekasında derinlemesine içerikler
          </h2>
          <p className="text-slate-500 text-lg">
            Satın alma ekipleri için teknik rehberler, strateji makaleleri ve en iyi uygulamalar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeArticles.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-200 transition-colors flex flex-col"
            >
              <div className="flex-1">
                <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded mb-3">
                  {article.category}
                </span>
                <h4 className="text-base font-bold text-slate-900 leading-snug mb-2">{article.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{article.excerpt}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{article.readMinutes} dk okuma</span>
                </div>
                <div className="flex items-center gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Competitor Analysis */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm">
          <div className="px-8 py-10 md:px-10 border-b border-slate-100">
            <div className="flex items-center gap-2 text-emerald-600 mb-3">
              <Scale className="h-5 w-5" />
              <p className="text-sm uppercase tracking-wider font-bold">Pazar Karşılaştırması</p>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Neden OEMHUB?</h3>
            <p className="text-slate-500 mt-3 text-lg max-w-2xl">
              Geleneksel manuel tedarik süreçlerine kıyasla OEMHUB&apos;ın sunduğu
              rekabet avantajlarını objektif kriterlerle karşılaştırın.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100">Karşılaştırma Kriteri</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100">OEMHUB</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100">Manuel / Geleneksel</th>
                  <th className="px-8 py-4 text-slate-500 font-semibold border-b border-slate-100 w-28">Sonuç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {competitorRows.map((row) => (
                  <tr key={row.criterion} className="hover:bg-slate-50/80 transition-colors">
                    <td className="px-8 py-4 font-medium text-slate-700">{row.criterion}</td>
                    <td className="px-8 py-4 text-slate-900 font-medium">{row.smartSource}</td>
                    <td className="px-8 py-4 text-slate-500">{row.manual}</td>
                    <td className="px-8 py-4">
                      <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold ${
                        row.verdict === "Avantaj"
                          ? "bg-emerald-50 text-emerald-700"
                          : row.verdict === "Risk"
                            ? "bg-amber-50 text-amber-700"
                            : "bg-slate-100 text-slate-600"
                      }`}>
                        {row.verdict}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-slate-200 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_60%)]" />
        <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            Tedarik süreçlerinizi dönüştürmeye hazır mısınız?
          </h2>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
            OEMHUB&apos;ın gücünü kendi verilerinizle test edin. Demo ortamına giriş yaparak anında keşfetmeye başlayın.
          </p>
          <Link
            href="/giris"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 text-lg font-bold transition-all shadow-sm shadow-emerald-200 hover:shadow-md hover:shadow-emerald-200/50"
          >
            Kurumsal Demoya Giriş Yap
            <ArrowRight className="h-5 w-5" />
          </Link>
          <p className="mt-6 text-sm text-slate-400">
            Kredi kartı gerekmez. Anında erişim.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 p-1 rounded-md">
              <Hexagon className="h-4 w-4 text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="font-bold tracking-tight text-slate-500">
              OEM<span className="text-emerald-600">HUB</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} OEMHUB Kurumsal Tedarik Zekası. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </main>
  );
}

function LandingTableRow({ label, values, highlight = false }: { label: string; values: readonly string[]; highlight?: boolean }) {
  return (
    <tr className="hover:bg-slate-50/80 transition-colors">
      <td className="px-8 py-4 font-medium text-slate-600 border-r border-slate-100">
        {label}
      </td>
      {values.map((value, index) => (
        <td key={`${label}-${index}`} className={`px-6 py-4 text-slate-700 ${highlight ? "font-semibold text-emerald-700 bg-emerald-50/50" : ""}`}>
          {value}
        </td>
      ))}
    </tr>
  );
}