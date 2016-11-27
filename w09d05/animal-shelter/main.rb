require_relative "animal"
require_relative "client"
require_relative "shelter"
@shelter = Shelter.new "BeKind Shelter"

# @animal = Animal.new "Billy, Husky, Male, [bones, ball]"
# @client = Client.new "Marilyn, Monroe"


def list_clients(shelter)
  shelter.registered_clients.each_with_index do |client, index|
    puts "#{index}.\t#{client}"
  end
end


def menu
  puts `clear`
  puts "*** Welcome to #{@shelter.name}, we have a home for #{@shelter.capacity} animals. You can now choose from the following options*** "
  puts "1: Register as a client to #{@shelter.name}"
  puts "2: List all the animals in the shelter"
  puts "3: List all registered clients"
  puts "4: Put your pet for adoption"
  puts "5: Adopt an animal"
  puts "Q: Quit\n\n"
  print "-->"
  gets.chomp
end

response = menu

while response.upcase != "Q"
  case response
  when "1"
  puts "To register, please enter your first name"
  first_name = gets.chomp
  puts "Enter your last name"
  last_name = gets.chomp
  puts "Please enter what type of animals you have"
  pets = gets.chomp
  new_client = Client.new first_name, last_name, pets
  puts @shelter.add_client new_client
  gets


  when "2"
  puts "List all the animals in the shelter"

  when "3"
  # puts "List all registered clients"

  list_clients @shelter
  gets

  when "4"
  puts "add pet to animal's shelter and remove from clients pet array"



  when "5"
  puts "add pet to client pets array and remove from animal shelters array"
  end
  gets
  response = menu
end
