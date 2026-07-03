import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.8 }}>
              I'm a first-year CS student at BITS Pilani Dubai Campus, building things with Python, Flask, and JavaScript.
              My projects focus on practical full-stack development; from real-time collaborative tools to data-driven dashboards.
            </p>
            <p style={{ color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.8 }}>
              Outside of coding, I play basketball and throwball at the university level; I captained my high school basketball team to 3 tournament wins and nationals.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
              Currently developing  projects on GitHub.
            </p>
          </div>
          <div style={{
            background: 'var(--bg3)', border: '1px solid var(--border)',
            borderRadius: '16px', padding: '2rem'
          }}>
            {[
              ['Degree', 'B.E. Computer Science'],
              ['University', 'BITS Pilani Dubai'],
              ['Year', '2025 – 2029'],
              ['Location', 'Sharjah, UAE'],
              ['Focus', 'Full-Stack'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border)' }}>
                <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{label}</span>
                <span style={{ color: 'var(--text)', fontSize: '0.9rem', fontWeight: 500 }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}