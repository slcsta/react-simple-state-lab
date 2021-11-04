// Define a constructor method in Cell, which sets an initial state key of color to the value prop passed from its parent component
// Call super() on teh first line of the constructor
import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        } //define initial state with a key of 'color' set to the 'value' of prop
    }

    handleClick = () => {
        this.setState({color: '#333'})
    }

    render() {
        return (
          <div className="cell"
              style={{backgroundColor: this.state.color}}
              onClick={this.handleClick}>
          </div>
        )
      }
}