import Link from 'next/link'
import styles from './services.module.css'

const services = [
  { name: 'Routine Check-up', price: 'Free', time: '30 min', desc: 'A thorough, gentle examination with X-rays if needed. We check teeth, gums, and screen for any early issues.' },
  { name: 'Scale & Polish', price: '$60', time: '45 min', desc: 'Professional cleaning to remove plaque and tartar, leaving your teeth fresh, smooth, and healthy.' },
  { name: 'Teeth Whitening', price: '$180', time: '60 min', desc: 'Safe, professional whitening that brightens your smile by several shades in one comfortable session.' },
  { name: 'White Fillings', price: 'from $120', time: '45 min', desc: 'Natural-looking, tooth-coloured fillings that blend seamlessly and restore strength to damaged teeth.' },
  { name: 'Emergency Visit', price: '$90', time: '30 min', desc: 'Same-day appointments for pain, breaks, or lost fillings. We get you out of discomfort fast.' },
  { name: 'Invisible Aligners', price: 'from $2,400', time: 'Consult', desc: 'Discreet, removable aligners that straighten your teeth gradually — no metal braces required.' },
]

export default function Services() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Our services</p>
        <h1>Everything your smile needs</h1>
        <p className={styles.sub}>
          Honest pricing, no surprises. Every treatment is explained clearly before we begin.
        </p>
      </div>

      <div className={styles.grid}>
        {services.map((s) => (
          <div key={s.name} className={styles.card}>
            <div className={styles.cardTop}>
              <h3>{s.name}</h3>
              <span className={styles.price}>{s.price}</span>
            </div>
            <span className={styles.time}>⏱ {s.time}</span>
            <p className={styles.desc}>{s.desc}</p>
            <Link href="/book" className={styles.bookLink}>Book this →</Link>
          </div>
        ))}
      </div>

      <div className={styles.cta}>
        <h2>Not sure what you need?</h2>
        <p>Book a free check-up and we&apos;ll talk you through your options — no pressure.</p>
        <Link href="/book" className={styles.ctaBtn}>Book a Free Check-up</Link>
      </div>
    </div>
  )
}
