# BingeWatch - Movie and Show Search App

 This is a simple Javascript app that calls the [OMDB API](http://omdbapi.com) to search movies and shows and provide descriptions.

 ## Getting Started 

This app runs locally on an Express server. To run this app:

- Clone this repository 
- OMDB requires an API Key. You can get one by signing up [here](http://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFggCAQ8QDxYCHgdDaGVja2VkZ2RkZGQCAw8QDxYCHwBoZGRkZAIFDxYCHgdWaXNpYmxlZ2QCBw8WAh8BaGQCAg8WAh8BaGQCAw8WAh8BaGQYAQUeX19Db250cm9sc1JlcXVpcmVQb3N0QmFja0tleV9fFgMFC3BhdHJlb25BY2N0BQhmcmVlQWNjdAUIZnJlZUFjY3S0gwjl9jaVfARil8Yy9nisxxBo9QY1d1aRp4k6s2f83g%3D%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAW77Mkj8S6lO0evPKayW3ucmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulGmtD1h9A7%2B3Av2cTK2Z2qbhaCErXs89aADzZLPwy5pm&at=freeAcct&Email=)
- Install Node.JS [here](https://nodejs.org/en/)
- Use `npm install` to install the dependencies by typing `npm install express ejs require dotenv --save`
- Create a `.env` file and paste your API Key in the following format: `SECRET_KEY=YOURKEY` (If you share this project please include the `.env` file in a `.gitignore` file)
- Run `node app.js` to start the server
- Server runs on port 5500. Go to *http://localhost:5500/* to accesss the app

## Dependencies

- [ExpressJS](https://github.com/expressjs/express) - Used for handling and routing HTTP requests
- [Embedded JavaScript (EJS)](https://ejs.co/) - Used for generating HTML
- [Request](https://www.npmjs.com/package/request) - Used for making HTTP Requests to the API  

## Application Structure

- `app.js`- The entry point of the application
- `public/` - The directory that contains static elements for the app. The CSS is located inside `public/assets`
- `views/` - The directory containing the EJS files that create the markup for the app
- `views/partials/` - The directory that contains the header and footer templates for the HTML