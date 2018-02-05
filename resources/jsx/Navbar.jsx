import React from 'react';

class NavBar extends React.Component {
    navigateToSignup(){
      $('html,body').animate({
         scrollTop: $("#form-area").offset().top
      },600);
    }
    render() {
      return (
        <div id="nav-inner">
          <div id="nav-logo">
            <img src="/images/Rowland_Handwriting.png" alt="Connor Rowland Logo"/>
          </div>
          <div id="nav-links--container">
            <a href="/about.html">About</a>
            <a href="">Contact</a>
            <a href="/resume.pdf">Resume</a>
          </div>
        </div>
      );
    }
};

export default NavBar;