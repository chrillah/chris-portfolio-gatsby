import React from "react"

const EducationItem = ({ educationName, schoolName, knowledge }) => {
  return (
    <div className="education-item">
      <div className="education-top-container">
      <h3>{schoolName}</h3>
      </div>

      <div className="education-middle-container">
        <h1>{educationName}</h1>
      </div>

      <div className="education-bottom-container">
        <p>Tools & Knowledge</p>
        <p>{knowledge}</p>
      </div>
    </div>
  )
}

export default EducationItem
