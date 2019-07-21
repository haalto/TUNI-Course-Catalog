import React, { useState } from 'react'
import courseService from '../services/courses'
import Catalog from './Catalog'

const App = () => {  

  const [ courses, setCourses ] = useState({
                                            firstPeriod: [],
                                            secondPeriod: [],
                                            thirdPeriod: [],
                                            fourthPeriod: []
                                          })                                          
  const [ filter, setFilter] = useState("")
  const [ showCatalog, setShowCatalog ] = useState(false)
  const [ activeFaculty, setActiveFaculty ] = useState("")
  const [ isLoading, setIsLoading] = useState(false)                                       
  const facultyIds = ['ITC', 'MAB', 'EDU', 'LC', 'SOC']
                                        
  const handleShowDetails = (id, period) => {
    if (period === 1) {
      const coursesCopy = {secondPeriod: courses.secondPeriod, thirdPeriod: courses.thirdPeriod, fourthPeriod: courses.fourthPeriod, firstPeriod: courses.firstPeriod.map(c => c.id === id ? {...c, showDetails: !c.showDetails} : c)}
      setCourses(coursesCopy)
    } else if (period === 2) {
      const coursesCopy = {firstPeriod: courses.firstPeriod, thirdPeriod: courses.thirdPeriod, fourthPeriod: courses.fourthPeriod, secondPeriod: courses.secondPeriod.map(c => c.id === id ? {...c, showDetails: !c.showDetails} : c)}  
      setCourses(coursesCopy)
    } else if (period === 3) {
      const coursesCopy = {secondPeriod: courses.secondPeriod, firstPeriod: courses.firstPeriod, fourthPeriod: courses.fourthPeriod, thirdPeriod: courses.thirdPeriod.map(c => c.id === id ? {...c, showDetails: !c.showDetails} : c)}
      setCourses(coursesCopy)
    } else {
      const coursesCopy = {secondPeriod: courses.secondPeriod, thirdPeriod: courses.thirdPeriod, firstPeriod: courses.firstPeriod, fourthPeriod: courses.fourthtPeriod.map(c => c.id === id ? {...c, showDetails: !c.showDetails} : c)}
      setCourses(coursesCopy)
    }
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const handleFacultyClick = (id) => {  

    setIsLoading(true)

    courseService.getCourses(id)
    .then(courses => {

      const courseData = {
                          firstPeriod: [],
                          secondPeriod: [],
                          thirdPeriod: [],
                          fourthPeriod: []
                        }

      courses.forEach(course => {       
        
          const startDate = new Date(course.activityPeriods[0].startDate).getTime()
          const endDate = new Date(course.activityPeriods[0].endDate).getTime()
          const courseCopy = {...course, showDetails: false}

          if (startDate < new Date('2019-10-20').getTime()) {
            courseData.firstPeriod.push(courseCopy)
          }
          if ((startDate >= new Date('2019-10-21').getTime() && startDate <= new Date('2019-12-30').getTime()) || (endDate >= new Date('2020-10-21').getTime() && startDate <= new Date('2019-10-20').getTime())) {
            courseData.secondPeriod.push(courseCopy)
          }
          if ((startDate >= new Date('2020-01-01').getTime() && startDate <= new Date('2020-03-01').getTime()) || (endDate >= new Date('2020-03-01').getTime() && startDate <= new Date('2020-01-01').getTime())) {
            courseData.thirdPeriod.push(courseCopy)
          }
          if (startDate >= new Date('2020-03-02').getTime()) {
            courseData.fourthPeriod.push(courseCopy)
          }
      })
      
      //console.log(courseData.firstPeriod)

      if (id === 'ITC') {
        setActiveFaculty('Faculty of Information and Technology and Communication Sciences')
      } else if (id === 'MAB') {
        setActiveFaculty('Faculty of Management and Business')
      } else if (id === 'EDU') {
        setActiveFaculty('Faculty of Education and Culture')
      } else if (id === 'LC') {
        setActiveFaculty('Language Centre')
      } else if (id === 'SOC') {
        setActiveFaculty('Faculty of Social Sciences')
      }

      setIsLoading(false)
      setCourses(courseData)
      setShowCatalog(true)
    })
    .catch(error => {
      console.log(error)
    })
  }
  
  return (
    <div className="container">
      <Catalog 
        facultyIds={facultyIds}
        handleFacultyClick={handleFacultyClick}
        handleShowDetails={handleShowDetails}
        handleFilterChange={handleFilterChange}    
        courses={courses}
        filter={filter}
        showCatalog={showCatalog}    
        activeFaculty={activeFaculty}
        isLoading={isLoading}
      />
    </div>
  )
}

export default App
