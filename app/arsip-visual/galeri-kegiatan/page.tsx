'use client'

import { motion } from 'framer-motion'
import { Image as ImageIcon, Calendar, MapPin, Maximize2 } from 'lucide-react'
import Image from 'next/image'

const galleryItems = [
  {
    title: 'Workshop Web Development',
    location: 'Bandung, Indonesia',
    date: '12 Maret 2024',
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=1000&auto=format&fit=crop',
    category: 'Event'
  },
  {
    title: 'Workspace Setup 2024',
    location: 'Home Office',
    date: '05 Februari 2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    category: 'Lifestyle'
  },
  {
    title: 'Tech Meetup Community',
    location: 'Jakarta, Indonesia',
    date: '20 Januari 2024',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1000&auto=format&fit=crop',
    category: 'Event'
  },
  {
    title: 'Hackathon Project Presentation',
    location: 'Online',
    date: '15 Desember 2023',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
    category: 'Coding'
  },
  {
    title: 'Collaboration Session',
    location: 'Co-working Space',
    date: '10 November 2023',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop',
    category: 'Team'
  },
  {
    title: 'New Hardware Unboxing',
    location: 'Home',
    date: '25 Oktober 2023',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=1000&auto=format&fit=crop',
    category: 'Gear'
  }
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

const itemVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
}

export default function GaleriKegiatan() {
  return (
    <div className="max-w-6xl mx-auto space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider border border-indigo-100 dark:border-indigo-500/20"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            Dokumentasi Visual
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            Galeri <span className="text-indigo-600 dark:text-indigo-400">Kegiatan</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl"
          >
            Koleksi momen dan dokumentasi dari berbagai kegiatan teknis, komunitas, dan aktivitas profesional lainnya.
          </motion.p>
        </div>

        {/* Categories Filter Placeholder */}
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          {['Semua', 'Event', 'Coding', 'Gear'].map((cat) => (
            <button 
              key={cat}
              className={`px-4 py-2 rounded-sm text-xs font-bold transition-all border ${cat === 'Semua' ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-slate-200 dark:border-slate-800 hover:border-indigo-500'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryItems.map((item, index) => (
          <motion.div 
            key={index} 
            variants={itemVariant}
            className="group relative flex flex-col rounded-sm border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#09090B] overflow-hidden transition-all hover:border-indigo-500/50"
          >
            {/* Image Container */}
            <div className="aspect-[4/3] relative overflow-hidden bg-slate-100 dark:bg-slate-900">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0" />
              </div>
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider rounded-sm shadow-sm">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-6">
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-500 transition-colors">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {item.location}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
