import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StoreDetails from "../components/StoreInfo/StoreDetails";
import styles from "./StoreInfoPage.module.css";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const StoreInfoPage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStoreData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/stations/${id}`
        );
        setStore(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the store data", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchStoreData();
  }, [id]);

  if (loading) {
    return <p>Loading store details...</p>;
  }

  if (error) {
    return <p>Error loading store details: {error.message}</p>;
  }

  return (
    <div className={styles.storeInfoPage}>
      <Header />
      {store ? <StoreDetails store={store} /> : <p>Store details not found.</p>}
      <Footer />
    </div>
  );
};

export default StoreInfoPage;
