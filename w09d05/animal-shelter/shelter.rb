class Shelter
  attr_reader :name
  attr_reader :capacity, :animals

  def initialize(name)
    @name = name
    @capacity = 20
    @animals = []
  end

  def add_animal(animal)
    @animals << animal
  end


end
