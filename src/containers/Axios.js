import React, { Component } from 'react'
import axios from 'axios';

class Axios extends Component {
  constructor(props){
    super(props);
    this.state ={
      // person: []
      name: ''
    }
  }
  handleChange = event => {
    this.setState({  name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    }

  // componentDidMount(){
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const person = res.data;
  //       this.setState({ person })
  //     })
  // }
  render() {
    return (
      // <ul>
      //   { this.state.persons.map(person => <li>{person.name}</li>)}
      // </ul>
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>


    )
  }
}

export default Axios
