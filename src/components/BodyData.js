import React, { Component } from 'react'

class BodyData extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: "",
      data:[],
      filteredData:[]
    };
  }

  handleInputChnage = event =>{
    const query  = event.target.value;

    this.setState(prevState =>{
      const filteredData = prevState.data.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });
      return {
        query,
        filteredData
      };
    });
  };

  getData = () => {
    fetch(`http://localhost:8000/api/doctorr`)
      .then(response => response.json())
      .then(data => {
        const { query } = this.state;
        const filterData = data.filter(element => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });
        this.setState({
          data,
          filterData
        });
      });
  };

  componentWillMount(){
    this.getData();
  }
  render() {
    return (
      <div className="searchForm">
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
      </div>
    )
  }
}

export default BodyData;
