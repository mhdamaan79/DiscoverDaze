import React from 'react'

const Refresh = (props) => {
  return (
    <div className="refresh">
        <h2>👀 Oops!! No tour left</h2>
        <button className="refreshBtn" onClick={() => props.setTour(props.data)}>
            Refresh
        </button>
    </div>
  )
}

export default Refresh;