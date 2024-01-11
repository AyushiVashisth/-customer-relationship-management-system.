<h1 align="center">🚀 customer-relationship-management-system 🚀</h1>

<p align="center">
This repository contains the backend implementation of a Customer Relationship Management (CRM) system developed using Node.js, Express, and MongoDB. The CRM system manages user accounts, handles public enquiries, and allows employees/counsellors to claim and manage leads.

### Backend Respositry URL 👉 [Click here](https://crm-api-su4c.onrender.com/)

</p>

<h2 align="center">Technologies Used</h2>

<p align="center">
  <b>Backend</b><br>
  <img src="https://img.shields.io/badge/expressjs-%777BB4.svg?style=for-the-badge&logo=express.js&logoColor=white" alt="express">
  <img src="https://img.shields.io/badge/mongoose-%2300f.svg?style=for-the-badge&logo=mongoose&logoColor=white" alt="mongoose">
  <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript">
</p>

<p align="center">
  <b>Tools</b><br>
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github">
  <img src="https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white" alt="npm">
  <img src="https://img.shields.io/badge/Visual%20Studio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white" alt="vscode">
</p>

<p align="center">
  <b>Deployment</b><br>
  <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel">
  <img src="https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7" alt="netlify">
</p>


<h2 align="center">Features</h2>

- **User Management:**
  - Registration of employees and counselors.
  - User login for authentication using JWT tokens.

- **Enquiry Management:**
  - Public form submission for prospective clients.
  - Employee/counselor can claim and manage leads.
  - APIs to fetch unclaimed leads and leads claimed by logged-in users.

## Technology Stack

- **Node.js:** Server-side JavaScript runtime.
- **Express:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing user and enquiry data.
- **JWT (JSON Web Tokens):** Token-based authentication for secure communication.

## Project Structure

- **Config:** Database configuration files.
- **Middleware:** Authentication middleware.
- **Models:** MongoDB schema definitions for User and Enquiry.
- **Routes:** API routes for User and Enquiry functionalities.
- **Index.js:** Main entry point for the application

## API Endpoints

- **User Management:**
  - `POST /user/register`: Register a new user.
  - `POST /user/login`: Authenticate and log in a user.

- **Enquiry Management:**
  - `POST /enquiry/publicForm`: Submit a public enquiry form.
  - `POST /enquiry/claimLead/:enquiryId`: Claim a lead by an authenticated user.
  - `GET /enquiry/unclaimedLeads`: Get unclaimed leads (requires authentication).
  - `GET /enquiry/myLeads`: Get leads claimed by the logged-in user (requires authentication).

<h2 align="center">Getting Started</h2>

1. Clone the repository: git clone <repository-url>
2. Install dependencies: npm install
3. Configure environment variables: Create a .env file based on .env.example and provide necessary details.
4. Start the server: npm start
5. The server will be running at http://localhost:<PORT>8080

<h3>This is an individual project that I developed as a solo backend developer within 2 hours.</h3>

<h2 align="center">Contribution Guidelines</h2>

We welcome contributions to the customer-relationship-management-system project. If you have ideas for new features or find any bugs, please open an issue in the repository. Pull requests are also encouraged.

<h2 align="center">Show Your Support</h2>

If you find this project interesting or valuable, please consider giving it a ⭐️.

<h1 align="center">🚘 Happy Exploring! 🚘</h1>
