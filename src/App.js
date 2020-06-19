import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Incident from './Incident'
import reportPage from './reportPage'

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <div className='container'>
              <Route exact path='/' component={Incident} />
              <Route exact path='/incidentReport' component={reportPage} />
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}
