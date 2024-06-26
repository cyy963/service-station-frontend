import styles from "../LandingPage/LandingPageContent.module.css"

//graphics
import FindStationBtn from "../../assets/FindStationBtn.png";
import PlanJourneyBtn from "../../assets/PlanJourneyBtn.png";
import Map from "../../assets/map2.png";
import PnSBtn from "../../assets/PnSBtn.png";
import TrailerHire from "../../assets/TrailerHire.png";
import CarWash from "../../assets/CarWash.png";
import LPGCard from "../../assets/LPGCard.png";
import FoodnBev from "../../assets/FoodnBev.png";
import LearnMoreBtn from "../../assets/LearnMoreBtn.png";
import bannerIcons from "../../assets/bannerIcons.png";
import FindOutMoreBtn from "../../assets/FindOutMoreBtn.png";
import appImg from "../../assets/appImg.png";

export default function PageContent() {
  return (
    <div className={styles.pageContent}>
      <div className={styles.featureContainer}>        
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2 className={styles.title}>Looking to get fuelled up?</h2>
            <p>Plan your trips using our Journey Planner and see the nearest stations along the way!</p>
            <div className={styles.buttonsContainer}>
              <img className={styles.btn} src={FindStationBtn} />
              <img className={styles.btn} src={PlanJourneyBtn} />
            </div>
          </div>            
        </div>

        
        <div className={styles.mapContainer}>
          <img src={Map} />
        </div>        
      </div>
      <div className={styles.serviceCardsContainer}>
        <div className={styles.serviceInfo}>
          <h2 className={styles.serviceTitle}>Browse our services</h2>
          <p style={{textAlign:"center"}}>Lorem ipsum dolor sit amet consectetur. <br/>Gravida sodales purus lorem odio lobortis id donec.</p>
          <img className={styles.btn} src={PnSBtn} />          
        </div>
        <div className={styles.cardsContainer}>
          <img src={TrailerHire} />
          <img src={CarWash} />
          <img src={LPGCard} />
          <img src={FoodnBev} />
        </div>
      </div>
      
      <div className={styles.powerBanner}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2 className={styles.whiteTitle}>Power your home</h2>
            <p style={{color:"white"}}>Specialised home power plans to help keep your home and  <br/>vehicle running, tailored for both EV and non-EV drivers</p>
            <img className={styles.btn} src={LearnMoreBtn} />          
          </div>          
        </div>
        <img style={{height:'200px', width:'auto', marginLeft:'5vw'}} src={bannerIcons}/>
      </div>
      
      
      <div className={styles.appBanner}>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <h2 className={styles.title}>Go check our app and earn
            exclusive rewards! </h2>
            <p>Receive exclusive rewards when you invite your friends to download and use the Z app!</p>
            <img className={styles.btn} src={FindOutMoreBtn} />          
          </div>
        </div>
        <img style={{height:'77%', width:'auto', minWidth:'10%', marginLeft:'3vw'}} src={appImg}/>
      </div>
    </div>
  )
}