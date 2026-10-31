import { forwardRef } from 'react'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'

// Router links with the "screen power-on" page transition switched on (View Transitions API;
// the animation lives in index.css). Browsers without support simply change page.
export const Link = forwardRef(function Link(props, ref) {
  return <RouterLink ref={ref} viewTransition {...props} />
})

export const NavLink = forwardRef(function NavLink(props, ref) {
  return <RouterNavLink ref={ref} viewTransition {...props} />
})
