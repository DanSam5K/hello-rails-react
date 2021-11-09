class Api::V1::GreetingsController < ApplicationController
	def index
		render json:{ :greetings => [
			{:messages => "Hello world"}
	  ]
  }.to_json
	end
end 