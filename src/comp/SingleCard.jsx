import React from 'react'
import pic1 from '../assets/pic.png'

const SingleCard = ({name}) => {
  return (
    <div>
        <div className="col">
            <div className="card">
              {/* <img src={pic1} className="card-img-top" alt="..."/> */}
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default SingleCard