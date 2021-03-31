const URL = 'http://localhost:3000/patients'
const URL2 = 'http://localhost:3000/doctors'
const URL3 = 'http://localhost:3000/appointments'

let currentAilement = ''
let currentDoctor = ' '


document.addEventListener('DOMContentLoaded', ()=> {
    handleForm();
})


function fetchDoctors(){
    fetch(URL2)
    .then((res) => res.json())
    .then(DoctorData => DoctorData.forEach((doc) => renderDoctors(doc)))
    console.log("r we here yet");
    (doctor)=> console.log(doctor.name)
    let gg = document.createElement('div');
        gg.className = 'jkj';

    let tt = document.getElementById('pickyourdoctor')
        const pickit = `<h1>Pick your Doctor:</h1>`;
        gg.innerHTML = pickit;

        tt.appendChild(gg)
        

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
        currentAilement = 'Broken Claw Bone'
        fetchDoctors()
    })

    card2.addEventListener('click', (event)=>{
        event.preventDefault()
        currentAilement = 'Stuffy Nose'
        fetchDoctors()
    })

    card3.addEventListener('click', (event)=>{
        event.preventDefault()
        currentAilement = 'Sprained Ankle'
        fetchDoctors()
    })
}

function renderDoctors(doc){

    let docDiv = document.createElement('div');
        docDiv.className = 'cards-wrapper';

    const displayContent = `
    <div class="card-grid-space">
     <section id = "doctorButton">
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
        </section>
    </div>`;

    docDiv.innerHTML = displayContent;

    // let doctorButton = document.getElementById('doctorButton')
    //     doctorButton.addEventListener('click', (event)=>{
    //         event.preventDefault();
    //         currentDoctor = 'doc.name'
    //         makeAppointments()
    //     })

    let cardSec = document.getElementById('doctorGrid')
    cardSec.appendChild(docDiv)
    
    fetchAppointments();


}

// function makeAppointments(){
//     let newAppointment = {
//         ailment: currentAilement
//         date: 
//     }
// }

function fetchAppointments(){
    fetch(URL3)
    .then((res) => res.json())
    .then(apptData => apptData.forEach((appt) => renderAppointment(appt)))
    // (doctor)=> console.log(doctor.name)
}

function renderAppointment(appt){

    let apptCard = document.createElement('div')
        apptCard.className = 'cardContent'

    let apptContent = `
    <head>
  <link href="https://fonts.googleapis.com/css?family=Fira+Sans+Condensed:300,400,600i&display=swap" rel="stylesheet">
</head>
<header>  </header>
<div class="infocardContainer">
  <div id="main">
    <img src="${appt.doctor.image_url}"></img>
  </div>
  <div id="textbois">
    <h2>${appt.patient.name}'s Appointment Details</h2>
    <h4>Scheduled for ${appt.patient.appointment}</h4>
    <h4>Doctor: ${appt.doctor.name}</h4>
    <a>Ailment: ${appt.ailment}</a>
  </div>
</div>`;

  apptCard.innerHTML = apptContent;
  let apptCarddd = document.getElementById('appointmentsection')
  apptCarddd.appendChild(apptCard)

}



// function renderPatient(patient){
//     let patientDiv = document.querySelector('#test')
//     let patientList = document.createElement('ul')
//     let listElement = document.createElement('li')
//     patientDiv.appendChild(patientList)
//     patientList.appendChild(listElement)
//     listElement.innerText = patient.name
// }