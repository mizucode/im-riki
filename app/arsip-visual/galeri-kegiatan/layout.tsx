import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Galeri Kegiatan',
  description: 'Koleksi momen dan dokumentasi dari berbagai kegiatan teknis, komunitas, dan aktivitas profesional lainnya.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
