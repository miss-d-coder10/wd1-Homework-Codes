puts "do you want to use ruby calculator or moon gravity calculator or mortgage calculator?"
response = gets.chomp

if response == "moon gravity calculator"
  puts "enter your weight in kg?"
  weight = gets.chomp.to_f
  result = weight * 0.2
  puts "your weight on the moon is #{result} kg"
elsif response == "mortgage calculator"
  puts "enter principal (how much your borrowed?)"
  principal = gets.chomp.to_f
  puts "monthly interest rate"
  rate = gets.chomp.to_f/100
  puts "number of payments"
  number = gets.chomp.to_f
  result = (principal) * (rate(1+rate)**number)/(1+rate)**number-1)
  puts "your month rate is #{result}"
else

calculate = true
while calculate do
  puts "Welcome to Ruby Calculator"

  puts "Enter your first number"
  first_number = gets.chomp.to_f

  puts "Would you like to add, subtract, multiply or divide or power of or sqrt? or weight of the moon(moon)"
  operator = gets.chomp

  if operator == "sqrt"
    answer = Math.sqrt(first_number)
  # elsif operator == "moon"
  #   answer =
  else

  puts "Enter your second number"
  second_number = gets.chomp.to_f

  case operator
  when "add"
    answer = first_number + second_number
  when "subtract"
    answer = first_number - second_number
  when "multiply"
    answer = first_number * second_number
  when "divide"
    answer = first_number / second_number
  when "power of"
    answer = first_number ** second_number
  end
end
end

  puts "Answer is #{answer}"

  puts "Do you want to calculate again?"
  calculate = gets.chomp == "yes"

end
