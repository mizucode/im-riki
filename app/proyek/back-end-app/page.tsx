'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FaExternalLinkAlt, FaLock } from 'react-icons/fa'
import { toast } from 'sonner'

const projects = [
  {
    key: 'SekawanUMKuningan',
    institution: 'UM Kuningan',
    image: '/images/sekawan.png',
    tags: ['PHP', 'MYSQL', 'Bootstrap'],
    link: '#',
  },
  {
    key: 'filegateway',
    institution: 'UM Kuningan',
    image: '/images/file-gateway.png',
    tags: ['PHP', 'S3 Storage', 'Express'],
    link: '#',
  },
  {
    key: 'wa-gateway',
    institution: 'UM Kuningan',
    image: '/images/wa-gateway.png',
    tags: ['Node.js', 'WhatsappWeb.js', 'Puppeteer'],
    link: '#',
  },
]

export default function BackEndApp() {
  const t = useTranslations('BackEndApp')

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link === '#') {
      e.preventDefault()
      toast.error(t('privateProject'), {
        description: 'Access Restricted',
        icon: <FaLock className="w-4 h-4" />,
      })
    }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent w-fit">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl">{t('description')}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative flex flex-col overflow-hidden rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {/* Image Container */}
            <div className="aspect-video relative overflow-hidden border-b border-slate-100 dark:border-slate-900">
              {/* Institution Tag */}
              <div className="absolute top-3 left-3 z-10">
                <span className="px-2 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-slate-200 dark:border-slate-800 text-[10px] font-bold text-slate-900 dark:text-white uppercase tracking-widest rounded-sm shadow-sm">
                  {project.institution}
                </span>
              </div>

              <Image
                src={project.image}
                alt={t(`projects.${project.key}.title`)}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-indigo-500/5 group-hover:bg-transparent transition-colors duration-500" />

              {/* Overlay Links */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/20 backdrop-blur-[2px]">
                <a
                  href={project.link}
                  onClick={(e) => handleLinkClick(e, project.link)}
                  target={project.link === '#' ? undefined : '_blank'}
                  className="p-3 rounded-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <FaExternalLinkAlt className="w-5 h-5 text-slate-900 dark:text-white" />
                </a>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-xl leading-tight tracking-tight mb-2 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {t(`projects.${project.key}.title`)}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">{t(`projects.${project.key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
