# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.destroy_all

Department.create(name: "Groceries")
Department.create(name: "Electronics")
Department.create(name: "Home Goods")


Item.create(name: "Milk", description: "Dairy-based drink", price: 1.50, department_id: 1)
Item.create(name: "Eggs", description: "Cage-free local eggs", price: 3.00, department_id: 1)
Item.create(name: "iPad", description: "Apple branded tablet", price: 800.00, department_id: 2)
Item.create(name: "Candle", description: "Pumpkin Spice scented", price: 5.00, department_id: 3)

