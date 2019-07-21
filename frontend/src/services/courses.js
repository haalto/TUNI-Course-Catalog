import axios from 'axios'

const baseUrl = 'http://localhost:3001/api/faculty/'

const getCourses = (id) => {
    const request = axios.get(`${baseUrl}${id}`)
    return request.then(response => {
        return response.data
    })
}

export default {
    getCourses
}