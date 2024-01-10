import React from "react"

const EducationItem = ({ educationName, schoolName, knowledge }) => {
  return (
    <div className="education-item">
      <div className="education-top-container">
        <h1>{educationName}</h1>
      </div>

      <div className="education-middle-container">
        <p>{schoolName}</p>
      </div>

      <div className="education-bottom-container">
        <p>{knowledge}</p>
      </div>
    </div>
  )
}

export default EducationItem
