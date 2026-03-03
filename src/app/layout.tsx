import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { suseMono } from "@/lib/fonts";
import { headers } from "next/headers";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Turma.dev",
  description: "Cada dev tem uma história - conte a sua para a turma",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const theme = headersList.get("x-theme") || "light";
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={theme} style={{ colorScheme: theme }}>
      <body
        className={`bg-background text-foreground ${suseMono.className} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
          >
            {/* <ThemeToggle/> */}
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
