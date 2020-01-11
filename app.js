const request =require('request')
const geocode=require('./utils/geocode.js')
const forecast=require('./utils/forecast')
const yargs = require('yargs')




geocode(yargs.argv.city,(error,response)=>{
    if(error){
      console.log(error)
    }
    console.log(response.location)
    
    forecast(response.lat, response.long, (error, data) => {
        if(error)
        console.log('Error', error)
        console.log('Data', data)
      })
    
})