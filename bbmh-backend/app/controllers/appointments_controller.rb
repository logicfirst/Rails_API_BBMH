class AppointmentsController < ApplicationController

  def index
    appointments = Appointment.all
    render json: appointments, :include => [:patient, :doctor]
  end
  

  def create 
    appointments = Appointment.create(appointment_params)
    render json: appointments, :include => [:patient, :doctor]
  end

  def appointment_params
    params.require(:appointment).permit(:patient_id, :doctor_id, :ailment, :date, :time, :location)
  end


end
