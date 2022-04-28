import PropTypes from "prop-types";
import s from './transactions.module.css'

const TransactionsHistory = ({items}) => {
    let singleTransactionEl = items.map(el => {
        return (<tr key={el.id}>
            <td className={s.td}>{el.type}</td>
            <td className={s.td}>{el.amount}</td>
            <td className={s.td}>{el.currency}</td>
          </tr>)
    })
    return (
        <table className={s.history}>
  <thead className={s.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {singleTransactionEl}
  </tbody>
</table>
    )
}

TransactionsHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string
  }))
}

export default TransactionsHistory;