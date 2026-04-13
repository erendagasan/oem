export type UserRole = "Endirekt Satın Alma Uzmanı" | "Lojistik Analisti" | "Kategori Yöneticisi";

export type PartRecord = {
  id: string;
  partCode: string;
  barcode: string;
  name: string;
  category: string;
  plant: string;
  currentSupplier: string;
  oemSupplier: string;
  currentUnitPrice: number;
  oemUnitPrice: number;
  quantity: number;
  currentLeadTimeDays: number;
  oemLeadTimeDays: number;
  confidence: number;
};

export type FeedbackItem = {
  id: string;
  author: string;
  role: UserRole;
  priority: "Hata" | "İyileştirme" | "Öneri";
  note: string;
  status: "Yeni" | "Planlandı" | "Tamamlandı";
};

export const userRoles: UserRole[] = [
  "Endirekt Satın Alma Uzmanı",
  "Lojistik Analisti",
  "Kategori Yöneticisi",
];

export const personaCards = [
  {
    title: "Endirekt Satın Alma Uzmanı",
    pain: "Binlerce parça kodu içinde aracı tedarikçiyi hızlıca bulmakta zorlanır.",
    need: "Saniyeler içinde OEM alternatifi ve net tasarruf oranını görmek ister.",
  },
  {
    title: "Lojistik ve Tedarik Zinciri Analisti",
    pain: "Uzun lead-time yüzünden üretim hattı riski ve stok baskısı artar.",
    need: "OEM rotası ile teslimat süresini düşürüp duruş riskini azaltmak ister.",
  },
  {
    title: "Kategori Yöneticisi",
    pain: "Üst yönetime hızlı, güvenilir ve ölçülebilir ROI raporu sunmakta zorlanır.",
    need: "Karar toplantısında anında kullanılacak net KPI kartlarına ihtiyaç duyar.",
  },
];

