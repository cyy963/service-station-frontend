/* eslint-disable react/prop-types */
import styles from './css/Banner.module.css'
import SearchLocation from './SearchLocation'
import JourneyInput from './JourneyInput'

function Banner({ setAddress, tog, setTog, setForm }) {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.content}>
          <div className={styles.buttons}>
            <button
              className={`${styles.stationButton} ${tog ? '' : styles.clicked}`}
              onClick={() => setTog(false)}
            >
              Find a station
            </button>
            <button
              className={`${styles.stationButton} ${tog ? styles.clicked : ''}`}
              onClick={() => setTog(true)}
            >
              Journey Planner
            </button>
          </div>
          {tog ? (
            <JourneyInput setForm={setForm} />
          ) : (
            <SearchLocation setAddress={setAddress} />
          )}
        </div>
      </div>
    </>
  )
}

export default Banner
