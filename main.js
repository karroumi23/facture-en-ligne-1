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
