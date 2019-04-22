import React, { Component } from 'react';
import Header from './components/Header'
import Contact from './components/Contact'
import Index from './components/Index'
import RegisterForm from './components/RegisterForm'
import Login from './components/Login'
// import Register from './components/Register'
import './App.css';
import { Route} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// import NavBar from './views/NavBar'
const BaseLayout = () => (
  
  <div className="content">
          <Route path="/contact" exact component={Contact} />
          <Route path="/" exact component={Index} />
          <Route path="/login" exact component={Login} />
          {/* <Route path="/signup" exact component={Register} /> */}
          <Route path="/register" exact component={RegisterForm} />
  </div>
)
class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Header />
          <BaseLayout/>
      </BrowserRouter> 
    );
  }
}

export default App;
