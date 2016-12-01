class CreateMountains < ActiveRecord::Migration[5.0]
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :location
      t.string :height
      t.string :image
      t.string :date_of_first_summit

      t.timestamps
    end
  end
end
