import React, { Component } from 'react'

class Counter extends Component {

  //Mounting
  constructor(props)
  {
    super(props);
    this.setState({
      counter: ++this.state.counter
    });
    console.log("constructor", "props: ", props)

  }
  //Mounting
  componentWillMount()
  {
    // THIS GET FIRED BEFORE RENDER METHODS
    console.log("componentWillMount fired");
  }

  //MOUNTING
  componentDidMount() {
    // FOR setState AND FETCH DATA FOR API OR OUR JSON FILE
    console.log("componentDidMount fired");
  }

  //UPDATING
  componentWillReceiveProps(nextProps) {
    //WHEN COMPONENT WILL RECEIVE NEW PROPS FROM PARENT
    console.log("componentWillReceiveProps fired, nextProps:", nextProps);
  }

  //UPDATING
  shouldComponentUpdate(nextProps, nextState) {
    // LET REACT KNOW IF A COMPONENT'S OUTPUT IS NOT AFFECTED BY THE CURRENT CHANGE IN STATE/PROPS
    console.log("shouldComponentUpdate fired");
    return true;
  }

  //UPDATING
  componentWillUpdate(nextProps, nextState) {
    // WHEN THERE IS A CHANGE IN STATE AND THE COMPONENT WILL RE-RENDER AND CAN COMPARE NEW PROPS/STATE WITH CURRENT STATE/PROPS
    console.log(
      "componentWillUpdate, nextProps:",
      nextProps,
      " nextState:",
      nextState
    );
  }
    //UPDATING
  componentDidUpdate(prevProps, prevState) {
    //WHEN THE COMPONENT RE-RENDERED AND CAN COMPARE PREVIOUS PROPS/STATE WITH NEW STATE/PROPS
    console.log(
      "componentDidUpdate, prevProps:",
      prevProps,
      " prevState:",
      prevState
    );
  }




  render() {
    return (
      <div>
        <Counter counter={this.state.counter} />
        <button onClick={this.incrementCounter}>Click1</button>
        Counter value: {this.props.counter}
      </div>
    )
  }
}

export default Counter
