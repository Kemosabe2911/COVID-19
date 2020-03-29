var a= document.getElementById('img1');
var b= document.getElementById('img2');
var c= document.getElementById('img3');
window.addEventListener('scroll',function(){
    let value1= 1+window.scrollY/-1000;
    let value2= 1+this.window.scrollY/-2500;
    a.style.opacity= value1;
    b.style.opacity= value2;
});
fetchAPI();
function fetchAPI(){
    fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Canada", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
		"x-rapidapi-key": "225859193cmshd3c0854db9f9a0ap1bdb18jsna2317bf7d964"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data.confirmed);
})
.catch(err => {
	console.log(err);
});
}