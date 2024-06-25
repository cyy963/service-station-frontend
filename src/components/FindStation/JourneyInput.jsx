/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './css/Banner.module.css'

function JourneyInput({ setForm }) {
  const [input, setInput] = useState({ origin: '', destination: '' })

  function changeHandler(event) {
    const { value, name } = event.target
    setInput({ ...input, [name]: value })
  }

  function onSubmit(event) {
    event.preventDefault()

    setForm(input)
    setInput({ origin: '', destination: '' })
  }

  return (
    <>
      <form className={styles.stackInput}>
        <div className={styles.inputContainer}>
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Enter starting location'
            name='origin'
            value={input.origin}
            onChange={changeHandler}
          />
          <input
            className={styles.searchInput}
            type='text'
            placeholder='Enter Destination'
            name='destination'
            value={input.destination}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.submitButton} onClick={onSubmit}>
            enter
          </button>
        </div>
      </form>
    </>
  )
}

export default JourneyInput
