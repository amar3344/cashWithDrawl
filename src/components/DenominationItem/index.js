import './index.css'

const DenominationItem = props => {
  const {denominationDetails} = props
  const {value} = denominationDetails

  return (
    <li className="order-list-container">
      <button type="button" className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
