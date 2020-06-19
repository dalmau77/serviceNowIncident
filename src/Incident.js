import React, { Component } from 'react';
import axios from 'axios';
import M from 'materialize-css';
import { Modal, Button } from 'react-materialize';

class Incident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      incidentReport: [],
      description: '',
      short_description: '',
      number: '',

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
                <h5 style={{ color: 'black' }}>
                  {i.number}
                </h5>
                <p className="description">Short Description: {i.short_description}</p>
                <p style={{ marginBottom: 5 }}>Category: {i.category}</p>
                <Modal
                  actions={[
                    <Button flat modal="close" node="button" waves="green">Close</Button>
                  ]}
                  bottomSheet={false}
                  fixedFooter={false}
                  header={i.number}
                  id="Modal-0"
                  open={false}
                  options={{
                    dismissible: true,
                    endingTop: '10%',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    opacity: 0.5,
                    outDuration: 250,
                    preventScrolling: true,
                    startingTop: '4%'
                  }}
                  trigger={<Button node="button">View Incident</Button>}
                >
                  <img className='brand-logo right' src="sn-logo-dark-green-email.png" width="130" height="25" style={{ marginBottom: 10 }} />
                  <p>
                    Description: {i.description}
                  </p>
                  <p>
                    Priority: {i.urgency}
                  </p>
                  <p>
                    Opened at: {i.opened_at}
                  </p>
                </Modal>
              </div>
            </div>))}
        </div>
      )
    }
    return (
      <div className='container'>
        <nav className='nav-extended'>
          <div className='nav-wrapper center aligned teal' style={{ marginBottom: 40, fontSize: 15 }} >
            Incident Report
          <img className='brand-logo right' src="sn-logo-dark-green-email.png" width="130" height="25" />
          </div>
        </nav>
        <div style={{ marginTop: 40 }}>
          <Incidents />
        </div>
      </div>
    )
  }
}


export default Incident;
