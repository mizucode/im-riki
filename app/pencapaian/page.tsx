'use client'

import { Calendar, ShieldCheck } from 'lucide-react'
import { useTranslations } from 'next-intl'

const achievementItems = [
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'Januari 2023',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    issuer: 'Dicoding Indonesia',
    date: 'Januari 2023',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },

  {
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    issuer: 'Dicoding Indonesia',
    date: 'Januari 2023',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Intro to HTML',
    issuer: 'MySkill',
    date: 'Januari 2023',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Berpartisipasi Pada Muhammadiyah English Test dengan Skor 574',
    issuer: 'Universitas Muhammadiyah Kuningan',
    date: 'Januari 2025',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Peserta Kampus Mengajar Angkatan 7',
    issuer: 'Kampus Merdeka',
    date: 'Juni 2024',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Peserta Kuliah Kerja Nyata (KKN) Universitas Muhammadiyah Kuningan TA 2023-2024',
    issuer: 'Universitas Muhammadiyah Kuningan',
    date: 'Agustus 2024',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Peserta Seminar Baparekraf Day 2023',
    issuer: 'Kementrian Pariwisata dan Ekonomi Kreatif Republik Indonesia',
    date: 'Maret 2023',
    icon: <ShieldCheck className="w-6 h-6" />,
    gradient: 'from-blue-400 to-indigo-500',
  },
]

export default function Pencapaian() {
  const t = useTranslations('Achievements')

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent w-fit leading-tight">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievementItems.map((item, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <div className="relative">
              <div className={`w-12 h-12 bg-linear-to-br ${item.gradient} rounded-sm flex items-center justify-center text-white mb-6 shadow-sm`}>
                {item.icon}
              </div>
              <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">{item.issuer}</p>
              <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-900">
                <span className="inline-flex items-center text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