export const partRecords: PartRecord[] = [
  {
    id: "P-1001",
    partCode: "6205-2Z/C3",
    barcode: "8690001000011",
    name: "Sabit Bilyalı Rulman (Deep Groove)",
    category: "Rulman",
    plant: "Kocaeli TOSB",
    currentSupplier: "Doğu Marmara Rulman A.Ş.",
    oemSupplier: "SKF",
    currentUnitPrice: 18.5,
    oemUnitPrice: 12.0,
    quantity: 2400,
    currentLeadTimeDays: 14,
    oemLeadTimeDays: 5,
    confidence: 0.98,
  },
  {
    id: "P-1002",
    partCode: "IME18-08BPSZC0K",
    barcode: "8690001000028",
    name: "Endüktif Yaklaşım Sensörü M18",
    category: "Sensör",
    plant: "Manisa OSB",
    currentSupplier: "Otomasyon Dünyası Ltd.",
    oemSupplier: "SICK",
    currentUnitPrice: 42.0,
    oemUnitPrice: 28.5,
    quantity: 850,
    currentLeadTimeDays: 21,
    oemLeadTimeDays: 12,
    confidence: 0.95,
  },
  {
    id: "P-1003",
    partCode: "VUVS-L25-M52",
    barcode: "8690001000035",
    name: "Solenoid Valf 5/2 Yollu G1/4",
    category: "Pnömatik",
    plant: "Bursa Nilüfer",
    currentSupplier: "Pnomatik Çözümler A.Ş.",
    oemSupplier: "Festo",
    currentUnitPrice: 135.0,
    oemUnitPrice: 88.0,
    quantity: 320,
    currentLeadTimeDays: 18,
    oemLeadTimeDays: 7,
    confidence: 0.92,
  },
  {
    id: "P-1004",
    partCode: "6SL3210-5BB17",
    barcode: "8690001000042",
    name: "SINAMICS V20 Sürücü 0.75kW",
    category: "Motor Sürücü",
    plant: "İzmir Kemalpaşa",
    currentSupplier: "Ege Elektrik Toptan",
    oemSupplier: "Siemens",
    currentUnitPrice: 285.0,
    oemUnitPrice: 210.0,
    quantity: 140,
    currentLeadTimeDays: 45,
    oemLeadTimeDays: 28,
    confidence: 0.96,
  },
  {
    id: "P-1005",
    partCode: "10C-Microglass",
    barcode: "8690001000059",
    name: "Hidrolik Dönüş Filtre Elemanı",
    category: "Filtre",
    plant: "Kocaeli TOSB",
    currentSupplier: "Hidro-Tek Akışkan Gücü",
    oemSupplier: "Parker Hannifin",
    currentUnitPrice: 34.0,
    oemUnitPrice: 22.5,
    quantity: 1600,
    currentLeadTimeDays: 12,
    oemLeadTimeDays: 8,
    confidence: 0.89,
  },
  {
    id: "P-1006",
    partCode: "1756-EN2T",
    barcode: "8690001000066",
    name: "ControlLogix EtherNet/IP Modülü",
    category: "Otomasyon",
    plant: "Ankara ASO",
    currentSupplier: "İleri Otomasyon A.Ş.",
    oemSupplier: "Allen-Bradley",
    currentUnitPrice: 1450.0,
    oemUnitPrice: 1120.0,
    quantity: 45,
    currentLeadTimeDays: 60,
    oemLeadTimeDays: 45,
    confidence: 0.99,
  },
  {
    id: "P-1007",
    partCode: "LC1D09M7",
    barcode: "8690001000073",
    name: "TeSys D Kontaktör 9A 220VAC",
    category: "Elektrik",
    plant: "Manisa OSB",
    currentSupplier: "Ege Elektrik Toptan",
    oemSupplier: "Schneider Electric",
    currentUnitPrice: 28.0,
    oemUnitPrice: 19.5,
    quantity: 3100,
    currentLeadTimeDays: 15,
    oemLeadTimeDays: 10,
    confidence: 0.94,
  },
  {
    id: "P-1008",
    partCode: "HSR25A1SS",
    barcode: "8690001000080",
    name: "Lineer Kızak Arabası",
    category: "Güç Aktarım",
    plant: "Bursa Nilüfer",
    currentSupplier: "Doğu Marmara Rulman A.Ş.",
    oemSupplier: "THK",
    currentUnitPrice: 95.0,
    oemUnitPrice: 68.0,
    quantity: 480,
    currentLeadTimeDays: 30,
    oemLeadTimeDays: 21,
    confidence: 0.91,
  },
  {
    id: "P-1009",
    partCode: "CP96SDB40-200C",
    barcode: "8690001000097",
    name: "ISO Profil Pnömatik Silindir",
    category: "Pnömatik",
    plant: "İzmir Kemalpaşa",
    currentSupplier: "Pnomatik Çözümler A.Ş.",
    oemSupplier: "SMC",
    currentUnitPrice: 112.0,
    oemUnitPrice: 75.0,
    quantity: 260,
    currentLeadTimeDays: 24,
    oemLeadTimeDays: 14,
    confidence: 0.88,
  },
  {
    id: "P-1010",
    partCode: "R87 DRE90M4",
    barcode: "8690001000103",
    name: "Helisel Dişli Redüktör Motor",
    category: "Motor Sürücü",
    plant: "Kocaeli TOSB",
    currentSupplier: "Makine-Market Toptan",
    oemSupplier: "SEW-Eurodrive",
    currentUnitPrice: 1250.0,
    oemUnitPrice: 980.0,
    quantity: 65,
    currentLeadTimeDays: 55,
    oemLeadTimeDays: 40,
    confidence: 0.97,
  },
  {
    id: "P-1011",
    partCode: "ACS380-040S-02A6-4",
    barcode: "8690001000110",
    name: "Makine Sürücüsü 1.1kW 400V",
    category: "Motor Sürücü",
    plant: "Ankara ASO",
    currentSupplier: "İleri Otomasyon A.Ş.",
    oemSupplier: "ABB",
    currentUnitPrice: 315.0,
    oemUnitPrice: 240.0,
    quantity: 110,
    currentLeadTimeDays: 35,
    oemLeadTimeDays: 20,
    confidence: 0.86,
  },
  {
    id: "P-1012",
    partCode: "8MGT-1000-21",
    barcode: "8690001000127",
    name: "Poly Chain GT2 Zaman Kayışı",
    category: "Güç Aktarım",
    plant: "Bursa Nilüfer",
    currentSupplier: "Güç Aktarım A.Ş.",
    oemSupplier: "Gates",
    currentUnitPrice: 85.0,
    oemUnitPrice: 58.0,
    quantity: 600,
    currentLeadTimeDays: 18,
    oemLeadTimeDays: 12,
    confidence: 0.93,
  },
];

export const monthlyTrend = [
  { month: "May", spend: 320000, potentialSavings: 82000 },
  { month: "Haz", spend: 315000, potentialSavings: 78500 },
  { month: "Tem", spend: 345000, potentialSavings: 88400 },
  { month: "Ağu", spend: 290000, potentialSavings: 71200 },
  { month: "Eyl", spend: 380000, potentialSavings: 99500 },
  { month: "Eki", spend: 410000, potentialSavings: 108000 },
  { month: "Kas", spend: 395000, potentialSavings: 102000 },
  { month: "Ara", spend: 430000, potentialSavings: 115000 },
  { month: "Oca", spend: 375000, potentialSavings: 96000 },
  { month: "Şub", spend: 450000, potentialSavings: 122000 },
  { month: "Mar", spend: 485000, potentialSavings: 135000 },
  { month: "Nis", spend: 512000, potentialSavings: 148000 },
];

