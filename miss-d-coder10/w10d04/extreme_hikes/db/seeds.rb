# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.connection.execute("TRUNCATE mountains RESTART IDENTITY")

Mountain.create!([{
  name: "Mount Everest",
  location: "Sagarmatha Zone, Nepal",
  height: "29,029 ft",
  image: "http://www.adventureconsultants.com/content/images/2070/1400x510cropjpg/Everest_banner_photo_2_cropped_for_new_site.jpg",
  date_of_first_summit: 1953-05-29
},{
  name: "Aconcagua",
  location: "Mendoza, Argentina",
  height: "22,838 ft",
  image: "http://www.isgren.info/wp-content/uploads/2015/12/Aconcagua.jpg",
  date_of_first_summit: 1883-01-01
},{
  name: "Mount Elbrus",
  location: "Russia",
  height: "18,510 ft",
  image: "http://www.isgren.info/wp-content/uploads/2015/12/Aconcagua.jpg",
  date_of_first_summit: 1829-07-10
  }])
