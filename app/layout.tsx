import type { Metadata } from 'next'
import { Poppins, DM_Sans } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

const dmSans = DM_Sans({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: 'Purpose',
  description: 'Stop searching, start discovering a fulfilling career.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable} ${poppins.className} flex flex-col min-h-screen`}>
        <main className="flex-1">{children}</main>
      </body>
    </html>
  )
}
