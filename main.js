// **************** start  : Add the event to the title  start
let title = document.getElementById("title");
////onmouseover
title.onmouseover = function () {
  title.innerHTML = "Create Your Facture";
  title.style.fontFamily = "serif";
  title.style.fontSize = "20px";
  title.style.background = "rgba(239, 191, 96, 0.7)";
};

///onmouseout
title.onmouseout = function () {
  title.innerHTML = "Facture N°1";
  title.style.background = "rgba(102, 172, 236, 0.102)";
  title.style.fontSize = "25px";
  title.style.fontFamily = "sans-serif";
};
// *********************** END  : Add the event to the title  End

//************** start  : remove element from company-info
//   ---create variables
let spanSiret = document.getElementById("spanSiret");
let iSiret = document.getElementById("iSiret");

let spanTVA = document.getElementById("spanTVA");
let iTVA = document.getElementById("iTVA");

let spanTél = document.getElementById("spanTél");
let iTél = document.getElementById("iTél");
// -----create function
iSiret.onclick = function () {
  spanSiret.style.display = "none";
};
iTVA.onclick = function () {
  spanTVA.style.display = "none";
};
iTél.onclick = function () {
  spanTél.style.display = "none";
};
//******************* End  : remove element from company-info



//******************* start  : Add an event to the plus icon  company-info

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the "iAddspan" icon
  document.getElementById("iAddspan").addEventListener("click", function () {
    // Create a new span element
    var newSpan = document.createElement("span");
    var newInputInfo = document.createElement("input");
    // Optionally, set attributes for the <input> element
    newInputInfo.setAttribute("type", "text"); // Set the type of input
    newInputInfo.setAttribute("placeholder", "Information");
    newInputInfo.style.fontWeight = "bold";

    // Create a new input element
    var newInputContenu = document.createElement("input");
    newInputContenu.setAttribute("type", "text");
    // Set placeholder text for the input
    newInputContenu.setAttribute("placeholder", "Contenu"); 

    // Create a new icon element
    var newIcon = document.createElement("i");
    // Assuming you have the appropriate CSS classes
    newIcon.setAttribute("class", "fa-solid fa-circle-minus"); 
    newIcon.onclick = function () {
      newSpan.style.display = "none";
    };
    // Apapend the h4, input, and icon to the new span
    newSpan.appendChild(newInputInfo);
    newSpan.appendChild(newInputContenu);
    newSpan.appendChild(newIcon);

    // Append the new span to the parent element
    var addSpan = document.getElementById("addSpan");
    addSpan.appendChild(newSpan);
  });
});
//******************* END  : Add an event to the plus icon  company-info






//*******************start  : remove element from Client-info

let spanSiretClient = document.getElementById("spanSiretClient");
let iSiretClient = document.getElementById("iSiretClient");

let spanTVAClient = document.getElementById("spanTVAClient");
let iTVAClient = document.getElementById("iTVAClient");

let spanTélClient = document.getElementById("spanTélClient");
let iTélClient = document.getElementById("iTélClient");

iSiretClient.onclick = function () {
  spanSiretClient.style.display = "none";
};
iTVA.onclick = function () {
  spanTVA.style.display = "none";
};
iTélClient.onclick = function () {
  spanTélClient.style.display = "none";
};
//****************** */ end  : remove element from Client-info

//******************* start  : Add an event to the plus icon  Client-info

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the "iAddspan" icon
  document.getElementById("iAddspanClient").addEventListener("click", function () {
    // Create a new span element
    var newSpan = document.createElement("span");
        // Create a new input element info
    var newInputInfo = document.createElement("input");
    // Optionally, set attributes for the <input> element
    newInputInfo.setAttribute("type", "text"); // Set the type of input
    newInputInfo.setAttribute("placeholder", "Information");
    newInputInfo.style.fontWeight = "bold";

    // Create a new input element
    var newInputContenu = document.createElement("input");
    newInputContenu.setAttribute("type", "text");
    // Set placeholder text for the input
    newInputContenu.setAttribute("placeholder", "Contenu"); 

    // Create a new icon element
    var newIcon = document.createElement("i");
    // Assuming you have the appropriate CSS classes
    newIcon.setAttribute("class", "fa-solid fa-circle-minus"); 
    newIcon.onclick = function () {
      newSpan.style.display = "none";
    };
    // Apapend the h4, input, and icon to the new span
    newSpan.appendChild(newInputInfo);
    newSpan.appendChild(newInputContenu);
    newSpan.appendChild(newIcon);

    // Append the new span to the parent element
    var addSpan = document.getElementById("addSpanClient");
    addSpan.appendChild(newSpan);
  });
});
//******************* END  : Add an event to the plus icon  Client-info


//***************************************************** start : the dates
    //  create variabls
    var trDateFacture = document.getElementById("trDateFacture");
    var iconMinusFacture = document.getElementById("iconMinusFacture");

    var trDateLivraison = document.getElementById("trDateLivraison");
    var iconMinusLivraison = document.getElementById("iconMinusLivraison");

    var trDatePaiement = document.getElementById("trDatePaiement");
    var iconMinusPaiement = document.getElementById("iconMinusPaiement");

  // create function for removing tr from table when i click on icon minus 

    iconMinusFacture.onclick = function(){
      trDateFacture.style.display = 'none';
    }
    iconMinusLivraison.onclick = function(){
      trDateLivraison.style.display = 'none';
    }
    iconMinusPaiement.onclick = function(){
      trDatePaiement.style.display = 'none';
    }

  // create function for removing tr from table date when i click on icon minus 
  

//****************************************************** END : the dates





