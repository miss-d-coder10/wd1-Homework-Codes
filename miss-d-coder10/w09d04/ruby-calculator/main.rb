puts "do you want to use ruby calculator or moon gravity calculator or mortgage calculator or stamp duty"
response = gets.chomp

if response == "moon gravity calculator"
  puts "enter your weight in kg?"
  weight = gets.to_f
  result = weight * 0.2
  puts "your weight on the moon is #{result} kg"
elsif response == "mortgage calculator"
  puts "enter principal (how much your borrowed?)"
  principal = gets.to_f
  puts "yearly interest rate"
  rate = gets.to_f/(100*12)
  puts rate
  puts "number of years"
  number = gets.to_f * 12
  num1 = (rate + 1)**number
  puts num1
  result = (principal) * (rate*num1) / (num1-1)
  puts "your monthly payment is £#{result}"
elsif response == "stamp duty"
  puts "enter the price of the property"
  price = gets.to_f

  if price < 125000
    puts "No stamp duty"
  elsif price > 125000
    answer = price * 0.02
  else price > 250000
    answer = 2500 + 2500
  end
  puts "stamp duty is #{answer}"


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
