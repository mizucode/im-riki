'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight, Server, Code2, Globe } from 'lucide-react'

const experiences = [
  {
    title: 'Pengembang Full-Stack (Proyek Nasional)',
    company: 'Sistem Informasi Kampus Nasional',
    location: 'Remote / Jakarta',
    period: '2023 - Sekarang',
    description:
      'Memimpin pengembangan dan pemeliharaan sistem manajemen kampus skala besar. Bertanggung jawab atas arsitektur database, integrasi API, dan optimasi performa server.',
    tech: ['Next.js', 'Laravel', 'PostgreSQL', 'Docker', 'Nginx'],
    icon: <Server className="w-5 h-5" />,
    color: 'indigo',
  },
  {
    title: 'Pengembang Web & Administrator Sistem',
    company: 'SaaS Platform Solution',
    location: 'Bandung, Indonesia',
    period: '2021 - 2023',
    description:
      'Mengembangkan platform SaaS dari nol. Mengelola deployment otomatis menggunakan Docker dan mengkonfigurasi server VPS dengan keamanan tingkat tinggi.',
    tech: ['React', 'Node.js', 'Express', 'VPS', 'Cloudflare'],
    icon: <Code2 className="w-5 h-5" />,
    color: 'purple',
  },
  {
    title: 'Pengembang Web Junior',
    company: 'Software House Lokal',
    location: 'Bandung, Indonesia',
    period: '2019 - 2021',
    description:
      'Membangun berbagai aplikasi web kustom untuk klien UMKM dan instansi lokal. Berfokus pada antarmuka yang responsif dan integrasi database PHP.',
    tech: ['PHP Native', 'MySQL', 'Bootstrap', 'JavaScript'],
    icon: <Globe className="w-5 h-5" />,
    color: 'emerald',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

export default function RiwayatPekerjaan() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Riwayat <span className="text-indigo-600 dark:text-indigo-400">Pekerjaan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl"
        >
          Perjalanan profesional saya dalam membangun solusi digital, dari pengembangan aplikasi hingga manajemen infrastruktur server.
        </motion.p>
      </div>

      {/* Timeline Section */}
      <motion.div variants={container} initial="hidden" animate="show" className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-slate-300 dark:before:via-slate-800 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div key={index} variants={item} className="relative flex items-center justify-end md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon Circle */}
            <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-white dark:bg-slate-900 border-2 border-indigo-500 z-10 absolute left-0 md:left-1/2 md:-ml-5 transition-transform group-hover:scale-110 duration-300">
              <div className="text-indigo-600 dark:text-indigo-400">
                {exp.icon}
              </div>
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] transition-all group-hover:border-indigo-500/50">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <time className="font-bold text-sm text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {exp.period}
                </time>
                <div className="flex items-center text-xs font-medium text-slate-400 dark:text-slate-500 gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {exp.location}
                </div>
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-500 transition-colors">
                {exp.title}
              </h3>
              <p className="text-md font-bold text-slate-600 dark:text-slate-400 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-slate-400" />
                {exp.company}
              </p>
              
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700/50">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="rounded-sm border border-indigo-500/20 bg-indigo-500/5 p-8 text-center"
      >
        <h3 className="text-xl font-bold mb-2">Ingin berkolaborasi dalam proyek berikutnya?</h3>
        <p className="text-slate-500 dark:text-slate-400 mb-6">Saya selalu terbuka untuk tantangan baru dalam pengembangan sistem berskala besar.</p>
        <button className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-sm transition-all active:scale-95 shadow-lg shadow-indigo-500/20">
          Hubungi Saya Sekarang
          <ChevronRight className="ml-2 w-4 h-4" />
        </button>
      </motion.div>
    </div>
  )
}
