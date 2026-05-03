export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        {/* Animated logo mark */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-500 to-ocean-500 flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-white text-sm font-display font-bold leading-none">IP</span>
        </div>
        {/* Progress bar */}
        <div className="w-32 h-1 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full w-1/2 bg-gradient-to-r from-forest-400 to-ocean-400 rounded-full animate-[slideProgress_1.2s_ease-in-out_infinite]" />
        </div>
        <p className="text-xs text-gray-400 font-body">載入中…</p>
      </div>
    </div>
  );
}
