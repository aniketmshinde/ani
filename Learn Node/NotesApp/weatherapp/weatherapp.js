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
request({
        url: "http://api.weatherstack.com/current?access_key=da79c84a605c3f9ff4063e3ac2418b76&query=18.5204,73.8567&units=m",
        json: true
    },
    (error, response) => {
        console.log("Completing this request & following is the response - ")
        //const responseBody = JSON.parse(response.body)
        console.log(response.body.current)

        //challenge # 1 goes here
        console.log("It is currently %f and feels likes %f", response.body.current.temperature,
            response.body.current.feelslike)
        console.log("It is currently %f degree out there and there are %f% of change of rain. And it's %s weather conditions " +
            "with visibility of %f meters",
            response.body.current.temperature,
            response.body.current.precip,
            response.body.current.weather_descriptions[0],
            response.body.current.visibility)
    })

//create MapBox api request to get the geocoordinates of the city - Pune
request({
        url: "https://api.mapbox.com/geocoding/v5/mapbox.places/Pune.json?access_token=pk.eyJ1IjoiYW5pa2V0bXNoaW5kZSIsImEiOiJja2VkeXQ1MG0wbWR0MnFzNGRpbWs5MXZ0In0.Jtsng3YZHb3OytVaAUHYfA&limit=1",
        json: true
    },
    (error, response) => {
        console.log("Place found is - %s. Ans geo-coordinate are -- Longitude: %s & Latitude: %s", response.body.features[0].place_name,
            response.body.features[0].center[0], response.body.features[0].center[1])
    }
)

console.log("coming here ....")