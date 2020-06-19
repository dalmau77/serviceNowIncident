import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidentReport: [],
    }
  }

  componentDidMount() {
    axios.get('/api/now/table/incident')
      .then(res => res.data.result)
      .then(incidentReport => this.setState({ incidentReport }))

  }
  render() {
    const Incidents = () => {
      return (
        <div>
          {this.state.incidentReport.map((i) =>
            (<div key={i.sys_id} className="card darken-1">
              <div className="card-content">
                <span className="card-title" style={{ color: 'green' }}>
                  {i.number}
                </span>
                <p className="description">{i.short_description}</p>
                <button style={{ marginTop: 10 }} className="ui basic button">View Incident</button>
              </div>
            </div>))}
        </div>
      )
    }
    return (
      <div className='container'>
        <nav>
          <div className='nav-wrapper center aligned blue' style={{ marginBottom: 40, fontSize:40 }} >
            Open Incident Report
        </div>
        </nav>
        <div style={{marginTop:40}}>
        <Incidents />
        </div>
      </div>
    )
  }
}


export default App;
