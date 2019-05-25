     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
APIKEY = #APIKEY#

require_relative 'db_config'
require_relative 'models/movie'

after do 
  ActiveRecord::Base.connection.close
end 

get '/' do
  erb :index
end

get '/movie' do
  movie_name = params['movie_name']
  # get data from the database movie_app 
  @movie = Movie.where("lower(title) = '#{movie_name.downcase}'").first
  puts "this is "
  p @movie 
  p @movie.class
  if @movie
    puts "get data from the database movie_app"
    @title = @movie['title']
    @released = @movie['year']
    @actors = @movie['actors']
    @poster = @movie['poster']
  else
    puts "get data from API"
    url = "http://www.omdbapi.com/?apikey=#{APIKEY}&t=#{movie_name}"
    response = HTTParty.get(url)

    @title = response['Title']
    @released = response['Released']
    @actors = response['Actors']
    @poster = response['Poster']
    
    # save date from API into database movie_app
    new_movie = Movie.new
    new_movie.title = @title
    new_movie.year = @released
    new_movie.actors = @actors
    new_movie.poster = @poster
    new_movie.save
  end    
  erb :movie_info
end

get '/search' do
  movie_name = params['movie_name']
  
  url = "http://www.omdbapi.com/?apikey=#{APIKEY}&s=#{movie_name}"
  result = HTTParty.get(url)
  puts 
  puts result
  if result["Response"] == "True"
    @movie_list = result["Search"]
    
    if @movie_list.length > 1 
      @movie_list.map! { |m| m["Title"] }
      erb(:movie_list)
    elsif @movie_list.length == 1
      redirect "/movie?movie_name=#{movie_name}"
    end
  else
    erb(:nothing)
  end
end
