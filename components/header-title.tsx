'use client'

import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations } from 'next-intl'

const keyMap: Record<string, string> = {
  '/': 'dashboard',
  '/proyek': 'allProjects',
  '/proyek/front-end-app': 'projectsFrontEnd',
  '/proyek/back-end-app': 'projectsBackEnd',
  '/proyek/fullstack-app': 'projectsFullstack',
  '/riwayat-pekerjaan': 'workHistory',
  '/pendidikan': 'academicBackground',
  '/pencapaian': 'achievements',
  '/keahlian/teknis': 'technicalSkills',
  '/keahlian/interpersonal': 'interpersonalSkills',
  '/arsip-visual/galeri-kegiatan': 'visualArchive',
  '/blog': 'blog',
  '/kontak': 'contact',
}

export function HeaderTitle() {
  const pathname = usePathname()
  const t = useTranslations('HeaderTitle')
  
  // Find matching title or format from path
  const key = keyMap[pathname]
  const title = key ? t(key as Parameters<typeof t>[0]) : pathname.split('/').filter(Boolean).map(s => 
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
