class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :name
      t.integer :age
      t.string :gender
      t.string :location
      t.text :about
      t.text :why_joined
      t.string :facebook
      t.string :instagram
      t.string :phone
      t.string :whatsapp
      t.string :email
      t.decimal :latitude
      t.decimal :longitude

      t.timestamps
    end
  end
end
