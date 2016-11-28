# PigLatin.translate("pig")

require "sinatra"
require "sinatra/reloader" if development?

get "/" do
  @header = "PigLatin Translation"
  erb :home
end

post "/translation" do
  @header = "Answer"
  @translation = PigLatin.translate params[:words] # takes in the "name" on the form element
  erb :answer
end