export const feedbackSeed: FeedbackItem[] = [
  {
    id: "FB-1",
    author: "Ahmet T.",
    role: "Endirekt Satın Alma Uzmanı",
    priority: "Hata",
    note: "SEW-Eurodrive redüktörlerindeki OEM eşleşmesinde kargo/gümrük bedelleri net görünmüyor. Lead-time doğru ama taşıma maliyeti hesaplamaya dahil mi?",
    status: "Planlandı",
  },
  {
    id: "FB-2",
    author: "Zeynep M.",
    role: "Lojistik Analisti",
    priority: "İyileştirme",
    note: "Manisa OSB'deki depo için SAP (MM Modülü) entegrasyonu testi başarılı. Barkod okuyucuyla sayım yapıldığında veriler 2 saniyede panele düştü. Üretim bandı duruş riskimiz Siemens motor sürücülerinde azaldı.",
    status: "Yeni",
  },
  {
    id: "FB-3",
    author: "Bülent K.",
    role: "Kategori Yöneticisi",
    priority: "Öneri",
    note: "Q3 bütçe planlaması için SKF rulmanlarındaki yıllık %35 tasarruf raporunu üst yönetime sunduk. Algoritmanın 'Güven Skoru' %90 altı olan parçalar için ayrı bir onay hiyerarşisi (Müdür onayı) ekleyebilir miyiz?",
    status: "Tamamlandı",
  },
];

export const revisionLog = [
  {
    version: "v0.3",
    title: "Tek tıkla karşılaştırma butonu eklendi",
    impact: "Kullanıcı testlerinde karar süresi ortalama %18 kısaldı.",
  },
  {
    version: "v0.4",
    title: "Özet tasarruf kartları sadeleştirildi",
    impact: "Yönetim sunumlarında veri okunabilirliği belirgin şekilde arttı.",
  },
  {
    version: "v0.5",
    title: "Excel/PDF dışa aktarma aksiyonları bağlandı",
    impact: "Rapor paylaşımı için manuel adım ihtiyacı azaldı.",
  },
];

export const competitorRows = [
  {
    criterion: "OEM Eşleştirme",
    smartSource: "Otomatik algoritma",
    manual: "Manuel araştırma",
    verdict: "Avantaj",
  },
  {
    criterion: "Hız",
    smartSource: "Saniyeler",
    manual: "Haftalar",
    verdict: "Avantaj",
  },
  {
    criterion: "Görselleştirme",
    smartSource: "Etkileşimli dashboard",
    manual: "Excel tabloları",
    verdict: "Avantaj",
  },
  {
    criterion: "ERP Entegrasyonu",
    smartSource: "SAP/ERP uyumlu yol haritası",
    manual: "Yok",
    verdict: "Avantaj",
  },
  {
    criterion: "İlk Kurulum Maliyeti",
    smartSource: "Orta (SaaS lisans)",
    manual: "Düşük",
    verdict: "Risk",
  },
  {
    criterion: "OEM Veri Tabanı Kapsamı",
    smartSource: "Genişleme aşamasında",
    manual: "-",
    verdict: "Risk",
  },
];

export const financeRows = [
  { label: "Backend geliştirme", monthly: 15000, yearly: 180000, type: "Gider" },
  { label: "Frontend lisans ve geliştirme", monthly: 8000, yearly: 96000, type: "Gider" },
  { label: "Bulut altyapısı", monthly: 5000, yearly: 60000, type: "Gider" },
  { label: "Satış ve pazarlama", monthly: 10000, yearly: 120000, type: "Gider" },
  { label: "Abonelik geliri", monthly: 300000, yearly: 3600000, type: "Gelir" },
  { label: "Başarı komisyonu", monthly: 10000, yearly: 120000, type: "Gelir" },
];

export const pilotMetrics = [
  { label: "Pilot firma", value: "2" },
  { label: "NPS", value: "+46" },
  { label: "Ortalama kullanım süresi", value: "17 dk" },
  { label: "Döngü başı tasarruf", value: "%27" },
];

