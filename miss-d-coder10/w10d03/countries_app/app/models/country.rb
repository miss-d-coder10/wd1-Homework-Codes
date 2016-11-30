class Country < ApplicationRecord
  belongs_to :continent
  has_and_belongs_to_many :languages
end
