import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WORLD CUP 2026 - 2026 FIFA World Cup Your Ultimate Guide to the Biggest Tournament Ever",
  description: "Get ready for the 2026 FIFA World Cup, hosted by the USA, Canada, and Mexico! This historic tournament will be the first to feature 48 teams, bringing even more excitement and global competition to North American soil. Stay up-to-date with the latest news, schedules, team profiles, stadium information, and fan guides. Join us in celebrating the beautiful game as we count down to the kickoff of this monumental event!",
  keywords: "2026 World Cup, FIFA World Cup, World Cup 2026, Canada Mexico USA, World Cup schedule, World Cup tickets, World Cup stadiums, 2026 FIFA, soccer, football, World Cup news, World Cup teams, World Cup qualifiers"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
         precedence="default"
         crossOrigin="anonymous"
      />
      <script
        src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
        async={true}
        crossOrigin="anonymous"
      ></script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
