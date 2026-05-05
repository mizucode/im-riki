import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getLocale, getTranslations } from "next-intl/server";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: {
      template: "%s | Riki Muhamad",
      default: t("defaultTitle"),
    },
    description: t("description"),
  };
}

import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { HeaderTitle } from "@/components/header-title";
import { Toaster } from "sonner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${fontInter.variable} font-sans h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col bg-[#F8FAFC] dark:bg-[#09090B] selection:bg-indigo-500/30 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Toaster position="top-right" richColors />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Modern Background Blur & Gradient */}
          <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-indigo-100 via-white to-white dark:from-indigo-900/20 dark:via-[#09090B] dark:to-[#09090B] opacity-70"></div>
          
          <NextIntlClientProvider messages={messages}>
            <TooltipProvider>
              <SidebarProvider>
                <AppSidebar />
                <SidebarInset className="bg-transparent h-screen flex flex-col overflow-hidden">
                  <header className="flex h-16 shrink-0 items-center gap-2 px-6 backdrop-blur-md bg-white/80 dark:bg-[#09090B]/80 z-50 border-b border-indigo-500/10 shadow-sm relative">
                    <SidebarTrigger className="-ml-1 hover:bg-white/50 dark:hover:bg-black/50 rounded-sm p-2 transition-colors" />
                    <HeaderTitle />
                    <div className="flex items-center gap-2 ml-auto">
                      <LanguageToggle />
                      <ThemeToggle />
                    </div>
                  </header>
                  <main className="flex-1 p-4 md:p-8 overflow-y-auto overflow-x-hidden relative">
                    {children}
                  </main>
                </SidebarInset>
              </SidebarProvider>
            </TooltipProvider>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
