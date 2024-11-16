import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Table,
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Image,
  InputGroup,
  Row,
  Col,
  Card,
  Form,
  Tab,
  Tabs,
  Carousel,
  Placeholder,
} from "react-bootstrap";
import minipaLogo from "../Images/minipaLogo.png";
// import NavbarComponent from '../Component/NavbarComponent';
import FooterComponent from "../Component/FooterComponent";
import ProductTabs from "../Component/Astec/Tab";
import "../App.scss";
import NewNav from "../Component/NewNav";

const ProductTemplate = () => {
  const { categoryName, subcategoryName, productName } = useParams();
  const [productData, setProductData] = useState(null);
  const [navData, setNavData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryData, setCategoryData] = useState(null);
  const [imageExists, setImageExists] = useState(null);

  useEffect(() => {
    fetch(`/api/category`)
      .then((response) => response.json())
      .then((data) => {
        setNavData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (categoryName && subcategoryName && productName && navData.length > 0) {
      const formattedCategoryName = categoryName
        .replace(/-/g, " ")
        .toLowerCase();
      const formattedSubcategoryName = subcategoryName
        .replace(/-/g, " ")
        .toLowerCase();
      const formattedProductName = productName.replace(/-/g, " ").toLowerCase();

      // Find the matching category
      const category = navData.find(
        (cat) =>
          cat.name.toLowerCase().replace(/-/g, "").replace(/ /g, "") ===
          formattedCategoryName.replace(/-/g, "").replace(/ /g, "")
      );

      if (category) {
        // Find the matching animal type (subcategory)
        const animalType = Object.keys(category.subcategory).find(
          (type) => type.toLowerCase() === formattedSubcategoryName
        );

        if (animalType) {
          const subcategoryProducts = category.subcategory[animalType];

          // Find the product in the subcategory's product list
          const foundProduct = subcategoryProducts.find(
            (product) =>
              product.name.toLowerCase().replace(/-/g, " ") ===
              formattedProductName
          );

          if (foundProduct) {
            setProductData(foundProduct);
            console.log("Found product:", foundProduct);
          } else {
            console.error("Product not found:", productName);
          }
        } else {
          console.error(`Animal type not found: ${subcategoryName}`);
        }
      } else {
        console.error(`Category not found: ${categoryName}`);
      }
    }
  }, [categoryName, subcategoryName, productName, navData]);

  // useEffect(() => {
  //   if (categoryName && navData.length > 0) {
  //     const formattedCategoryName = categoryName
  //       .replace(/-/g, " ")
  //       .toLowerCase();
  //     const category = navData.find(
  //       (cat) =>
  //         cat.name.toLowerCase().replace(/-/g, "").replace(/ /g, "") ===
  //         formattedCategoryName.replace(/-/g, "").replace(/ /g, "")
  //     );

  //     if (category) {
  //       if (subcategoryName) {
  //         const formattedSubcategoryName = subcategoryName
  //           .replace(/-/g, " ")
  //           .toLowerCase();
  //         const animalType = Object.keys(category.subcategory).find(
  //           (type) => type.toLowerCase() === formattedSubcategoryName
  //         );

  //         if (animalType) {
  //           setCategoryData({ ...category, currentSubcategory: animalType });
  //         } else {
  //           console.error(`Subcategory not found: ${subcategoryName}`);
  //           setCategoryData(category);
  //         }
  //       } else {
  //         setCategoryData(category);
  //       }
  //     } else {
  //       console.error(`Category not found: ${categoryName}`);
  //     }
  //   } else {
  //     setCategoryData(null);
  //   }
  // }, [categoryName, subcategoryName, navData]);

  // useEffect(() => {
  //   if (categoryName && subcategoryName && productName) {
  //     fetch(`/api/products`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("Fetched product data:", data);
  //         if (!Array.isArray(data)) {
  //           throw new Error("Fetched data is not an array");
  //         }

  //         // Format the URL parameters for comparison
  //         const formattedCategoryName = categoryName
  //           .replace(/-/g, " ")
  //           .toLowerCase();
  //         const formattedSubcategoryName = subcategoryName
  //           .replace(/-/g, " ")
  //           .toLowerCase();
  //         const formattedProductName = productName
  //           .replace(/-/g, " ")
  //           .toLowerCase();

  //         // Find the matching product
  //         const foundProduct = data.find(
  //           (product) =>
  //             product.category
  //               .toLowerCase()
  //               .replace(/-/g, "")
  //               .replace(/ /g, "") ===
  //               formattedCategoryName.replace(/-/g, "").replace(/ /g, "") &&
  //             product.animalType.toLowerCase() === formattedSubcategoryName &&
  //             product.name.toLowerCase().replace(/-/g, " ") ===
  //               formattedProductName
  //         );

  //         if (foundProduct) {
  //           setProductData(foundProduct);
  //           console.log("Found product:", foundProduct);
  //         } else {
  //           console.error("Product not found:", productName);
  //         }
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data:", error);
  //       });
  //   }
  // }, [categoryName, subcategoryName, productName]);

  let findImage = null;
  const imagePath = `/ProductImages/${categoryName.toUpperCase()}/${subcategoryName.toUpperCase()}/${productName.toUpperCase()}.jpg`;
  const noImg = `https://placehold.co/600x400`;

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

  const {
    name,
    animalType,
    category,
    description,
    price,
    brand,
    availableStock,
  } = productData;

  return (
    <div>
      {/* <NavbarComponent navData={navData} /> */}
      <NewNav navData={navData} />
      <div className="main-content">
        <Container className="mb-5 mt-5 d-flex flex-row justify-around">
          <Col md={7} className="border-right">
            <img
              id="mainImage"
              src={imagePath}
              alt="Main Image"
              fluid
              style={{
                margin: "5px auto",
                objectFit: "Col",
                maxHeight: "100vh",
                minHeight: "30vh",
              }}
            />
          </Col>

          <div className="flex flex-column ">
            <h3 className="m-4 text-center">{name}</h3>

            <p>
              <strong>Description:</strong> {description}
            </p>
            <p>
              <strong>Price:</strong> ${price.toFixed(2)}
            </p>
            <p>
              <strong>Brand:</strong> {brand}
            </p>

            <Col md={6} className="justify-center">
              <Button className="mt-3 bg-red border-transparent border-0">
                Add to Card
              </Button>
            </Col>
          </div>
        </Container>

        {/* <ProductTabs /> */}

        <FooterComponent />
      </div>
    </div>
  );
};
export default ProductTemplate;
