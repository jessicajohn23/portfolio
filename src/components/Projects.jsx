import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Unsent Letters Web App',
    description: 'A web app for creating and managing unsent letters, with features for saving drafts and scheduling sends. Built with React and Vite.',
    tags: ['React', 'Node.js', 'Vite', 'Supabase', 'Tailwind CSS'],
    github: 'https://github.com/jessicajohn23/catharsis-letters',
    live: 'https://catharsis-letters-phi.vercel.app/',
  },
  {
    title: 'AI Flashcard Generator',
    description: 'AI-powered flashcard generator for creating and studying educational content. Built with Express.',
    tags: ['Vanilla HTML', 'CSS', 'JavaScript', 'Supabase', 'Express', 'Groq'],
    github: 'https://github.com/jessicajohn23/ai-flashcards',
    live: 'https://ai-flashcards-topaz.vercel.app/',
  },
  {
    title: 'Real-time Collaborative Notes',
    description: 'Real-time collaborative notes web app where multiple users can edit the same note simultaneously. Built with Flask, Socket.IO, and SQLite.',
    tags: ['Flask', 'Socket.IO', 'SQLite', 'WebSockets'],
    github: 'https://github.com/jessicajohn23/collab-notes',
    live: 'https://collab-notes.onrender.com',
  },
  {
    title: 'Link Shortener',
    description: 'Full-stack URL shortener with click tracking and an analytics dashboard. Visualizes 7-day traffic and top referrers with Chart.js.',
    tags: ['Flask', 'SQLAlchemy', 'Chart.js', 'REST API'],
    github: 'https://github.com/jessicajohn23/link-shortener',
    live: 'https://link-shortener.onrender.com',
  },
  {
    title: 'Morse Code Encoder',
    description: 'A terminal-based Morse code encoder that converts text to real-time beeps and dot/dash patterns, built in Python.',
    tags: ['Python', 'winsound'],
    github: 'https://github.com/jessicajohn23/morse-code-encoder',
    live: null,
  },
  {
    title: 'Hospital Database Management System',
    description: 'Database management system for hospital records using Python and MySQL. Handles patients, doctors, appointments, and billing.',
    tags: ['Python', 'MySQL', 'SQL'],
    github: 'https://github.com/jessicajohn23/hospital-db-management',
    live: null,
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project, i) => (
            <motion.div key={i}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              style={{
                background: 'var(--bg2)', border: '1px solid var(--border)',
                borderRadius: '16px', padding: '1.75rem',
                display: 'flex', flexDirection: 'column', gap: '1rem'
              }}
            >
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem' }}>{project.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, flex: 1 }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{
                    padding: '0.25rem 0.65rem', background: 'var(--purple-dim)',
                    color: 'var(--purple-light)', borderRadius: '999px', fontSize: '0.75rem'
                  }}>{tag}</span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem' }}>
                <a href={project.github} target="_blank" rel="noreferrer"
                  style={{ color: 'var(--muted)' }}>GitHub →</a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer"
                    style={{ color: 'var(--purple-light)' }}>Live Demo →</a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}