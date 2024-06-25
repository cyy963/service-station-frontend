/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './css/Banner.module.css'

function SearchLocation({ setAddress }) {
  const [input, setInput] = useState('')

  async function submit(event) {
    event.preventDefault()

    setAddress(await geocodeAddress(input))
  }

  async function geocodeAddress(address) {
    const geocoder = new window.google.maps.Geocoder()
    try {
      const response = await geocoder.geocode({ address })
      return {
        lat: response.results[0].geometry.location.lat(),
        lng: response.results[0].geometry.location.lng(),
      }
    } catch (error) {
      console.error('Geocoding error:', error)
    }
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className={styles.searchInput}
          type='text'
          value={input}
          placeholder='Enter a location or station'
          onChange={(event) => setInput(event.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchLocation
