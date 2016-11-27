class Animal
  attr_reader :name, :breed, :gender
  attr_accessor :favourite_toys

  def initialize(name, breed, gender, favourite_toys)
    @name = name
    @breed = breed
    @gender = gender
    @favourite_toys = []
  end

  def add_toys(favourite_toy)
    @favourite_toys << favourite_to
  end
end
