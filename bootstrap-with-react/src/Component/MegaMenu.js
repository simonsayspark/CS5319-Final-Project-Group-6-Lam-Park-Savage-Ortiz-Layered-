import React from 'react';
import { Container, Row, Col, Nav, Dropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MegaMenu = ({ categories }) => {
  return (
    <div className="mega-menu" >
      <Dropdown>
      <Container>
        <Row>
          {categories.map((category, index) => (
            <Col key={index} md={3} className="category-column"> 
              <div className="text-uppercase mb-3 subcategory-link">
                <Link to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} className="text-decoration-none text-dark">
                  {category.name}
                </Link>
              </div>
              <Nav className="flex-column subcategory-nav subcategory-link">
                {category.subcategories ? (
                  category.subcategories.map((subcategory, subIndex) => (
                    <Nav.Link key={subIndex} as={Link} to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}/${subcategory.name.toLowerCase().replace(/ /g, '-')}`}>
                      {subcategory.name}
                    </Nav.Link>
                  ))
                ) : (
                  <Nav.Link as={Link} to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`}>
                    {category.name}
                  </Nav.Link>
                )}
              </Nav>
            </Col>
          ))}
        </Row>
      </Container>
      </Dropdown>
    </div>
  );
};

export default MegaMenu;
