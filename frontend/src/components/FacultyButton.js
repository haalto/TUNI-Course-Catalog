import React from 'react'

const FacultyButton = ( {facultyName, facultyId, handleFacultyClick} ) => {
  
    return (   
        <button className="btn btn-primary m-4" onClick={() => handleFacultyClick(facultyId)}>{facultyName}</button>   
    )
  }

export default FacultyButton