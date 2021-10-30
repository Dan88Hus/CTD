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

# def ask(question)
#     puts question
#     return gets.chomp
# end    

# def add_contact
#     contact = {"name": "", "phone_numbers": []}
#     contact["name"] = ask("Name?")
#     answer = ""
#     while answer !="n"
#         answer = ask("phone number add?")
#         if answer == "y"
#             phone = ask("phone number to save")
#             contact["phone_numbers"].push(phone)
#         end
#     return contact
#     end
# end

# answer=""
# contact_list=[]

# while answer !="n"
#     contact_list.push(add_contact())
#     answer = ask("add another?")
# end

# OPP icin, Ruby this yerine @ kullaniyor ve constructor kelimesi yerine initializer kullaniyor 

# In the initialize method of the Name class, set an instance variable called @title to the title argument. Note: you will have to write the initialize method
# class Name
#     def initialize (title)
#       @title = title
#     end 
    
#     def first_name
#       "Metal"
#     end
    
#     def last_name
#       "Robot"
#     end
#   end

#   In the Name class, create an attr_reader for the title instance variable.
# class Name
#     attr_reader :title # reading
     
#     def initialize(title, first_name, middle_name, last_name)
#       @title = title
#       @first_name = first_name
#       @middle_name = middle_name
#       @last_name = last_name
#     end
#   end

#   class Name
#     attr_reader :title
#     attr_writer :first_name
#     attr_accessor :last_name
    
#     def initialize(title, first_name, middle_name, last_name)
#       @title = title
#       @first_name = first_name
#       @middle_name = middle_name
#       @last_name = last_name
#     end
#   end

# class BankAccount
#     def initialize(name)
#       @name = name
#       @transactions = []
#     end
#   end
  
#   bank_account = BankAccount.new("Jason")
#   puts bank_account.inspect

# class BankAccount
#     attr_reader :name
  
#     def initialize(name)
#       @name = name
#       @transactions = []
#       add_transaction("Beginning Balance", 0)
#     end
  
#     def credit(description, amount)
#       add_transaction(description, amount)
#     end
  
#     def debit(description, amount)
#       add_transaction(description, -amount)
#     end
  
#     def add_transaction(description, amount)
#       @transactions.push(description: description, amount: amount)
#     end
  
#     def balance
#       balance = 0.0
#       @transactions.each do |transaction|
#         balance += transaction[:amount]
#       end
#       return balance
#     end
  
#     def to_s
#       "Name: #{name}, Balance: #{sprintf("%0.2f", balance)}"
#     end
#   end
  
#   bank_account = BankAccount.new("Jason")
#   bank_account.credit("Paycheck", 100)
#   bank_account.debit("Groceries", 40)
#   puts bank_account  def to_s
#       "Name: #{name}, Balance: #{sprintf("%0.2f", balance)}"
#     end

# def to_s
#     "Name: #{name}, Balance: #{sprintf("%0.2f", balance)}"
#   end

#   def print_register
#     puts "#{name}'s Bank Account"
#     puts "-" * 40

#     puts "Description".ljust(30) + "Amount".rjust(10)
#     @transactions.each do |transaction|
#       puts transaction[:description].ljust(30) + sprintf("%0.2f", transaction[:amount]).rjust(10)
#     end

#     puts "-" * 40
#     puts "Balance:".ljust(30) + sprintf("%0.2f", balance).rjust(10)
#     puts "-" * 40
#   end

#   end
  
#   bank_account = BankAccount.new("Jason")
#   bank_account.credit("Paycheck", 100)
#   bank_account.debit("Groceries", 40)
#   puts bank_account
