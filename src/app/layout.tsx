import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { suseMono } from "@/lib/fonts";
import { headers } from "next/headers";
import { Menu } from "@/components/custom/common/Menu";
import BinaryArt from "@/components/custom/common/BinaryArt";

export const metadata: Metadata = {
  title: "Jemluz ",
  description: "Software developer since 2018. Specialized in React and Next.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const theme = headersList.get("x-theme") || "light";

  return (
    <html lang="en" className={theme} style={{ colorScheme: theme }}>
      <body
        className={`bg-background text-foreground ${suseMono.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {/* <ThemeToggle/> */}
          <Menu />
          <BinaryArt />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
