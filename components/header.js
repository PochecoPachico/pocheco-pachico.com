import Link from "next/link";
import styles from '../styles/Header.module.scss';

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <Link href={'/'} className="navbar-brand">田んぼ</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link href={'/'} className="nav-link active" aria-current="page">Home</Link>
              <Link href={'/'} className="nav-link">Posts</Link>
              <Link href={'/'} className="nav-link">Profile</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}