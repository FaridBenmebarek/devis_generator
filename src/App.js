import React, { Component } from 'react'
import './App.css'

import Info from './components/Info'
import EstimateForm from './components/EstimateForm'

class App extends Component {
  state = {
    showForm: true
  }

  handleShowEstimateForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render () {
    return (
      <div className="container">
        <div className="header">
          <h1>Générateur de Devis</h1>
        </div>

        <Info onHandleShowEstimateForm={this.handleShowEstimateForm}/>
        {this.state.showForm && <EstimateForm />}
      </div>
    )
  }
}

export default App
