# Z STATION APP

This is a project based on Z, a fuel provider in New Zealand. It allows users to plan journeys and find Z stations along their specified route, as well as look up fuel prices at Z stations.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/cyy963/service-station-frontend
   cd service-station-frontend
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Start the Development Server:**
   ```sh
   npm run dev
   ```
## Project Structure

- `public/`: Static assets.
- `src/`: Source files for the project.
  - `assets/`: Images etc.
  - `components/`: Reusable components.
    - `Common/`: Common components like Header and Footer.
    - `FindStation/`: Components for the "Find a Station" page.
    - `JourneyPlanner/`: Components for the "Journey Planner" page.
    - `StoreInformation/`: Components for the "Store Information" page.
    - `LandingPage/`: Components for the landing page.
  - `pages/`: Page components.
  - `App.jsx`: Main application component with routing.
  - `main.jsx`: Entry point for the application.
    
## Notes

- **React Router v6:** Ensure that you are using `react-router-dom` v6, as the routing setup is based on this version.
- **Development Server:** Always restart the development server after making changes to the configuration or dependencies.

