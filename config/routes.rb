Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end

  post "/graphql", to: "graphql#execute"
  get 'books', to: 'books#index'
  get 'book/:id', to: 'books#index'
  get 'hello_world', to: 'books#index'
  get 'sample', to: 'books#index'
  root to: 'books#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
