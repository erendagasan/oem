"use client";

import { useState } from "react";
import { useDemo } from "@/components/demo-provider";
import { 
  LayoutDashboard, 
  FileSpreadsheet, 
  CheckSquare, 
  UploadCloud, 
  Bell,
  LogOut,
  Menu,
  X,
  Hexagon
} from "lucide-react";
import DashboardView from "@/components/views/dashboard";
import AnalysisView from "@/components/views/analysis";
import DecisionsView from "@/components/views/decisions";
import UploadView from "@/components/views/upload";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "analysis" | "decisions" | "upload">("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { selectedRole, company, resetDemo } = useDemo();

  const navItems = [
    { id: "dashboard", label: "Gösterge Paneli", icon: LayoutDashboard },
    { id: "analysis", label: "OEM Analizi", icon: FileSpreadsheet },
    { id: "decisions", label: "Karar Merkezi", icon: CheckSquare },
    { id: "upload", label: "Veri Yükleme & Entegrasyon", icon: UploadCloud },
  ] as const;

  const renderView = () => {
    switch (activeTab) {
      case "dashboard": return <DashboardView onNavigate={(tab) => setActiveTab(tab as any)} />;
      case "analysis": return <AnalysisView />;
      case "decisions": return <DecisionsView />;
      case "upload": return <UploadView />;
      default: return <DashboardView onNavigate={(tab) => setActiveTab(tab as any)} />;
    }
  };

  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 flex-col bg-white border-r border-slate-200 z-20 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-slate-200 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 rounded-lg shadow-sm shadow-emerald-200">
              <Hexagon className="h-5 w-5 text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800">
              OEM<span className="text-emerald-600">HUB</span>
            </span>
          </div>
        </div>
        
        <div className="px-4 py-6 flex-1 overflow-y-auto custom-scrollbar">
          <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Ana Menü
          </p>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive 
                      ? "bg-emerald-50 text-emerald-700 shadow-sm border border-emerald-100" 
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 border border-transparent"
                  }`}
                >
                  <Icon className={`h-5 w-5 shrink-0 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-200 shrink-0 bg-white">
          <div className="mb-4 px-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Aktif Şirket</p>
            <p className="text-sm font-bold text-slate-900 truncate">{company}</p>
          </div>
          
          <div className="flex items-center gap-3 px-2 mb-5">
            <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold shrink-0">
              N
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">Nedim K.</p>
              <p className="text-xs font-medium text-slate-500 truncate" title={selectedRole}>{selectedRole}</p>
            </div>
          </div>

          <button 
            onClick={resetDemo}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-xl transition-colors"
          >
            <LogOut className="h-4 w-4" />
            Demoyu Sıfırla
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-700 p-1.5 rounded-lg shadow-sm shadow-emerald-200">
              <Hexagon className="h-5 w-5 text-white" fill="currentColor" strokeWidth={1} />
            </div>
            <span className="text-xl font-black tracking-tight text-slate-800">
              OEM<span className="text-emerald-600">HUB</span>
            </span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -mr-2 text-slate-600 focus:outline-none">
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium border ${
                      isActive 
                        ? "bg-emerald-50 text-emerald-700 border-emerald-100 shadow-sm" 
                        : "text-slate-600 border-slate-100 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isActive ? "text-emerald-600" : "text-slate-400"}`} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <div className="mt-6 pt-6 border-t border-slate-100">
              <button 
                onClick={() => {
                  resetDemo();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-rose-600 bg-rose-50 border border-rose-100 rounded-lg"
              >
                <LogOut className="h-4 w-4" />
                Demoyu Sıfırla
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content Area */}
      {/* min-w-0 is CRITICAL here to prevent flex children (like tables) from overflowing the screen width */}
      <main className="flex-1 flex flex-col h-screen min-w-0 bg-slate-50">
        <header className="hidden md:flex h-16 items-center justify-between px-8 bg-white border-b border-slate-200 shrink-0">
          <h1 className="text-lg font-bold text-slate-800 tracking-tight">
            {navItems.find(i => i.id === activeTab)?.label}
          </h1>
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors rounded-full hover:bg-slate-100 focus:outline-none">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-rose-500 border-2 border-white"></span>
            </button>
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-100 to-emerald-200 border border-emerald-300 flex items-center justify-center text-emerald-800 font-bold text-sm shadow-sm">
              AU
            </div>
          </div>
        </header>

        {/* Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-4 pt-20 md:p-8 md:pt-8 w-full">
          <div className="mx-auto max-w-7xl">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
}
