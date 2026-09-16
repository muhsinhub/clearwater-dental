import Link from 'next/link'
import styles from './contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h1>We&apos;re here to help</h1>
        <p className={styles.sub}>Questions before booking? Reach out — we&apos;re happy to chat.</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.info}>
          <div className={styles.card}>
            <h2>📍 Visit us</h2>
            <p>18 Riverside Way</p>
            <p>Your City, 00000</p>
          </div>
          <div className={styles.card}>
            <h2>📞 Call us</h2>
            <p>(000) 000-0000</p>
            <p className={styles.note}>Mon–Fri, 8am–6pm</p>
          </div>
          <div className={styles.card}>
            <h2>✉️ Email us</h2>
            <p>hello@clearwaterdental.com</p>
            <p className={styles.note}>We reply within a day</p>
          </div>
          <div className={styles.card}>
            <h2>🕐 Opening hours</h2>
            <div className={styles.hours}>
              <div><span>Mon – Fri</span><span>8am – 6pm</span></div>
              <div><span>Saturday</span><span>9am – 1pm</span></div>
              <div><span>Sunday</span><span>Closed</span></div>
            </div>
          </div>
        </div>

        <div className={styles.side}>
          <div className={styles.map}>
            <span>🗺️</span>
            <p>Embed a Google Map here</p>
            <p className={styles.mapHint}>Google Maps → Share → Embed a map → copy the iframe</p>
          </div>
          <div className={styles.bookCard}>
            <h3>Ready to book?</h3>
            <p>Skip the phone call — book online in under a minute.</p>
            <Link href="/book" className={styles.bookBtn}>Book Appointment</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
