import Link from 'next/link';
import { Navbar, Nav, NavItem } from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <h1>Login-Auth</h1>
        </Link>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </NavItem>
          <NavItem>
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
