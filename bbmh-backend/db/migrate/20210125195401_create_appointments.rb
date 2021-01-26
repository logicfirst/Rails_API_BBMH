class CreateAppointments < ActiveRecord::Migration[6.0]
  def change
    create_table :appointments do |t|
      t.integer :patient_id
      t.integer :doctor_id
      t.string :ailment
      t.string :date
      t.string :time 
      t.string :location
      t.timestamps
    end
  end
end
