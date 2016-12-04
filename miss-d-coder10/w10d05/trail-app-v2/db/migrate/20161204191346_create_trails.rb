class CreateTrails < ActiveRecord::Migration[5.0]
  def change
    create_table :trails do |t|
      t.string :name
      t.float :distance
      t.string :conditions
      t.references :country, foreign_key: true

      t.timestamps
    end
  end
end
