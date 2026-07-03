import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}
      >
        <h2 className="section-title" style={{ justifyContent: 'center' }}>Get In Touch</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
          I'm currently open to internship opportunities and collaborations.
          Feel free to reach out, I'll get back to you as soon as I can.
        </p>
        <a href="https://mail.google.com/mail/?view=cm&to=jessicajohn07@gmail.com" target="_blank" rel="noreferrer" style={{
          display: 'inline-block', padding: '0.85rem 2rem',
          background: 'var(--purple)', color: '#fff',
          borderRadius: '8px', fontWeight: 600, fontSize: '1rem',
          marginBottom: '2rem'
        }}>
          Say Hello ✉️
        </a>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
          <a href="https://github.com/jessicajohn23" target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>GitHub</a>
          <a href="https://linkedin.com/in/jessicajohn07" target="_blank" rel="noreferrer" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>LinkedIn</a>
        </div>
      </motion.div>
    </section>
  )
}