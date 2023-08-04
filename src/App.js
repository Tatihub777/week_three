
import './App.css';
import { Component } from 'react';
import { Likes } from './Likes';
import { NameInput } from './NameInput';

class App extends Component {
  render() {
    return ( 
      <div>
        <Likes />
    <NameInput />
      </div>
    
  );
  }
  
}

  


export default App;
