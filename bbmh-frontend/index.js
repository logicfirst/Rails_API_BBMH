const URL = 'http://localhost:3000/patients'

document.addEventListener('DOMContentLoaded', ()=> {
    // handleForm()
    fetchPatient()
})


function fetchPatient(){
    fetch(URL)
    .then((res) => res.json())
    .then(patientData => patientData.forEach((patient) => renderPatient(patient)))
}

function renderPatient(patient){
    let patientDiv = document.querySelector('#test')
    let patientList = document.createElement('ul')
    let listElement = document.createElement('li')
    patientDiv.appendChild(patientList)
    patientList.appendChild(listElement)
    ListElement.innerText = patient.name
}