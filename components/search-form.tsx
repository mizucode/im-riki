"use client"

import { Label } from "@/components/ui/label"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar"
import { SearchIcon } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const searchKeywords: Record<string, string> = {
  'kerja': '/riwayat-pekerjaan',
  'pekerjaan': '/riwayat-pekerjaan',
  'pengalaman': '/riwayat-pekerjaan',
  'karir': '/riwayat-pekerjaan',
  'pendidikan': '/pendidikan',
  'sekolah': '/pendidikan',
  'kampus': '/pendidikan',
  'kuliah': '/pendidikan',
  'proyek': '/proyek/aplikasi-web',
  'portfolio': '/proyek/aplikasi-web',
  'web': '/proyek/aplikasi-web',
  'aplikasi': '/proyek/aplikasi-seluler',
  'keahlian': '/keahlian/teknis',
  'skill': '/keahlian/teknis',
  'teknologi': '/keahlian/teknis',
  'soft': '/keahlian/interpersonal',
  'kontak': '/kontak',
  'hubungi': '/kontak',
  'email': '/kontak',
  'whatsapp': '/kontak',
  'blog': '/blog',
  'artikel': '/blog',
  'galeri': '/arsip-visual/galeri-kegiatan',
  'foto': '/arsip-visual/galeri-kegiatan',
  'pencapaian': '/pencapaian',
  'sertifikat': '/pencapaian',
  'penghargaan': '/pencapaian',
}

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  const [query, setQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    const lowerQuery = query.toLowerCase()
    
    // Cari kecocokan kata kunci
    let foundRoute = ''
    for (const [key, route] of Object.entries(searchKeywords)) {
      if (lowerQuery.includes(key) || key.includes(lowerQuery)) {
        foundRoute = route
        break
      }
    }

    if (foundRoute) {
      router.push(foundRoute)
      setQuery("") // Kosongkan input setelah berhasil pindah
    } else {
      toast.error(`Pencarian Tidak Ditemukan`, {
        description: `Maaf, tidak menemukan halaman untuk "${query}". Coba kata kunci lain seperti: pekerjaan, pendidikan, atau kontak.`
      })
    }
  }

  return (
    <form {...props} onSubmit={handleSearch}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Cari Menu
          </Label>
          <SidebarInput
            id="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari (ex: kerja, proyek)..."
            className="pl-8 bg-white dark:bg-[#09090B] border-indigo-500/20 focus-visible:ring-indigo-500/30"
          />
          <SearchIcon className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none text-indigo-500" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  )
}
