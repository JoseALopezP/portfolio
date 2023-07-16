import './globals.css'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { NavBar } from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'José López',
  description: 'Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
