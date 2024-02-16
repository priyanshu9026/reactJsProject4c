import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onMangoEat = () => {
    this.setState(prevState => {
      return {mangoCount: prevState.mangoCount + 1}
    })
  }

  onBananaEat = () => {
    this.setState(prevState => {
      return {bananaCount: prevState.bananaCount + 1}
    })
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="control-container">
            <div className="control-counter">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
                className="img"
              />
              <div className="button-container">
                <button
                  onClick={this.onMangoEat}
                  className="button"
                  type="button"
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="control-counter">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="img"
              />
              <div className="button-container">
                <button
                  onClick={this.onBananaEat}
                  className="button"
                  type="button"
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
