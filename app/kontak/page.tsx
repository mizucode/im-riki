'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa6'
import { useState } from 'react'
import { toast } from 'sonner'

export default function Kontak() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast.success('Pesan Berhasil Terkirim!', {
      description: 'Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.'
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'riki.muhamad@example.com',
      href: 'mailto:riki.muhamad@example.com'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Telepon / WhatsApp',
      value: '+62 812-3456-7890',
      href: 'https://wa.me/6281234567890'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Lokasi',
      value: 'Bandung, Jawa Barat, Indonesia',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaInstagram className="w-5 h-5" />, href: 'https://instagram.com', label: 'Instagram' },
    { icon: <Globe className="w-5 h-5" />, href: '#', label: 'Website' }
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information & Socials */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] transition-all hover:border-indigo-500/50 group"
              >
                <div className="w-12 h-12 rounded-sm bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">{info.label}</p>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="p-8 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Temukan Saya di Media Sosial</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-sm border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-indigo-500 hover:border-indigo-500 hover:text-white transition-all shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-8 md:p-10 rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] space-y-6 relative overflow-hidden"
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

            <div className="space-y-2 relative z-10">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Pesan</label>
              <textarea
                required
                rows={6}
                placeholder="Tuliskan pesan Anda di sini..."
                className="w-full px-4 py-3 rounded-sm border border-slate-200 dark:border-slate-800 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-sm resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative z-10 w-full sm:w-auto px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-sm transition-all flex items-center justify-center gap-2 active:scale-95 shadow-lg shadow-indigo-500/20 group"
            >
              Kirim Pesan
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  )
}
