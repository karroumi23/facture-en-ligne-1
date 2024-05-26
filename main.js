// ****************Add the event to the title  start
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
// ***********************Add the event to the title  End

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

document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to the "iAddspan" icon
  var id = 0;
  document.getElementById("iAddspan").addEventListener("click", function () {
    // Create a new span element
    id++;
    var addSpan = document.getElementById("addSpan");
    var newSpan = document.createElement("span");

    // add id to the new span
    newSpan.setAttribute("id", "newSpan" + id);

    // ***************************************************************************
    // Create a new <h4> element
    var newH4 = document.createElement("h4");

    // Create a new <input> element
    var newInput = document.createElement("input");

    // Optionally, set attributes for the <input> element
    newInput.setAttribute("type", "text"); // Set the type of input
    newInput.setAttribute("placeholder", "Enter text here");

    newH4.appendChild(newInput);

    // Optionally, add some text to the <h4> element before the input
    // newH4.insertBefore(document.createTextNode("Label: "), newInput);

    // Finally, append the <h4> element to the DOM, for example, to the body
    document.body.appendChild(newH4);
    // ***************************************************************************

    // Create a new input element
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("placeholder", "New Placeholder"); // Set placeholder text for the input

    // Create a new icon element
    var newIcon = document.createElement("i");
    newIcon.setAttribute("id", "newicon" + id);
    newIcon.setAttribute("class", "fa-solid fa-circle-minus"); // Assuming you have the appropriate CSS classes

    newIcon.onclick = function () {
      newSpan.style.display = "none";
    };

    // Append the h4, input, and icon to the new span
    newSpan.appendChild(newH4);
    newSpan.appendChild(newInput);
    newSpan.appendChild(newIcon);
    

    // Append the new span to the parent element
    addSpan.appendChild(newSpan);
  });
});

// Add function to the new icon

 


