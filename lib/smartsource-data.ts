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
    criterion: "Türkçe dil desteği",
    smartSource: "Tam arayüz + yerel ekip",
    manual: "Kısmi / İngilizce ağırlıklı",
    verdict: "Avantaj",
  },
  {
    criterion: "Kurulum kolaylığı",
    smartSource: "Bulut kurulum, 2-4 hafta",
    manual: "Uzun analiz ve manuel adaptasyon",
    verdict: "Avantaj",
  },
  {
    criterion: "RFID entegrasyonu",
    smartSource: "Barkod + RFID hazır modül",
    manual: "Çoğu çözümde harici geliştirme",
    verdict: "Avantaj",
  },
  {
    criterion: "ERP ekosistemi",
    smartSource: "SAP, Ariba, Coupa ve Azure uyumu",
    manual: "Tek sistem odaklı / sınırlı",
    verdict: "Avantaj",
  },
  {
    criterion: "OEM eşleştirme hızı",
    smartSource: "Saniyeler",
    manual: "Saatler - günler",
    verdict: "Avantaj",
  },
  {
    criterion: "KVKK ve iz kayıtları",
    smartSource: "Kurumsal denetim izi + rol bazlı erişim",
    manual: "Dokümantasyon ve süreçe bağlı",
    verdict: "Avantaj",
  },
  {
    criterion: "Canlı destek",
    smartSource: "Site içi bot + satışa yönlendirme",
    manual: "E-posta / çağrı merkezi",
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
    smartSource: "Sektör bazlı genişleme planı",
    manual: "Dağınık kaynaklar",
    verdict: "Nötr",
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

export const packagePlans = [
  {
    id: "trial",
    name: "Ücretsiz (Deneme)",
    targetAudience: "Sistemi tanımak isteyenler",
    subscriptionLabel: "₺0",
    subscriptionMonthly: 0,
    subscriptionYearly: 0,
    successCommissionLabel: "Uygulanmaz",
    successCommissionRate: null,
    usageLimit: "1 defaya mahsus tek operasyon",
    dataUpload: "Sınırlı ön izleme",
    hardwareTracking: "Yok",
    extraModules: "Sadece demo",
  },
  {
    id: "premium",
    name: "Premium",
    targetAudience: "KOBİ'ler ve sınırlı operasyon",
    subscriptionLabel: "₺9.000 / Ay (Yıllık ₺90.000)",
    subscriptionMonthly: 9000,
    subscriptionYearly: 90000,
    successCommissionLabel: "Net tasarruf üzerinden %6",
    successCommissionRate: 0.06,
    usageLimit: "Aylık sınırlı sorgu",
    dataUpload: "Excel listesi ile toplu yükleme",
    hardwareTracking: "Barkod okuma",
    extraModules: "Standart raporlama",
  },
  {
    id: "pro",
    name: "Pro",
    targetAudience: "Büyük lojistik ve üretim",
    subscriptionLabel: "₺18.000 / Ay (Yıllık ₺180.000)",
    subscriptionMonthly: 18000,
    subscriptionYearly: 180000,
    successCommissionLabel: "Net tasarruf üzerinden %6",
    successCommissionRate: 0.06,
    usageLimit: "Sınırsız sorgu",
    dataUpload: "Sınırsız Excel yükleme",
    hardwareTracking: "Barkod + RFID desteği",
    extraModules: "Rota hesaplama ve detaylı Power BI",
  },
  {
    id: "enterprise",
    name: "Kurumsala Özel",
    targetAudience: "Dev ölçekli ve çok uluslu",
    subscriptionLabel: "Özel teklif",
    subscriptionMonthly: null,
    subscriptionYearly: null,
    successCommissionLabel: "Özel oran",
    successCommissionRate: 0.05,
    usageLimit: "Sınırsız operasyon",
    dataUpload: "Otomatik veri akışı",
    hardwareTracking: "Tam RFID ekosistemi",
    extraModules: "Şirkete özel Power BI tasarımı + ERP",
  },
] as const;

export const roiPresets = [
  {
    id: "kobi-premium",
    label: "KOBİ Premium Senaryosu",
    planId: "premium",
    annualSpend: 4800000,
    expectedSavingRate: 0.22,
    cyclesPerYear: 12,
    onboardingCost: 35000,
  },
  {
    id: "lojistik-pro",
    label: "Büyük Lojistik Pro Senaryosu",
    planId: "pro",
    annualSpend: 12000000,
    expectedSavingRate: 0.28,
    cyclesPerYear: 18,
    onboardingCost: 75000,
  },
  {
    id: "global-enterprise",
    label: "Çok Uluslu Kurumsal Senaryo",
    planId: "enterprise",
    annualSpend: 36000000,
    expectedSavingRate: 0.31,
    cyclesPerYear: 24,
    onboardingCost: 180000,
  },
] as const;

export const integrationEcosystem = [
  {
    id: "sap-s4",
    name: "SAP S/4HANA",
    vendor: "SAP",
    layer: "ERP",
    integrationType: "OData + IDoc köprüsü",
    compatibility: "MM, malzeme ana veri, sipariş akışı",
    status: "Canlıya Hazır",
    syncLatency: "~2.4 sn",
    security: "OAuth2, IP allowlist, denetim izi",
    highlights: [
      "Satın alma kaleminden OEM eşleştirme başlatma",
      "Karar sonrası ERP'ye rota güncelleme geri yazımı",
      "Tesis bazlı rol ayrıştırma",
    ],
  },
  {
    id: "sap-ariba",
    name: "SAP Ariba",
    vendor: "SAP",
    layer: "Satın Alma Ağı",
    integrationType: "REST API + toplu dosya akışı",
    compatibility: "Tedarikçi onboarding, teklif karşılaştırma",
    status: "Pilotta",
    syncLatency: "5-15 dk batch",
    security: "SAML SSO, token rotasyonu",
    highlights: [
      "Ariba kataloglarından OEM aday çekimi",
      "Tedarikçi performans puanı ile birleştirme",
      "Talep bazlı maliyet karşılaştırma",
    ],
  },
  {
    id: "coupa",
    name: "Coupa",
    vendor: "Coupa",
    layer: "Satın Alma Ağı",
    integrationType: "REST webhook + CSV fallback",
    compatibility: "PO satırları, harcama analizi, bütçe eşleme",
    status: "Hazırlık",
    syncLatency: "~8 sn webhook",
    security: "API key vault + HMAC doğrulama",
    highlights: [
      "Harcama sınıfına göre otomatik OEM önerisi",
      "Sınırlı bağlantıda CSV ile süreklilik",
      "Onay akışıyla çift yönlü durum takibi",
    ],
  },
  {
    id: "azure-data-lake",
    name: "Azure Data Lake",
    vendor: "Microsoft",
    layer: "Bulut",
    integrationType: "Parquet + Delta paylaşımı",
    compatibility: "Ham satın alma verisi, günlük snapshot",
    status: "Canlıya Hazır",
    syncLatency: "Saatlik / günlük",
    security: "Managed Identity + RBAC",
    highlights: [
      "Yüksek hacimli ERP verisini güvenli arşivleme",
      "Python veri hatları ile kalite kontrol",
      "Power BI için doğrudan model besleme",
    ],
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    vendor: "Microsoft",
    layer: "Bulut",
    integrationType: "Event-driven serverless",
    compatibility: "Barkod/RFID olayları ve kural motoru",
    status: "Pilotta",
    syncLatency: "<1 sn event tetikleme",
    security: "Private endpoint + secret vault",
    highlights: [
      "RFID kapı geçişlerinde anlık eşleştirme",
      "Anomali durumunda satın alma ekibine bildirim",
      "MENA bölgesi için ölçeklenebilir çalışma modeli",
    ],
  },
] as const;

export const caseStudies = [
  {
    id: "cs-atlas",
    company: "Atlas Üretim A.Ş.",
    sector: "Beyaz eşya üretimi",
    pilotDuration: "8 hafta pilot",
    challenge:
      "Endirekt satın almada yüksek dönen rulman ve sensör parçalarında aracı marjları görünür değildi.",
    approach: [
      "Son 12 aylık ERP satın alma kalemleri OEM motoruyla eşleştirildi.",
      "Yüksek tasarruflu kalemler karar merkezinde onay akışına alındı.",
      "Barkod okutma sonuçları dashboard metrikleriyle ilişkilendirildi.",
    ],
    outcomes: [
      { label: "Yıllık tasarruf projeksiyonu", value: "₺4,2M" },
      { label: "Lead-time azalması", value: "-6,8 gün" },
      { label: "Onay çevrim süresi", value: "%41 hızlandı" },
    ],
    nps: 58,
    testimonial:
      "Eskiden haftalık hazırladığımız karşılaştırma raporlarını artık karar toplantısı sırasında canlı oluşturabiliyoruz.",
  },
  {
    id: "cs-nova",
    company: "Nova Lojistik ve Yedek Parça",
    sector: "Çok tesisli lojistik operasyon",
    pilotDuration: "6 hafta pazar testi",
    challenge:
      "Farklı depolardaki tedarik kararları birbirinden kopuktu ve aynı parçaya farklı fiyatlar ödeniyordu.",
    approach: [
      "Depo bazlı filtrelerle ortak OEM havuzu tanımlandı.",
      "RFID tır geçiş verileriyle sevkiyat süreleri karşılaştırıldı.",
      "Pro paket üzerinde rota optimizasyonu ve raporlama kurgulandı.",
    ],
    outcomes: [
      { label: "Döngü başı net tasarruf", value: "%29" },
      { label: "Stokta bekleme süresi", value: "-3,2 gün" },
      { label: "Kullanıcı benimsemesi", value: "%87" },
    ],
    nps: 51,
    testimonial:
      "Lojistik ve satın alma ekipleri aynı ekranı kullandığı için karar çakışmaları belirgin şekilde azaldı.",
  },
  {
    id: "cs-zenith",
    company: "Zenith Endüstri Grubu",
    sector: "Ağır sanayi",
    pilotDuration: "10 hafta kurumsal değerlendirme",
    challenge:
      "MENA açılımı öncesinde tedarik maliyetlerini şeffaflaştırmak ve yerel ekipleri ortak standartta buluşturmak gerekiyordu.",
    approach: [
      "Kurumsal özel modelde çok ülke tesis verileri tek panelde toplandı.",
      "Azure Data Lake üzerinden günlük veri güncelleme boru hattı kuruldu.",
      "KVKK ve siber güvenlik gereksinimleri için denetim logları etkinleştirildi.",
    ],
    outcomes: [
      { label: "12 aylık bütçe etkisi", value: "₺11,6M" },
      { label: "Yönetim raporu hazırlama", value: "%63 hızlandı" },
      { label: "MENA yayılım hazır skoru", value: "%82" },
    ],
    nps: 64,
    testimonial:
      "NPS skorundaki artışla beraber proje, bölgesel dönüşüm programımızın çekirdeğine alındı.",
  },
] as const;

export const roadmapItems = [
  {
    id: "rm-1",
    period: "2026 Q2",
    status: "Tamamlandı",
    region: "Türkiye",
    title: "Pilot ağının 7 tesise genişletilmesi",
    description:
      "Kocaeli, Manisa ve Bursa hatlarında satın alma + lojistik ekiplerinin ortak kullanım modeli tamamlandı.",
    focus: ["OEM eşleştirme", "Karar merkezi", "NPS ölçümü"],
    progress: 100,
  },
  {
    id: "rm-2",
    period: "2026 Q3",
    status: "Devam Ediyor",
    region: "Türkiye",
    title: "RFID kapı geçişi ve rota öneri motoru",
    description:
      "RFID olaylarını anlık işleyip OEM tabanlı tedarik önerilerini sevkiyat planına bağlayan akış geliştiriliyor.",
    focus: ["RFID olay akışı", "Azure Functions", "Gerçek zamanlı bildirim"],
    progress: 62,
  },
  {
    id: "rm-3",
    period: "2026 Q4",
    status: "Planlandı",
    region: "Türkiye",
    title: "Ariba/Coupa çift yönlü entegrasyon",
    description:
      "Kurumsal satın alma ekipleri için teklif sürecinden onaya kadar uçtan uca veri senkronizasyonu hedefleniyor.",
    focus: ["Satın alma orkestrasyonu", "Webhook", "Onay zinciri"],
    progress: 18,
  },
  {
    id: "rm-4",
    period: "2027 Q1",
    status: "Planlandı",
    region: "MENA",
    title: "MENA pazarına bölgesel açılım",
    description:
      "Türkiye'de doğrulanan modelin BAE, Suudi Arabistan ve Katar için yerel mevzuat gereksinimleriyle uyarlanması planlanıyor.",
    focus: ["Çoklu dil", "Regülasyon uyumu", "Bölgesel operasyon"],
    progress: 5,
  },
  {
    id: "rm-5",
    period: "2027 Q2",
    status: "Planlandı",
    region: "MENA",
    title: "Tam RFID ekosistemi ve otonom uyarılar",
    description:
      "Kapı, depo ve transfer noktalarında RFID sinyallerinden stok riski ve satın alma uyarısı üreten kurgu devreye alınacak.",
    focus: ["RFID ağ genişleme", "Risk erken uyarı", "Saha dashboard"],
    progress: 0,
  },
] as const;

export const apiEndpointCatalog = [
  {
    method: "POST",
    path: "/v1/match/oem",
    purpose: "Parça listesi için OEM eşleştirmesi ve güven skoru döndürür.",
    auth: "Bearer Token",
    sla: "P95 < 3 sn",
  },
  {
    method: "POST",
    path: "/v1/analysis/savings",
    purpose: "Mevcut/OEM maliyet karşılaştırması ile tasarruf hesaplar.",
    auth: "Bearer Token",
    sla: "P95 < 2.5 sn",
  },
  {
    method: "POST",
    path: "/v1/decisions/approve",
    purpose: "Onaylanan rota değişikliklerini ERP adaptörüne iletir.",
    auth: "Bearer Token + Role Scope",
    sla: "P95 < 2 sn",
  },
  {
    method: "GET",
    path: "/v1/events/rfid",
    purpose: "RFID kapı geçiş olaylarını filtrelenebilir olarak döndürür.",
    auth: "Bearer Token",
    sla: "P95 < 1 sn",
  },
] as const;

export const apiPortalSections = [
  {
    id: "auth",
    title: "Kimlik doğrulama ve erişim",
    summary:
      "Kurumsal servis hesabı ile erişim token'ı alıp rol bazlı endpoint çağrıları yapabilirsiniz.",
    checklist: [
      "Kurumsal tenant_id ve client_id oluşturun.",
      "IP allowlist ve callback domainlerinizi tanımlayın.",
      "Token yaşam süresi ve yenileme politikasını belirleyin.",
    ],
    snippets: {
      curl: `curl -X POST "https://api.oemhub.local/v1/auth/token" \\
  -H "Content-Type: application/json" \\
  -d '{
    "tenant_id": "atlas-tr",
    "client_id": "procurement-bot",
    "client_secret": "***"
  }'`,
      python: `import requests

resp = requests.post(
    "https://api.oemhub.local/v1/auth/token",
    json={
        "tenant_id": "atlas-tr",
        "client_id": "procurement-bot",
        "client_secret": "***",
    },
    timeout=10,
)
token = resp.json()["access_token"]`,
      sql: `-- Token alimi uygulama katmaninda yapilir.
-- SQL tarafinda islenecek veri ornegi:
SELECT part_code, quantity, current_unit_price
FROM erp_purchase_lines
WHERE purchase_date >= DATEADD(year, -1, GETDATE());`,
    },
  },
  {
    id: "matching",
    title: "OEM eşleştirme akışı",
    summary:
      "ERP'den çıkan parça listesi tek çağrıda eşleştirilir; güven skoru ve maliyet farkı birlikte döner.",
    checklist: [
      "Parça kodu, barkod veya açıklama alanlarından en az birini gönderin.",
      "Plant ve kategori bilgisi gönderirseniz skor doğruluğu artar.",
      "0.85 altı güven skoru için manuel onay akışı önerilir.",
    ],
    snippets: {
      curl: `curl -X POST "https://api.oemhub.local/v1/match/oem" \\
  -H "Authorization: Bearer <TOKEN>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "records": [
      {"part_code": "6205-2Z/C3", "quantity": 2400, "plant": "Kocaeli TOSB"}
    ]
  }'`,
      python: `import requests

payload = {
    "records": [
        {"part_code": "6205-2Z/C3", "quantity": 2400, "plant": "Kocaeli TOSB"}
    ]
}

resp = requests.post(
    "https://api.oemhub.local/v1/match/oem",
    headers={"Authorization": "Bearer <TOKEN>"},
    json=payload,
    timeout=15,
)
print(resp.json())`,
      sql: `-- OEM eslesmesini SQL staging tablosundan tetikleme ornegi
INSERT INTO oemhub_staging (part_code, quantity, plant)
SELECT part_code, quantity, plant
FROM erp_purchase_lines
WHERE is_high_runner = 1;`,
    },
  },
  {
    id: "events",
    title: "RFID ve barkod olayları",
    summary:
      "Depo ve kapı sensörlerinden gelen olaylar API üzerinden çekilip dashboard akışına bağlanabilir.",
    checklist: [
      "RFID okuyucu kimliklerini tesis bazında etiketleyin.",
      "Olayları 5 dakikalık pencereyle batch veya canlı okuyun.",
      "Aykırı olaylar için webhook bildirimlerini aktif edin.",
    ],
    snippets: {
      curl: `curl -X GET "https://api.oemhub.local/v1/events/rfid?plant=Manisa%20OSB&window=24h" \\
  -H "Authorization: Bearer <TOKEN>"`,
      python: `import requests

resp = requests.get(
    "https://api.oemhub.local/v1/events/rfid",
    params={"plant": "Manisa OSB", "window": "24h"},
    headers={"Authorization": "Bearer <TOKEN>"},
    timeout=10,
)
events = resp.json()["items"]`,
      sql: `-- Event akisindan stok riski alarmi uretimi
SELECT event_time, gate_id, plate, part_code, quantity
FROM rfid_events
WHERE event_time >= DATEADD(hour, -24, GETDATE())
  AND quantity > 1000;`,
    },
  },
] as const;

export const knowledgeArticles = [
  {
    id: "kb-1",
    title: "Tedarik zincirinde OEM şeffaflığıyla %20+ tasarruf nasıl yakalanır?",
    category: "Maliyet Optimizasyonu",
    excerpt:
      "Yüksek sirkülasyonlu parçalarda aracı marjlarını görünür kılmak için veri segmentasyonu, skor eşikleri ve karar hiyerarşisi adımları.",
    readMinutes: 7,
    publishedAt: "12 Mayıs 2026",
    tags: ["OEM", "Tasarruf", "Satın Alma"],
  },
  {
    id: "kb-2",
    title: "Akıllı depoya geçiş: Barkoddan RFID'e geçiş yol haritası",
    category: "Depo Operasyonları",
    excerpt:
      "Barkod altyapısını bozmadan RFID'e geçiş için kapı tasarımı, olay modelleme ve veri akışı önerileri.",
    readMinutes: 9,
    publishedAt: "5 Mayıs 2026",
    tags: ["RFID", "Depo", "Otomasyon"],
  },
  {
    id: "kb-3",
    title: "Enflasyonist ortamda dolaylı satın almada bütçe koruma stratejileri",
    category: "Finansal Strateji",
    excerpt:
      "Döviz etkisi altındaki kalemlerde OEM alternatiflerini önceliklendirme ve yıllık bütçe simülasyonu yöntemleri.",
    readMinutes: 6,
    publishedAt: "28 Nisan 2026",
    tags: ["Enflasyon", "Bütçe", "ROI"],
  },
  {
    id: "kb-4",
    title: "SAP MM verisini karar ekranına taşımanın pratik rehberi",
    category: "Teknik Rehber",
    excerpt:
      "SAP MM tablo setlerinden gelen veriyi SQL/Python hattı ile normalize ederek OEM HUB gösterge paneline bağlama adımları.",
    readMinutes: 11,
    publishedAt: "20 Nisan 2026",
    tags: ["SAP", "SQL", "Python"],
  },
  {
    id: "kb-5",
    title: "Kurumsal satın alma ekipleri için NPS odaklı ürün geliştirme",
    category: "Ürün Geliştirme",
    excerpt:
      "Pilot kullanıcı geri bildirimlerini kritik, iyileştirme ve öneri sınıflarında işleyerek yol haritasına dönüştürme yaklaşımı.",
    readMinutes: 8,
    publishedAt: "15 Nisan 2026",
    tags: ["NPS", "Pilot", "UX"],
  },
] as const;

export const faqItems = [
  {
    id: "faq-1",
    category: "KVKK ve Güvenlik",
    question: "KVKK uyumluluğunu nasıl sağlıyorsunuz?",
    answer:
      "Veriler tenant bazında ayrıştırılır, erişimler rol bazlı sınırlandırılır ve tüm kritik işlemler denetim iziyle kayıt altına alınır. Gerektiğinde veri maskeleme ve saklama politikaları müşteriyle birlikte yapılandırılır.",
  },
  {
    id: "faq-2",
    category: "KVKK ve Güvenlik",
    question: "Hangi siber güvenlik standartlarını destekliyorsunuz?",
    answer:
      "OAuth2 tabanlı kimlik doğrulama, IP allowlist, secret vault yönetimi ve düzenli erişim log denetimi standart olarak sunulur. Kurumsal projelerde ISO 27001 süreçlerine uyumlu kontrol listeleri uygulanır.",
  },
  {
    id: "faq-3",
    category: "Teknik Operasyon",
    question: "OEM veri tabanı güncelleme döngüsü nedir?",
    answer:
      "Kritik kategorilerde haftalık, diğer kategorilerde aylık güncelleme yapılır. Yeni OEM kaydı eklendiğinde eşleştirme motoru geriye dönük yeniden değerlendirme çalıştırabilir.",
  },
  {
    id: "faq-4",
    category: "Teknik Operasyon",
    question: "Kurulum için hangi donanımlar gerekli?",
    answer:
      "Web kullanımında ek donanım zorunlu değildir. Barkod senaryosu için standart okuyucular, RFID senaryosu için kapı okuyucuları ve etiket altyapısı önerilir. Bulut bağlantısı için güvenli ağ çıkışı yeterlidir.",
  },
  {
    id: "faq-5",
    category: "Entegrasyon",
    question: "SAP dışındaki sistemlerle de bağlanabilir miyiz?",
    answer:
      "Evet. Ariba ve Coupa için API/CSV hibrit entegrasyon seçenekleri bulunur. Özel ERP sistemleri için SQL tabanlı aktarım şablonları ve Python örnekleri sağlanır.",
  },
  {
    id: "faq-6",
    category: "Destek",
    question: "Canlı destek saatleri ve SLA nasıl işliyor?",
    answer:
      "İş günlerinde 09:00-18:00 saatleri arasında canlı uzman desteği verilir. Kritik üretim kesintisi senaryolarında öncelikli kanal üzerinden hızlandırılmış yanıt SLA'sı uygulanır.",
  },
] as const;

export const supportBotIntents = [
  {
    id: "kvkk",
    label: "KVKK ve güvenlik",
    keywords: ["kvkk", "güvenlik", "iso", "siber", "veri"],
    reply:
      "KVKK ve güvenlik tarafında rol bazlı erişim, denetim izi ve veri maskeleme politikalarıyla ilerliyoruz. İsterseniz güvenlik kontrol listesini adım adım paylaşabilirim.",
  },
  {
    id: "entegrasyon",
    label: "SAP/Ariba/Coupa entegrasyonu",
    keywords: ["sap", "ariba", "coupa", "entegrasyon", "api"],
    reply:
      "SAP, Ariba ve Coupa için hazır entegrasyon senaryolarımız var. Mevcut sisteminizi söylerseniz önerilen bağlantı tipini (API, webhook veya CSV fallback) hemen önerebilirim.",
  },
  {
    id: "rfid",
    label: "RFID ve donanım",
    keywords: ["rfid", "barkod", "okuyucu", "donanım", "kapı"],
    reply:
      "RFID için kapı okuyucu + etiket planı, barkod için standart okuyucu altyapısı yeterli oluyor. İsterseniz tesis büyüklüğünüze göre örnek kurulum planı paylaşayım.",
  },
  {
    id: "roi",
    label: "ROI ve fiyat etkisi",
    keywords: ["roi", "yatırım", "tasarruf", "fiyat", "geri dönüş"],
    reply:
      "ROI hesaplayıcı sekmesinde yıllık harcama ve beklenen tasarruf oranını girerek anlık geri dönüş süresini görebilirsiniz. İsterseniz örnek bir senaryoyu birlikte hesaplayalım.",
  },
  {
    id: "sales-routing",
    label: "Satış ekibine yönlendirme",
    keywords: ["teklif", "satış", "demo", "iletişim", "kurumsal"],
    reply:
      "Talebinizi satış ekibine iletebilirim. Kısa bir keşif görüşmesi için şirket adı, kullanıcı sayısı ve hedeflenen entegrasyonu paylaşmanız yeterli.",
  },
] as const;

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
