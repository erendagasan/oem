"use client";

import {
  aggregateOpportunities,
  feedbackSeed,
  financeRows,
  partRecords,
  toOpportunity,
  userRoles,
} from "@/lib/smartsource-data";
import { createContext, useContext, useMemo, useState } from "react";

type RevenueModel = "abonelik" | "komisyon" | "hibrit";

type DemoContextType = {
  selectedRole: (typeof userRoles)[number];
  setSelectedRole: (value: (typeof userRoles)[number]) => void;
  company: string;
  setCompany: (value: string) => void;
  uploadedFileName: string | null;
  setUploadedFileName: (value: string | null) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  selectedPlant: string;
  setSelectedPlant: (value: string) => void;
  search: string;
  setSearch: (value: string) => void;
  approvedIds: string[];
  toggleApproval: (id: string) => void;
  feedbackList: typeof feedbackSeed;
  addFeedback: (note: string) => void;
  revenueModel: RevenueModel;
  setRevenueModel: (value: RevenueModel) => void;
  licenseCount: number;
  setLicenseCount: (value: number) => void;
  licenseFee: number;
  setLicenseFee: (value: number) => void;
  commissionRate: number;
  setCommissionRate: (value: number) => void;
  avgSaving: number;
  setAvgSaving: (value: number) => void;
  allOpportunities: ReturnType<typeof toOpportunity>[];
  filteredOpportunities: ReturnType<typeof toOpportunity>[];
  categories: string[];
  plants: string[];
  stats: ReturnType<typeof aggregateOpportunities>;
  subscriptionRevenue: number;
  commissionRevenue: number;
  monthlyExpense: number;
  monthlyRevenue: number;
  monthlyProfit: number;
  approvalRate: number;
  resetDemo: () => void;
};

const DemoContext = createContext<DemoContextType | null>(null);

export function DemoProvider({ children }: { children: React.ReactNode }) {
  const [selectedRole, setSelectedRole] = useState<(typeof userRoles)[number]>(userRoles[0]);
  const [company, setCompany] = useState("Atlas Üretim A.Ş.");
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [selectedPlant, setSelectedPlant] = useState("Tümü");
  const [search, setSearch] = useState("");
  const [approvedIds, setApprovedIds] = useState<string[]>([]);
  const [feedbackList, setFeedbackList] = useState(feedbackSeed);
  const [revenueModel, setRevenueModel] = useState<RevenueModel>("hibrit");
  const [licenseCount, setLicenseCount] = useState(10);
  const [licenseFee, setLicenseFee] = useState(30000);
  const [commissionRate, setCommissionRate] = useState(0.05);
  const [avgSaving, setAvgSaving] = useState(200000);

  const allOpportunities = useMemo(
    () => partRecords.map(toOpportunity).sort((a, b) => b.score - a.score),
    [],
  );

  const filteredOpportunities = useMemo(() => {
    return allOpportunities.filter((item) => {
      const byCategory = selectedCategory === "Tümü" || item.category === selectedCategory;
      const byPlant = selectedPlant === "Tümü" || item.plant === selectedPlant;
      const query = search.toLowerCase();
      const bySearch =
        !query ||
        item.partCode.toLowerCase().includes(query) ||
        item.barcode.toLowerCase().includes(query) ||
        item.name.toLowerCase().includes(query);
      return byCategory && byPlant && bySearch;
    });
  }, [allOpportunities, search, selectedCategory, selectedPlant]);

  const stats = useMemo(() => aggregateOpportunities(filteredOpportunities), [filteredOpportunities]);
  const categories = Array.from(new Set(partRecords.map((item) => item.category)));
  const plants = Array.from(new Set(partRecords.map((item) => item.plant)));

  const subscriptionRevenue = licenseCount * licenseFee;
  const commissionRevenue = licenseCount * avgSaving * commissionRate;
  const monthlyExpense = financeRows
    .filter((row) => row.type === "Gider")
    .reduce((sum, row) => sum + row.monthly, 0);
  const monthlyRevenue =
    revenueModel === "hibrit"
      ? subscriptionRevenue + commissionRevenue
      : revenueModel === "abonelik"
        ? subscriptionRevenue
        : commissionRevenue;
  const monthlyProfit = monthlyRevenue - monthlyExpense;
  const approvalRate = filteredOpportunities.length
    ? approvedIds.length / filteredOpportunities.length
    : 0;

  const toggleApproval = (id: string) => {
    setApprovedIds((prev) =>
      prev.includes(id) ? prev.filter((currentId) => currentId !== id) : [...prev, id],
    );
  };

  const addFeedback = (note: string) => {
    const clean = note.trim();
    if (!clean) {
      return;
    }

    setFeedbackList((prev) => [
      {
        id: `FB-${prev.length + 1}`,
        author: "Demo Kullanıcısı",
        role: selectedRole,
        priority: "İyileştirme",
        note: clean,
        status: "Yeni",
      },
      ...prev,
    ]);
  };

  const resetDemo = () => {
    setSelectedRole(userRoles[0]);
    setCompany("Atlas Üretim A.Ş.");
    setUploadedFileName(null);
    setSelectedCategory("Tümü");
    setSelectedPlant("Tümü");
    setSearch("");
    setApprovedIds([]);
    setFeedbackList(feedbackSeed);
    setRevenueModel("hibrit");
    setLicenseCount(10);
    setLicenseFee(30000);
    setCommissionRate(0.05);
    setAvgSaving(200000);
  };

  return (
    <DemoContext.Provider
      value={{
        selectedRole,
        setSelectedRole,
        company,
        setCompany,
        uploadedFileName,
        setUploadedFileName,
        selectedCategory,
        setSelectedCategory,
        selectedPlant,
        setSelectedPlant,
        search,
        setSearch,
        approvedIds,
        toggleApproval,
        feedbackList,
        addFeedback,
        revenueModel,
        setRevenueModel,
        licenseCount,
        setLicenseCount,
        licenseFee,
        setLicenseFee,
        commissionRate,
        setCommissionRate,
        avgSaving,
        setAvgSaving,
        allOpportunities,
        filteredOpportunities,
        categories,
        plants,
        stats,
        subscriptionRevenue,
        commissionRevenue,
        monthlyExpense,
        monthlyRevenue,
        monthlyProfit,
        approvalRate,
        resetDemo,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo, DemoProvider içinde kullanılmalıdır.");
  }
  return context;
}
