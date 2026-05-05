'use client'

import { useTranslations } from 'next-intl'

export default function HardSkill() {
  const t = useTranslations('HardSkills')

  const categories = [
    {
      key: 'frontend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skillKeys: [
        { name: 'HTML & CSS', id: 'html_css' },
        { name: 'JavaScript & TypeScript', id: 'js_ts' },
        { name: 'React.js / Next.js', id: 'react_next' },
        { name: 'Tailwind CSS', id: 'tailwind' },
      ],
    },
    {
      key: 'backend',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skillKeys: [
        { name: 'PHP & Laravel', id: 'php_laravel' },
        { name: 'Node.js', id: 'nodejs' },
        { name: 'MySQL Database', id: 'mysql' },
        { name: 'RESTful API Design', id: 'restapi' },
      ],
    },
    {
      key: 'tools',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skillKeys: [
        { name: 'Git & GitHub', id: 'git' },
        { name: 'Docker', id: 'docker' },
        { name: 'Linux Server (VPS)', id: 'linux' },
      ],
    },
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent w-fit">
          {t('title')}
        </h1>
        <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.key}
            className="group relative overflow-hidden rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-md"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6">
                {cat.icon}
              </div>
              <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {t(`categories.${cat.key}.title`)}
              </h3>

              <div className="space-y-6">
                {cat.skillKeys.map((skill) => (
                  <SkillItem key={skill.id} name={skill.name} description={t(`categories.${cat.key}.skills.${skill.id}`)} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SkillItem({ name, description }: { name: string; description: string }) {
  return (
    <div className="border-l-2 border-indigo-500/30 pl-4 py-0.5">
      <h4 className="font-semibold text-slate-800 dark:text-slate-200 text-sm mb-1">{name}</h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}
