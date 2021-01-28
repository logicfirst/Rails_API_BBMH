const URL = 'http://localhost:3000/patients'

document.addEventListener('DOMContentLoaded', ()=> {
    handleForm()
    // fetchPatient()
})


function fetchPatient(){
    fetch(URL)
    .then((res) => res.json())
    .then(patientData => patientData.forEach((patient) => renderPatient(patient)))
}

function handleForm(patient){
    const showForm = document.querySelector('#contact-form');
    const contactName = document.querySelector('#contact-name')
    // contactName = patient.name
    const contactPhoneNumber = document.querySelector('#contact-pn')
    // contactPhoneNumber = patient.phone
    // const contactIssue = document.querySelector('#contact-issue')

    
    // let patientId = patient.id

    showForm.addEventListener('submit', (event) => {
        console.log(event.target.number.value)
        event.preventDefault();
        let newPatient = {
            name:  event.target.name.value,
            phone: event.target.number.value
        }

        // reqPackage = {
        //     headers: {"Content-Type": "application/json"},
        //     method: "POST",
        //     body: JSON.stringify(newPatient)   
        // }

        fetch(URL, {
            headers: {"Content-Type": "application/json"},
            method: "POST",
            body: JSON.stringify(newPatient) 
        })
            .then(res => res.json())
            .then(renderPatient)



      });
}

function renderPatient(patient){
    let patientDiv = document.querySelector('#test')
    let patientList = document.createElement('ul')
    let listElement = document.createElement('li')
    patientDiv.appendChild(patientList)
    patientList.appendChild(listElement)
    listElement.innerText = patient.name
}