npm install nodemon
npm install dotenv
npm install --save sequelize
npm install --save pg pg-hstore
npm install --save-dev sequelize-cli
touch .sequelizerc
npx sequelize-cli init
npx sequelize-cli db:create
npx sequelize-cli model:generate --name user --attributes userType:ENUM,firstName:string,lastName:string,email:string,password:string

npx sequelize-cli db:migrate
npx sequelize-cli db:migrate:undo all

npx sequelize-cli model:generate --name project --attributes title:string