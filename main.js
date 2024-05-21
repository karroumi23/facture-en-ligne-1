//******************* start  : remove element from company-info
//   ---create variables
let spanSiret = document.getElementById("spanSiret");
let iSiret = document.getElementById("iSiret");

let spanTVA = document.getElementById("spanTVA");
let iTVA = document.getElementById("iTVA");

let spanTél = document.getElementById("spanTél");
let iTél = document.getElementById("iTél");
// -----create function 
iSiret.onclick = function(){
    spanSiret.style.display = 'none';
}
iTVA.onclick = function(){
    spanTVA.style.display = 'none';
}
iTél.onclick = function(){
    spanTél.style.display = 'none';
}
//******************* End  : remove element from company-info



//*******************start  : remove element from Client-info 

let spanSiretClient = document.getElementById('spanSiretClient');
let iSiretClient = document.getElementById('iSiretClient');

let spanTVAClient = document.getElementById('spanTVAClient');
let iTVAClient = document.getElementById('iTVAClient');

let spanTélClient = document.getElementById('spanTélClient');
let iTélClient = document.getElementById('iTélClient');

iSiretClient.onclick = function(){
    spanSiretClient.style.display = 'none';
}
iTVA.onclick = function(){
    spanTVA.style.display = 'none';
}
iTélClient.onclick = function(){
    spanTélClient.style.display = 'none';
}
//****************** */ end  : remove element from Client-info 