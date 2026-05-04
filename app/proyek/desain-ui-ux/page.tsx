export default function DesainUIUX() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent w-fit">
          Desain UI/UX
        </h1>
        <p className="text-muted-foreground text-lg">Kumpulan desain antarmuka dan pengalaman pengguna yang telah saya buat.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="relative">
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-indigo-950 dark:text-indigo-50">Dashboard Admin Design</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Desain antarmuka dashboard admin yang bersih dan modern.</p>
            <div className="flex gap-2">
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">Figma</span>
              <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase">Adobe XD</span>
            </div>
          </div>
        </div>
        {/* Placeholder for more projects */}
      </div>
    </div>
  );
}
