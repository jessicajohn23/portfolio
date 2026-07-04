import { motion } from 'framer-motion'

const skills = {
  'Languages': ['Python', 'JavaScript', 'C', 'SQL', 'HTML', 'CSS'],
  'Frameworks & Libraries': ['Flask', 'SQLAlchemy', 'Socket.IO', 'Chart.js', 'React', 'Framer Motion'],
  'Tools & Platforms': ['Git', 'GitHub', 'VS Code', 'Figma', 'AutoCAD', 'Render'],
  'Databases': ['SQLite', 'MySQL'],
}

export default function Skills() {
  return (
    <section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} style={{
              background: 'var(--bg2)', border: '1px solid var(--border)',
              borderRadius: '12px', padding: '1.5rem'
            }}>
              <h3 style={{ color: 'var(--purple-light)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {category}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    padding: '0.3rem 0.75rem', background: 'var(--purple-dim)',
                    color: 'var(--purple-light)', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 500
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}