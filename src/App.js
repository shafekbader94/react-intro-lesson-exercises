import React, { Component } from 'react';
import './App.css';

class App extends Component {
  getStuff() {
    return "some text: spot check 1"
  }

  getMorningGreeting() {
    return(
      <div>
        <p>good morning</p>
      </div>
    )

    
  }

  getEveningGreeting() {
    return(
      <div>
        <p>good evening</p>
      </div>
    )
  }

  showCompany(name, revenue) {
    return(
      <div id={name}>
        <p>{name} makes {revenue} every year</p>
      </div>
    )
  }

  getClassName(temperature) {
    let temp
    if(temperature < 15)
      temp = "freezing"
    else if(temperature > 15 && temperature < 30)
    temp = "fair"
     else
     temp = "hell-scape"
return(
  <div id="weatherBox" className={temp}>
    <p>{temp}</p>
  </div>
)    

  }

  render() {

    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
let date = new Date().getHours()

    return (
      <div>
        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 1</h4 >
          <div className="exercise" id="spotcheck-1">
            <h1>{this.getStuff()}</h1>
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {date> 12 ? this.getEveningGreeting() : this.getMorningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[this.getMorningGreeting(),
            this.getEveningGreeting(),
            <p>some text</p>]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map(c => this.showCompany(c.name,c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className='ex-title'>Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(10)}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
