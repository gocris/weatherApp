# Weather Journal App Project

## Description
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Server-Side js File (server.js)
This file contains the necessery code to store information received from the client-side. Also, this file runs an express environment to run a local server.

## Website Dir
The website directory contains three files: html, css, and the client-side js file.

## Client-Side js File (app.js)
This file contains the necessary GET and POST requests. 

**performAction(e)**
The performAction function is the main function with all the commands. 

**getWeather(baseURL, zip, apiKey, CountryCode)**
getWeather is the first function to initiate. This function takes all the necessary url variables to fetch the weather data from the website openweathermap.org such as the http base url, the API key, and the country code. 

The zip code is taken from the DOC as the user input value and it is labeled as zip.

**PostInfo('route', data)**
After the data is received from the weather website, the PostInfo function, a POST request,
sends the desired specified data to the local server. In this case, the desired data is the city based of the zip code and the temperature of that city. Then, the data gets pushed to the array projectData located on the server side.

**updateUI()**
Through a Promise chain, after the PostInfo function resolves, the updateUI also known as the magic function, initiates. This function is responsible to update the UI information such as the city, temperature, date, and the feeling response by sending a GET request to the server. The UI information gets updated by calling the proper ID's from the document and storing the new content.





