'use client'

import { motion } from 'framer-motion'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1 className="text-6xl md:text-8xl font-black text-indigo-600 dark:text-indigo-400 tracking-tight">
          404
        </h1>
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
            Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
          </p>
        </div>

        <div className="pt-4">
          <Link 
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-sm transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            Kembali ke Dasbor
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
