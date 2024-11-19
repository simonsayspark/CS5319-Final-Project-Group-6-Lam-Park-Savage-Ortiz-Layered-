# Software Architecture Final Project - Layer Architecture Design  (Selected)

## Project overview  (Ben)
The **PawPaw Market** is a web application designed to simplify the process of purchasing pet goods for pet owners.

## Capabilities and Features

1. **Product Listings**  
   The application offers a catalog of over 100 different pet goods, allowing users to browse and select from various products such as food, toys, and more. Each product card contains detailed descriptions and prices of the product.

2. **Categorization**  
   Products are organized into categories, such as Dog Food, Bird Toys, etc., to help users quickly filter through the inventory and find items based on their pet's needs. These categories are available to select from the products dropdown.

3. **Shopping Cart**  
   Users can add items to their shopping cart as they browse. The cart keeps track of all selected items and provides a summary of the total purchase. Once users finalize their choices, they can place their order.

4. **User Profile**  
   Each user has a personalized profile where they can view their order history and see personal information. The profile allows users to track past purchases and view their account information.

## Operational Scenarios

1. **Browse**  
   Users can browse through the product catalog, use the provided categories to find items, and add selected items to their cart.

2. **View Profile**  
   The user profile feature allows customers to view their personal information and order history. Users can track their previous purchases and manage their account details to ensure up-to-date information.

3. **View Shopping Cart**  
   The shopping cart provides users with a clear overview of all selected items. It displays product details, quantities, and total costs. Users can modify the cart by adding, removing, or updating items before proceeding to checkout.

4. **Place Order**
   After adding items to their shopping cart, users can place their order to purchase items.

This project aims to simulate a web application for purchasing pet goods.

## Layer Architecture (Oliver)
//just add diagram and related information if needed
## Event-based Architecture 
![Alt text](./EventBased.png "Title")


## Comparision between two architecture styles (Ben)
//Elaborate in detail on the difference between the architecture designs for both
candidate architecture styles

## Rationale on final decision
For the PawPaw Marketplace project, layered architecture emerges as the most practical solution due to its simplicity and ability to meet the project's immediate requirements. This approach structures the application into distinct layers, including presentation, business logic, and data access, promoting a clean separation of concerns. This design not only facilitates easier development and testing but also simplifies ongoing maintenance.The project's current scope revolves around essential features such as product browsing, cart management, and order processing. These functionalities do not demand the complexity of real-time updates or the scalability of more intricate systems. By opting for layered architecture, the team benefits from a streamlined implementation process with minimal overhead, ensuring faster delivery. Furthermore, this architecture provides enough flexibility to accommodate future upgrades without significant rework. In conclusion, layered architecture offers more balance of efficiency, clarity, and scalability for this stage of development of the PawPaw Marketplace.

## How to compile and excute the code (Tran)
### Prerequisites:
- Install Node.js and npm or yarn (latest version recommended).
- Install a code editor like VS Code (optional but recommended).

### Add `.env` file to connect with the MongoDB.
- Ensure MongoDB is properly configured and running (please refer to the .env file submitted on canvas for security). Add `.env` file to `backend\` directory.

### Backend Setup (Express.js)
Navigate to the backend directory:
```
cd backend
```
Install dependencies:
```
npm install
```
Or, if you use Yarn:
```
yarn install
```
Run the server:
```
npm run dev
```
Or:
```
yarn run dev
```
The server will start on the port specified in server.js (default is usually http://localhost:8000).

### Frontend Setup (React)
Navigate to the React directory:
```
cd bootstrap-with-react
```
Install dependencies:
```
npm install
```
Or:
```
yarn install
```
Start the React app:
```
npm start
```
Or:
```
yarn start
```
The React app will start on the default port http://localhost:3000.
