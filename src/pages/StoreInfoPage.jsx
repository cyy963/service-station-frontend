import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import StoreDetails from "../components/StoreInfo/StoreDetails";
import styles from "./StoreInfoPage.module.css";

const StoreInfoPage = () => {
  const { id } = useParams();
  const [store, setStore] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/stations/${id}`)
      .then((response) => setStore(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className={styles.storeInfoPage}>
      <StoreDetails store={store} />
    </div>
  );
};

export default StoreInfoPage;
