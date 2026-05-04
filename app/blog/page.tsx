'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Newspaper, Search, Tag } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const posts = [
  {
    title: 'Vulkan vs OpenGL: Kenapa Spesifikasi HP Dewa Malah Cocok Pakai API "Jadul"?',
    excerpt:
      'Di atas kertas, Vulkan adalah teknologi grafis masa depan yang jauh lebih ringan. Namun praktiknya, HP dengan prosesor kelas atas justru seringkali terasa lebih stabil dan bebas stutter saat menggunakan OpenGL. Temukan alasan teknis di balik anomali ini!',
    date: '04 Mei 2026',
    category: 'Grafis',
    slug: 'vulkan-vs-opengl-hp-flagship-lebih-mulus-api-jadul',
    color: 'blue',
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20"
          >
            <Newspaper className="w-3.5 h-3.5" />
            Wawasan & Artikel
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Blog & <span className="text-indigo-600 dark:text-indigo-400">Pemikiran</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
          >
            Berbagi pengetahuan seputar pengembangan perangkat lunak, teknologi terbaru, dan tips produktivitas pengembang.
          </motion.p>
        </div>

        {/* Search Bar Placeholder */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Cari artikel..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
          />
        </motion.div>
      </div>

      {/* Featured Post Placeholder (Optional visually) */}

      {/* Blog Grid */}
      {filteredPosts.length > 0 ? (
        <motion.div variants={container} initial="hidden" animate="show" className="grid gap-6 md:grid-cols-2">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative flex flex-col rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] overflow-hidden transition-all hover:border-indigo-500/50"
            >
              {/* Visual Accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-slate-100 dark:bg-slate-800/50 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-700/50">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-indigo-500 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">{post.excerpt}</p>

                <div className="mt-auto pt-6 border-t border-slate-50 dark:border-slate-900 flex items-center justify-between">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 transition-colors group/link"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>

                  <div className="flex -space-x-2">
                    {/* Dummy Author Avatar */}
                    <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">
                      RM
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-20 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-sm"
        >
          <Search className="w-10 h-10 mx-auto text-slate-400 mb-4" />
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Artikel Tidak Ditemukan</h3>
          <p className="text-slate-500">Coba gunakan kata kunci lain untuk pencarianmu.</p>
        </motion.div>
      )}
    </div>
  )
}
