import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/Header.module.scss';

interface HeaderProps {
  current?: string;
}

export default function Header({current=""}: HeaderProps) {
  return (
    <header>
      <Navbar variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">田んぼ</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className={`${current === 'home' ? 'active' : ''}`}>Home</Nav.Link>
              {/* <Nav.Link href="/" className={`${current === 'posts' ? 'active' : ''}`}>Posts</Nav.Link> */}
              <Nav.Link href="/profile" className={`${current === 'profile' ? 'active' : ''}`}>Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
} 