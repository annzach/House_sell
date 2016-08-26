import React, { Component } from 'react';
import {Jumbotron, Button} from 'react-bootstrap';
import { Link } from 'react-router';

export default class Welcome extends Component {
  render() {
    return(
      <div className="container mainContainer">
        <div className="row">
          <Jumbotron>
            <h1 className="text-center">Welcome to Animal Shelter!</h1>
            <p className='text-center'><img src="https://www.essential-life.co.za/images/easyblog_images/973/responsible-pet-ownership-2.jpg" alt="bear"/></p>
          </Jumbotron>
        </div>

      </div>
    )
  }
}
