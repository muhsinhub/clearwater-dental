import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}><span className={styles.mark}>◑</span> Clearwater Dental</span>
          <p className={styles.tagline}>Gentle, modern dental care in a calm, welcoming space.</p>
        </div>

        <div className={styles.col}>
          <h4>Practice</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/book">Book Appointment</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Visit</h4>
          <p>18 Riverside Way</p>
          <p>Your City, 00000</p>
          <p>(000) 000-0000</p>
        </div>

        <div className={styles.col}>
          <h4>Hours</h4>
          <p>Mon – Fri: 8am – 6pm</p>
          <p>Sat: 9am – 1pm</p>
          <p>Sun: Closed</p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Clearwater Dental. All rights reserved.</p>
      </div>
    </footer>
  )
}
