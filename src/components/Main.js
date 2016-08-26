import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Main extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link to='/' className="navbar-brand" href="#">Adopt a Pet</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li><Link to='/'>HOME</Link></li>
                <li className="dropdown">
                  <Link to='/clients'>
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CLIENTS <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                      <li><Link to="/clients">All Clients</Link></li>
                      <li role="separator" className="divider"></li>
                      <li><Link to="/seachClient">Search One</Link></li>
                    </ul>
                  </Link>
                </li>
                <li><Link to='/animals'>PETS</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
