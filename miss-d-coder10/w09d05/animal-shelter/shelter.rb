class Shelter
  attr_reader :name
  attr_reader :capacity, :animals

  def initialize(name)
    @name = name
    @capacity = 20
    @animals = []
    @registered_clients = []
  end

  def add_animal(animal)
    @animals << animal
  end

  def add_client(client)
    @registered_clients = client

  end
end
