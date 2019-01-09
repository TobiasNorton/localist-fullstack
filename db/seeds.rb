# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Wipes out the data, and recreates all the tables
# rails db:schema:load

# Runs this file which creates more data
# rails db:seed

# Combined
# rails db:schema:load db:seed


gavin = Profile.create(name: "Gavin", location: "Antigua, Guatemala", about: "Bacon ipsum dolor amet pork loin tenderloin cupim leberkas sausage, burgdoggen bresaola shankle corned beef flank turducken. Ribeye pancetta beef fatback, beef ribs swine sirloin tail. Strip steak tongue shankle bacon, leberkas corned beef fatback meatball filet mignon. Boudin tenderloin swine fatback cupim pork chop tri-tip.", why_joined: Faker::PrincessBride.quote, phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

gavin.trips.create(location: "Chicago", start_date: "2019-01-21", end_date: "2012-01-22" )
gavin.trips.create(location: "New York", start_date: "2019-01-23", end_date: "2012-01-24" )

cities = [Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin, Faker::Coffee.origin]

genders = ["M", "F", "Other/Prefer not to answer"]

100.times do
  fake_person = Profile.create(name: Faker::Name.name, age: rand(18..68), gender: genders.sample, location: cities.sample, about: Faker::PrincessBride.quote, why_joined: Faker::PrincessBride.quote, phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")
  fake_person.trips.create(location: cities.sample, start_date: Faker::Date.between(12.days.from_now, Date.today), end_date: Faker::Date.between(Date.today, 100.days.from_now))
end