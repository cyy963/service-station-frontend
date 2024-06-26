/* eslint-disable react/prop-types */
import styles from './css/MarkerContent.module.css'

function MarkerContent({ station }) {
  const { name, address, ZX_Premium, Z91_Unleaded, Z_Diesel, services } =
    station

  const serviceIcons = {
    PreorderCoffee: '/images/icons/coffee.png',
    Payinapp: '/images/icons/pay.png',
    Bathrooms: '/images/icons/bathroom.png',
    ZEspressCoffeeFreshFood: '/images/icons/food.png',
  }
  const servicesArr = services
    .split(',')
    .map((element) => element.replace(/[\s\-'&]/g, '').trim())

  const matchServer = servicesArr
    .map((item) => serviceIcons[item])
    .filter((x) => x !== undefined)

  return (
    <div className={styles.shapeContainer}>
      <h1 style={{ color: '#FF6F00' }}>{name}</h1>
      <p style={{ fontSize: '16px', fontWeight: 400 }}>{address}</p>
      <hr
        style={{ backgroundColor: '#E6E6E6', height: '2px', border: 'none' }}
      />
      <div className={styles.iconContainer}>
        {matchServer.map((icon, i) => (
          <div key={i}>
            <img src={icon} />
          </div>
        ))}
      </div>

      <div className={styles.priceContainer}>
        <div className={styles.redText}>
          <h3>Z Premium </h3>
          <p style={{ fontSize: '13px' }}>${ZX_Premium}/L</p>
        </div>
        <div className={styles.greenText}>
          <h3>Z Unleaded </h3>
          <p style={{ fontSize: '13px' }}>${Z91_Unleaded}/L</p>
        </div>
        <div>
          <h3>Z Diesel</h3>
          <p style={{ fontSize: '13px' }}>${Z_Diesel}/L</p>
        </div>
      </div>
    </div>
  )
}

export default MarkerContent
