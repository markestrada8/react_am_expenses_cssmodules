import { useState } from 'react'
import Form from './Components/Form'
import Output from './Components/Output'
import Header from './Components/Header'
import styles from './Components/Header.module.css'



function App() {
  const [userData, setUserData] = useState({
    currentSavings: '',
    yearlyContribution: '',
    expectedReturn: '',
    duration: ''
  })

  const [yearlyData, setYearlyData] = useState([])

  const handleReset = () => {
    setUserData({
      currentSavings: '',
      yearlyContribution: '',
      expectedReturn: '',
      duration: ''
    })
    setYearlyData([])
  }

  const calculateHandler = (e) => {

    e.preventDefault()

    const yearlyData = [] // per-year results

    let currentSavings = +userData.currentSavings
    const yearlyContribution = +userData.yearlyContribution
    const expectedReturn = +userData.expectedReturn / 100
    const duration = +userData.duration

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      })
    }
    // handleReset()
    setYearlyData(yearlyData)
  }

  return (
    <div>
      <Header />
      <Form
        userData={userData}
        setUserData={setUserData}
        calculateHandler={calculateHandler}
        handleReset={handleReset}
      />
      {yearlyData.length > 0
        ?
        <Output yearlyData={yearlyData} baseAmount={userData.currentSavings} />
        :
        <header className={styles.header}>No Data Entered</header>
      }
    </div>
  )
}

export default App
