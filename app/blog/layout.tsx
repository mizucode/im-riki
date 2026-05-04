import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog & Pemikiran',
  description: 'Berbagi pengetahuan seputar pengembangan perangkat lunak, teknologi terbaru, dan tips produktivitas.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
