class CreateLinks < ActiveRecord::Migration[5.2]
  def change
    create_table :links do |t|
      t.integer :profile_id_1
      t.integer :profile_id_2
      t.belongs_to :profile, foreign_key: true

      t.timestamps
    end
  end
end
