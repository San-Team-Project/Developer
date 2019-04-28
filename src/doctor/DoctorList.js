import React, { Component } from 'react'
import DoctorService from './DoctorService'

const doctorService = new DoctorService();

class DoctorList extends Component {
  constructor(props){
    super(props);

    this.state = {
      doctors: [],
      nextPageURL: ''
    };
    this.nextPage = this.nextPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    var self = this;
    doctorService.getDoctors().then( result =>{
      console.log(result);
      self.setState({ doctors: result.data, nextPageURL: result.nextlink })
    });
  }

  handleDelete(e,pk){
    var self = this;
    doctorService.deleteDoctor({ pk: pk }).then(() => {
      var newArr = self.state.doctors.filter( obj =>{
        return obj.pk !== pk;
      });

      self.setState({doctors: newArr})
    });
  }

  nextPage(){
    var self = this;
    console.log(this.state.nextPageURL);
  }
  render() {
    return (
      <div>
      {/* {this.state.doctors.map( c =>

      )} */}
      </div>
    )
  }
}

export default DoctorList
