// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!

*/
window.addEventListener("load", function() {
   //entries
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   //submit
   let formSubmit = document.getElementById("formSubmit");
   //faulty items div
   let faultyItems = document.getElementById("faultyItems");
   // Header
   let launchStatus = document.getElementById("launchStatus");
   // faulty items div items
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let missionTarget = document.getElementById("missionTarget");
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then( function(json) {
         console.log(json);
         missionTarget.innerHTML = `<h2>Mission Destination</h2>
            <ol>
            <li>Name: ${json[3].name}</li>
            <li>Diameter: ${json[3].diameter}</li>
            <li>Star: ${json[3].star}</li>
            <li>Distance from Earth: ${json[3].distance}</li>
            <li>Number of Moons: ${json[3].moons}</li>
            </ol>
            <img src="${json[3].image}"></img>
            `;
      });
   });


   formSubmit.onclick = function() {
      if(pilotName.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = "Pilot not ready"

      } else if (copilotName.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = "Co-pilot not ready"

      } else if (fuelLevel.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         fuelStatus.innerHTML = "Fuel level too low for launch"
         
      } else if (cargoMass.value === "") {
         alert("All fields are required!");
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         fuelStatus.innerHTML = "Fuel level high enough for launch"
         cargoStatus.innerHTML = "Cargo mass too high for launch"
      
      } else if (!isNaN(pilotName.value) || !isNaN(copilotName.value) || isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Make sure to enter valid information for each field!")
         event.preventDefault();

      } else if (cargoMass.value > 10000) {
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         cargoStatus.innerHTML = "Cargo mass too high for launch"

      } else if (fuelLevel.value < 10000) {
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         fuelStatus.innerHTML = "Fuel level too low for launch"
       

      } else if (fuelLevel.value > 10000) {
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         fuelStatus.innerHTML = "Fuel level too high for launch"

      } else if (cargoMass.value <= 0) {
         event.preventDefault();
         faultyItems.style.visibility = "visible";
         launchStatus.innerHTML = "Shuttle Not Ready for Launch";
         launchStatus.style.color = "red";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`
         cargoStatus.innerHTML = "Cargo mass too low for launch"

      } else {
         launchStatus.innerHTML = "Shuttle Is Ready for Launch";
         launchStatus.style.color = "green";
         event.preventDefault();
      }
   }

});

