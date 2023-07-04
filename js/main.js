let landingPage=document.querySelector(".landing-page");
let myarr=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];
setInterval(()=>{
let rnum=Math.floor(Math.random()*myarr.length);
landingPage.style.backgroundImage='url("images/'+myarr[rnum]+'")';
},5000)
