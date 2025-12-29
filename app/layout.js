import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/toaster-component.js'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'RO Service Center - Professional Water Purifier Service in Patna',
  description: 'Professional RO water purifier service, repair and AMC in Patna. Expert technicians, guaranteed 4-hour service across all areas of Patna.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <FloatingButtons />
        <Toaster />
      </body>
    </html>
  )
}
