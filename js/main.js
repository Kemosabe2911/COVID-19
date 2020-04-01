/*
var a= document.getElementById('img1');
var b= document.getElementById('img2');
var c= document.getElementById('img3');
window.addEventListener('scroll',function(){
    let value1= 1+window.scrollY/-1000;
    let value2= 1+this.window.scrollY/-2500;
    a.style.opacity= value1;
    b.style.opacity= value2;
});*/


var x= document.getElementById('bd').addEventListener('load',fetchAPI());
var y= document.getElementById('stats');
function fetchAPI(){
    fetch("https://covid-19-data.p.rapidapi.com/totals?format=undefined", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "225859193cmshd3c0854db9f9a0ap1bdb18jsna2317bf7d964"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);
    let output=`
    <div class="result">
        <h2 class="stats-ttle">WorldWide Stats</h2>
        <div class="stats-bdy">
            <div class="conf">
                <h3>Confirmed</h3>
                <i class="fas fa-viruses"></i>
                <h4>${data[0].confirmed}</h4>
            </div>
            <div class="recov">
                <h3>Recovered</h3>
                <i class="fas fa-heartbeat"></i>
                <h4>${data[0].recovered}</h4>
            </div>
            <div class="deaths">
                <h3>Deaths</h3>
                <i class="fas fa-skull"></i>
                <h4>${data[0].deaths}</h4>
            </div>
        </div>
    </div>
    `;
    y.innerHTML=output;
})
.catch(err => {
	console.log(err);
});
}