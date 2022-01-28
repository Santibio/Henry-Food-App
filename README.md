# Henry Food App

Web application where you can find different types of cooking recipes connected through the Spoonacular API.From there you can filter, order, create and delete them.   
LINK: https://henry-food-app.netlify.app/home 

<img height="200" src="./cooking.png" />

### Requirements 📋

If you like to run local you will need to:
1. Install PostgreSQL
3. Create a database with the name "food"
4. Inside ./api create an .env file with your credentials
5. Inside client/src/action uncomment line 14 and comment out 15

```
PG_USER= YOUR_USER_NAME
PG_PASSWORD= YOUR_PASSWORD_NAME
PG_HOST= localhost
PG_DATABASE = food
YOUR_API_KEY= YOUR_API_KEY
```
Otherwise you can use the database already uploaded to heroku. LINK: https://pi-food-api-back.herokuapp.com

## Installation 🔧

Use the package manager npm to install. (Remember to use this command inside /client and inside /api)

```
npm install 
```

## Run Local⚙️

-FrontEnd:
Inside ./client
```
npm start
```
-BackEnd:
Inside ./client
```
npm start
```
Enjoy 😊


