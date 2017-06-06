import React from 'react'

export default class DelayedButton extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.persist()
    setTimeout( ()=>{
      this.props.onDelayedClick(event)
    }, this.props.delay ) // takes in props, delay is one of them
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click me!</button>
    );
  }
}
