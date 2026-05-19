"use client";

import { useMemo, useState } from "react";
import { formatCurrency, formatPercent, roiPresets } from "@/lib/smartsource-data";
import { Calculator, CircleDollarSign, Gauge, TimerReset } from "lucide-react";

type PresetId = (typeof roiPresets)[number]["id"];

export default function RoiCalculatorView() {
  const [selectedPresetId, setSelectedPresetId] = useState<PresetId>(roiPresets[0].id);
  const [annualSpend, setAnnualSpend] = useState<number>(roiPresets[0].annualSpend);
  const [expectedSavingRate, setExpectedSavingRate] = useState<number>(
    roiPresets[0].expectedSavingRate,
  );
  const [cyclesPerYear, setCyclesPerYear] = useState<number>(roiPresets[0].cyclesPerYear);
  const [onboardingCost, setOnboardingCost] = useState<number>(roiPresets[0].onboardingCost);
  const [commissionRate, setCommissionRate] = useState(6);
  const [monthlyLicense, setMonthlyLicense] = useState(18000);

  const annualSaving = annualSpend * expectedSavingRate;
  const perCycleSaving = cyclesPerYear > 0 ? annualSaving / cyclesPerYear : 0;
  const annualLicenseCost = monthlyLicense * 12;
  const annualCommissionCost = annualSaving * (commissionRate / 100);
  const annualPlatformCost = annualLicenseCost + annualCommissionCost + onboardingCost;
  const annualNetBenefit = annualSaving - annualPlatformCost;
  const monthlyNetBenefit = annualNetBenefit / 12;
  const roiRate = annualPlatformCost > 0 ? annualNetBenefit / annualPlatformCost : 0;
  const paybackMonths = annualSaving > 0 ? annualPlatformCost / (annualSaving / 12) : 0;

  const applyPreset = (presetId: PresetId) => {
    const preset = roiPresets.find((item) => item.id === presetId);
    if (!preset) return;
    setSelectedPresetId(preset.id);
    setAnnualSpend(preset.annualSpend);
    setExpectedSavingRate(preset.expectedSavingRate);
    setCyclesPerYear(preset.cyclesPerYear);
    setOnboardingCost(preset.onboardingCost);
  };

  return (
    <div className="space-y-6 pb-10">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-100">
            <Calculator className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">ROI Hesaplayıcı</h2>
            <p className="text-sm text-slate-500 mt-1">
              Yıllık harcama ve tasarruf varsayımlarına göre net getiri, geri ödeme süresi ve
              yatırım verimliliğinizi anında hesaplayın.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {roiPresets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => applyPreset(preset.id)}
              className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                selectedPresetId === preset.id
                  ? "bg-emerald-600 text-white border-emerald-600"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-[1fr_420px] gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-base font-bold text-slate-900 mb-4">Varsayımlar</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">Yıllık endirekt satın alma harcaması (TL)</span>
              <input
                type="number"
                min={0}
                value={annualSpend}
                onChange={(e) => setAnnualSpend(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">Beklenen tasarruf oranı</span>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={5}
                  max={45}
                  step={1}
                  value={Math.round(expectedSavingRate * 100)}
                  onChange={(e) => setExpectedSavingRate(Math.max(0.01, Number(e.target.value) / 100))}
                  className="flex-1 accent-emerald-600"
                />
                <span className="w-16 text-right text-sm font-bold text-emerald-700">
                  %{Math.round(expectedSavingRate * 100)}
                </span>
              </div>
            </label>

            <label className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">Yıllık satın alma döngü sayısı</span>
              <input
                type="number"
                min={1}
                value={cyclesPerYear}
                onChange={(e) => setCyclesPerYear(Math.max(1, Number(e.target.value) || 1))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">İlk kurulum / onboarding (TL)</span>
              <input
                type="number"
                min={0}
                value={onboardingCost}
                onChange={(e) => setOnboardingCost(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">Aylık lisans bedeli (TL)</span>
              <input
                type="number"
                min={0}
                value={monthlyLicense}
                onChange={(e) => setMonthlyLicense(Math.max(0, Number(e.target.value) || 0))}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              />
            </label>

            <label className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">Başarı komisyon oranı (%)</span>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={12}
                  step={0.5}
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="flex-1 accent-emerald-600"
                />
                <span className="w-16 text-right text-sm font-bold text-emerald-700">
                  %{commissionRate}
                </span>
              </div>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-slate-700">
              <CircleDollarSign className="h-4 w-4" />
              <p className="text-sm font-semibold">Döngü başı tasarruf</p>
            </div>
            <p className="text-2xl font-bold text-emerald-700">{formatCurrency(perCycleSaving, "TRY")}</p>
            <p className="text-xs text-slate-500 mt-1">Yıllık toplam: {formatCurrency(annualSaving, "TRY")}</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-slate-700">
              <TimerReset className="h-4 w-4" />
              <p className="text-sm font-semibold">Geri dönüş süresi</p>
            </div>
            <p className="text-2xl font-bold text-slate-900">{paybackMonths.toFixed(1)} ay</p>
            <p className="text-xs text-slate-500 mt-1">Platform maliyeti: {formatCurrency(annualPlatformCost, "TRY")}</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-2 mb-2 text-slate-700">
              <Gauge className="h-4 w-4" />
              <p className="text-sm font-semibold">Net ROI</p>
            </div>
            <p className={`text-2xl font-bold ${roiRate >= 0 ? "text-emerald-700" : "text-rose-700"}`}>
              {formatPercent(roiRate)}
            </p>
            <p className="text-xs text-slate-500 mt-1">Aylık net etki: {formatCurrency(monthlyNetBenefit, "TRY")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}