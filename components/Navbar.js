import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>◑</span> Clearwater Dental
        </Link>

        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.navLink}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <Link href="/book" className={styles.bookBtn}>Book Appointment</Link>
      </div>
    </nav>
  )
}
