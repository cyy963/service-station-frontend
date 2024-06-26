import styles from "./FindStationPage.module.css";
import StationData from "../components/Common/StationData";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import { APIProvider } from "@vis.gl/react-google-maps";
import { useNavigate } from "react-router-dom";

const FindStationPage = ({ stores }) => {
  const navigate = useNavigate();

  const handleStationClick = (id) => {
    navigate(`/store/${id}`);
  };

  return (
    <div className={styles.pageBody}>
      <Header />
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
        <StationData onStationClick={handleStationClick} />
      </APIProvider>
      <Footer />
    </div>
  );
};

export default FindStationPage;
