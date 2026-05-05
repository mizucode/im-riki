'use client'

import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa6'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const subject = encodeURIComponent(formData.subject)
      const body = encodeURIComponent(`Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)
      
      // Menggunakan Gmail Web Composer Link (lebih stabil daripada mailto)
      const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=riki@umkuningan.ac.id&su=${subject}&body=${body}`
      
      window.open(gmailLink, '_blank')

      setIsSubmitting(false)
      toast.success('Membuka Gmail...', {
        description: 'Silakan klik kirim pada tab Gmail yang baru terbuka.'
      })

    } catch {
      setIsSubmitting(false)
      toast.error('Gagal Membuka Gmail', {
        description: 'Pastikan Anda dapat mengakses Gmail di browser ini.'
      })
    }
  }

  const contactInfo = [
    {
      icon: <FaInstagram className="w-5 h-5" />,
      label: 'Instagram',
      value: '@altermizu',
      href: 'https://instagram.com/altermizu'
    },
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'Riki Muhamad Fadilah',
      href: 'https://www.linkedin.com/in/riki-muhamad-fadilah'
    },
    {
      icon: <FaTiktok className="w-5 h-5" />,
      label: 'TikTok',
      value: '@mizuverse',
      href: 'https://www.tiktok.com/@mizuversee'
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: 'GitHub',
      value: 'Mizucode',
      href: 'https://github.com/mizucode'
    }
  ]



  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Hubungi <span className="text-indigo-600 dark:text-indigo-400">Saya</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
        >
          Punya pertanyaan, proyek menarik, atau sekadar ingin menyapa? Saya selalu terbuka untuk diskusi dan kolaborasi baru.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {/* Contact Information & Socials */}
        <div className="lg:col-span-1">
          <div className="flex flex-col gap-6 h-full">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex-1 flex items-start gap-4 p-6 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] transition-all hover:border-indigo-500/50 group"
              >
                <div className="w-12 h-12 rounded-sm bg-linear-to-br from-blue-400 to-indigo-500 flex items-center justify-center text-white shrink-0 shadow-sm transition-all group-hover:scale-110">
                  {info.icon}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{info.label}</p>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white leading-tight">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="h-full p-8 md:p-10 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] space-y-6 relative overflow-hidden flex flex-col"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Nama Lengkap</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Alamat Email</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2 relative z-10">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Subjek</label>
              <input
                required
                type="text"
                placeholder="Tawaran Proyek / Pertanyaan"
                className="w-full px-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-2 relative z-10 flex-1 flex flex-col">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pesan</label>
              <textarea
                required
                placeholder="Tuliskan pesan Anda di sini..."
                className="flex-1 w-full px-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none min-h-[150px]"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="relative z-10 w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-indigo-500/20 group disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Membuka...' : 'Kirim Email'}
              <Send className={`w-4 h-4 transition-transform ${isSubmitting ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
