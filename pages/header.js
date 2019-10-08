import Link from 'next/link';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

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
              Login
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Header;
