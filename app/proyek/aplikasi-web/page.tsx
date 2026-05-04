export default function AplikasiWeb() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent w-fit">
          Aplikasi Web
        </h1>
        <p className="text-muted-foreground text-lg">Kumpulan proyek aplikasi web yang telah saya kembangkan.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="relative">
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-indigo-950 dark:text-indigo-50">E-Commerce Platform</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Platform belanja online dengan fitur lengkap.</p>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">Next.js</span>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">Tailwind</span>
            </div>
          </div>
        </div>
        {/* Placeholder for more projects */}
      </div>
    </div>
  );
}
