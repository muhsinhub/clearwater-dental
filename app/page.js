import Link from 'next/link'
import styles from './page.module.css'

const services = [
  {
    title: 'Routine Check-ups',
    text: 'Gentle, thorough examinations to keep your smile healthy and catch issues early. We take the time to explain everything.',
    emoji: '🦷',
  },
  {
    title: 'Teeth Whitening',
    text: 'Safe, professional whitening that brightens your smile by several shades in a single, comfortable visit.',
    emoji: '✨',
  },
  {
    title: 'Emergency Care',
    text: 'Same-day appointments for pain, breaks, or lost fillings. When something goes wrong, we see you fast.',
    emoji: '🚑',
  },
]

export default function Home() {
  return (
    <div>
      {/* Split-screen hero */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}>Now accepting new patients</p>
          <h1 className={styles.heroTitle}>Dental care that actually feels calm</h1>
          <p className={styles.heroSub}>
            No rushing, no jargon, no judgement — just gentle, modern care from a team
            that listens. Book online in under a minute.
          </p>
          <div className={styles.heroBtns}>
            <Link href="/book" className={styles.btnPrimary}>Book Appointment</Link>
            <Link href="/services" className={styles.btnGhost}>Our Services</Link>
          </div>
          <div className={styles.trustRow}>
            <div><strong>4.9★</strong><span>500+ reviews</span></div>
            <div><strong>15 yrs</strong><span>caring for smiles</span></div>
            <div><strong>Same-day</strong><span>emergencies</span></div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <span>🦷</span>
          <p>Add a bright clinic photo here</p>
        </div>
      </section>

      {/* Zigzag services */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>What we do</p>
            <h2>Care for every kind of smile</h2>
          </div>

          {services.map((service, i) => (
            <div
              key={service.title}
              className={`${styles.zigzag} ${i % 2 === 1 ? styles.reverse : ''}`}
            >
              <div className={styles.zigImage}><span>{service.emoji}</span></div>
              <div className={styles.zigText}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <Link href="/book" className={styles.zigLink}>Book this →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reassurance band */}
      <section className={styles.band}>
        <div className="container">
          <div className={styles.bandInner}>
            <h2>Nervous about the dentist? You&apos;re not alone.</h2>
            <p>
              Many of our patients used to dread dental visits. We built Clearwater to
              change that — calm rooms, honest pricing, and a team that never rushes you.
            </p>
            <Link href="/book" className={styles.btnLight}>Book Your First Visit</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
