# loop {
#     puts "its parts of block"
# }
#  if its single line we dont have to use end else do end we use 
#  return ture calismazsa sadece return yaz 


# Using the times method, write a block that outputs "Hello world!" to the screen 3 times.
3.times do
    puts "Hello world!"
    return
end

#  block icinde yield yazarsak, yield yerine methodu cagirdigimiz yerde kodun devamini yazabiliyor, vue da ki slot 

# Call the method block_method using a block and print anything out inside of it using a puts statement.

def block_method
    puts "This is the first line in the block method."
    yield
  end
  
  block_method do
    puts"whatever"
  end

#   Call the method get_name with a block. Assign the block argument a variable called name. Do at least one thing in the block such as printing out the name.
def get_name
    name = "Jillian"
    yield name
  end
  
  # Write your code here
  get_name do |name|
    puts "#{name}"
  end

#   &block argumentte yazip, arkasindan block.call ayni yield ile 

# Using the call method, modify the print_header method to call the block sent in to it.
def print_header(&block)
    puts "-- Header --"
    block.call
    puts "-- End of Header --"
  end

#   Using the each_char method, print out every character in the variable string with a "-" on either side.
string.each_char do |i|
    puts i
  end

  hash = { 'name' => 'Jason', 'location' => 'Treehouse' }

  hash.each do |key, value|
    puts "key: #{key} value: #{value}"
  end

  hash.select { |key, val| key == "name" } #{ 'name' => 'Jason' }

#   Using the select method, create a new array named house that contains any items from the array variable with a length greater than four characters.
array = ["Tree", "House"]
house = array.select { |h| h.length > 4 }

# Shown below is the SimpleBenchmarker class. Instantiate a variable named benchmarker which is an instance of the SimpleBenchmarker class.

class SimpleBenchmarker
    def run(description, &block)
      start_time = Time.now
      block.call
      end_time = Time.now
      elapsed = end_time - start_time
  
      puts "\n#{description} results"
      puts "Elapsed time: #{elapsed} seconds"
    end
  end
  
  benchmarker = SimpleBenchmarker.new
  benchmarker.run "test" do
  end

  class MyArray
    attr_reader :array
    def initialize
      @array = []
    end
  
    def push(item)
      array.push(item)
    end
  
    def each(&block)
      i = 0
      while i < array.length
        block.call(array[i])
        i += 1
      end
      return array
    end
  end
  
  my_array = MyArray.new
  my_array.push(1)
  my_array.push(2)
  my_array.push(3)
  
  my_array.each{ |item| puts "item: #{item}" }

#   modify the yield statement to send the monster instance to a block...


  class Monster
    attr_reader :name, :actions
    
    def initialize(name)
      @name = name
      @actions = {
        screams: 0,
        scares: 0,
        runs: 0,
        hides: 0
      }
    end
    
    def say(name, &block)
      print "#{name} says... "
      yield self if block_given?
    end
  end
  
  monster = Monster.new("fluffy")
  monster.say("haw haw")

#   Modify the scream method to increment the screams key of the @actions hash before printing out that the monster screams.


  class Monster
    attr_reader :name, :actions
    
    def initialize(name)
      @name = name
      @actions = {
        screams: 0,
        scares: 0,
        runs: 0,
        hides: 0
      }
    end
    
    def scream(&block)
      
      @actions[:screams] += 1
      
      print "#{name} screams! "
      
    end
    
  end
  
  monster = Monster.new("Fluffy")
  
  monster.scream { puts "BOO!" }

#   After the print statement in the scream method, yield to the block.
class Monster
    attr_reader :name, :actions
    
    def initialize(name)
      @name = name
      @actions = {
        screams: 0,
        scares: 0,
        runs: 0,
        hides: 0
      }
    end
    
    def scream(&block)
      
      @actions[:screams] += 1
      print "#{name} screams! "
      yield
  
      
    end
    
  end
  
  monster = Monster.new("Fluffy")
  
  monster.scream { puts "BOO!" }

#   In the scream method, modify the yield statement to send the monster instance to a block if a block is sent in to the scream method.
