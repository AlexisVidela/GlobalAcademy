const timeCity = document.getElementById('time-city')
const city = document.getElementById('city')
const temp = document.getElementById('temp-maxmin')
const img = document.getElementById('img')
const desp = document.getElementById('description')
const infoTime = document.getElementById('info-time')
const sun = document.getElementById('sun')
function search(){
    const namecity = document.getElementById('namecity')/*"Río Cuarto, AR"*/
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${namecity.value}, AR,&limit=4&units=metric&lang=sp&APPID=e0fa232f8a745d1d019e16b6b1f8779c`)
    .then(respuesta => respuesta.json())/*transforma los datos a JSON*/
    .then(data=>{
    console.log(data)
    timeCity.textContent="hora "+timeUnix(data.dt)
    city.textContent=data.name+","+data.sys.country
    temp.innerHTML = "<span class=timetitle > <img id=img> "+data.main.temp+"° </span>  max: "+Math.round(data.main.temp_max)+"° min: "+Math.round(data.main.temp_min)+"°"
    viewImg(data.weather[0].icon)
    desp.textContent= "sensacion termica de "+Math.round(data.main.feels_like)+"° "+data.weather[0].description+", "+data.weather[0].main
    infoTime.innerHTML = "<p class=p-text > vientos "+data.wind.speed+"m/s al "+puntoCardinal(data.wind.deg)+"</p> <p class=p-text >Presion: "+data.main.pressure+" hPa </p> <p class=p-text >"+"humedad: "+data.main.humidity+"%</p> <p class=p-text > cielo nublado al "+data.clouds.all+"% </p> <p class=p-text >visibilidad de "+(data.visibility/1000)+" km</p>"
    sun.innerHTML="<p class=p-text >Amanecer hs "+timeUnix(data.sys.sunrise)+" <img src=https://openweathermap.org/img/wn/02d.png> </p> <p class=p-text >Atardecer hs "+timeUnix(data.sys.sunset)+"<img src=https://openweathermap.org/img/wn/02n.png></p> "
    })
}



function viewImg(string){
 const img = document.getElementById("img")
 img.setAttribute("src","https://openweathermap.org/img/wn/"+string+".png")
}
 function timeUnix(int){
    if (typeof int != 'number' || !Number.isInteger(int) ){
        throw TypeError('el valor debe ser un numero entero')
    }
    let time = new Date( int * 1000)
    let hours = time.getHours()
    let min = time.getMinutes()
    let seg = time.getSeconds()
    const hs= hours+":"+min+":"+seg
    return hs
 }
 function puntoCardinal(float){
    let ptsCar
   if (float>348.75 || float<11.25)
    {ptsCar="N"}
    if (float>11.25 && float<33.75)
    {ptsCar="NNE"}
    if (float>33.75 && float<56.25)
    {ptsCar="NE"}
    if (float>56.25 && float<78.75)
    {ptsCar="ENE"}
    if (float>78.75 && float<101.25)
    {ptsCar="E"}
    if (float>101.25 && float<123.75)
    {ptsCar="ESE"}
    if (float>123.75 && float<146.25)
    {ptsCar="SE"}
    if (float>146.25 && float<168.75)
    {ptsCar="SSE"}
    if (float>168.75 && float<191.25)
    {ptsCar="S"}
    if (float>191.25 && float<213.75)
    {ptsCar="SSW"}
    if (float>213.75 && float<236.25)
    {ptsCar="SW"}
    if (float>236.25 && float<258.75)
    {ptsCar="WSW"}
    if (float>258.75 && float<281.25)
    {ptsCar="W"}
    if (float>281.25 && float<303.75)
    {ptsCar="WNW"}
    if (float>303.75 && float<326.25)
    {ptsCar="NW"}
    if (float>326.25 && float<348.75)
    {ptsCar="NNW"}
    return ptsCar
 }