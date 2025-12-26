import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster-component'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RO Service Center - Professional Water Purifier Service & Repair',
  description: 'Professional RO water purifier service, repair and AMC all over India. Expert technicians, guaranteed 4-hour service.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
