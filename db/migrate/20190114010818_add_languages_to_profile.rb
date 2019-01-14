class AddLanguagesToProfile < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :languages, :string
  end
end
