import React from 'react'

function GlobalDeaths(props) {
  const {death} = props;
  return (
    <>
            <div className="col-lg my-3 card totalData">
                <div className="card-body">
                <h5 className="card-title">Death Occured </h5>
                <p className="card-text">{death} </p>
                </div>
            </div>
    </>
  )
}

export default GlobalDeaths
