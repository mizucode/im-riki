import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hubungi Saya',
  description: 'Punya pertanyaan atau proyek menarik? Hubungi saya untuk diskusi dan kolaborasi.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
