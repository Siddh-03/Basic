const api_key = "976793de45f8fdeb277cc469d9df4176"
// const city = prompt("Enter a city:")

let btn = document.querySelector("button").addEventListener("click", async function(){
    let cityinput = document.querySelector("#city")
    let citylable = document.querySelector("label")
    let button = document.querySelector("button")
    let container = document.querySelector
    ("#container")
    let mainheading = document.querySelector("#mainheading")

    let city = cityinput.value.trim()

    if(city === ""){
        alert("Please Enter a City Name!")
        return
    }

    cityinput.style.display = "none"
    citylable.style.display = "none"
    button.style.display = "none"
    mainheading.style.display = "none"

    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        let data = await response.json()

        if(data.cod !== 200){
            throw new Error(data.message)
        }
        // container.innerHTML = ""

        let heading = document.createElement("h1")
        heading.innerText = `Weather Report of ${city}`
        container.prepend(heading)

        let temp = document.createElement("p")
        temp.innerText = `Temprature: ${data.main.temp} Celc`
        container.appendChild(temp);

        let humidity = document.createElement("p")
        humidity.innerText = `Humidity: ${data.main.humidity}`
        container.appendChild(humidity)

        let wind = document.createElement("p")
        wind.innerText = `Wind Speed: ${data.wind.speed}`
        container.appendChild(wind)
        
        let condition = document.createElement("p")
        condition.innerText = `Weather Condition: ${data.weather[0].main}`
        container.appendChild(condition)

        let refreshbtn = document.createElement("button")
        refreshbtn.innerText = "Check Another City"
        refreshbtn.style.marginTop = "10px"
        refreshbtn.addEventListener("click",function(){
            location.reload()
        })
        container.appendChild(refreshbtn)
    }catch(error){
        alert(`Error: ${error.message}`)
        location.reload()
    }
})
