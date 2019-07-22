import React from 'react'

const Notification = () => {
    return (
      <div className="alert alert-danger">
        <p>
            This is the first version of the TUNI Unofficial Course Catalog. The data used by this 
            application is (atleast to my knowledge) only covers faculties and Tampere University Language Centre.
            The data is very limited in details and it might contain incorrect information regarding course details, 
            so please be aware of that and double check the course information from the official site.
        </p>
        <p>
            The courses are sorted by their course code which represents the degree they are related. Site is still under construction. 
            I will check for more filtering options and add a link to the source code later. 
        </p>
      </div>
    )
  }

export default Notification