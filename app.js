
let btn = document.querySelector("button");
let p1 = document.querySelector("#C1");
let p2 = document.querySelector("#C2");
let p3 = document.querySelector("#C3");
let p4 = document.querySelector("#C4");


async function GetValue() {
    let input = document.querySelector("#City")
    let city = input.value.trim();
    if(!city){
        alert("Please Enter the name of the City");
        throw "City is not entered";
    }
    return `http://api.weatherapi.com/v1/current.json?key=0b97a6cc370d4a28919170826252009&q=${city}&aqi=yes`;
}

async function Weather() {
    try{
        let url = await GetValue();
        let res = await axios.get(url);

        if(!url){
            console.log("You are not Enterd the city")
        }

        p1.innerHTML = `<b>Location: </b> ${res.data.location.name}`;
        p2.innerHTML = `<b>Temprature: </b> ${res.data.current.temp_c} °C`;
        p3.innerHTML = `<b>Condition: </b> ${res.data.current.condition.text}`;
        p4.innerHTML = `<b>Reagion </b> ${res.data.location.region}, ${res.data.location.country}`;
    }catch(e){
        console.log("API Error: ", e);
        p1.innerHTML = `<b>Could not fetch weather data Please try again!</b> </br></br> <h5 style: "color: red">Internet Disconnected</h6>`
        alert("Error: " , e)
        p2.innerText = p3.innerText = p4.innerText = '';
    }
    
}

btn.addEventListener("click", () => {
    Weather();
})