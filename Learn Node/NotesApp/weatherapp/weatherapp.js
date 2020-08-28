console.log("Starting...")

setTimeout(() => {
    console.log("Timeout of 2 seconds has expired")
}, 2000)


setTimeout(() => {
    console.log("Timeout of 0 seconds has expired & what is happening here.")
}, 0)
console.log("stopping...")


const request = require("request")
//Location is now set to pune
request( {url: "http://api.weatherstack.com/current?access_key=da79c84a605c3f9ff4063e3ac2418b76&query=18.5204,73.8567&units=m",
                json: true},
    (error, response) => {
        console.log("Completing this request & following is the response - ")
        //const responseBody = JSON.parse(response.body)
        console.log(response.body.current)

        //challenge # 1 goes here
        console.log("It is currently %f and feels likes %f", response.body.current.temperature,
            response.body.current.feelslike)
        console.log("It is currently %f degree out there and there are %f% of change of rain. And it's %s weather conditions.",
            response.body.current.temperature,
            response.body.current.precip,
            response.body.current.weather_descriptions[0])
    })