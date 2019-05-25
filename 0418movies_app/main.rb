# Build a web app that allows users to search for movies and display it on the page. The web app will enlist the help of a library called HTTParty to fetch movie information from a 3rd party service called OMDB API.

# - Build a Sinatra application 
# 	- Include:
# 		- main.rb		
# 		- views/layout.erb
# 		- views/index.erb
# 		- views/movie.erb
# 		- views/about.erb
# 		- public/css/style.css

# ---

# - index.erb - the search form with the input box
# - movie.erb - details of the movie 


# example httparty usage
# ```
# require 'httparty'
# result = HTTParty.get('http://omdbapi.com/?t=once')

# ```

# ## Additional Resources
# - [demo](http://dt-movies-viewer.herokuapp.com)
# - [Open movie database API](http://www.omdbapi.com/)
# - [sinatrarb](http://www.sinatrarb.com/)
# - [HTTParty](https://github.com/jnunemaker/httparty)

require "sinatra"
require "pry"
require "sinatra/reloader"
require 'httparty'

get '/' do
  erb(:index)
end

get '/about' do
  erb(:about)
end

get '/movie' do
    
  # get the value of movie_name from the params object
  movie_name = params['movie_name']

  url = "http://www.omdbapi.com/?apikey=2f6435d9&t=#{movie_name}"
  response = HTTParty.get(url)
  
  @title = response['Title']
  @released = response['Released']
  @actors = response['Actors']
  @poster = response['Poster']
  erb(:movie_info)
end





