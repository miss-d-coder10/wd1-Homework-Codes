class AddLanguagesToCountries < ActiveRecord::Migration[5.0]
  def change
    add_column :countries, :first_language, :string
  end
end
