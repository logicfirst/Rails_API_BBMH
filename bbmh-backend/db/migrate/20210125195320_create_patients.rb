class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :phone
      t.string :issue
      t.string :appointment
      t.timestamps
    end
  end
end
