import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Q&App
      </Link>
      </nav>
    </div>
    )
  }
}

export default NavBar;