export const barcodeScans = [
  { id: "B-001", timestamp: "10:42:15", partCode: "6205-2Z/C3", name: "Sabit Bilyalı Rulman", oem: "SKF", savingsAmount: 15600, savingsPct: 0.351, status: "Eşleşti" },
  { id: "B-002", timestamp: "10:38:22", partCode: "IME18-08BPSZC0K", name: "Endüktif Yaklaşım Sensörü", oem: "SICK", savingsAmount: 11475, savingsPct: 0.321, status: "Eşleşti" },
  { id: "B-003", timestamp: "10:15:05", partCode: "10C-Microglass", name: "Hidrolik Filtre Elemanı", oem: "Parker Hannifin", savingsAmount: 18400, savingsPct: 0.338, status: "Eşleşti" },
  { id: "B-004", timestamp: "09:55:30", partCode: "Bilinmeyen Parça", name: "Tanımsız", oem: "-", savingsAmount: 0, savingsPct: 0, status: "OEM Bulunamadı" },
  { id: "B-005", timestamp: "09:41:12", partCode: "LC1D09M7", name: "TeSys D Kontaktör", oem: "Schneider Electric", savingsAmount: 26350, savingsPct: 0.304, status: "Eşleşti" },
];

export const rfidEvents = [
  {
    id: "TR-901",
    plate: "34 ABC 123",
    type: "Giriş",
    timestamp: "Bugün, 11:20",
    supplier: "Doğu Marmara Rulman A.Ş.",
    payload: [
      { partCode: "6205-2Z/C3", name: "Sabit Bilyalı Rulman", quantity: 1200 },
      { partCode: "HSR25A1SS", name: "Lineer Kızak Arabası", quantity: 240 }
    ]
  },
  {
    id: "TR-902",
    plate: "41 XYZ 789",
    type: "Giriş",
    timestamp: "Bugün, 09:15",
    supplier: "Ege Elektrik Toptan",
    payload: [
      { partCode: "6SL3210-5BB17", name: "SINAMICS V20 Sürücü", quantity: 50 },
      { partCode: "LC1D09M7", name: "TeSys D Kontaktör", quantity: 1500 }
    ]
  },
  {
    id: "TR-903",
    plate: "35 DEF 456",
    type: "Çıkış",
    timestamp: "Dün, 16:40",
    supplier: "Tesis İçi Transfer (Gebze -> Manisa)",
    payload: [
      { partCode: "VUVS-L25-M52", name: "Solenoid Valf", quantity: 80 }
    ]
  },
  {
    id: "TR-904",
    plate: "34 KL 890",
    type: "Giriş",
    timestamp: "Dün, 14:10",
    supplier: "İleri Otomasyon A.Ş.",
    payload: [
      { partCode: "1756-EN2T", name: "EtherNet/IP Modülü", quantity: 45 },
      { partCode: "ACS380-040S", name: "Makine Sürücüsü", quantity: 110 }
    ]
  }
];

export type Opportunity = PartRecord & {
  currentTotal: number;
  oemTotal: number;
  savingsAmount: number;
  savingsPct: number;
  markupPct: number;
  leadTimeGain: number;
  score: number;
};

export function toOpportunity(part: PartRecord): Opportunity {
  const currentTotal = part.currentUnitPrice * part.quantity;
  const oemTotal = part.oemUnitPrice * part.quantity;
  const savingsAmount = currentTotal - oemTotal;
  const savingsPct = savingsAmount / currentTotal;
  const markupPct = (part.currentUnitPrice - part.oemUnitPrice) / part.oemUnitPrice;
  const leadTimeGain = part.currentLeadTimeDays - part.oemLeadTimeDays;
  const score = savingsAmount * 0.6 + part.confidence * 10000 * 0.3 + leadTimeGain * 500 * 0.1;

  return {
    ...part,
    currentTotal,
    oemTotal,
    savingsAmount,
    savingsPct,
    markupPct,
    leadTimeGain,
    score,
  };
}

export function aggregateOpportunities(opportunities: Opportunity[]) {
  const totals = opportunities.reduce(
    (acc, item) => {
      acc.currentSpend += item.currentTotal;
      acc.oemSpend += item.oemTotal;
      acc.savings += item.savingsAmount;
      acc.leadTimeGain += item.leadTimeGain;
      acc.markup += item.markupPct;
      return acc;
    },
    { currentSpend: 0, oemSpend: 0, savings: 0, leadTimeGain: 0, markup: 0 },
  );

  const count = opportunities.length || 1;

  return {
    totalSpend: totals.currentSpend,
    totalOemSpend: totals.oemSpend,
    potentialSavings: totals.savings,
    savingsRate: totals.savings / (totals.currentSpend || 1),
    avgMarkup: totals.markup / count,
    avgLeadTimeGain: totals.leadTimeGain / count,
  };
}

export function formatCurrency(value: number, currency: "EUR" | "TRY" = "EUR") {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number) {
  return `${(value * 100).toFixed(1)}%`;
}
