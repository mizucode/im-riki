'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const titleMap: Record<string, string> = {
  '/': 'Dasbor Utama',
  '/proyek': 'Semua Proyek',
  '/proyek/aplikasi-web': 'Proyek / Aplikasi Web',
  '/proyek/aplikasi-seluler': 'Proyek / Aplikasi Seluler',
  '/proyek/desain-ui-ux': 'Proyek / Desain UI/UX',
  '/riwayat-pekerjaan': 'Riwayat Pekerjaan',
  '/pendidikan': 'Latar Belakang Akademik',
  '/pencapaian': 'Pencapaian & Sertifikasi',
  '/keahlian/teknis': 'Keahlian / Teknis',
  '/keahlian/interpersonal': 'Keahlian / Interpersonal',
  '/arsip-visual/galeri-kegiatan': 'Arsip Visual / Galeri Kegiatan',
  '/blog': 'Blog & Artikel',
  '/kontak': 'Hubungi Saya',
}

export function HeaderTitle() {
  const pathname = usePathname()
  
  // Find matching title or format from path
  const title = titleMap[pathname] || pathname.split('/').filter(Boolean).map(s => 
    s.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  ).join(' / ')

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="ml-2 font-bold tracking-tight text-indigo-950 dark:text-indigo-100 text-lg flex-1"
      >
        {title || 'Portfolio Workspace'}
      </motion.div>
    </AnimatePresence>
  )
}
