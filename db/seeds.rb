# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

warehouses = Warehouse.create([
  {
    name: "Montreal Warehouse",
    address: "3000 Rue Louis A Amos, Lachine, QC H8T 3P8"
  },
  {
    name: "Toronto Warehouse",
    address: "900 Passmore Ave, Scarborough, ON M1X 0A1"
  }
])

groups = Group.create([
{
  name: "Electronics",
  description: "A coolection of all electronics products"
},
{
  name: "Clothes",
  description: "A collection of all clothes"
},
{
  name: "Food",
  description: "A collection of all food"
}
])

inventories = Inventory.create([
{
  name: "iphone13",
  description: "The 13th generation of Iphone",
  image_url: "https://9to5mac.com/wp-content/uploads/sites/6/2021/09/iphone-13-pro-max-tidbits-9to5mac.jpg?quality=82&strip=all&w=1000",
  quantity: 13,
  price: 1299.99,
  warehouse: warehouses.first,
  group: groups.first
},
{
  name: "swag",
  description: "This simple read and white logo is perfect for all those that have just right amount of swag",
  image_url: "https://res.cloudinary.com/teepublic/image/private/s--t5NIxtdf--/t_Resized%20Artwork/c_crop,x_10,y_10/c_fit,w_284/c_crop,g_north_west,h_620,w_465,x_-91,y_-22/g_north_west,u_upload:v1446840652:production:blanks:ymwlojdlb9pdlxgcmck4,x_-482,y_-298/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1510165228/production/designs/2037195_0.jpg",
  quantity: 30,
  price: 24.99,
  warehouse: warehouses.first,
  group: groups.second
},
{
  name: "new york steak",
  description: "frozen new york steak with prime quality",
  image_url: "https://www.mashed.com/img/gallery/how-to-defrost-steak/intro-1617720662.jpg",
  quantity: 50,
  price: 45.8,
  warehouse: warehouses.second,
  group: groups.third
}, 
{
  name: "NVIDIA Geforce RTX 3090",
  description: "NVIDIA Geforce RTX 3090 24GB GDDR6X PCI Express 4.0 Graphics Card Titanium and Black",
  image_url: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6429/6429434cv11d.jpg",
  quantity: 5,
  price: 7080.6,
  warehouse: warehouses.second,
  group: groups.first
}
])