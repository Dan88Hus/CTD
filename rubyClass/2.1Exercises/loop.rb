# loop do
#     print " want too continue"
#     answer = gets.chomp.downcase
# end

# or

# loop {
#     print " want too continue"
#     answer = gets.chomp.downcase
# }


# answer = ""
# while answer != "n"
#     puts "repeat"
#     answer = gets.chomp.downcase
# end

# answer = ""
# until answer == "n"
#     puts "repeat until"
#     answer = gets.chomp.downcase
# end

# array = [1,2,3,4]
# array.each do |item|
#     puts "the current item is #{item}"
# end

# 5.times do |item|
#     puts "Hello #{item}"
# end

# for item in 1..10 do
#     puts "current item is #{item}."
# end

def ask(question)
    puts question
    return gets.chomp
end    

def add_contact
    contact = {"name": "", "phone_numbers": []}
    contact["name"] = ask("Name?")
    answer = ""
    while answer !="n"
        answer = ask("phone number add?")
        if answer == "y"
            phone = ask("phone number to save")
            contact["phone_numbers"].push(phone)
        end
    return contact
    end
end

answer=""
contact_list=[]

while answer !="n"
    contact_list.push(add_contact())
    answer = ask("add another?")
end