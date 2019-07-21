import React from 'react'

const Filter = ( {filter, handleFilterChange} ) => {

    return (
      <div className="mt-5">
        <div>Filter by course name <input value={filter} onChange={handleFilterChange}></input></div>
      </div>
    )
  }

export default Filter