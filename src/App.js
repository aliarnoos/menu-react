import React, { Component } from 'react';
import Card from './components/Card';
import './styles.css'

class App extends Component {
  state = {  }
 
  render() { 

    return (
      <div className='main'>
        <div className='nav-btns'>
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Shakes</button>
        </div>
        <div className='main-div'>
          <Card/>         
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
      </div>
    );
  }
}

export default App;

