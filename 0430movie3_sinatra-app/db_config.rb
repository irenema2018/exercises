
require 'pg'
require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'movie_app'
}

ActiveRecord::Base.establish_connection(options)