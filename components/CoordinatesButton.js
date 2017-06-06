import React from 'react'

export default class CoordinatesButton extends React.Component {

  constructor(){
    super()
    this.clickFn = this.clickFn.bind(this) // set the this
  }

  clickFn(event) {
    this.props.onReceiveCoordinates( [event.clientX, event.clientY] ) // sets props from Mouse event
  }

  render() {
    return (
      <button onClick={this.clickFn} >Gbuttin.</button> // definition goes here
    )
  }
}
