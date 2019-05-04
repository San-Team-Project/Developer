import React, { Component } from 'react';
import './App.css';
import DoctorList from './doctor/DoctorList'
import Main from './Movie/Main'
import { BrowserRouter } from 'react-router-dom'
import { Route} from 'react-router-dom'
import { Navbar,Nav,Form ,FormControl,Button  } from 'react-bootstrap';
import BodyData from './components/BodyData'

// import Giphy from './account/giphy'
// import Testing from './account/Testing'
// import Counter from './account/Counter'

const BaseLayout = () => (
  <section id="facte"  className="wow fadeIn">
  <div className="container">
  
  <Navbar className="nav"  expand="lg" bg="info">
    <Navbar.Brand  href="#home" style={{ color:"white",fontSize: "30px", fontWeight: "bolder" }}>
     <img
          src="https://i.imgur.com/YsPuzSV.png"
          width="200"
          height="60"
          className="d-inline-block "
          alt="React Bootstrap logo"
        />
        {/* { 'Raj Movie'} */}
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ background: "palegreen" }} />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="mx-auto">
        <Nav.Link  href="/" style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}><i className="fa fa-home"></i>  Home </Nav.Link>
        <Nav.Link  href="/main" style={{ color:"palegreen" ,fontSize: "22px", fontWeight: "bolder"}}><i className="fa fa-star-o"></i>Main </Nav.Link>
        <Nav.Link  href="/body" style={{ color:"palegreen",fontSize: "22px", fontWeight: "bolder" }}><i className="fa fa-film"></i> Body </Nav.Link>
        <Nav.Link  href="#link" style={{ color:"palegreen" ,fontSize: "22px", fontWeight: "bolder"}}><i className="fa fa-user"></i > Popular </Nav.Link>
        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-0" />
        <Button variant="success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar> <hr className="hr" />
  
  <div className="content">
      <Route path="/" exact component={DoctorList} />
      <Route path="/main" exact component={Main} />
      <Route path="/body" exact component={BodyData} />
      
  </div>
  
  </div>
  </section>
    
    )
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <BaseLayout/>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
