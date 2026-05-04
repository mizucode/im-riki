'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react'

const education = [
  {
    degree: 'Sarjana Teknik Informatika (S.Kom)',
    institution: 'Universitas Teknologi Indonesia',
    location: 'Bandung, Indonesia',
    period: '2017 - 2021',
    description: 'Berfokus pada pengembangan perangkat lunak, arsitektur sistem, dan manajemen basis data. Lulus dengan predikat sangat memuaskan.',
    achievements: [
      'IPK: 3.85 / 4.00',
      'Ketua Himpunan Mahasiswa Informatika (2019-2020)',
      'Asisten Laboratorium Pemrograman'
    ],
  },
  {
    degree: 'Rekayasa Perangkat Lunak (RPL)',
    institution: 'SMK Nasional',
    location: 'Bandung, Indonesia',
    period: '2014 - 2017',
    description: 'Mempelajari dasar-dasar algoritma, pemrograman web, dan basis data sejak dini.',
    achievements: [
      'Juara 1 Lomba Kompetensi Siswa (LKS) Bidang Web Design tingkat Kota',
      'Peringkat 3 Besar Paralel'
    ],
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
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function Pendidikan() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Latar Belakang <span className="text-indigo-600 dark:text-indigo-400">Akademik</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl"
        >
          Riwayat pendidikan formal yang membentuk landasan pengetahuan teknis dan profesional saya.
        </motion.p>
      </div>

      {/* Education Cards */}
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="grid gap-8"
      >
        {education.map((edu, index) => (
          <motion.div 
            key={index} 
            variants={item}
            className="group relative overflow-hidden rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] p-8 transition-all hover:border-indigo-500/50"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              {/* Icon Container */}
              <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 bg-indigo-500/10 rounded-sm flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                <GraduationCap className="w-6 h-6 md:w-8 md:h-8" />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                      {edu.degree}
                    </h2>
                    <p className="text-lg font-bold text-slate-600 dark:text-slate-400 flex items-center gap-2 mt-1">
                      <BookOpen className="w-4 h-4 text-slate-400" />
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-sm font-bold border border-indigo-100 dark:border-indigo-500/20">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-slate-400 dark:text-slate-500">
                      <MapPin className="w-3.5 h-3.5" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-4xl">
                  {edu.description}
                </p>

                {/* Achievements */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-900 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2">
                    <Award className="w-3.5 h-3.5" />
                    Pencapaian & Fokus
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                    {edu.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Quote / Footnote */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-center pt-10"
      >
        <p className="text-slate-400 dark:text-slate-600 italic text-sm">
          &quot;Investasi dalam pengetahuan selalu memberikan bunga yang terbaik.&quot; — Benjamin Franklin
        </p>
      </motion.div>
    </div>
  )
}
