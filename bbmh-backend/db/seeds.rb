# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Patient.destroy_all
Doctor.destroy_all
Appointment.destroy_all

pt1 = Patient.create(name: "Larry", phone: "(831)-555-1234")
pt2 = Patient.create(name: "Sandy", phone: "(831)-555-2345")
pt3 = Patient.create(name: "Mermaid Man", phone: "(831)-555-3456")
pt4 = Patient.create(name: "Dirty Bubble", phone: "(831)-555-4567")
pt5 = Patient.create(name: "Barnacle Boy", phone: "(831)-555-5678")

dt1 = Doctor.create(name: "Dr SpongeBob", specialty: "Feet", school: "Bikini Bottom Medical School", years_exp: 1, image_url: 'https://i.ytimg.com/vi/We0usDXyhqY/maxresdefault.jpg')
dt2 = Doctor.create(name: "Dr Krabs", specialty: "Noses", school: "Mrs Puffs School of Medicine and Driving School", years_exp: 3, image_url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35d3fb9c-67c5-4b69-a752-28854d1ffb39/dea8pxa-7652afae-f349-4efa-bd4c-39a9a9a7c902.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzVkM2ZiOWMtNjdjNS00YjY5LWE3NTItMjg4NTRkMWZmYjM5XC9kZWE4cHhhLTc2NTJhZmFlLWYzNDktNGVmYS1iZDRjLTM5YTlhOWE3YzkwMi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.mYdwHIVMY-fsxKdxrEFSTExslEESvCiW3udgmI2eVZE')
dt3 = Doctor.create(name: "Dr Squidward", specialty: "Hearts", school: "Krusty Krab University", years_exp: 5, image_url: 'https://static.wikia.nocookie.net/3361597e-30b3-43fb-adf9-a6257e7c8be2')
dt4 = Doctor.create(name: "Dr Plankton", specialty: "Claws", school: "School of Treachery", years_exp: 1, image_url: 'https://static.wikia.nocookie.net/heroes-and-villians/images/2/29/Flat%2C1000x1000%2C075%2Cf.u5.jpg/revision/latest/top-crop/width/360/height/450?cb=20180319193703')
dt5 = Doctor.create(name: "Dr Patrick", specialty: "Fins", school: "Rock Bottom Medical School", years_exp: 3, image_url: 'https://static.wikia.nocookie.net/spongebob/images/1/1c/Patrick_as_a_Doctor.png/revision/latest?cb=20161201182934')

Appointment.create(patient_id: pt1.id, doctor_id: dt4.id, ailment: "Broken Claw Bone", date: "01201999", time: "12:32", location: "Mr Krabs Office")
Appointment.create(patient_id: pt4.id, doctor_id: dt2.id, ailment: "Stuffy Nose", date: "05272001", time: "8:47", location: "Vault")
Appointment.create(patient_id: pt2.id, doctor_id: dt1.id, ailment: "Sprained Ankle", date: "06052000", time: "09:51", location: "Kitchen")
Appointment.create(patient_id: pt5.id, doctor_id: dt3.id, ailment: "Old Heart", date: "12251998", time: "10:36", location: "Dining Room")


