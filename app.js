const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address=process.argv[2]

if(address){
    geoCode(address,(error,{lattitude,longtitude,location})=>{
        if(error){
            return console.log(error)
        }
        forecast(lattitude,longtitude,(ferror,fdata)=>{
            if(ferror){
                console.log(ferror)
            }
            console.log(location)
            console.log(fdata)
        })    
    })
}else{
    console.log('Please Provide Address')
}


