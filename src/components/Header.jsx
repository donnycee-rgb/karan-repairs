import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Link, NavLink } from './Link.jsx'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo.jsx'
import { business } from '../data/site.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/" className="header-logo" aria-label={`${business.name} home`}>
          <Logo light />
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className="nav-link">
              {l.label}
            </NavLink>
          ))}
          <a href={business.phoneLink} className="btn btn-primary nav-cta">
            <Phone size={16} /> Call now
          </a>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </header>
  )
}
