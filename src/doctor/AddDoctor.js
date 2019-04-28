import React, { Component } from 'react'
import DoctorService from './DoctorService'
import axios from 'axios';

const doctorService = new DoctorService();

class AddDoctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const question = (await axios.get(`http://localhost:8000/api/doctor/${params.pk}`)).data;
    console.log(question)
    this.setState({
      question,
    });
  }

  componentDidMount(){
    const{ match: { params } } = this.props;
    if(params && params.pk)
    {
      doctorService.getDoctor(params.pk).then((c) => {
        this.refs.firstName.value = c.first_name;
        this.refs.lastName.value = c.last_name;
        this.refs.email.value = c.email;
        this.refs.phone.value = c.phone;
        this.refs.address.value = c.address;
        this.refs.description.value = c.description;
      })
    }
  }

  handleCreate(){
    doctorService.createDoctor({
        "first_name": this.refs.firstName.value,
        "last_name": this.refs.lastName.value,
        "email": this.refs.email.value,
        "phone": this.refs.phone.value,
        "address": this.refs.address.value,
        "description": this.refs.description.value
    }).then((result) =>{
      alert("Thanks For Contact with us. We will contact with us!!");
    }).catch(()=>{
      alert('There was an error! Please re-check your form.');
    });
  }

  handleUpdate(pk){
    customersService.updateCustomer(
      {
        "pk": pk,
        "first_name": this.refs.firstName.value,
        "last_name": this.refs.lastName.value,
        "email": this.refs.email.value,
        "phone": this.refs.phone.value,
        "address": this.refs.address.value,
        "description": this.refs.description.value
    }          
    ).then((result)=>{
      console.log(result);
      alert("Customer updated!");
    }).catch(()=>{
      alert('There was an error! Please re-check your form.');
    });
  }

  handleSubmit(event){
    const{ match: { params } } = this.props;

    if(params && params.pk){
      this.handleUpdate(params.pk);
    }
    else{
      this.handleCreate();
    }

    event.preventDefault();
  }

  
  render() {
    const {question} = this.state;

    if (question === null) return <p>Loading ...</p>;

    return (
      <div>
        
      </div>
    )
  }
}

export default AddDoctor
