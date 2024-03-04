// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {count: 2000}
  updateBalance = () => {
    this.setState(prevState => ({balance: prevState.state - value}))
  }
  render() {
    const {denominationsList} = this.props
    const {balance} = this.states
    return (
      <div className="container">
        <div className="card">
          <div className="one">
            <div className="round">S</div>
            <h1 className="heading">Sarah Williams</h1>
          </div>
          <div className="two">
            <p className="para">Your Balance</p>
            <p>{balance}</p>
          </div>
          <p className="para">in Rupees</p>
          <h1 className="head">Withdraw</h1>
          <p className="para">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationsDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
