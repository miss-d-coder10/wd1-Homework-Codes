class Country < ApplicationRecord
  has_many :trails

  def to_s
    "#{name}"
  end

end
