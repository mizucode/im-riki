import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Latar Belakang Akademik',
  description: 'Riwayat pendidikan formal yang membentuk landasan pengetahuan teknis dan profesional saya.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
