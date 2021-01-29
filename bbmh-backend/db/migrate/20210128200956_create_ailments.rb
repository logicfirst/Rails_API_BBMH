class CreateAilments < ActiveRecord::Migration[6.0]
  def change
    create_table :ailments do |t|

      t.timestamps
    end
  end
end
