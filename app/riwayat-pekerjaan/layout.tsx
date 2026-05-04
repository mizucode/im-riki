import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Riwayat Pekerjaan',
  description: 'Perjalanan profesional saya dalam membangun solusi digital, dari pengembangan aplikasi hingga manajemen infrastruktur server.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
