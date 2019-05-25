import React from 'react'

const Item = (props) => {
  return (
        <div className="container item">
          <div className="row">
            <div className="col">
              <input type="text" name="description" value={props.item.description}
                     onChange={evt => props.onItemChange(evt, props.item, 'description')} placeholder="Description"/>
            </div>
            <div className="col">
              <input type="number" name="quantité" value={props.item.quantity}
                     onChange={evt => props.onItemChange(evt, props.item, 'quantity')} placeholder="Quantité"/>
            </div>
            <div className="col">
              <input type="text" name="taxe" value={props.item.taxe}
                     onChange={evt => props.onItemChange(evt, props.item, 'taxe')} placeholder="Taxe"/>
            </div>
            <div className="col">
              <input type="text" name="amount" value={props.item.amount}
                     onChange={evt => props.onItemChange(evt, props.item, 'amount')} placeholder="Montant"/>
            </div>
          </div>
        </div>
  )
}

export default Item

