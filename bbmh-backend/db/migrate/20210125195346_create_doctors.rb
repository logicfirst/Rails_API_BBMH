class CreateDoctors < ActiveRecord::Migration[6.0]
  def change
    create_table :doctors do |t|
      t.string :name
      t.string :specialty
      t.string :school
      t.integer :years_exp
      t.timestamps
    end
  end
end
