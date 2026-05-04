'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { SearchForm } from '@/components/search-form'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import { 
  ChevronRight, 
  LayoutDashboard, 
  FolderKanban, 
  History, 
  GraduationCap, 
  Trophy, 
  Cpu, 
  Image as ImageIcon, 
  Newspaper, 
  Mail 
} from 'lucide-react'

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Dasbor',
      url: '/',
      icon: LayoutDashboard,
      color: 'bg-blue-500',
    },
    {
      title: 'Proyek',
      url: '/proyek',
      icon: FolderKanban,
      color: 'bg-orange-500',
      items: [
        {
          title: 'Aplikasi Web',
          url: '/proyek/aplikasi-web',
        },
        {
          title: 'Aplikasi Seluler',
          url: '/proyek/aplikasi-seluler',
        },
        {
          title: 'Desain UI/UX',
          url: '/proyek/desain-ui-ux',
        },
      ],
    },
    {
      title: 'Riwayat Pekerjaan',
      url: '/riwayat-pekerjaan',
      icon: History,
      color: 'bg-purple-500',
    },
    {
      title: 'Pendidikan',
      url: '/pendidikan',
      icon: GraduationCap,
      color: 'bg-indigo-500',
    },
    {
      title: 'Pencapaian',
      url: '/pencapaian',
      icon: Trophy,
      color: 'bg-yellow-500',
    },
    {
      title: 'Keahlian',
      url: '/keahlian',
      icon: Cpu,
      color: 'bg-emerald-500',
      items: [
        {
          title: 'Keahlian Teknis',
          url: '/keahlian/teknis',
        },
        {
          title: 'Keahlian Interpersonal',
          url: '/keahlian/interpersonal',
        },
      ],
    },
    {
      title: 'Arsip Visual',
      url: '/arsip-visual',
      icon: ImageIcon,
      color: 'bg-pink-500',
      items: [
        {
          title: 'Galeri Kegiatan',
          url: '/arsip-visual/galeri-kegiatan',
        },
      ],
    },
    {
      title: 'Blog',
      url: '/blog',
      icon: Newspaper,
      color: 'bg-cyan-500',
    },
    {
      title: 'Kontak',
      url: '/kontak',
      icon: Mail,
      color: 'bg-indigo-600',
      variant: 'highlight',
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  return (
    <Sidebar {...props}>
      <SidebarHeader className="gap-4 p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-10 items-center justify-center rounded-sm overflow-hidden border-2 border-indigo-500 shadow-sm shrink-0">
                  <Image src="https://github.com/shadcn.png" alt="Profile" width={40} height={40} className="w-full h-full object-cover rounded-sm" />
                </div>
                <div className="flex flex-col gap-1.5 leading-none ml-1">
                  <span className="font-bold text-[15px] tracking-tight">Riki Muhamad Fadilah</span>
                  <span className="text-[11px] font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-wider">Pengembang Full-Stack</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item, index) =>
              item.items?.length ? (
                <Collapsible key={item.title} defaultOpen={true} className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton 
                        isActive={pathname === item.url || item.items.some((sub) => pathname === sub.url)}
                        className={pathname === item.url || item.items.some((sub) => pathname === sub.url) ? "font-bold" : "font-medium"}
                      >
                        {item.icon && (
                          <div className={`flex aspect-square size-7 items-center justify-center rounded-sm text-white ${item.color}`}>
                            <item.icon className="size-4" />
                          </div>
                        )}
                        <span>{item.title}</span>
                        <ChevronRight className="ml-auto transition-transform duration-300 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild isActive={pathname === subItem.url}>
                              <Link href={subItem.url}>{subItem.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ) : (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    isActive={pathname === item.url}
                    className={item.variant === 'highlight' ? "text-indigo-600 dark:text-indigo-400" : ""}
                  >
                    <Link href={item.url} className={`flex items-center gap-2 ${pathname === item.url ? "font-bold" : "font-medium"}`}>
                      {item.icon && (
                        <div className={`flex aspect-square size-7 items-center justify-center rounded-sm text-white ${item.color}`}>
                          <item.icon className="size-4" />
                        </div>
                      )}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )
            )}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
