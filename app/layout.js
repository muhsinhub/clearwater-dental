import { DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-main',
  display: 'swap',
})

export const metadata = {
  title: 'Clearwater Dental | Gentle, Modern Dental Care',
  description:
    'Clearwater Dental offers gentle, modern dental care in a calm setting. Book your appointment online in under a minute.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
