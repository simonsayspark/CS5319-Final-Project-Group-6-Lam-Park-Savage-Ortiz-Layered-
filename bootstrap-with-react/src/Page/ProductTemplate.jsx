import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Table, Container, Navbar, Nav, NavDropdown, Button, Image, InputGroup, Row, Col, Card, Form, Tab, Tabs, Carousel, Placeholder } from 'react-bootstrap';
import minipaLogo from '../Images/minipaLogo.png';
// import NavbarComponent from '../Component/NavbarComponent';
import FooterComponent from '../Component/FooterComponent';
import ProductTabs from '../Component/Astec/Tab';
import '../App.scss';

const ProductTemplate = () => {
  const { categoryName, subcategoryName, productName } = useParams();
  const [productData, setProductData] = useState(null);
  const [navData, setNavData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState(null);
  const [imageExists, setImageExists] = useState(null);


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
    fetch(`https://json-server-vercel-tan-rho.vercel.app/categories`)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched categories data:', data);
        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }

        let foundProduct = null;

        data.forEach((category, categoryIndex) => {
          if (!category || !Array.isArray(category.subcategories)) {
            console.error(`Category at index ${categoryIndex} is invalid or has no subcategories:`, category);
            return;
          }

          console.log(`Processing category: ${category.name}`);
          category.subcategories.forEach((subcategory, subcategoryIndex) => {
            if (!subcategory || !Array.isArray(subcategory.products)) {
              console.error(`Subcategory at index ${subcategoryIndex} in category ${category.name} is invalid or has no products:`, subcategory);
              return;
            }

            console.log(`Processing subcategory: ${subcategory.name}`);
            console.log(`Product name to match: ${productName.toLowerCase().replace(/-/g, ' ')}`);
            console.log(`Product names in subcategory: ${subcategory.products.map(p => p.name.toLowerCase())}`);

            const product = subcategory.products.find(prod => prod.name.toLowerCase().replace(/-/g, ' ') === productName.toLowerCase().replace(/-/g, ' '));


            console.log(`${categoryName.toUpperCase()}`);
            console.log(`${subcategoryName.toUpperCase()}`);
            console.log(`${productName.toUpperCase()}`);


            if (product) {
              foundProduct = product;
              setProductData(product);
              console.log('Found product:', product);
            }
          });
        });

        if (!foundProduct) {
          console.error('Product not found:', productName);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [productName]);

  let findImage = null
  const imagePath = `/ProductImages/${categoryName.toUpperCase()}/${subcategoryName.toUpperCase()}/${productName.toUpperCase()}.jpg`;
  const noImg=`https://placehold.co/600x400`;

  // if(Image){
  //   findImage = imagePath;
  //   setImageExists(Image);
  // };
  // if(!findImage){
  //   imageExists = noImg;
  // };

  if (!productData) {
    return <div>Loading...</div>;
  }

  const { name, category, details } = productData;
  

  // const pathImage = imagePath && imagePath.trim() !== "" ? imagePath : noImg;
  

  return (
    <div>
      {/* <NavbarComponent navData={navData} /> */}

      <div className='main-content'>

        <Container className="mb-5 mt-5 d-flex flex-row justify-around">

<Col md={7} className='border-right' >
<img id="mainImage" src={imagePath} alt="Main Image" fluid style={{ margin: '5px auto', objectFit:'Col', maxHeight:'100vh' , minHeight:'30vh' }}/>
</Col>

 
      <div className="d-flex flex-column"> 

        <h3 className='m-4 text-center'>{name}</h3>
        <p className='text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio modi rerum, harum ea totam asperiores eligendi architecto ut, molestiae eum velit optio labore dolorem possimus voluptatem quaerat deserunt delectus ipsam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio modi rerum, harum ea totam asperiores eligendi architecto ut, molestiae eum velit optio labore dolorem possimus voluptatem quaerat deserunt delectus ipsam.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio modi rerum, harum ea totam asperiores eligendi architecto ut, molestiae eum velit optio labore dolorem possimus voluptatem quaerat deserunt delectus ipsam.</p>

<Col md={6} className='justify-center'>

        <Button className="mt-3 bg-red border-transparent border-0" >
                  Veja Onde comprar
        </Button>

        </Col>

      </div>

  </Container>

<ProductTabs/>

        <FooterComponent />
      </div>
    </div>
    );
  };
export default ProductTemplate;
