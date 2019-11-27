/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&APPID=1280ff893a289bd7932be8a64340f43c';
const countryCode = ',us';
//let count = 0; count for an array

document.getElementById('generate').addEventListener('click', performAction);

function performAction(e) { 
    const zip = document.getElementById('zip').value;
    const response = document.getElementById('feelings').value;

    getWeather(baseURL, zip, apiKey, countryCode)

    .then(function(data) {
        postInfo('/addInfo', {temp: data.main.temp, city: data.name, date: newDate, response: response})
    .then(updateUI());
    });
}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

//Get Request to OpenWeatherMap
const getWeather = async (baseURL, zip, key, countryCode)=>{ 
    const response = await fetch(baseURL+zip+countryCode+key)
    try { 
        const data = response.json();
        console.log(data); //log the weather data
        return data;
    } catch(error) { 
        console.log('error', error);
    }
}

const postInfo = async (url = '', data = {})=>{
    const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 
        'Content-Type': 'application/json',
    },    
    body: JSON.stringify(data),
    });

    try { 
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log("error", error);
    }
}

const updateUI = async ()=>{ 
    const response = await fetch('/all')

    try {
        const allData = await response.json();

        document.getElementById('cityUI').textContent = allData.city;
        document.getElementById('dateUI').textContent = allData.date;
        document.getElementById('tempUI').textContent = fair(allData.temp).toPrecision(2);
        document.getElementById('contentUI').textContent = allData.response;

        /*count++;
        console.log('count: ' + count);*/ 

    } catch(error) { 
        console.log('error', error);
    }
}

//unit converter
let fair = function(kelvin){ 
    return ((kelvin - 273.15) * 9/5 + 32);
}
