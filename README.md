# WebProject
group project for web class

System :

To install everything you need to make the website run, you need to type "npm install --force" in your terminal once in "./vue-client" and once in "./server"

After that to start the server you'll need to go to "./server" and type "npm start serve" in your terminal 
To start the client you'll need to go to "./vue-client" and type "npm run serve" in another terminal

To stop any of those two instances you can press "Ctrl + C" at any point in the terminal you want to shutdown


Database : 

The database needs a couple of parameters on your MySQL Workbench if you want it to work without editing any file :
You need have a MySQL connection with these properties;
-HOST: "127.0.0.1"
-USER: "root"
-Have no password 
-Create a database named : db_sportevent with the line "create database db_sportevent" directly in MySQL Workbench

If you want to change any of those settings to fit your already existing connections you can modifie the informations to fit yours in "server/app/config/db.config.js"
Keep in mind that using another port than 3307 will have to be specified in "server/app/models/index.js" 