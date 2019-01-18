require 'open-uri'

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



# "name": "Jean-Sebastian Sirois",
# "age": "",
# "gender": "",
# "location": "Paris, France",
# "about": "",
# "why_joined": "",
# "facebook": "",
# "instagram": "",
# "phone": "",
# "whatsapp": "",
# "email": "",
# "latitude": "",
# "longitude": ""

toby = Profile.create(name: "Tobias Norton", age: 35, gender: "M", languages: "English, Spanish", location: "St. Petersburg, Florida", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Toby Norton", instagram: "@instagram", phone: "941-587-5432", whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude: 123, longitude: 123)

toby.picture.attach(io: File.open(Rails.root.join('client/public/TobyCropped.jpg')), filename: 'TobyCropped.jpg') 

jean = Profile.create(name: "Jean-Sebastian Sirois", age: 66, gender: "M", languages: "French, English", location: "Paris, France", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Jean-Sebastian Sirois", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude: 123, longitude: 123)

jean.picture.attach(io: File.open(Rails.root.join('client/public/JeanSebastian.jpeg')), filename: 'JeanSebastian.jpeg') 

margaux = Profile.create(name: "Margaux Anati", age: 26, gender: "F", languages: "French, English", location: "Paris, France", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Margaux Anati", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

margaux.picture.attach(io: File.open(Rails.root.join('client/public/Margaux.jpg')), filename: 'Margaux.jpg')

bruno = Profile.create(name: "Bruno Chastain", age: 26, gender: "M", languages: "French, English", location: "Paris, France", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Bruno Chastain", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

bruno.picture.attach(io: File.open(Rails.root.join('client/public/Bruno.jpg')), filename: 'Bruno.jpg')

sarah = Profile.create(name: "Sarah Richelieu", age: 26, gender: "F", languages: "French, Spanish, German, English", location: "Paris, France", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Sarah Richelieu", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

sarah.picture.attach(io: File.open(Rails.root.join('client/public/Sarah.jpg')), filename: 'Sarah.jpg')

katie = Profile.create(name: "Katie Miller", age: 26, gender: "F", languages: "French, English", location: "Paris, France", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Hector Darwin", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

katie.picture.attach(io: File.open(Rails.root.join('client/public/Katie.jpeg')), filename: 'Katie.jpeg')

budsarin = Profile.create(name: "Budsarin Hiranprueck", age: 26, gender: "M", languages: "Khmer, English", location: "Paris, France", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Budsarin Hiranprueck", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

budsarin.picture.attach(io: File.open(Rails.root.join('client/public/BudsarinCropped.jpg')), filename: 'BudsarinCropped.jpg')

naowarat = Profile.create(name: "Naowarat Angsakul", age: 26, gender: "M", languages: "Khmer, Malay, English", location: "Chiang Mai, Thailand", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Naowarat Angsakul", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

naowarat.picture.attach(io: File.open(Rails.root.join('client/public/Naowarat.jpg')), filename: 'Naowarat.jpg')

michael = Profile.create(name: "Michael Kenny", age: 26, gender: "M", languages: "English", location: "Galway, Ireland", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Michael Kenny", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

michael.picture.attach(io: File.open(Rails.root.join('client/public/MichaelKelly.jpg')), filename: 'MichaelKelly.jpg')

larry = Profile.create(name: "Larry McCulloch", age: 26, gender: "M", languages: "English", location: "Galway, Ireland", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Larry McCulloch", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

larry.picture.attach(io: File.open(Rails.root.join('client/public/Larry.jpg')), filename: 'Larry.jpg')

kenny = Profile.create(name: "Kenny Matthews", age: 26, gender: "M", languages: "English", location: "Galway, Ireland", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Kenny Matthews", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

kenny.picture.attach(io: File.open(Rails.root.join('client/public/Kenny.jpeg')), filename: 'Kenny.jpeg')

karen = Profile.create(name: "Karen McCoach", age: 26, gender: "F", languages: "English, French, German", location: "Galway, Ireland", about: "Bacon ipsum dolor amet prosciutto picanha kielbasa, landjaeger pig flank porchetta short loin. Short loin chicken meatloaf chuck rump beef ribs swine buffalo. Short ribs kevin shank biltong beef. Boudin flank sausage, cupim tail filet mignon bresaola turkey landjaeger salami ham meatball leberkas capicola rump.", why_joined: "Alcatra ribeye leberkas hamburger spare ribs beef, beef ribs drumstick short loin landjaeger. Ham porchetta filet mignon, turkey doner bacon ground round pork chop salami corned beef brisket pork belly ball tip chuck spare ribs.", facebook: "Karen McCoach", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

karen.picture.attach(io: File.open(Rails.root.join('client/public/Karen.jpg')), filename: 'Karen.jpg')

Link.create(profile_1: toby, profile_2: margaux)
Link.create(profile_1: toby, profile_2: jean)
Link.create(profile_1: toby, profile_2: katie)
Link.create(profile_1: toby, profile_2: bruno)
Link.create(profile_1: toby, profile_2: sarah)
Link.create(profile_1: toby, profile_2: budsarin)
Link.create(profile_1: toby, profile_2: naowarat)
Link.create(profile_1: toby, profile_2: larry)
Link.create(profile_1: toby, profile_2: michael)
Link.create(profile_1: toby, profile_2: karen)
Link.create(profile_1: toby, profile_2: kenny)
Link.create(profile_1: katie, profile_2: naowarat)
Link.create(profile_1: katie, profile_2: jean)
Link.create(profile_1: katie, profile_2: larry)
Link.create(profile_1: katie, profile_2: michael)
Link.create(profile_1: katie, profile_2: karen)
Link.create(profile_1: katie, profile_2: kenny)







# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )

# Profile.create(name: "Jean-Sebastian Sirois", age: 26, gender: "M", location:, about:, why_joined:, facebook:, instagram:, phone:, whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude:, longitude: )
# {
#     "name": "Jean-Sebastian Sirois",
#     "location": "Paris, France",
#     "availability": "June 18 - July 8, 2019",
#     "image": "./JeanSebastian.jpeg"
#   },
#   {
#     "name": "Hector Darwin",
#     "location": "Paris, France",
#     "availability": "June 18 - July 8, 2019",
#     "image": "./Hector.jpg"
#   }
#   {
#     "name": "Margaux Anati",
#     "location": "Paris, France",
#     "availability": "June 18 - July 8, 2019",
#     "image": "./Margaux.jpg"
#   },
#   {
#     "name": "Bruno Chastain",
#     "location": "Paris, France",
#     "availability": "June 18 - July 8, 2019",
#     "image": "./Bruno.jpg"
#   },
#   {
#     "name": "Sarah Richelieu",
#     "location": "Paris, France",
#     "availability": "June 18 - July 8, 2019",
#     "image": "./Sarah.jpg"
#   },
#   {
#     "name": "Duanphen Kaekwoon",
#     "location": "Chiang Mai, Thailand",
#     "availability": "July 9 - July 24, 2019",
#     "image": "./Duanphen.jpeg"
#   },
#   {
#     "name": "Budsarin Hiranprueck",
#     "location": "Chiang Mai, Thailand",
#     "availability": "July 9 - July 24, 2019",
#     "image": "./BudsarinCropped.jpg"
#   },
#   {
#     "name": "Naowarat Angsakul",
#     "location": "Chiang Mai, Thailand",
#     "availability": "July 9 - July 24, 2019",
#     "image": "./Naowarat.jpg"
#   }


# gavin = Profile.create(name: "Gavin", location: "Antigua, Guatemala", about: "Bacon ipsum dolor amet pork loin tenderloin cupim leberkas sausage, burgdoggen bresaola shankle corned beef flank turducken. Ribeye pancetta beef fatback, beef ribs swine sirloin tail. Strip steak tongue shankle bacon, leberkas corned beef fatback meatball filet mignon. Boudin tenderloin swine fatback cupim pork chop tri-tip.", why_joined: Faker::PrincessBride.quote, phone: "941-911-9111", whatsapp: "+ 1 234098 123098" "+ 1 234098 123098", email: "person@email.com")

# gavin.trips.create(location: "Chicago", start_date: "2019-01-21", end_date: "2012-01-22" )
# gavin.trips.create(location: "New York", start_date: "2019-01-23", end_date: "2012-01-24" )



toby.trips.create(location: "Galway, Ireland", start_date: "2019-02-11", end_date: "2019-02-23")

toby.trips.create(location: "Paris, France", start_date: "2019-02-24", end_date: "2019-03-06")

toby.trips.create(location: "Tangier, Morocco", start_date: "2019-03-07", end_date: "2019-03-15")

languages = ["English", "English, French", "Spanish, English", "Spanish, German", "Cantonese, English, Spanish"]

cities = ["Galway, Ireland", "Paris, France", "Tangier, Morocco", "Vancouver, British Columbia", "Lima, Peru", "Buenos Aires, Argentina", "Stockholm, Sweden", "Tokyo, Japan"]

genders = ["M", "F", "Other/Prefer not to answer"]

100.times do
  fake_person = Profile.create(name: Faker::Name.name, age: rand(18..68), gender: genders.sample, languages: languages.sample, location: cities.sample, about: "Stretch out with your feelings. You see, you can do it. I call it luck. In my experience, there's no such thing as luck. Look, going good against remotes is one thing. Going good against the living? That's something else. Looks like we're coming up on Alderaan. The Jedi are extinct, their fire has gone out of the universe. You, my friend, are all that's left of their religion.", why_joined: "He is here... Obi-Wan Kenobi! What makes you think so? A tremor in the Force. The last time I felt it was in the presence of my old master. Surely he must be dead by now. Don't underestimate the power of the Force.", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

  fake_person.trips.create(location: cities.sample, start_date: Faker::Date.between(12.days.from_now, Date.today), end_date: Faker::Date.between(Date.today, 100.days.from_now))

  fake_person.picture.attach(io: open('https://placem.at/people?random=1'), filename: Faker::Name.first_name + ".jpg")
end

