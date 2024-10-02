import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const NavbarComponent = ({ mode, toggleMode }) => {
  const modes = ['dark', 'greenish-dark', 'bluish-dark'];

  return (
    <Navbar bg={mode} variant={mode === 'dark' ? 'dark' : 'light'} expand="lg" className='navbar-custom'>
      <Container>
        <Navbar.Brand>
          Hassan React App - {mode.charAt(0).toUpperCase() + mode.slice(1)}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Choose Mode" id="basic-nav-dropdown">
              {modes.map((m, i) => (
                <NavDropdown.Item key={i} onClick={() => toggleMode(m)}>
                  {m.charAt(0).toUpperCase() + m.slice(1)}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default NavbarComponent;
