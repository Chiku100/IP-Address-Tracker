let ipAdd = [];
fetch("https://api.ipify.org?format=json").then((res)=>{return res.json()}).then((log)=>{return console.log(log)})
document.querySelector("button").addEventListener("click", () => {

    ipAdd = (document.querySelector("input").value).split(".")
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_VTdGJ3svbw3ATediAJ6IPyHoI50vW&ipAddress=${ipAdd[0]}.${ipAdd[1]}.${ipAdd[2]}.${ipAdd[3]}`).then((response) => response.json()).then((datas) => {

        let lat = datas.location.lat;
        let lng = datas.location.lng
        var map = L.map('map').setView([lat, lng], 13);
        document.querySelector(".IP h3").innerHTML = document.querySelector("input").value
        document.querySelector(".location h3").innerHTML = datas.location.city + "," + datas.location.region, datas.location.state + "," + datas.location.country
        document.querySelector(".utc h3 span").innerHTML = datas.location.timezone
        document.querySelector(".isp h3").innerHTML = datas.isp
        function buildMap(lt,ln){
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
            document.querySelector("input").addEventListener("change",()=>{
                map.remove()
            })
        L.marker([
            lt, ln]).addTo(map)
        }
        buildMap(lat,lng)
        
    }
    );
})




