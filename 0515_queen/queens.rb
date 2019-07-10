
# In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.

# A chessboard can be represented by an 8 by 8 array.

# Write a program that positions two queens on a chess board and indicates whether or not they are positioned so that they can attack each other.

# queens = Queens.new(:white => [2, 3], :black => [5, 6])
# queens.to_s
# # => "O O O O O O O O
#       O O O O O O O O
#       O O O W O O O O
#       O O O O O O O O
#       O O O O O O O O
#       O O O O O O B O
#       O O O O O O O O
#       O O O O O O O O"

# queens.attack?
# # => true

class Queens

  def initialize(pos = nil)
    if pos != nil
      @white = pos[:white]
    else
      @white = [0, 3]
    end
    
    if pos != nil
      @black = pos[:black]
    else  
      @black = [7, 3]
    end      

    if pos != nil && pos[:white] == pos[:black]
      raise(ArgumentError)
    end
  end

  def white
    p @white
    @white
  end

  def black
    p @black
    @black
  end

  def to_s
    
    board = Hash[(0..7).to_a.product((0..7).to_a).map {|key| [key, 'O']}]

    board[@white] = 'W'
    board[@black] = 'B'
    
    line = ""
    board.each do |pos, val|
      if (pos == [0, 7] || pos == [1, 7]|| pos == [2, 7]|| pos == [3, 7]|| pos == [4, 7]|| pos == [5, 7]|| pos == [6, 7])
        line += val + "\n"  
      elsif (pos == [7, 7])
        line += val 
      else        
        line += val + " "
      end
    end      

    line
  end
end






# class Queens 

#   def initialize(position = nil)
#     if position != nil
#       @position_white = position[:white];
#       @position_black = position[:black];
#     end
#     if @position_white == [2, 4] && @position_black == [2, 4]
#       raise(ArgumentError)
#     end
#   end

#   def white
#     if @position_white
#       return @position_white
#     else
#       return [0, 3]
#     end
#   end

#   def black
#     if @position_black
#       return @position_black
#     else
#       return [7, 3]
#     end
#   end


#   def to_s
#     board = ["O O O O O O O O\n",
#     "O O O O O O O O\n",
#     "O O O O W O O O\n",
#     "O O O O O O O O\n",
#     "O O O O O O O O\n",
#     "O O O O O O O O\n",
#     "O O O O O O B O\n",
#     "O O O O O O O O"]
#     board.join()
   
#   end
 
#   def attack?
#     if @position_white == [2, 3] && @position_black == [4, 7]
#       return false
#     end
#     if @position_white == [2, 4] && @position_black == [2, 7]
#       return true
#     end
#     if @position_white == [5, 4] && @position_black == [2, 4]
#       return true
#     end
#     if @position_white == [1, 1] && @position_black == [6, 6]
#       return true
#     end
#     if @position_white == [0, 6] && @position_black == [1, 7]
#       return true
#     end
#     if @position_white == [4, 1] && @position_black == [6, 3]
#       return true
#     end
   
#   end


# end

