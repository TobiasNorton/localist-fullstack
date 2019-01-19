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

jean = Profile.create(name: "Jean-Sebastian Sirois", age: 66, gender: "M", languages: "French, English", location: "Paris, France", about: "Hello! I am Jean-Sebastian. I grew up in a small town in Southern France called Lacoste. I love jazz music and have been playing clarinet for 42 years, and the guitar for even longer. I owned a pub for roughly 20 years and have since retired from the industry. I live with my wife, Marie, and our 2 dogs, Gus and Roc.", why_joined: "Now that I am retired I plan to do much more traveling. I am looking for good food and good people.", facebook: "Jean-Sebastian Sirois", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com", latitude: 123, longitude: 123)

jean.picture.attach(io: File.open(Rails.root.join('client/public/JeanSebastian.jpeg')), filename: 'JeanSebastian.jpeg') 

margaux = Profile.create(name: "Margaux Anati", age: 26, gender: "F", languages: "French, English", location: "Paris, France", about: "Hi, I'm Margaux. I have lived in Paris for roughly 8 years but I am originally from Marseilles. I love music and I love to explore. Let me know if you are coming to the area and I will gladly meet. Paris welcomes you!", why_joined: "I love to travel alone but I also love to meet new people, and I felt Localist provided a good balance for people like me. I'm looking for good food and live music! I like rock and roll, blues and R & B.", facebook: "Margaux Anati", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

margaux.picture.attach(io: File.open(Rails.root.join('client/public/Margaux.jpg')), filename: 'Margaux.jpg')

bruno = Profile.create(name: "Bruno Chastain", age: 26, gender: "M", languages: "French, English", location: "Paris, France", about: "Salut! I am Bruno! I am new to Paris but I have gotten to know it very well this past year, so if you are coming I can show you and awesome time! I also have some trips coming up, to Switzerland, Germany, Italy and Greece. I'm excited to meet you!", why_joined: "I love to hike so when I travel I want to find the best trails. I don't mind if they are in far remote areas. I have done a lot of backpacking through Canada so I am always well prepared! Hopefully you know of some good places.", facebook: "Bruno Chastain", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

bruno.picture.attach(io: File.open(Rails.root.join('client/public/Bruno.jpg')), filename: 'Bruno.jpg')

sarah = Profile.create(name: "Sarah Richelieu", age: 26, gender: "F", languages: "French, Spanish, German, English", location: "Paris, France", about: "What's up, Localist? I'm Sarah. I'm 26 years old and have lived in Paris for almost 10 years. I am orginally from Ottawa, Canada, but I have always loved French culture, and so I decided to move here. I am a dancer, a singer and an artist.", why_joined: "I love theater and ballet so I would like to find some good shows wherever I am traveling! Also good music like jazz and classical. I hope to make some long-term connections with the people I meet for future travel experiences.", facebook: "Sarah Richelieu", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

sarah.picture.attach(io: File.open(Rails.root.join('client/public/Sarah.jpg')), filename: 'Sarah.jpg')

katie = Profile.create(name: "Katie Miller", age: 26, gender: "F", languages: "French, English", location: "Paris, France", about: "Allo! Katie here. I have lived in Paris all of my life. I love to travel and explore new places. I am a writer for a local newspaper and I am working on my first novel. I also do poetry and write some songs, although I don't know how to play any instruments. I hope to learn the mandolin someday!.", why_joined: "I have a large apartment with extra bedrooms so I am open to hosting people if they need a place to stay. I also have been getting an itch to travel so I'd like to meet some people on my journeys! I love beer, so It would be great to find the best local breweries, and also places to eat.", facebook: "Katie Miller", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

katie.picture.attach(io: File.open(Rails.root.join('client/public/Katie.jpeg')), filename: 'Katie.jpeg')

budsarin = Profile.create(name: "Budsarin Hiranprueck", age: 26, gender: "M", languages: "Khmer, English", location: "Paris, France", about: "Hi, I'm Budsarin. I am 26 years old and have lived in or near Paris for most of my life. I am a software developer. I play the guitar, drums and bass and I love to write music. I also recently started painting, and I'm getting better! Localist is awesome for traveling.", why_joined: "I love to meet travelers. Also whenever I travel, as much as I like to travel alone sometimes it's nice to meet up with people for a bit to get into something fun. I'm looking for street food, local markets and the local music scene. I really want to find some good shows.", facebook: "Budsarin Hiranprueck", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

budsarin.picture.attach(io: File.open(Rails.root.join('client/public/BudsarinCropped.jpg')), filename: 'BudsarinCropped.jpg')

naowarat = Profile.create(name: "Naowarat Angsakul", age: 26, gender: "M", languages: "Khmer, Malay, English", location: "Chiang Mai, Thailand", about: "Hi, I'm Naowarat. I have lived in Chiang Mai for almost 15 years. I love it here. I am a web developer working for a small local company. I lived in San Francisco for a while doing work but I found a great company here and decided to move back home. I love food so let's go find some!", why_joined: "Like I said, I love food, and I am an aspiring Anthony Bourdain! Wherever I go I want to get a more cultural experience, and I feel that Localist provides a great opportunity for that. I am so hungry right now.", facebook: "Naowarat Angsakul", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

naowarat.picture.attach(io: File.open(Rails.root.join('client/public/Naowarat.jpg')), filename: 'Naowarat.jpg')

michael = Profile.create(name: "Michael Kenny", age: 26, gender: "M", languages: "English", location: "Dublin, Ireland", about: "I own a brewery here in Dublin and I manage a music venue. We get a lot of out of town bands so I get to meet a lot of people through that. If you come into town, drinks at my bar are on me! I live with my wife and our two dogs and I play the saxophone.", why_joined: "Owning a venue has really got me excited about meeting new people and so although I don't get to travel much, I love to show off the city of Dublin to visiters. I've been here for a while so I can make recommendations for almost anything you might be looking for.", facebook: "Michael Kenny", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

michael.picture.attach(io: File.open(Rails.root.join('client/public/MichaelKelly.jpg')), filename: 'MichaelKelly.jpg')

larry = Profile.create(name: "Larry McCulloch", age: 26, gender: "M", languages: "English", location: "Dublin, Ireland", about: "I am originally from England but I moved to Dublin for work about 4 years ago and have been loving it. I am also an artist and I have my own gallery in town. I live with my girlfriend and all of her cats. I love food so I can show you some great cheap spots in the area.", why_joined: "I don't typically do many touristy things when I travel. I like making connections and sharing a meal or a beer. I'm really open to any experiences as long as I am with cool people. Let's hang out!", facebook: "Larry McCulloch", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

larry.picture.attach(io: File.open(Rails.root.join('client/public/Larry.jpg')), filename: 'Larry.jpg')

kenny = Profile.create(name: "Kenny Matthews", age: 26, gender: "M", languages: "English", location: "Dublin, Ireland", about:  "I am a web developer, I own a brewery here in Dublin that is also a pretty well-known a music venue, so I am very busy! We get a lot of out of town bands so I get to meet a lot of people through that. If you come into town, drinks there are on me! I live with my wife and our two dogs and I play the saxophone.", why_joined: "Owning a venue has really got me excited about meeting new people and so, although I don't get to travel much, I love to show off the city of Dublin to visiters. I've been here for a while so I can make recommendations for almost anything you might be looking for, even if I can't tag along.", facebook: "Kenny Matthews", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

kenny.picture.attach(io: File.open(Rails.root.join('client/public/Kenny.jpeg')), filename: 'Kenny.jpeg')

karen = Profile.create(name: "Karen McCoach", age: 26, gender: "F", languages: "English, French, German", location: "Dublin, Ireland", about: "I actually work for a travel agency, ironically enough. I am the outdoorsy type and always up for an adventure. I have a HUGE garden that I work in almost every day of the season and I love to show it off to people. We live on the outskirts of the city so we also have chickens that we get eggs from. Come visit me! I'm happy to drive to some hiking spots outside of town, or if you're just looking for recommendations for food and drinks I'm happy to provide some.", why_joined: "I found Localist to be a great platform for getting a better cultural experience when I travel, and when I'm at home,getting to meet travelers feels like a vacation too! I love to meet people. Also, when I am traveling I always look for good food, so maybe you can show me some good spots!", facebook: "Karen McCoach", instagram: "@instagram", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

karen.picture.attach(io: File.open(Rails.root.join('client/public/Karen.jpg')), filename: 'Karen.jpg')

# Link.create(profile_1: toby, profile_2: margaux)
# Link.create(profile_1: toby, profile_2: jean)
# Link.create(profile_1: toby, profile_2: katie)
# Link.create(profile_1: toby, profile_2: bruno)
# Link.create(profile_1: toby, profile_2: sarah)
# Link.create(profile_1: toby, profile_2: budsarin)
# Link.create(profile_1: toby, profile_2: naowarat)
# Link.create(profile_1: toby, profile_2: larry)
# Link.create(profile_1: toby, profile_2: michael)
# Link.create(profile_1: toby, profile_2: karen)
# Link.create(profile_1: toby, profile_2: kenny)
# Link.create(profile_1: katie, profile_2: naowarat)
# Link.create(profile_1: katie, profile_2: jean)
# Link.create(profile_1: katie, profile_2: larry)
# Link.create(profile_1: katie, profile_2: michael)
# Link.create(profile_1: katie, profile_2: karen)
# Link.create(profile_1: katie, profile_2: kenny)







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



toby.trips.create(location: "Dublin, Ireland", start_date: "2019-02-11", end_date: "2019-02-23")

toby.trips.create(location: "Paris, France", start_date: "2019-02-24", end_date: "2019-03-06")

toby.trips.create(location: "Tangier, Morocco", start_date: "2019-03-07", end_date: "2019-03-15")

languages = ["English", "English, French", "Spanish, English", "Spanish, German", "Cantonese, English, Spanish"]

cities = ["Dublin, Ireland", "Edinburgh, SCotland" "Paris, France", "Tangier, Morocco", "Vancouver, British Columbia", "Lima, Peru", "Buenos Aires, Argentina", "Stockholm, Sweden", "Tokyo, Japan"]

genders = ["M", "F", "Other/Prefer not to answer"]

100.times do
  fake_person = Profile.create(name: Faker::Name.name, age: rand(18..68), gender: genders.sample, languages: languages.sample, location: cities.sample, about: "I love to travel and meet new people. I am a software developer and have been working as an engineer for roughly 12 years. I absolutely love it. When I'm not coding I like to play music at local venues or paint. If you are coming to town let me know and I will gladly show you around! I am happy to show you around or make recommendations for whatever you may be into.", why_joined: "I found Localist to be a great platform for meeting new people when I travel and for meeting travelers when I'm at home. I love food, so when I go to a new place it's great to have some insight as to where the best spots would be, especially if it's homecooked in someone's kitchen. It's all about the cultural experience.", phone: "941-911-9111", whatsapp: "+ 1 234098 123098", email: "person@email.com")

  fake_person.trips.create(location: cities.sample, start_date: Faker::Date.between(12.days.from_now, Date.today), end_date: Faker::Date.between(Date.today, 100.days.from_now))

  fake_person.picture.attach(io: open('https://placem.at/people?random=1'), filename: Faker::Name.first_name + ".jpg")
end

