import React from 'react'

const Info = (props) => {
  return (
    <div className="btn-group devis">
      <h4 className="subTitle">Nouveau Devis</h4>
      <button className="btn btn-success" onClick={props.onHandleShowEstimateForm}>Créer</button>
    </div>
  )
}

export default Info