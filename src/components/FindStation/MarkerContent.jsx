import styles from './css/MarkerContent.module.css'

function MarkerContent() {
  return (
    <div className={styles.shapeContainer}>
      <h3>Station Name</h3>
      <h4>station location</h4>

      <div className={styles.priceContainer}>
        <div className={styles.priceItem}>Z Premium $2.833/L</div>
        <div className={styles.priceItem}>Z Unleaded $2.796/L</div>
        <div className={styles.priceItem}>Z Diesel $2.499/L</div>
      </div>
    </div>
  )
}

export default MarkerContent
