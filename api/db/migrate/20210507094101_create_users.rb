class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :age
      t.string :country
      t.string :city
      t.integer :gender
      t.boolean :activated , default: false
      t.string :password_digest
      t.string :remember_digest
      t.string :temp_number_digest

      t.timestamps
    end
  end
end
