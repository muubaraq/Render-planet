const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
    }
]

// Task:
// Write a function to render 
// the planets from the planets array using JavaScript.
 
// Stretch goals:
// - 1. Show planet facts on hover
// - 2. Make one side of the planets dark (you can do this with one CSS property!)


// Your code here
function renderPlanets() {
    for (let i = 0; i < planets.length; i++) {
        let planet = planets[i]
        let planetDiv = document.createElement("div")
        planetDiv.classList.add("planet")
        planetDiv.style.background = planet.color
        planetDiv.innerHTML = planet.name
        planetDiv.addEventListener("mouseover", function() {
            let planetInfo = document.getElementsByClassName("diameter")[0]
            planetInfo.classList.add("planetInfo")
            planetInfo.innerHTML = `<h2>${planet.name}</h2><p>Diameter: ${planet.diameter}</p>`
            solarSystem.appendChild(planetInfo)
        })
        solarSystem.appendChild(planetDiv)
    }
    
}

// Call the function to render the planets
renderPlanets()






