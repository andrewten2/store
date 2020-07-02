import React,{Component} from 'react';
import ErrorIndicator from '../error-indicator';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './app.css'


export default class App extends Component {

  render() {
   
    return <div><ErrorIndicator /></div>

  }
};