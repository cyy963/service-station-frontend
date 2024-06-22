# Z STATION APP

This is a project based on Z, a fuel provider in New Zealand. It allows users to plan journeys and find Z stations along their specified route, as well as look up fuel prices at Z stations.

## Project Structure

m5-frontend/
│
├── public/
│
├── src/
│ ├── assets/
│ │ └── ... (images)
│ │
│ ├── components/
│ │ ├── Common
│ │ │ ├── Header.jsx
│ │ │ ├── Footer.jsx
│ │ │ └── ...
│ │ │
│ │ ├── FindStation
│ │ │ ├── ServiceFilter.jsx
│ │ │ ├── RadiusFilter.jsx
│ │ │ └── Map.jsx
│ │ │
│ │ ├── JourneyPlanner
│ │ │ ├── JourneyInput.jsx
│ │ │ ├── JourneyMap.jsx

│ │ ├── StoreInformation
│ │ │ └── StoreDetails.jsx
│ │ │
│ │ └── LandingPage
│ │ └── LandingPageContent.jsx
│ │
│ ├── pages
│ │ ├── FindStationPage.jsx
│ │ ├── JourneyPlannerPage.jsx
│ │ ├── StoreInfoPage.jsx
│ │ └── LandingPage.jsx
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── ...
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the Repository:**

   git clone https://github.com/SarahC233/m5-frontend.git
   cd m5-frontend

2. **Install Dependencies**
   npm install

3. **Start the Development Server**
   npm run dev

   The application should now be running at http://localhost:5173

### Routing

This project uses `react-router-dom` v6 for client-side routing.

### Notes

- **React Router v6:** Ensure that you are using `react-router-dom` v6, as the routing setup is based on this version.
- **Development Server:** Always restart the development server after making changes to the configuration or dependencies.
