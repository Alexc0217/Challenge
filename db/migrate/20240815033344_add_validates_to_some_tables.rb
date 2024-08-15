class AddValidatesToSomeTables < ActiveRecord::Migration[7.1]
  def change
    change_column :companies, :name, :string, null: false
    add_index :companies, :name, unique: true

    change_column :employees, :name, :string, null: false
    change_column :employees, :email, :string, null: false
    add_index :employees, :email, unique: true
  end
end
