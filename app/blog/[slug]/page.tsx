'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface BlogPost {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}

// Dummy data untuk halaman statis
const postDetails: Record<string, BlogPost> = {
  'vulkan-vs-opengl-hp-flagship-lebih-mulus-api-jadul': {
    title: 'Vulkan vs OpenGL: Kenapa HP Spek Dewa Malah Lebih Mulus Pakai API "Jadul"?',
    date: '04 Mei 2026',
    category: 'Edukasi Teknologi & Gaming',
    readTime: '6 min read',
    content: `
      <div class="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        <p>Di atas kertas, Vulkan adalah teknologi grafis masa depan yang jauh lebih ringan. Namun praktiknya, *smartphone* dengan prosesor kelas atas justru seringkali terasa lebih stabil dan bebas <i>stutter</i> saat menggunakan OpenGL. Mari kita bedah alasan teknis di balik anomali ini.</p>
        
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Vulkan: Si "Solo Backpacker" yang Cepat tapi Berisiko</h2>
        <p>Vulkan adalah API modern yang didesain untuk membagi tugas <i>rendering</i> ke semua inti prosesor (CPU) secara bersamaan tanpa campur tangan <i>driver</i> otomatis. Ibarat liburan mandiri, semuanya harus diatur sendiri oleh pembuat game. Keuntungannya memang ringan, tapi ada risikonya:</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Sangat berisiko terjadi <i>stuttering</i> atau patah-patah jika instruksi kodenya tidak pas dengan arsitektur GPU bawaan HP.</li>
          <li>Menuntut optimalisasi manual yang sangat teliti dari pihak developer game.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">OpenGL: Si "Tour Guide" dengan Beban Berat</h2>
        <p>Kebalikan dari Vulkan, OpenGL adalah API klasik yang bekerja layaknya <i>tour guide</i>. <i>Driver</i> sistem secara otomatis akan merapikan antrean tugas, mengatur memori, hingga menebak efek visual (<i>shader caching</i>) sebelum ditampilkan. Kekurangannya?</p>
        <ul class="list-disc pl-6 space-y-2">
          <li>Hanya bisa berjalan di satu jalur (<i>single-thread</i>), sehingga semua tugas menumpuk di satu inti CPU.</li>
          <li>Menghasilkan <i>API Overhead</i> (beban sistem) yang sangat berat bagi HP kelas bawah.</li>
        </ul>

        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Kenapa HP Flagship Cocok Pakai OpenGL?</h2>
        <p>Di sinilah letak rahasianya. <i>Smartphone</i> kelas atas dibekali dengan inti prosesor utama (<i>Prime Core</i>) yang tenaganya sangat brutal. Inti utama ini ibarat binaragawan yang disuruh memikul beban berat OpenGL sendirian.</p>
        <p>Karena tenaganya jauh lebih besar dari beban yang dipikul, HP mampu menelan mentah-mentah <i>overhead</i> tersebut tanpa mengalami <i>bottleneck</i> sedikit pun. Hasil akhirnya? Kamu memanen semua keuntungan dari sistem otomatis OpenGL (gambar yang rapi dan konsisten) tanpa merasakan beban sistemnya.</p>

        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Kesimpulan</h2>
        <p>Jika kamu menggunakan <i>smartphone</i> dengan spesifikasi tinggi dan sering mengalami <i>stutter lag</i> saat menggunakan mode Performance (Vulkan), jangan ragu untuk beralih ke mode Compatibility (OpenGL). Mesin HP kamu sudah cukup kuat untuk mengurus beban OpenGL dan menyajikan pengalaman bermain yang jauh lebih mulus.</p>
      </div>
    `,
  },
}

export default function BlogPostDetail() {
  const params = useParams()
  const slug = params.slug as string

  const post = postDetails[slug]

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Artikel Tidak Ditemukan</h1>
        <Link href="/blog" className="text-indigo-500 hover:underline">
          Kembali ke Blog
        </Link>
      </div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-6xl mx-auto pb-20 space-y-10">
      {/* Tombol Kembali */}
      <Link
        href="/blog"
        className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors group bg-white/50 dark:bg-slate-900/50 px-4 py-2 rounded-sm border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-sm"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
        Kembali ke Daftar Artikel
      </Link>

      <div className="bg-white dark:bg-[#09090B] rounded-sm border border-slate-200 dark:border-slate-800 p-8 md:p-12 shadow-sm">
        {/* Header Artikel */}
        <div className="space-y-6 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-wider text-slate-500">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-500/20">
              <Tag className="w-3.5 h-3.5" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">{post.title}</h1>

          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-slate-100 dark:border-slate-800 bg-indigo-500 flex items-center justify-center text-xs text-white font-bold shadow-sm">
                RM
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Riki Muhamad Fadilah</p>
                <p className="text-xs text-slate-500">Full-Stack Developer</p>
              </div>
            </div>

            <button className="p-2 rounded-sm border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Konten Artikel */}
        <div className="mt-8" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </motion.div>
  )
}
