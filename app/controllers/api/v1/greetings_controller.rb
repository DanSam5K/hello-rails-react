class Api::V1::GreetingsController < ApplicationController
	def index
		render json: Greeting.all.sample, only: [:messages]
	end
end 