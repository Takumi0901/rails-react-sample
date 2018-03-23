# autoload_pathsを使っても良いけど、フォルダとそれに対応するようにmoduleを
# 作っていけばautoload_pathsを設定しなくても自動に読み込んでくれる
# https://railsguides.jp/autoloading_and_reloading_constants.html
module Types
  module Scalars
    FileType = GraphQL::ScalarType.define do
      name "File"
      coerce_input ->(action_dispatch_uploaded_file, ctx) {
        # graphql_controller.rb で渡した params["variables.file"] は
        # Railsで普通の ActionDispatch::Http::UploadedFile
        # http://api.rubyonrails.org/classes/ActionDispatch/Http/UploadedFile.html
        action_dispatch_uploaded_file
      }
    end
  end
end