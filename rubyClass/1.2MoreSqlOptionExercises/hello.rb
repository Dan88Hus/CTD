puts "Hello Ruby"
# puts = put string 
#  gets is waiting input like prompt

# Call puts with a string containing a newline character. Then call puts with a string containing a tab character. Finally, call puts a third time with a string containing a " double quotation mark.

#  puts "hello   /n hi"
# puts "hello/t"
# puts '"hello" he said'

# typeof yerine .class kulllaniliyor Ruby de 

def years_hours(years)
    hours = years * 365 * 24 
    puts "That's #{hours} hours." 
end

def decades_minutes(decades)
    minutes = decades * 365 * 24 *60
    puts "That's #{minutes} minutes." 
end

def age_seconds(age)
    seconds = age * 365 * 24 *60 * 60
    puts "That's #{seconds} seconds." 
end

def get_int
    input = gets.chomp # this returns a string  
    input_int = input.to_i # this converts a string to an integer 
    return input_int
end

puts "Enter a number of years" 
years = get_int
years_hours(years)
puts "Enter a number of decades"
decades = get_int
decades_minutes(decades)
puts "Enter a your age"
age = get_int
age_seconds(age)
