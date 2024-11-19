# Software Architecture Final Project - Layer Architecture Design  (Selected)

## Project overview  (Ben)

## Layer Architecture (Oliver)
//just add diagram and related information if needed
## Event-based Architecture (Simon)
![Alt text](./EventBased.png "Title")


## Comparision between two architecture styles (Ben)
//Elaborate in detail on the difference between the architecture designs for both
candidate architecture styles

## Rationale on final decision (Simon)
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
