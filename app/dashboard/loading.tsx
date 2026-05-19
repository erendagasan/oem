export default function DashboardLoading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-28 rounded-xl bg-white border border-slate-200 p-5">
            <div className="h-3 w-20 bg-slate-200 rounded mb-3" />
            <div className="h-6 w-28 bg-slate-200 rounded" />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
        <div className="h-80 rounded-xl bg-white border border-slate-200 p-6">
          <div className="h-4 w-48 bg-slate-200 rounded mb-6" />
          <div className="space-y-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-8 bg-slate-100 rounded" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-24 rounded-xl bg-white border border-slate-200 p-5">
              <div className="h-3 w-24 bg-slate-200 rounded mb-2" />
              <div className="h-5 w-32 bg-slate-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}