import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Form,FormGroup,FormControl, ControlLabel, Button} from 'react-bootstrap'

class App extends Component {
  render() {
    return (

<div id="div">


  <h1>SOY OTRA </h1>
  
<form method="post" className="Hola">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>Your Name: <input type="text" name="name"/></label>
          </p>
          <p>
            <label>Your Surname: <input type="text" name="surname"/></label>
          </p>

          <p>
            <label>Your Email: <input type="email" name="email"/></label>
          </p>
          <p>
            <label>Message: <textarea name="message" className="Tet"></textarea></label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
    </div>
    );
  }
}

export default App;



