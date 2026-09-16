'use client'
// The "use client" line above is required because this page uses React state
// (useState) and click handlers — those only work in a client component.

import { useState } from 'react'
import Link from 'next/link'
import styles from './book.module.css'

// ── Options shown in step 1 ──
const serviceOptions = [
  { id: 'checkup', name: 'Routine Check-up', duration: '30 min', price: 'Free' },
  { id: 'cleaning', name: 'Scale & Polish', duration: '45 min', price: '$60' },
  { id: 'whitening', name: 'Teeth Whitening', duration: '60 min', price: '$180' },
  { id: 'emergency', name: 'Emergency Visit', duration: '30 min', price: '$90' },
]

// ── Time slots shown in step 2 ──
const timeSlots = ['9:00', '10:00', '11:00', '12:00', '2:00', '3:00', '4:00', '5:00']

export default function Book() {
  // Which step we're on: 1, 2, 3, or 4 (confirmed)
  const [step, setStep] = useState(1)
  // The user's choices as they go
  const [service, setService] = useState(null)
  const [date, setDate] = useState('')
  const [time, setTime] = useState(null)
  const [details, setDetails] = useState({ name: '', email: '', phone: '' })

  // Helper to update the details form
  const updateDetail = (field, value) =>
    setDetails((prev) => ({ ...prev, [field]: value }))

  const chosenService = serviceOptions.find((s) => s.id === service)

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Book your appointment</h1>
        <p>It only takes a minute. No account needed.</p>
      </div>

      {/* Progress bar — hidden once confirmed */}
      {step < 4 && (
        <div className={styles.progress}>
          {[1, 2, 3].map((n) => (
            <div key={n} className={styles.progressStep}>
              <div className={`${styles.dot} ${step >= n ? styles.dotActive : ''}`}>{n}</div>
              <span className={step >= n ? styles.labelActive : ''}>
                {n === 1 ? 'Service' : n === 2 ? 'Date & Time' : 'Your details'}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className={styles.card}>
        {/* ── STEP 1: Choose service ── */}
        {step === 1 && (
          <div>
            <h2 className={styles.stepTitle}>What would you like to book?</h2>
            <div className={styles.serviceGrid}>
              {serviceOptions.map((s) => (
                <button
                  key={s.id}
                  className={`${styles.serviceCard} ${service === s.id ? styles.selected : ''}`}
                  onClick={() => setService(s.id)}
                >
                  <span className={styles.serviceName}>{s.name}</span>
                  <span className={styles.serviceMeta}>{s.duration} · {s.price}</span>
                </button>
              ))}
            </div>
            <div className={styles.actions}>
              <button
                className={styles.nextBtn}
                disabled={!service}
                onClick={() => setStep(2)}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 2: Choose date & time ── */}
        {step === 2 && (
          <div>
            <h2 className={styles.stepTitle}>When works for you?</h2>

            <label className={styles.fieldLabel}>Choose a date</label>
            <input
              type="date"
              className={styles.dateInput}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <label className={styles.fieldLabel}>Choose a time</label>
            <div className={styles.timeGrid}>
              {timeSlots.map((t) => (
                <button
                  key={t}
                  className={`${styles.timeSlot} ${time === t ? styles.selected : ''}`}
                  onClick={() => setTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>

            <div className={styles.actions}>
              <button className={styles.backBtn} onClick={() => setStep(1)}>← Back</button>
              <button
                className={styles.nextBtn}
                disabled={!date || !time}
                onClick={() => setStep(3)}
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: Enter details ── */}
        {step === 3 && (
          <div>
            <h2 className={styles.stepTitle}>Almost done — your details</h2>

            <label className={styles.fieldLabel}>Full name</label>
            <input
              type="text"
              className={styles.textInput}
              value={details.name}
              onChange={(e) => updateDetail('name', e.target.value)}
              placeholder="Jane Smith"
            />

            <label className={styles.fieldLabel}>Email</label>
            <input
              type="email"
              className={styles.textInput}
              value={details.email}
              onChange={(e) => updateDetail('email', e.target.value)}
              placeholder="jane@email.com"
            />

            <label className={styles.fieldLabel}>Phone</label>
            <input
              type="tel"
              className={styles.textInput}
              value={details.phone}
              onChange={(e) => updateDetail('phone', e.target.value)}
              placeholder="(000) 000-0000"
            />

            <div className={styles.actions}>
              <button className={styles.backBtn} onClick={() => setStep(2)}>← Back</button>
              <button
                className={styles.nextBtn}
                disabled={!details.name || !details.email}
                onClick={() => setStep(4)}
              >
                Confirm Booking
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 4: Confirmed! ── */}
        {step === 4 && (
          <div className={styles.confirmed}>
            <div className={styles.checkCircle}>✓</div>
            <h2>You&apos;re booked in!</h2>
            <p className={styles.confirmSub}>
              Thanks {details.name.split(' ')[0]} — we&apos;ll see you soon.
            </p>

            <div className={styles.summary}>
              <div className={styles.summaryRow}>
                <span>Service</span><strong>{chosenService?.name}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Date</span><strong>{date}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Time</span><strong>{time}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Price</span><strong>{chosenService?.price}</strong>
              </div>
            </div>

            <p className={styles.confirmNote}>
              A confirmation has been sent to {details.email}.
            </p>
            <Link href="/" className={styles.homeLink}>Back to home</Link>
          </div>
        )}
      </div>

      {/* Demo note — remove when using for a real client */}
      {step < 4 && (
        <p className={styles.demoNote}>
          This is a demo booking form. For live bookings, connect a service like Calendly or a booking backend.
        </p>
      )}
    </div>
  )
}
