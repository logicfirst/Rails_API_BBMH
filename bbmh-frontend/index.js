const URL = 'http://localhost:3000/patients'
const URL2 = 'http://localhost:3000/doctors'
const URL3 = 'http://localhost:3000/appointments'


document.addEventListener('DOMContentLoaded', ()=> {
    handleForm();
    fetchAppointments();
})


function fetchDoctors(){
    fetch(URL2)
    .then((res) => res.json())
    .then(DoctorData => DoctorData.forEach((doc) => renderDoctors(doc)))
    // (doctor)=> console.log(doctor.name)
}

function handleForm(patient){

    const showForm = document.querySelector('#contact-form');
    const contactName = document.querySelector('#contact-name')
    const contactPhoneNumber = document.querySelector('#contact-pn')

    showForm.addEventListener('submit', (event) => {
        // console.log(event.target.number.value)
        event.preventDefault();
        let newPatient = {
            name:  event.target.name.value,
            phone: event.target.number.value,
            issue: event.target.issue.value,
            appointment: event.target.appt.value
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
            .then(renderAilments)
      });
}

function renderAilments(){
    let adCards = document.querySelector('#card-section')
    let cardTitle = document.querySelector('#ailment-text')
        cardTitle.innerText = 'Pick your Ailment:'
    let displayCard = document.querySelector('#cards-wrapper')

    let card1 = document.querySelector('#card1')
    let card2 = document.querySelector('#card2')
    let card3 = document.querySelector('#card3')

    card1.addEventListener('click', (event)=>{
        event.preventDefault()
        fetchDoctors()
    })

    card2.addEventListener('click', (event)=>{
        event.preventDefault()
        fetchDoctors()
    })

    card3.addEventListener('click', (event)=>{
        event.preventDefault()
        fetchDoctors()
    })
}

function renderDoctors(doc){

    let docDiv = document.createElement('div');
        docDiv.className = 'cards-wrapper';

    const displayContent = `
    <div class="card-grid-space">
        <div class="num">Pick Your Doctor:</div>
        <a id = "card1" class="card" style="--bg-img: url(${doc.image_url})">
            <div>
                <h1>${doc.name}</h1>
                <p>Specialty: ${doc.specialty}</p>
                <p>${doc.school}</p>
                <div class="date">${doc.years_exp} years of experience</div>
                <div class="tags">
                <div class="tag">Select This Doctor</div>
                </div>
            </div>
        </a>
    </div>`;

    docDiv.innerHTML = displayContent;

    let cardSec = document.querySelector('#card-section')
    cardSec.appendChild(docDiv)

}

function fetchAppointments(){
    fetch(URL3)
    .then((res) => res.json())
    .then(apptData => apptData.forEach((appt) => console.log(appt)))
    // (doctor)=> console.log(doctor.name)
}



function renderPatient(patient){
    let patientDiv = document.querySelector('#test')
    let patientList = document.createElement('ul')
    let listElement = document.createElement('li')
    patientDiv.appendChild(patientList)
    patientList.appendChild(listElement)
    listElement.innerText = patient.name
}