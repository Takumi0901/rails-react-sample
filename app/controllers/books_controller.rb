class BooksController < ApplicationController
  def index
    @hello_world_props = { helloWorld: {name: "Stranger" }}
  end
end
