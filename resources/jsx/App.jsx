import React from 'react';
import ReactDOM from 'react-dom'

import SignupForm from './SignupForm.jsx';

$(document).ready(function(){
  if(document.getElementById('get-started--form')){
    ReactDOM.render(<SignupForm/>, document.getElementById('get-started--form'));
  }
  if(document.getElementById('nav-bar')){
    ReactDOM.render(<Navbar/>, document.getElementById('nav-bar'));
  }
})
