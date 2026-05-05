'use client'

import { useTranslations } from 'next-intl'
import { Users, Clock, Flag } from 'lucide-react'

export default function SoftSkill() {
  const t = useTranslations('SoftSkills')

  const categories = [
    {
      key: 'communication',
      icon: <Users className="w-6 h-6" />,
      skills: ['teamwork', 'clarity', 'empathy'],
    },
    {
      key: 'management',
      icon: <Clock className="w-6 h-6" />,
      skills: ['time', 'problem_solving', 'adaptation'],
    },
    {
      key: 'leadership',
      icon: <Flag className="w-6 h-6" />,
      skills: ['proactive', 'decision', 'mentoring'],
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
              <div className="w-12 h-12 bg-linear-to-br from-blue-400 to-indigo-500 rounded-sm flex items-center justify-center text-white mb-6 shadow-sm">
                {cat.icon}
              </div>
              <h3 className="font-bold text-xl leading-tight tracking-tight mb-6 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                {t(`categories.${cat.key}.title`)}
              </h3>

              <div className="space-y-6">
                {cat.skills.map((skillId) => (
                  <SkillItem
                    key={skillId}
                    name={t(`categories.${cat.key}.skills.${skillId}.name`)}
                    description={t(`categories.${cat.key}.skills.${skillId}.desc`)}
                  />
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
  )
}
