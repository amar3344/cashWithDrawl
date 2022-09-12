import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {cashAvailable: 2000}

  render() {
    const {cashAvailable} = this.state
    const {denominationList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="container">
        <div className="bg-container">
          <div className="name-card">
            <p className="initial-name">{initial}</p>
            <p className="name">{name}</p>
          </div>
          <div className="balance-card">
            <h1 className="balance">Your Balance</h1>
            <div className="rupees-card">
              <p className="cashAva">{cashAvailable}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <h1 className="cashAva">Withdraw</h1>
          <p className="choose-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                denominationDetails={eachItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
