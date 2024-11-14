import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import minipaLogo from '../Images/minipaLogo.png';
// import certificationImage1 from '../Images/certificationImage1.png'; // Replace with the actual path
// import certificationImage2 from '../Images/certificationImage2.png'; // Replace with the actual path

const FooterComponent = () => {
  return (
    <footer className="main-background text-white py-4">
      <Container>
        <Row className="mb-5">
          <Col md={2}>
            <h5>Produtos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Multímetros</a></li>
              <li><a href="#" className="text-white">Alicates</a></li>
              <li><a href="#" className="text-white">Ferramentas Elétricas</a></li>
              <li><a href="#" className="text-white">Temperatura e Ambiente</a></li>
              <li><a href="#" className="text-white">Kits Educacionais</a></li>
              <li><a href="#" className="text-white">Construção Civil</a></li>
              <li><a href="#" className="text-white">Linha Automotiva</a></li>
              <li><a href="#" className="text-white">Instrumentos de Bancada</a></li>
              <li><a href="#" className="text-white">Osciloscópios</a></li>
              <li><a href="#" className="text-white">Diversos</a></li>
              <li><a href="#" className="text-white">Linha Industrial</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Serviços</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Assistência Técnica</a></li>
              <li><a href="#" className="text-white">Rede de Autorizadas</a></li>
              <li><a href="#" className="text-white">Laboratório de Calibração</a></li>
            </ul>
          </Col>
          <Col md={2}>
            <h5>Links Rápidos</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Onde Comprar</a></li>
              <li><a href="#" className="text-white">Contato</a></li>
              <li><a href="#" className="text-white">Trabalhe Conosco</a></li>
              <li><a href="#" className="text-white">Catálogos</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Newsletter</h5>
            <Form>
              <Form.Group controlId="formNewsletter">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Button type="submit" className='mt-3 bg-red border-transparent border-0'>
                Enviar
              </Button>
            </Form>
            </Col>
            <Col md={3} className="text-center">
            <img src={minipaLogo} alt="Minipa Logo" style={{ height: '90px' }} />
            <p>Tecnologia que cresce na medida certa.</p>
            <div className="d-flex justify-content-center text-center">
              <a href="#" className="text-white mx-2"><i className="fa fa-facebook"></i></a>
              <a href="#" className="text-white mx-2"><i className="fa fa-youtube"></i></a>
              <a href="#" className="text-white mx-2"><i className="fa fa-linkedin"></i></a>
              <a href="#" className="text-white mx-2"><i className="fa fa-instagram"></i></a>
            </div>
            <Row  className="text-center">
            <img alt="Certification 1" className="img-fluid" style={{ height: '40px', marginRight: '10px' }} />
            <img  alt="Certification 2" className="img-fluid" style={{ height: '40px' }} />
            </Row>
          </Col>
        </Row>


        <Row className="text-center m-2 d-flex justify-content-center align-items-center">
            <p>© 2025 - Minipa do Brasil Ltda.</p>
          </Row>
        
      </Container>
    </footer>
  );
};

export default FooterComponent;