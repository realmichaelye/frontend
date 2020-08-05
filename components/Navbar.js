import Link from 'next/link';

export default () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">EdTube</a>
        </Link>
        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbar-target">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar-target">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/explore">
                <a className="nav-link">Explore</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/login">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
