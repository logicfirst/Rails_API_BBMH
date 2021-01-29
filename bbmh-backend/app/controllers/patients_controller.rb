class PatientsController < ApplicationController
  def index
    patients = Patient.all
    render json:patients
  end


  def create
    patients = Patient.create(patient_params)
    render json:patients
  end

  def patient_params
    params.require(:patient).permit(:name, :phone, :issue, :appointment)
  end
end
