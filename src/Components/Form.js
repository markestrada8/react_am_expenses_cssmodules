import styles from './Form.module.css'

const Form = (props) => {
  const { userData, setUserData, calculateHandler, handleReset } = props
  // DESTRUCTURE userData
  const { currentSavings, yearlyContribution, expectedReturn, duration } = userData

  const changeHandler = (e) => {
    setUserData(prevState => {
      return {
        ...prevState,
        [e.target.name]: e.target.value
      }
    })
  }

  return (
    <div>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              name="currentSavings"
              value={currentSavings}
              id="current-savings"
              onChange={changeHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              name="yearlyContribution"
              value={yearlyContribution}
              id="yearly-contribution"
              onChange={changeHandler}
            />
          </p>
        </div>
        <div className={styles.inputGroup}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              name="expectedReturn"
              value={expectedReturn}
              id="expected-return"
              onChange={changeHandler}
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              name="duration"
              value={duration}
              id="duration"
              onChange={changeHandler}
            />
          </p>
        </div>
        <p className={styles.actions}>
          <button
            type="reset"
            className={styles.buttonAlt}
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit"
            className={styles.button}
            onClick={calculateHandler}
          >
            Calculate
          </button>
        </p>
      </form>
    </div>
  )
}

export default Form