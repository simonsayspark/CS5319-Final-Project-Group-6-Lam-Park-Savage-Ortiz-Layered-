import placeholderImage from '../Images/landingPageTest3.jpg';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Carousel, Placeholder, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import '../App.scss';
import NavbarComponent from '../Component/NavbarComponent';
import FooterComponent from '../Component/FooterComponent';
import NewNav from '../Component/NewNav';

export default function LandingPage() {
  const { categoryName, subcategoryName } = useParams();
  const [categoryData, setCategoryData] = useState([]);
  const [navData, setNavData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    fetch(`https://json-server-vercel-tan-rho.vercel.app/categories`)
      .then(response => response.json())
      .then(data => {
        setNavData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (categoryName && navData.length > 0) {
      const formattedCategoryName = categoryName.replace(/-/g, ' ').toLowerCase();
      const category = navData.find(cat => cat.name.toLowerCase() === formattedCategoryName);

      if (category) {
        if (subcategoryName) {
          const formattedSubcategoryName = subcategoryName.replace(/-/g, ' ').toLowerCase();
          const subcategory = category.subcategories.find(subcat => subcat.name.toLowerCase() === formattedSubcategoryName);

          if (subcategory) {
            setCategoryData({ ...category, currentSubcategory: subcategory });
          } else {
            console.error(`Subcategory not found: ${subcategoryName}`);
            setCategoryData(category);
          }
        } else {
          setCategoryData(category);
        }
      } else {
        console.error(`Category not found: ${categoryName}`);
      }
    } else {
      setCategoryData(null);
    }
  }, [categoryName, subcategoryName, navData]);

  useEffect(() => {
    // Fetch data
    fetch(`https://json-server-vercel-tan-rho.vercel.app/categories`) // Trocar link  para Banco de dados
      .then(response => response.json())
      .then(data => setNavData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  
  const getChunkSize = () => {
    if (windowWidth < 360) return 1;
    if (windowWidth < 576) return 2;
    if (windowWidth < 780) return 3;
    if (windowWidth < 1270) return 4;
    return 5;
  };

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunkedData = chunkArray(navData, getChunkSize());


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div>
      <NewNav navData={navData} />

        <Carousel className="justify-content-center mt-5 mb-5 w-100" style={{maxHeight:''}}>
          
            <Carousel.Item className="justify-content-center mt-5 w-100">
                  <Col className="mb-4 mt-5" style={{maxHeight:'800px'}}>
                  <img src="https://placehold.co/700x1000" width={'100%'} alt="" />
                  </Col>
            </Carousel.Item>
            <Carousel.Item className="justify-content-center mt-5 w-100">
                  <Col className="mb-4 mt-5" style={{maxHeight:'800px' , width:'100%'}}>
                  <img src="https://placehold.co/700x1000" width={'100%'} alt="" />
                  </Col>
            </Carousel.Item>
            <Carousel.Item className="justify-content-center mt-5 w-100">
                  <Col className="mb-4 mt-5" style={{maxHeight:'800px' , width:'100%'}}>
                  <img src="https://placehold.co/700x1000" width={'100%'} alt="" />
                  </Col>
            </Carousel.Item>
            <Carousel.Item className="justify-content-center mt-5 w-100">
                  <Col className="mb-4 mt-5" style={{maxHeight:'800px' , width:'100%'}}>
                  <img src="https://placehold.co/700x1000" width={'100%'} alt="" />
                  </Col>
            </Carousel.Item>

        </Carousel>

<Container >
        <h2 className='text-center mt-5 mb-5'>Conheça nossa Linhas</h2>
        <Carousel interval={null} indicators={false} controls={true} id='line-products' className='m-4'>
      {chunkedData.map((categoryChunk, index) => (
        <Carousel.Item key={index}>
          <Row className="justify-content-center mt-5">
            {categoryChunk.map((category, categoryIndex) => (
              <Col key={categoryIndex} xs={5} sm={4} md={2} className="mb-4">
                <Card id='line' className="text-center background-none shadow bg-body-tertiary rounded d-flex justfy-center zoom-effect-container border-0 mb-5">
                  <Link to={`/category/${category.name.toLowerCase().replace(/ /g, '-')}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card.Img variant="top" src={placeholderImage} style={{ maxHeight: '100px', objectFit: 'fill' }} />
                    <Card.Body className='line'>
                      <Card.Title>{category.name}</Card.Title>
                    </Card.Body>
                  </Link>
                </Card>
              </Col>



            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
        </Container>
        
      <Container fluid id='News' className="mt-5 d-flex justify-center bg-offWhite">
        <Col md = {9}>
        <Row className="p-0" style={{margin:'auto'}} >
          <Col md={4} className='mt-5 mb-2 text-center rounded-3'>
            <img src="https://placehold.co/400x225" style={{ maxWidth: '95%', maxHeight: '95%', objectFit:'cover' }}  alt="" />
            </Col>
            <Col md={4} className='mt-5 mb-2 text-center rounded-3'>
            <img src="https://placehold.co/400x225"  style={{ maxWidth: '95%', maxHeight: '95%', objectFit:'cover' }} alt="" />
            </Col>
           <Col md={4} className='mt-5 mb-2 text-center rounded-3'>
            <img src="https://placehold.co/400x225" style={{ maxWidth: '95%', maxHeight: '95%', objectFit:'cover' }} alt="" />
            </Col>
        </Row>

        <Row className="p-0 align-middle">
        <Col md={8} className='mt-3 mb-5 text-center rounded-3'>
            <img src="https://placehold.co/850x425" style={{ maxWidth: '95%', maxHeight: '95%', objectFit:'Col' }}  alt="" />
            </Col>
        
            <Col md={4} className='mt-3 text-center mb-5 rounded-3 align-items-center'>
            <Link to={`/SobreNos`}>
            <img src="https://placehold.co/400x225"  style={{ maxWidth: '95%', maxHeight: '95%', objectFit:'Col' }} alt="" />
            </Link>
            </Col>
        </Row>
        </Col>

      </Container>

      <FooterComponent />
    </div>
  );
}
