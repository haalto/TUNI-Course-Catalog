/*

**************************************************************************

INFORMATION ABOUT THE APP

Backend for Tampere University course catalog.
Courses from following faculties are available: 

1. Faculty of Information Technology and Communication Sciences (ITC)
2. Faculty of Management and Business (MAB)
3. Faculty of Education and Culture (EDU)
4. Language Centre (LC)
5. Faculty of Social Sciences (SOC)

API-endpoint is .../api/faculty/:id

Use id numbers above to retrieve data from API.

All the data is originally retrieved from sis-tuni.funidata.fi

**************************************************************************
*/

//dependecies
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const axios = require('axios')
const expressSanitizer = require('express-sanitizer')

//data
const facultyIds = ['ITC', 'MAB', 'EDU', 'LC', 'SOC']

app.use(cors())
app.use(morgan('tiny'))
app.use(expressSanitizer())
app.use(express.static('build'))

app.get('/api/faculty', (req, res, next) => {
    res.json(facultyIds)
})

app.get('/api/faculty/:id', (req, res, next) => {

    const facultyId = req.sanitize(req.params.id)
    const isAvailable = facultyIds.includes(facultyId)   
    
    if (isAvailable) {
        
        let searchId = 0

        switch (facultyId) {
            case 'ITC':
                searchId = 1
                break
        
            case 'MAB':
                searchId = 2
                break

            case 'EDU':
                searchId = 3
                break

            case 'SOC':
                searchId = 7
                break

            case 'LC':
                searchId = 9
                break
        }

        const url = (`https://sis-tuni.funidata.fi/kori/api/course-unit-search?activityPeriod=2019-08-26,2019-10-21&activityPeriod=2019-10-21,2020-01-01&activityPeriod=2020-01-01,2020-03-02&activityPeriod=2020-03-02,2020-06-01&limit=2000&orgId=tuni-org-101000000${searchId}&showMaxResults=false&start=0&uiLang=fi&universityOrgId=tuni-university-root-id&validity=ONGOING_AND_FUTURE&validityPeriod=2019-08-26,2019-10-21&validityPeriod=2019-10-21,2020-01-01&validityPeriod=2020-01-01,2020-03-02&validityPeriod=2020-03-02,2020-06-01`)
        
        axios(url)
            .then(response => {
                return response.data.searchResults
            })
            .then(data => {
                res.json(data)
            })
            .catch(error => {
                next(error)
            })
    } else {
        const error = "Resource not found"
        next(error)
    }
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, req, res, next) => {
    console.error(error.message)
    if (error.name === 'CastError' && error.kind == 'ObjectId') {
        return res.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return res.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})