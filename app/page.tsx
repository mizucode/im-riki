'use client'

import { motion, Variants } from 'framer-motion'
import { Calendar, ChevronRight, Server } from 'lucide-react'
import Image from 'next/image'
import { HiOutlineCode, HiOutlineColorSwatch, HiOutlineExternalLink, HiOutlineLightningBolt } from 'react-icons/hi'
import { SiFramer, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Home() {
  return (
    <motion.div variants={container} initial="hidden" animate="show" className="space-y-12 max-w-6xl mx-auto pb-10">
      {/* Hero Intro Section */}
      <motion.div
        variants={item}
        className="rounded-sm border border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-[#09090B]/70 backdrop-blur-xl p-8 md:p-14 overflow-hidden relative group"
      >
        {/* Animated Background Element */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] group-hover:bg-indigo-500/20 transition-colors duration-700"></div>

        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }} className="shrink-0">
            <div className="w-32 h-40 md:w-44 md:h-56 rounded-sm border-[4px] md:border-[6px] border-white dark:border-slate-900 overflow-hidden bg-slate-100 shadow-2xl">
              <Image
                src="https://github.com/shadcn.png"
                alt="Profile"
                width={192}
                height={240}
                priority
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center rounded-sm bg-emerald-50 dark:bg-emerald-500/10 px-4 py-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400 mb-6 border border-emerald-100 dark:border-emerald-500/20 shadow-sm"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-400 mr-2.5 animate-pulse"></span>
              Tersedia untuk Proyek Baru
            </motion.div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4 max-w-4xl leading-tight">
              Halo, Saya <br className="block sm:hidden" /><span className="text-indigo-600 dark:text-indigo-400">Riki Muhamad Fadilah</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-600 dark:text-slate-400 mb-6 max-w-2xl">Full-Stack Web Developer</p>
            <p className="text-base md:text-lg text-justify text-slate-500 dark:text-slate-300 max-w-4xl leading-relaxed mb-8">
              Full-Stack Web Developer yang berdedikasi dengan rekam jejak kuat dalam membangun aplikasi web berskala besar yang efisien. Menggabungkan keahlian
              front-end dan back-end terdepan melalui implementasi ekosistem JavaScript (React, Next.js, Node.js) dan PHP (Native & Laravel) untuk menciptakan
              solusi yang mulus dari antarmuka pengguna hingga logika server. Berpengalaman penuh dalam siklus pengembangan perangkat lunak (SDLC), dari
              perancangan arsitektur database hingga peluncuran platform SaaS, sistem manajemen kampus, dan proyek skala nasional.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold rounded-sm transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 active:scale-95">
                Mulai Kolaborasi
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              <button className="w-full sm:w-auto flex cursor-pointer items-center justify-center px-8 py-3.5 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold rounded-sm border border-slate-200 dark:border-slate-800 transition-all active:scale-95">
                Lihat CV
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Dashboard Stats Section (Gaya Admin) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: 'Proyek Selesai', value: '50+', icon: <SiFramer className="w-5 h-5" />, color: 'text-indigo-500' },
          { label: 'Server Managed', value: '12', icon: <Server className="w-5 h-5" />, color: 'text-emerald-500' },
          { label: 'Tahun Pengalaman', value: '5+', icon: <Calendar className="w-5 h-5" />, color: 'text-blue-500' },
          { label: 'Client Terpuaskan', value: '100%', icon: <HiOutlineLightningBolt className="w-5 h-5" />, color: 'text-amber-500' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            variants={item}
            className="p-6 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] shadow-sm relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className={`absolute top-0 right-0 p-3 opacity-10 group-hover:scale-125 transition-transform duration-500 ${stat.color}`}>{stat.icon}</div>
            <p className="text-sm font-bold text-slate-500 dark:text-slate-500 uppercase tracking-wider mb-1">{stat.label}</p>
            <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white">{stat.value}</h3>
            <div className={`h-1 w-12 mt-4 rounded-full ${stat.color.replace('text-', 'bg-')}`}></div>
          </motion.div>
        ))}
      </div>

      {/* Keahlian Utama */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {
            title: 'Web Development',
            desc: 'Membangun aplikasi web modern yang cepat dan responsif.',
            icon: <HiOutlineCode className="w-6 h-6" />,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
          },
          {
            title: 'UI/UX Design',
            desc: 'Merancang antarmuka pixel-perfect yang intuitif.',
            icon: <HiOutlineColorSwatch className="w-6 h-6" />,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
          },
          {
            title: 'Performance',
            desc: 'Optimasi kecepatan dan SEO untuk hasil maksimal.',
            icon: <HiOutlineLightningBolt className="w-6 h-6" />,
            color: 'text-amber-500',
            bg: 'bg-amber-500/10',
          },
        ].map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            className="rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] p-8 group transition-all hover:-translate-y-1 duration-300"
          >
            <div className={`w-14 h-14 ${skill.bg} ${skill.color} rounded-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{skill.title}</h3>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed">{skill.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Featured Projects Section */}
      <motion.div variants={item} className="space-y-10">
        <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">Proyek Unggulan</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">Implementasi sistem berskala besar dan arsitektur modern.</p>
          </div>
          <button className="text-sm font-bold text-indigo-500 hover:text-indigo-600 transition-colors px-4 py-2 bg-indigo-500/5 rounded-sm">
            Lihat Semua Proyek
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {[
            {
              title: 'Sistem Manajemen Kampus Nasional',
              category: 'Enterprise SaaS',
              desc: 'Platform ERP pendidikan terintegrasi yang melayani ribuan mahasiswa dan staf administrasi dengan fitur manajemen data real-time.',
              longDesc:
                'Proyek ini melibatkan pengembangan arsitektur microservices untuk menangani beban trafik tinggi saat registrasi mahasiswa baru. Menggunakan caching layer yang agresif dan optimasi database PostgreSQL.',
              tech: ['Next.js', 'PostgreSQL', 'Docker', 'Redis'],
              status: 'Stable',
              image: <Server className="w-16 h-16 opacity-20" />,
            },
            {
              title: 'E-Commerce Skala Besar',
              category: 'High-Traffic Web App',
              desc: 'Optimasi performa dan skalabilitas untuk marketplace dengan ribuan transaksi harian menggunakan arsitektur serverless.',
              longDesc:
                'Fokus utama pada optimasi Core Web Vitals dan integrasi gateway pembayaran yang aman. Berhasil menurunkan latensi server hingga 30% melalui tuning Nginx dan load balancing.',
              tech: ['React', 'Node.js', 'Nginx', 'Laravel'],
              status: 'Production',
              image: <HiOutlineLightningBolt className="w-16 h-16 opacity-20" />,
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-sm overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] flex flex-col hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="aspect-video bg-slate-50 dark:bg-slate-900/50 relative flex items-center justify-center overflow-hidden border-b border-slate-100 dark:border-slate-900">
                <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-transparent transition-colors duration-500"></div>
                {project.image}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-widest rounded-sm shadow-sm">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold mb-3 group-hover:text-indigo-500 transition-colors leading-tight">{project.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed line-clamp-2">{project.desc}</p>

                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-900">
                  <button className="flex items-center text-xs font-bold text-slate-900 dark:text-white hover:text-indigo-500 transition-colors">
                    Lihat Detail <ChevronRight className="ml-1 w-4 h-4" />
                  </button>
                  <div className="flex gap-4">
                    <button
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-sm transition-colors text-slate-400 hover:text-indigo-500"
                      title="Source Code"
                    >
                      <HiOutlineCode className="w-4 h-4" />
                    </button>
                    <button
                      className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-sm transition-colors text-slate-400 hover:text-indigo-500"
                      title="Demo Live"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Interactive Tech Marquee */}
      <motion.div variants={item} className="pt-12 border-t border-slate-200 dark:border-slate-800 overflow-hidden relative">
        <p className="text-center text-[10px] font-bold text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em] mb-10">Teknologi & Infrastruktur Utama</p>

        <div className="relative flex overflow-x-hidden w-full max-w-full">
          <motion.div
            className="flex gap-12 md:gap-24 items-center whitespace-nowrap"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 20,
              ease: 'linear',
              repeat: Infinity,
            }}
            whileHover={{ transition: { duration: 0 } }} // Pause on hover
          >
            {[
              { name: 'Next.js', icon: <SiNextdotjs /> },
              { name: 'React', icon: <SiReact /> },
              { name: 'Tailwind', icon: <SiTailwindcss /> },
              { name: 'TypeScript', icon: <SiTypescript /> },
              { name: 'Framer', icon: <SiFramer /> },
              { name: 'Node.js', icon: <SiNextdotjs /> }, // Reusing icons for variety
              { name: 'Laravel', icon: <HiOutlineCode /> },
              { name: 'PostgreSQL', icon: <Server /> },
              { name: 'Docker', icon: <HiOutlineLightningBolt /> },
              { name: 'Nginx', icon: <HiOutlineCode /> },
            ]
              .concat([
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React', icon: <SiReact /> },
                { name: 'Tailwind', icon: <SiTailwindcss /> },
                { name: 'TypeScript', icon: <SiTypescript /> },
                { name: 'Framer', icon: <SiFramer /> },
                { name: 'Node.js', icon: <SiNextdotjs /> },
                { name: 'Laravel', icon: <HiOutlineCode /> },
                { name: 'PostgreSQL', icon: <Server /> },
                { name: 'Docker', icon: <HiOutlineLightningBolt /> },
                { name: 'Nginx', icon: <HiOutlineCode /> },
              ])
              .map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-slate-300 dark:text-slate-700 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors cursor-default group"
                >
                  <div className="text-3xl md:text-4xl group-hover:scale-110 transition-transform">{tech.icon}</div>
                  <span className="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">{tech.name}</span>
                </div>
              ))}
          </motion.div>

          {/* Fade Edges */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] dark:from-[#09090B] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] dark:from-[#09090B] to-transparent z-10"></div>
        </div>
      </motion.div>
    </motion.div>
  )
}
