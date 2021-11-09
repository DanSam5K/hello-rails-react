class Api::V1::GreetingsController < ApplicationController
	def index
		@greetings = Greeting.all.sample
		render json:{ :message => @greetings.messages}
	end
end 