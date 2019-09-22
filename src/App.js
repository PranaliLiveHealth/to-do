import React, { Component } from 'react';
import './App.css';
import {Row, Col, Button} from 'reactstrap';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {TodoTrial} from './TodoTrial.jsx';

class App extends Component {
  render() {
    return (
    <div>
          <TodoTrial />
    </div>
    );
  }
}

export default App;
