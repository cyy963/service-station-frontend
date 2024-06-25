
import styles from './FindStationPage.module.css'
import StationData from '../components/Common/StationData'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'

import { APIProvider } from '@vis.gl/react-google-maps'

const FindStationPage = ({ stores }) => {
  return (
    <div className={styles.pageBody}>
      <Header />

      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
        <StationData />
      </APIProvider>

      <Footer />

    </div>
  )
}

export default FindStationPage
