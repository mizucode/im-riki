export default function SoftSkill() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent w-fit">
          Soft Skill
        </h1>
        <p className="text-muted-foreground text-lg">Gambaran kemampuan interpersonal dan manajerial yang saya miliki.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Soft Skill 1: Komunikasi & Tim */}
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-indigo-950 dark:text-indigo-50">Komunikasi & Tim</h3>
            
            <div className="space-y-6">
              <SkillItem name="Kerja Sama Tim" description="Terbiasa bekerja lintas tim untuk mencapai target proyek bersama." />
              <SkillItem name="Komunikasi Jelas" description="Menyampaikan konsep teknis dengan bahasa yang mudah dipahami oleh semua pihak." />
              <SkillItem name="Empati" description="Mendengarkan dan terbuka terhadap masukan dari rekan kerja maupun klien." />
            </div>
          </div>
        </div>

        {/* Soft Skill 2: Manajemen Diri */}
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-indigo-950 dark:text-indigo-50">Manajemen Diri</h3>
            
            <div className="space-y-6">
              <SkillItem name="Manajemen Waktu" description="Mampu mengatur prioritas tugas dengan baik agar memenuhi tenggat waktu (deadline)." />
              <SkillItem name="Pemecahan Masalah" description="Menganalisis inti masalah untuk menemukan solusi yang logis dan efisien." />
              <SkillItem name="Adaptasi Cepat" description="Dapat mempelajari teknologi baru dengan cepat sesuai dengan kebutuhan industri." />
            </div>
          </div>
        </div>

        {/* Soft Skill 3: Kepemimpinan */}
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-indigo-950 dark:text-indigo-50">Kepemimpinan</h3>
            
            <div className="space-y-6">
              <SkillItem name="Inisiatif & Proaktif" description="Aktif memberikan gagasan atau inovasi sebelum diminta untuk meningkatkan kualitas sistem." />
              <SkillItem name="Pengambilan Keputusan" description="Berani dan tepat mengambil keputusan teknis di situasi kritis." />
              <SkillItem name="Mentoring" description="Berbagi pengetahuan teknis dan membimbing anggota tim lainnya." />
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
