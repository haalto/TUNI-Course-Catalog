const axios = require('axios')
const fs = require('fs')

let facultyNumber = [1, 2, 3, 7, 9]

for (i of facultyNumber) {
    data(i)
}

async function data (i) {  
    
  const url = (`https://sis-tuni.funidata.fi/kori/api/course-unit-search?activityPeriod=2019-08-26,2019-10-21&activityPeriod=2019-10-21,2020-01-01&activityPeriod=2020-01-01,2020-03-02&activityPeriod=2020-03-02,2020-06-01&limit=2000&orgId=tuni-org-101000000${i}&showMaxResults=false&start=0&uiLang=fi&universityOrgId=tuni-university-root-id&validity=ONGOING_AND_FUTURE&validityPeriod=2019-08-26,2019-10-21&validityPeriod=2019-10-21,2020-01-01&validityPeriod=2020-01-01,2020-03-02&validityPeriod=2020-03-02,2020-06-01`)   
  const writer = fs.createWriteStream(`${i}.json`)

  const response = await axios({
    url,
    method: 'GET',
    responseType: 'stream'
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on('finish', resolve)
    writer.on('error', reject)
  })
}








