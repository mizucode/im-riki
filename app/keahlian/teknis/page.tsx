export default function HardSkill() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent w-fit">
          Hard Skill
        </h1>
        <p className="text-muted-foreground text-lg">Gambaran kemampuan teknis dan alat yang digunakan dalam pengembangan.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Frontend Card */}
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-indigo-950 dark:text-indigo-50">Frontend Development</h3>
            
            <div className="space-y-6">
              <SkillItem name="React.js / Next.js" description="Mampu membangun antarmuka interaktif dan aplikasi web berkinerja tinggi." />
              <SkillItem name="TypeScript" description="Menerapkan tipe statis untuk kode yang lebih terstruktur dan mudah dikelola." />
              <SkillItem name="Tailwind CSS" description="Menerjemahkan desain ke dalam kode antarmuka yang responsif dengan cepat." />
            </div>
          </div>
        </div>

        {/* Backend Card */}
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-indigo-950 dark:text-indigo-50">Backend Development</h3>
            
            <div className="space-y-6">
              <SkillItem name="Node.js & Express" description="Mengembangkan RESTful API yang aman, efisien, dan siap diskalakan." />
              <SkillItem name="Go (Golang)" description="Membangun layanan backend berkinerja tinggi dengan sistem konkurensi." />
              <SkillItem name="Database & ORM" description="Merancang skema PostgreSQL dan mengelola interaksi data melalui Prisma." />
            </div>
          </div>
        </div>

        {/* Tools Card */}
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-indigo-950 dark:text-indigo-50">Tools & Server</h3>
            
            <div className="space-y-6">
              <SkillItem name="Git & GitHub" description="Berkolaborasi menggunakan version control dan manajemen repositori dengan baik." />
              <SkillItem name="Docker" description="Melakukan kontainerisasi aplikasi untuk lingkungan pengembangan dan produksi." />
              <SkillItem name="Server & Cloud" description="Mampu melakukan konfigurasi VPS Linux dan manajemen infrastruktur dasar." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SkillItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="border-l-2 border-blue-500/30 pl-4 py-0.5">
      <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{name}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
