import React from 'react'
import Course from './Course'

const CourseViewer = ( {filter, courses, handleShowDetails} ) => {

    const mappedCoursesFirstPeriod = () => courses.firstPeriod.sort((a, b) => a.code < b.code ? -1 : (a.code > b.code ? 1 : 0)).map(course => {
      //console.log(course)
      if (filter === "") {
        return (<div key={`${course.id}-firstPeriod`}><Course period={1} course={course} handleShowDetails={handleShowDetails} /></div>)
      } else {
        if (course.name.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          return (<div key={`${course.id}-firstPeriod`}><Course period={1} course={course} handleShowDetails={handleShowDetails} /></div>)
        } else {
          return null
        }
      }    
    })
  
    const mappedCoursesSecondPeriod = () => courses.secondPeriod.sort((a, b) => a.code < b.code ? -1 : (a.code > b.code ? 1 : 0)).map(course => {
      if (filter === "") {
        return (<div key={`${course.id}-secondPeriod`}><Course period={2} course={course} handleShowDetails={handleShowDetails} /></div>)
      } else {
        if (course.name.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          return (<div key={`${course.id}-secondPeriod`}><Course period={2} course={course} handleShowDetails={handleShowDetails} /></div>)
        } else {
          return null
        }
      }
    })
  
    const mappedCoursesThirdPeriod = () => courses.thirdPeriod.sort((a, b) => a.code < b.code ? -1 : (a.code > b.code ? 1 : 0)).map(course => {
      if (filter === "") {
        return (<div key={`${course.id}-thirdPeriod`}><Course period={3} course={course} handleShowDetails={handleShowDetails} /></div>)
      } else {
        if (course.name.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          return (<div key={`${course.id}-thirdPeriod`}><Course period={3} course={course} handleShowDetails={handleShowDetails} /></div>)
        } else {
          return null
        }
      }
    })
  
    const mappedCoursesFourthPeriod = () => courses.fourthPeriod.sort((a, b) => a.code < b.code ? -1 : (a.code > b.code ? 1 : 0)).map(course => {
      if (filter === "") {
        return (<div key={`${course.id}-fourthPeriod`}><Course period={4} course={course} handleShowDetails={handleShowDetails} /></div>)
      } else {
        if (course.name.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
          return (<div key={`${course.id}-fourthPeriod`}><Course period={4} course={course} handleShowDetails={handleShowDetails} /></div>)
        } else {
          return null
        }
      }
    })
  
    return (
      <div className="container mt-5">
        <h3>First period</h3>
        {mappedCoursesFirstPeriod()}
        <h3>Second period</h3>
        {mappedCoursesSecondPeriod()}
        <h3>Third period</h3>
        {mappedCoursesThirdPeriod()}
        <h3>Fourth period</h3>
        {mappedCoursesFourthPeriod()}
      </div>
    )
}

export default CourseViewer