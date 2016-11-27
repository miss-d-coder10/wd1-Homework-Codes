require_relative "animal"
require_relative "client"
require_relative "shelter"
@shelter = Shelter.new "BeKind Shelter"

# @animal = Animal.new "Billy, Husky, Male, [bones, ball]"
# @client = Client.new "Marilyn, Monroe"


# def list_flights(airport)
#   airport.flights.each_with_index do |flight, index|
#     puts "#{index}.\t#{flight}"
#   end
# end

def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name}, we have a home for #{@shelter.capacity} animals. You can now choose from the following options*** "

  puts "1: List all the animals in the shelter"
  puts "2: List all registered clients"
  puts "3: Put your pet for adoption"
  puts "4: Adopt an animal"
  puts "Q: Quit\n\n"
  print "-->"
  gets.chomp
end

response = menu

while response.upcase != "Q"
  case response
  when "1"
  puts "List all the animals in the shelter"

  when "2"
  puts "List all registered clients"
  when "3"
  puts "add pet to animal's shelter and remove from clients pet array"



  when "4"
  puts "add pet to client pets array and remove from animal shelters array"
  end
  gets
  response = menu
end
