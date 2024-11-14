import React, { useEffect, useState } from 'react';
import { Container, Navbar, Nav, NavDropdown, Dropdown, Row , Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import minipaLogo from '../Images/minipaLogo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';
import './Nav.scss';
import MegaMenu from './MegaMenu';



const NewNav = ({ navData }) => {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topNavbar = document.querySelector('.top-navbar');
      const mainNavbar = document.querySelector('.main-navbar');
      if (window.scrollY > 40) {
        topNavbar.classList.add('hidden');
        mainNavbar.classList.add('top');
      } else {
        topNavbar.classList.remove('hidden');
        mainNavbar.classList.remove('top');
        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseEnterMegaMenu = () => {
    setShowMegaMenu(true);
  };

  const handleMouseLeaveMegaMenu = () => {
    setShowMegaMenu(false);
  };

  const handleMouseEnterDropdown = () => {
    setShowDropdown(true);
  };

  const handleMouseLeaveDropdown = () => {
    setShowDropdown(false);
  };


  const financeClick = () => {
    window.location.href = 'http://www.jerp.com.br/boletosminipa.aspx';
  };

  return (
    <div>
      <Navbar className="top-navbar">
        <Container fluid className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Nav.Link className="text-white" href="#">
              <img src="path-to-spanish-flag.png" alt="Spanish" style={{ width: '24px', marginRight: '8px' }} />
            </Nav.Link>
            <Nav.Link className="text-black" href="#"><i className="fa fa-search"></i></Nav.Link>
            <Nav.Link className="text-black" href="#"><i className="fa fa-facebook"></i></Nav.Link>
            <Nav.Link className="text-black" href="#"><i className="fa fa-linkedin"></i></Nav.Link>
            <Nav.Link className="text-black" href="#"><i className="fa fa-youtube"></i></Nav.Link>
            <Nav.Link className="text-black" href="#"><i className="fa fa-instagram"></i></Nav.Link>
          </div>
          <div>
            <span className='text-white'>SP (11) 5078-1850 | SC (47) 3461-9444 | MG (31) 2519-4550</span>
          </div>
        </Container>
      </Navbar>

      <Navbar expand="lg" className="main-navbar">
        
        <Container className="logo"> 
          <div className="pl-3">
            <Navbar.Brand href="#" className="navbar-brand">
              <img src={minipaLogo} alt="Logo" />
            </Navbar.Brand>
          </div>
          </Container>

          <Container>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto m-3">
              <Nav.Item>
                <Nav.Link href="/" className="text-black">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item
                onMouseEnter={handleMouseEnterMegaMenu}
                onMouseLeave={handleMouseLeaveMegaMenu}
                className="position-relative"
              >
                
                <Nav.Link href="#" className="text-black">Produtos</Nav.Link>
                {showMegaMenu && <MegaMenu categories={navData} />}
              </Nav.Item>
              <Nav.Item className="dropdown-custom"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >

<NavDropdown
                  show={showDropdown}
                  title={<span style={{ color: 'black' }}>Serviços</span>}
                  id="basic-nav-dropdown"
                  className="text-black"
                >
                  <NavDropdown.Item as={Link} to="/Servicios/AsistenciaTecnica">
                    Asistencia Técnica
                  </NavDropdown.Item>
                  
                  <NavDropdown.Item onClick={financeClick}>
                    Financeiro
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Servicios/LocacaoInstrumentos">
                    Locacao Instrumentos
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-black" href="/OndeComprar">Onde Comprar</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-black" href="/Catalogo">Catálogos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-black" href="/SobreNos">Sobre Nos</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link className="text-black" href="/Contato">Contato</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
);
}

export default NewNav;