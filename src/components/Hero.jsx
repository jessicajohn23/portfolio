import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', paddingTop: '6rem'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p style={{ color: 'var(--purple-light)', fontFamily: 'Fira Code', marginBottom: '1rem' }}>
          Hi, I'm
        </p>
        <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1rem' }}>
          Jessica Mariana John
        </h1>
        <h2 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--muted)', fontWeight: 400, marginBottom: '1.5rem' }}>
          CS Student · Full-Stack Developer · Based in UAE
        </h2>
        <p style={{ maxWidth: '520px', color: 'var(--muted)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
          First-year CS student at BITS Pilani Dubai, building real-world projects with Flask, JavaScript, and SQL.
          Currently focused on full-stack web apps
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" style={{
            padding: '0.75rem 1.5rem', background: 'var(--purple)',
            color: '#fff', borderRadius: '8px', fontWeight: 600, transition: 'background 0.2s'
          }}>
            View Projects
          </a>
          <a href="#contact" style={{
            padding: '0.75rem 1.5rem', border: '1px solid var(--border)',
            color: 'var(--text)', borderRadius: '8px', fontWeight: 600
          }}>
            Get in Touch
          </a>
        </div>
      </motion.div>
    </section>
  )
}