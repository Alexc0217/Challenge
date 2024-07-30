class CreateEmployee < ActiveRecord::Migration[7.1]
  def change
    create_table :employees do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :role
      t.integer :manager_id

      t.references :company, foreign_key: true, index: true, null: false

      t.timestamps
    end
  end
end
