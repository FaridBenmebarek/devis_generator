import React, { Component } from 'react'
import Item from './Item'
import { renderPDFInDOM } from './PdfMaker'

class EstimateForm extends Component {
  state = {
    id: '',
    title: '',
    customerFirstName: '',
    customerLastName: '',
    items: {}
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
  }

  handleChange = (evt, name) => {
    const value = evt.currentTarget.value
    this.setState({
      [name]: value
    })
  }

  addItem = () => {
    const id = Date.now().toString()
    const items = {...this.state.items}
    items[id] = {
      id: id,
      description: "",
      quantity:"",
      taxe: 0.2,
      amount: 0
    }
    this.setState({
      items: items
    })
  }

  handleItemChange = (evt, item, field) => {
    const value = evt.currentTarget.value
    const clonedItem = {...item}
    clonedItem[field] = value
    const clonedItems = {...this.state.items}
    clonedItems[clonedItem.id] = clonedItem
    this.setState({
      items: clonedItems
    })
  }

  render () {
    return (
      <div>
        <h2>Formulaire</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="id" id="id" placeholder="ID" value={this.state.id}
                 onChange={event => this.handleChange(event, 'id')}/><br/><br/>
          <input type="text" name="title" id="title" placeholder="Titre du devis" value={this.state.title}
                 onChange={event => this.handleChange(event, 'title')}/><br/><br/>
          <input type="text" name="customerFirstName" id="customerFirstName" placeholder="Prénom"
                 value={this.state.customerFirstName}
                 onChange={event => this.handleChange(event, 'customerFirstName')}/><br/><br/>
          <input type="text" name="customerLastName" id="customerLastName" placeholder="Nom"
                 value={this.state.customerLastName}
                 onChange={event => this.handleChange(event, 'customerLastName')}/><br/><br/>
          <button onClick={this.addItem} className="btn btn-info">Ajouter une ligne</button>
          {Object.keys(this.state.items).map((itemId, index) => (
            <Item key={index} item={this.state.items[itemId]} onItemChange={this.handleItemChange}/>
            ))}
          <br/><br/>
          <button onClick={()=> renderPDFInDOM(JSON.stringify(this.state))} className="btn btn-primary">Générer le devis</button>
        </form>
      </div>
    )
  }
}

export default EstimateForm