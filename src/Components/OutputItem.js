const OutputItem = ({ item, baseAmount }) => {
  return (
    <tr>
      <td>{item.year}</td>
      <td>{item.savingsEndOfYear.toFixed(2)}</td>
      <td>{item.yearlyInterest.toFixed(2)}</td>
      <td>{(item.savingsEndOfYear - baseAmount - item.yearlyContribution * item.year).toFixed(2)}</td>
      <td>{(item.yearlyContribution * item.year).toFixed(2)}</td>
    </tr>
  )
}

export default OutputItem