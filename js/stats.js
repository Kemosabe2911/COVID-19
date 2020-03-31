var a= document.getElementById("srch");
var b= document.getElementById("btn");
var y= document.getElementById('result');
b.addEventListener("click",search);
function search(){
    checkEmpty();
}
function checkEmpty(){
    if(a.value===''){
    alert('Enter Search');
    }
    else{
        fetchAPI();
        fetchChart();
    }
}
function fetchAPI(){
    document.getElementById("gal").style.display="none";
    fetch("https://covid-19-data.p.rapidapi.com/country?format=undefined&name="+ a.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "225859193cmshd3c0854db9f9a0ap1bdb18jsna2317bf7d964"
	}
})
.then(response => response.json())
.then(data => {
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
function fetchChart(){
    let ch= document.getElementsByClassName('chart');
    fetch("https://covid-19-data.p.rapidapi.com/country?format=undefined&name="+ a.value, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "225859193cmshd3c0854db9f9a0ap1bdb18jsna2317bf7d964"
	}
})
.then(response => response.json())
.then(data => {
    console.log(data);
    let myC= document.getElementById('myChart').getContext('2d');
    Chart.defaults.global.defaultFontColor= '#000';
    Chart.defaults.global.defaultHeight= 30;
    let chrt= new Chart(myChart, {
        type: 'pie',
        data:{
            labels: ['Confirmed','Recovered','Critical','Deaths'],
            datasets: [{
                label: ['Population'],
                data: [ `${data[0].confirmed}` , `${data[0].recovered}`, `${data[0].critical}`, `${data[0].deaths}`],
                backgroundColor: [
                    'red','green','yellow','blue'
                ],
                borderWidth: 3,
                borderColor: '#777',
                outerWidth: 30
            }]
            /*datasets: [{
                label: 'Confirmed',
                data: [ `${data[0].confirmed}`],
                backgroundColor: 'red',
                },
                {
                    label: 'Recovered',
                    data :[`${data[0].recovered}`];
                    backgroundColor: 'green'
                },
                {
                    label: 'Critical',
                    data: [`${data[0].critical}`],
                    backgroundColor: 'yellow'
                },
                {
                    label: 'Deaths',
                    data: [`${data[0].deaths}`],
                    backgroundColor: 'blue'
                }
            ]*/
        },
        options:{
            title:{
                display: true,
                text: 'COVID-19 STATS',
                fontSize: 30,
                fontColor: '#733380'
            },
            legend:{
                position: 'bottom',
                labels:{
                    fontFamily: 'Lato',
                    fontWeight: 'bold',
                    fontSize: 25
                }
            }
        }
    })
})
.catch(err => {
	console.log(err);
});
}