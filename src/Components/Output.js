import OutputItem from './OutputItem'

import styles from './Output.module.css'

const Output = ({ yearlyData, baseAmount }) => {
  return (
    <div>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {yearlyData.map((item, index) => {
            return <OutputItem key={index} item={item} baseAmount={baseAmount} />
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Output