import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="app-shell">
      <header className="border-bottom bg-white">
        <nav className="navbar container py-3" aria-label="Main navigation">
          <Link className="navbar-brand d-flex align-items-center gap-2 mb-0" to="/">
            <img className="brand-logo" src="/octofitapp-small.png" alt="" />
            <span>OctoFit Tracker</span>
          </Link>
          <span className="service-label">FITNESS PLATFORM</span>
        </nav>
      </header>
      <Routes>
        <Route
          path="/"
          element={
            <main className="container py-5">
              <section className="welcome-panel py-4 py-md-5">
                <p className="welcome-eyebrow mb-3">MOVEMENT, MADE MEANINGFUL</p>
                <h1 className="welcome-title mb-3">Build a stronger routine.</h1>
                <p className="welcome-copy">
                  Your activity, teams, and progress come together here.
                </p>
              </section>
            </main>
          }
        />
        <Route
          path="*"
          element={
            <main className="container py-5">
              <h1 className="h2">Page not found</h1>
              <Link to="/">Return to OctoFit Tracker</Link>
            </main>
          }
        />
      </Routes>
    </div>
  )
}

export default App
