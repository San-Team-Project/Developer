import React, { Component } from 'react'

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    };
  }

  updateCount(){
    this.setState((prevState, props) => {
      return { count: prevState.count + 1 }
    });
  }
  render() {
    return (
      <div>
          <button onClick={() => this.updateCount()} >
              Clicked {this.state.count} times
          </button>
      </div>
    )
  }
}

export default Button
