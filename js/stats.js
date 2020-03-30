var a= document.getElementById("srch");
var b= document.getElementById("btn");
var y= document.getElementById('result');
b.addEventListener("click",search);
function search(){
    checkEmpty();
    fetchAPI();
}
function checkEmpty(){
    if(a.value===''){
    alert('Enter Search');
    }
}
function fetchAPI(){
    fetch("https://covid-19-data.p.rapidapi.com/country?format=undefined&name="+ a.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "225859193cmshd3c0854db9f9a0ap1bdb18jsna2317bf7d964"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data[0].confirmed);
    let output=`
    <h1 class="cntry">${a.value}</h1>
    <div class="stats-rst">
        <div class="conf">
            <h3>Confirmed</h3>
            <i class="fas fa-virus"></i>
            <h4>${data[0].confirmed}</h4>
        </div>
        <div class="recov">
            <h3>Recovered</h3>
            <i class="fas fa-heartbeat"></i>
            <h4>${data[0].recovered}</h4>
        </div>
        <div class="crit">
            <h3>Critical</h3>
            <i class="fas fa-head-side-virus"></i> 
           <h4>${data[0].critical}</h4>
        </div>
       <div class="deaths">
            <h3>Deaths</h3>
            <i class="fas fa-skull"></i>
            <h4>${data[0].deaths}</h4>
        </div>
    </div>
    `;
    y.innerHTML= output;
})
.catch(err => {
	console.log(err);
});
}