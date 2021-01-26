const URL = 'http://localhost:3000/patients'

document.addEventListener('DOMContentLoaded', ()=> {
    handleForm()
})


function handleForm(){
    const patientForm = document.querySelector('#contact-form')

    patientForm.name.value

    patientForm.addEventListener('submit', (event)=>{
        event.preventDefault();


    })
}