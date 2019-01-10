class FixLinks < ActiveRecord::Migration[5.2]
  def change
    rename_column :links, :profile_id_1, :profile_1_id
    rename_column :links, :profile_id_2, :profile_2_id
    remove_column :links, :profile_id
  end
end
