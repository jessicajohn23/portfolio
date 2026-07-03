import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, width: '100%', zIndex: 100,
      padding: '1rem 2rem',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      transition: 'all 0.3s ease'
    }}>
      <span style={{ fontWeight: 700, color: 'var(--purple-light)', fontFamily: 'Fira Code' }}>
        ~Jessica John~
      </span>
      <div style={{ display: 'flex', gap: '2rem' }}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`}
            style={{ fontSize: '0.9rem', color: 'var(--muted)', transition: 'color 0.2s' }}
            onMouseEnter={e => e.target.style.color = '#fff'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  )
}