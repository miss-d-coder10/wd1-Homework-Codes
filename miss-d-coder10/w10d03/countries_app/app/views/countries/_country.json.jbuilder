json.extract! country, :id, :name, :image, :size, :population, :created_at, :updated_at
json.url country_url(country, format: :json)