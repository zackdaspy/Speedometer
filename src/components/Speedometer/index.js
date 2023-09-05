import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      speed: 0,
    }
  }

  accelerate = () => {
    this.setState(({speed}) => ({
      speed: speed < 200 ? speed + 10 : speed,
    }))
  }

  applyBrake = () => {
    this.setState(({speed}) => ({
      speed: speed > 0 ? speed - 10 : speed,
    }))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speedometer-image"
        />
        {/* Add an initial HTML h1 element */}
        <h1 className="speed-label">Speed is {speed}mph</h1>
        <div className="button-container">
          <p>Min Limit is 0mph, Max Limit is 200mph</p>
          <button
            className="accelerate-button"
            type="button"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button
            className="brake-button"
            type="button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
