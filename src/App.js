import React, {Component} from 'react'
import './App.css'

import Info from './components/Info'

class App extends Component{
  state = {
    showForm: true
  }

  render () {
    return (
      <div className="container">
        <div className="header">
          <h1>Générateur de Devis</h1>
        </div>

        <Info/>
      </div>
    )
  }
}

export default App
