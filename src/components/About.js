import React from 'react';
import paceman from '../paceman.svg';

class About extends React.Component {
    render() {
       return (
          <div>
             <h1>About...</h1>
             <img src={paceman} className="App-logo" alt="logo" />
          </div>
       )
    }
  }
  export default About;