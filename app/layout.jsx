import './globals.css'
import { League_Spartan, Inter } from 'next/font/google'
import { NavBar } from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'José López',
  description: 'Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={leagueSpartan.className}>
      <body className={leagueSpartan.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
