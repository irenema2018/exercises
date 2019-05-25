require 'pry'
require_relative 'db_config'

# more things here 

# lets tell the translation about our tables
require_relative 'models/dish'
require_relative 'models/comment'
binding.pry