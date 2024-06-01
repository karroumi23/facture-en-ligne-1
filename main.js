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

let spanTel = document.getElementById("spanTel");
let iTel = document.getElementById("iTel");
// -----create function
iSiret.onclick = function () {
  spanSiret.style.display = "none";
};
iTVA.onclick = function () {
  spanTVA.style.display = "none";
};
iTel.onclick = function () {
  spanTel.style.display = "none";
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
  document
    .getElementById("iAddspanClient")
    .addEventListener("click", function () {
      // Create a new span element
      var newSpan = document.createElement("span");
      // Create a new input element info
      var newInputInfo = document.createElement("input");
      //  set attributes for the <input> element
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

// create function for removing ( tr )
// from table when i click on icon minus

iconMinusFacture.onclick = function () {
  trDateFacture.style.display = "none";
};
iconMinusLivraison.onclick = function () {
  trDateLivraison.style.display = "none";
};
iconMinusPaiement.onclick = function () {
  trDatePaiement.style.display = "none";
};

// ++++++++++++++++++create function add boxes to the table

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the "iAddTrDate" icon
  document.getElementById("iAddTrDate").addEventListener("click", function () {
    // Create a new (tr) element
    var newTr = document.createElement("tr");

    // Create new (th) and (input) elements for the left side
    var newThLeft = document.createElement("th");
    var newInputLeft = document.createElement("input");

    // Create new (th) and (input) elements for the right side
    var newThRight = document.createElement("th");
    var newInputRight = document.createElement("input");

    //  set attributes for the(newThLeft & newThRight) elements
    newThLeft.setAttribute("class", "newThLeft");
    newThRight.setAttribute("class", "newThRight");

    //  set attributes for the (input-left) element
    newInputLeft.setAttribute("class", "newInputLeft");
    newInputLeft.setAttribute("placeholder", "En-tête");

    //  set attributes for the (tr) and (input-right) elements
    newTr.setAttribute("class", "newTr");
    newInputRight.setAttribute("class", "newInputRight");
    newInputRight.setAttribute("type", "date");

    // Create a new icon element
    var newIconPlus = document.createElement("i");
    // Assuming you have the appropriate CSS classes
    newIconPlus.setAttribute("class", "fa-solid fa-circle-minus");
    newIconPlus.onclick = function () {
      newTr.style.display = "none";
    };

    // Append the input to the first th
    newThLeft.appendChild(newInputLeft);

    // Append the input to the second th
    newThRight.appendChild(newInputRight);

    // Append th elements to the tr
    newTr.appendChild(newThLeft);
    newTr.appendChild(newThRight);
    newThRight.appendChild(newIconPlus);

    // Append the new tr to the table or tbody element
    var tableBody = document.getElementById("tableBody");
    tableBody.appendChild(newTr);
  });
});
//****************************************************** END : the dates

//***************************************************** start : counting-table
//  create variabls
var bottomTr = document.getElementById("bottomTr");
var iconMinusCount = document.getElementById("iconMinusCoun");

// create function  removing ( tr )
iconMinusCount.onclick = function () {
  bottomTr.style.display = "none";
};
// +++++++++++++create function add boxes to the counting-table
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the "iAddTrDate" icon
  document.getElementById("iAddTrCount").addEventListener("click", function () {
    // Create a new (tr) element
    var newTr = document.createElement("tr");

    // Create a new (th) & inputs
    var thDescription = document.createElement("th");
    var inputDescriptionTop = document.createElement("input");
    var inputDescriptionBottom = document.createElement("input");

    var thQuantite = document.createElement("th");
    var inputQuantite = document.createElement("input");

    var thUnitaire = document.createElement("th");
    var inputUnitaire = document.createElement("input");
    var spanUnitaire = document.createElement("span");

    var thTotal = document.createElement("th");
    var inputTotal = document.createElement("input");
    var spanTotal = document.createElement("span");

    //  set attributes for the ( TH ) and thier ( input ) & (span)
    thDescription.setAttribute("id", "leftTh");
    inputDescriptionTop.setAttribute("placeholder", "TITRE PRESTATION");
    inputDescriptionBottom.setAttribute(
      "placeholder",
      "Description prestation"
    );
    // inputQuantite
    inputQuantite.setAttribute("value", "1");

    thUnitaire.setAttribute("id", "thPrixUntair");
    inputUnitaire.setAttribute("placeholder", "00.0");
    spanUnitaire.textContent = "€";

    thTotal.setAttribute("id", "thPrixTotal");
    inputTotal.setAttribute("placeholder", "00.0");
    spanTotal.textContent = "€";

    //<<<<<Append the input to their th
    thDescription.appendChild(inputDescriptionTop);
    thDescription.appendChild(inputDescriptionBottom);

    thQuantite.appendChild(inputQuantite);

    thUnitaire.appendChild(inputUnitaire);
    thUnitaire.appendChild(spanUnitaire);

    thTotal.appendChild(inputTotal);
    thTotal.appendChild(spanTotal);

    //<<<<<Append the (th) to their (tr)
    newTr.appendChild(thDescription);
    newTr.appendChild(thQuantite);
    newTr.appendChild(thUnitaire);
    newTr.appendChild(thTotal);

    // Append the new tr to the table or tbody element
    var tableCounting = document.getElementById("tableCounting");
    tableCounting.appendChild(newTr);
  });
});

//***************************************************** END : counting-table
