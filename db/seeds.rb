# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

@category = Category.new
@category.name = '王道'
@category.save

@category = Category.new
@category.name = 'アクション'
@category.save

@book = Book.new
@book.name = 'ドラゴンボール'
@book.author = '鳥山明'
@book.category_id = "1"
@book.description = '探そうぜ！ドラゴンボール'
@book.save

@book = Book.new
@book.name = 'ワンピース'
@book.author = '尾田栄一郎'
@book.category_id = "1"
@book.description = '海賊王に俺はなる!'
@book.save
