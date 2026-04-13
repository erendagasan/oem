"use client";

import { useDemo } from "@/components/demo-provider";
import { UploadCloud, Database, ScanLine, Box, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function UploadView() {
  const { uploadedFileName, setUploadedFileName } = useDemo();
  const [isSimulating, setIsSimulating] = useState(false);
  const [simProgress, setSimProgress] = useState(0);

  const simulateSync = () => {
    setIsSimulating(true);
    setSimProgress(0);
    
    const interval = setInterval(() => {
      setSimProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsSimulating(false), 500);
          setUploadedFileName("ERP_HighRunner_Senkronizasyonu.csv");
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="bg-white p-6 md:p-8 rounded-xl border border-slate-200 shadow-sm text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Veri Yükleme & Entegrasyon</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Tedarik verilerinizi sisteme aktarın. Platform, yüklenen ERP verilerini saniyeler içinde işler, 
          "High-Runner" parçaları belirler ve OEM veri tabanımızla eşleştirir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Manuel Yükleme */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg">
              <UploadCloud className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Dosya Yükleme</h3>
              <p className="text-sm text-slate-500">CSV veya Excel formatında</p>
            </div>
          </div>

          <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center flex-1 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
            <UploadCloud className="h-10 w-10 text-slate-300 group-hover:text-emerald-500 mb-4 transition-colors" />
            <p className="text-sm font-medium text-slate-900 mb-1">
              Satın alma listenizi buraya sürükleyin
            </p>
            <p className="text-xs text-slate-500 mb-6">
              Maksimum dosya boyutu: 50MB
            </p>
            
            <div className="relative">
              <input
                type="file"
                accept=".csv,.xlsx"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={(e) => setUploadedFileName(e.target.files?.[0]?.name ?? null)}
              />
              <button className="bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors">
                Dosya Seç
              </button>
            </div>
          </div>

          {uploadedFileName && !isSimulating && (
            <div className="mt-4 p-3 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800">{uploadedFileName}</span>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full">İŞLENDİ</span>
            </div>
          )}
        </div>

        {/* ERP Entegrasyonu */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-lg">
                <Database className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">ERP Canlı Bağlantı</h3>
                <p className="text-sm text-slate-500">SAP / Oracle / Microsoft</p>
              </div>
            </div>
            <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              AKTİF
            </span>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-500 font-medium">Son Senkronizasyon</span>
                <span className="text-slate-900 font-semibold">Bugün, 09:41</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 font-medium">Aktarılan Satır</span>
                <span className="text-slate-900 font-semibold">12.450 Kayıt</span>
              </div>
            </div>

            {isSimulating ? (
              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medium">
                  <span className="text-slate-600">Veri çekiliyor ve OEM eşleştirmesi yapılıyor...</span>
                  <span className="text-indigo-600">{simProgress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 transition-all duration-150 ease-out"
                    style={{ width: `${simProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <button 
                onClick={simulateSync}
                className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-medium transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
                Manuel Senkronizasyon Başlat
              </button>
            )}
          </div>
        </div>

        {/* Donanım Entegrasyonları (Aşama 2) */}
        <div className="md:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-wider uppercase">
            Aşama 2 Modülü
          </div>
          
          <h3 className="font-bold text-slate-900 mb-6 text-lg">Donanım & Saha Entegrasyonları</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-xl p-4 flex gap-4 items-start bg-slate-50 opacity-75">
              <div className="p-3 bg-white border border-slate-200 rounded-lg shrink-0">
                <ScanLine className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">Barkod Okuyucu</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Ambardaki ürünler okutulduğunda anında OEM eşleştirmesi yapılır ve arayüze aktarılır.
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <AlertCircle className="h-3 w-3" />
                  Donanım Bekleniyor
                </div>
              </div>
            </div>

            <div className="border border-slate-200 rounded-xl p-4 flex gap-4 items-start bg-slate-50 opacity-75">
              <div className="p-3 bg-white border border-slate-200 rounded-lg shrink-0">
                <Box className="h-6 w-6 text-slate-600" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 text-sm">RFID Tır / Kapı Geçişi</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Tesise giren paletler RFID üzerinden taranır ve SAP/ERP sistemine doğrudan işlenir.
                </p>
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-slate-400">
                  <AlertCircle className="h-3 w-3" />
                  Altyapı Kurulum Aşamasında
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
