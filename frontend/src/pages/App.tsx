import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="brand">CareerForge AI</div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/auth">Login</Link>
        </nav>
      </header>

      <main className="site-body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </main>
    </div>
  );
}

function HomePage() {
  return (
    <section>
      <h1>CareerForge AI</h1>
      <p>AI-powered resume and career assistant built for modern professionals.</p>
      <p>Launch your first optimized resume and cover letter in minutes.</p>
    </section>
  );
}

function DashboardPage() {
  return (
    <section>
      <h2>Dashboard</h2>
      <p>Quick access to your resume editor, AI optimization, and job insights.</p>
    </section>
  );
}

function AuthPage() {
  return (
    <section>
      <h2>Sign in / Sign up</h2>
      <p>Secure authentication with role-based candidate and employer access.</p>
    </section>
  );
}
