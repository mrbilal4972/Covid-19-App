import React from 'react'

function GlobalRecoveries(props) {
  const {recoverd} = props;
  return (
    <>
        <div className="col-lg my-3 card totalData">
                <div className="card-body">
                <h5 className="card-title">Recoverd Persons </h5>
                <p className="card-text">{recoverd}</p>
                </div>
            </div>
    </>
  )
}

export default GlobalRecoveries
