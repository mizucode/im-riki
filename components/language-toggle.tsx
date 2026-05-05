'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { motion } from 'framer-motion'

export function LanguageToggle() {
  const router = useRouter()

  const changeLocale = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`
    router.refresh()
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="relative p-2 rounded-sm bg-white/50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-900 transition-colors shadow-sm focus:outline-none overflow-hidden"
          aria-label="Toggle language"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
            <Languages className="h-5 w-5 text-indigo-500 dark:text-indigo-400" />
          </motion.div>
          <span className="sr-only">Toggle language</span>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale('id')}>Indonesia (ID)</DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('en')}>English (EN)</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
