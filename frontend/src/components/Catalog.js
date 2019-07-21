import React from 'react'
import FacultyButton from './FacultyButton'
import Notification from './Notification'
import Filter from './Filter'
import CourseViewer from './CourseViewer'

const Catalog = ( {isLoading, activeFaculty, facultyIds, handleFacultyClick, handleShowDetails, handleFilterChange, courses, filter, showCatalog }) => {

    //console.log(handleShowDetails)
  
    const filterAndCatalog = () => {
      return (
        <div>
          <h2>{activeFaculty}</h2>
          <Filter filter={filter} handleFilterChange={handleFilterChange}/>
          <CourseViewer courses={courses} handleShowDetails={handleShowDetails} filter={filter}/>
        </div>
      )
    }

    const loadingNotification = () => {
        return (
            <div className="alert alert-warning">Loading...</div>
        )
    }
   
    return (
      <div className="container">
        <div>
          <Notification/>
          <FacultyButton facultyName={"ITC"} facultyId={facultyIds[0]} handleFacultyClick={handleFacultyClick}/>
          <FacultyButton facultyName={"MAB"} facultyId={facultyIds[1]} handleFacultyClick={handleFacultyClick}/>
          <FacultyButton facultyName={"EDU"} facultyId={facultyIds[2]} handleFacultyClick={handleFacultyClick}/>
          <FacultyButton facultyName={"LC"} facultyId={facultyIds[3]} handleFacultyClick={handleFacultyClick}/>
          <FacultyButton facultyName={"SOC"} facultyId={facultyIds[4]} handleFacultyClick={handleFacultyClick}/>
        </div>  
        {isLoading ? loadingNotification() : ''}
        {showCatalog ? filterAndCatalog() : `Please pick a faculty above`}            
      </div>
    )
}

export default Catalog