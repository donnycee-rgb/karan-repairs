import { Link } from '../components/Link.jsx'

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <h1>404</h1>
        <h2>This page could not be found</h2>
        <p>The link may be broken or the page may have moved.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </section>
  )
}
