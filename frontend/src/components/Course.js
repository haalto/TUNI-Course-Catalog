import React from 'react'

const Course = ( {course, handleShowDetails, period} ) => {

    const { id, name, code, credits, showDetails, activityPeriods } = course
  
    //console.log(showDetails)
    const details = () => {
      return (
        <div>
          <div className="alert alert-info">
            <p>Starting date: {activityPeriods[0].startDate}</p>
            <p>End date: {activityPeriods[0].endDate}</p>
          </div>
        </div>
      )
    }
  
    return (
      <div >
        <button className="btn btn-outline-primary m-1" onClick={() => handleShowDetails(id, period)}>{code} {name} {credits.max} op</button>
        <div>{showDetails ? details() : ""}</div>
      </div>
    )
  }

export default Course