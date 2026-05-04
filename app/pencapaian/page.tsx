import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pencapaian & Sertifikasi',
  description: 'Validasi keahlian dan penghargaan yang diakui secara global.',
}

export default function Pencapaian() {

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent w-fit leading-tight">
          Pencapaian & Sertifikasi
        </h1>
        <p className="text-muted-foreground text-lg">Validasi keahlian dan penghargaan yang diakui secara global.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-indigo-950 dark:text-indigo-50">AWS Certified Developer</h3>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Amazon Web Services</p>
            <div className="mt-6 pt-6 border-t border-indigo-500/10">
              <span className="inline-flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Jan 2024
              </span>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-indigo-950 dark:text-indigo-50">Juara 1 Hackathon Nasional</h3>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Kementerian Kominfo</p>
            <div className="mt-6 pt-6 border-t border-indigo-500/10">
              <span className="inline-flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Agu 2023
              </span>
            </div>
          </div>
        </div>

        <div className="group relative overflow-hidden rounded-sm border border-white/40 dark:border-white/10 bg-white/60 dark:bg-black/40 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2">
          <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <svg className="w-24 h-24 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          </div>
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
            </div>
            <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-indigo-950 dark:text-indigo-50">Google Cloud Engineer</h3>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">Google Cloud</p>
            <div className="mt-6 pt-6 border-t border-indigo-500/10">
              <span className="inline-flex items-center text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Okt 2022
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
