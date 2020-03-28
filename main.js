var a= document.getElementById('img1');
var b= document.getElementById('img2');
var c= document.getElementById('img3');
window.addEventListener('scroll',function(){
    let value1= 1+window.scrollY/-800;
    let value2= 1+this.window.scrollY/-2200;
    a.style.opacity= value1;
    b.style.opacity= value2;
});