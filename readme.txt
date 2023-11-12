# standalone
pm2 start app.js
pm2 stop app.js
pm2 delete app.js

# cluster
pm2 start app.js -i 3
pm2 scale app +3
pm2 scale app 3

# use sequelize
npm install sequelize
npx sequelize init
-- if you change defualt path, model, config.json, seeders, Please config by create .sequelizerc at root project
npx sequelize model:generate --name Products --attributes "name:String, image:String, price:integer, stock:integer" --underscored true 
npx sequelize db:migrate
npx sequelize seed:generate --name seed-products
npx sequelize db:seed:all