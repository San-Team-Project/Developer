import React, { Component } from 'react'
import DoctorService from './DoctorService'

const doctorService = new DoctorService();

export class DoctorList extends Component {
  constructor(props){
    super(props);

    this.state = {
      customers: [],
      nextPageURL: ''
    }
    // this.handleDelete = this.handleDelete.bind(this);

  }
  componentDidMount() {
   var self = this;
   doctorService.getDoctors().then((result) => {
     console.log(result);
     self.setState({ customers: result.data})
   });
  }

  render() {
    return (
      <div>
        <div className="row">
{this.state.customers.map( c =>         
            <div className=" col-sm-4 " key={c.pk}>
              <div className="card listing-preview">
             
                <img className="card-img-top" src={c.photo} alt="" style={{height: "220px"}} />
                <div className="card-img-overlay">
                  <h2>
                    <span className="badge badge-success text-white" style={{float: "left"}}>New</span>
                  </h2>
                </div>
                <div className="card-body">
                  <div className="listing-heading text-center">
                    <h4 className="text-primary"><i className=" fa fa-user"></i>  {c.name}   <i className="fa fa-check text-white bg-success" style={{padding: "5px", borderRadius: "50%", color:"white", boxShadow: "3px 3px 3px green", fontSize:"16px"}}></i></h4>
                    
                    <h5>
                      <i className="fa fa-map-marker text-success">  { c.state }, { c.country }</i></h5>
                  </div>
                  <hr />
                  <div className="row text-info text-center">
                    <div className="col-12">
                      <h5><i className=" fa fa-user-md"></i> { c.specialization } </h5>
                      <p><i className=" fa fa-clock"></i> { c.availabel } </p>
                      <hr/>
                      <span style={{float: "right"}}><a href="tel:{ c.phone }"><i className="fa fa-phone bg-success " style={{padding: "17px", borderRadius: "50%", color:"white", boxShadow: "3px 3px 3px green"}}  ></i></a></span>
                      <span style={{float: "left"}}><a href="mailto:{ c.email }"> <i className=" fa fa-envelope bg-danger"  style={{padding: "17px", borderRadius: "50%", color:"white", boxShadow: "3px 3px 3px red"}}  > </i></a></span>
                      </div>
                    
                  </div>
                  
                  
                  <hr />
                  <a href="{{ listing.get_absolute_url }}" className="btn btn-primary btn-block" ><i className="fa fa-eye"></i>  More Info</a>
                </div>
              </div>
            </div>
        
)}
      </div>
      </div>
    )
  }
}

export default DoctorList
