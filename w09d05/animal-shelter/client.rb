class Client
  attr_reader :first_name, :last_name
  attr_accessor :pets

  def initialize(first_name, last_name, pets)
    @first_name = first_name
    @last_name = last_name
    @pets = []
  end

# add adopted pet from animal shelter
  def add_pets(pet)
    @pet << pet
  end

end
