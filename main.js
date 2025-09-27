// ***************************************** START : create a function to add a logo
let upload = document.getElementById("upload");
let uploadDiv = document.getElementById("uploadDiv");
let img = document.getElementById("img");

upload.onchange = function () {
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
    uploadDiv.style.display = "none";
  };
};

//*******************************************start  company-info
let spanSiret = document.getElementById("spanSiret");
let iSiret = document.getElementById("iSiret");
let spanTVA = document.getElementById("spanTVA");
let iTVA = document.getElementById("iTVA");
let spanTel = document.getElementById("spanTel");
let iTel = document.getElementById("iTel");

iSiret.onclick = function () {
  spanSiret.style.display = "none";
};
iTVA.onclick = function () {
  spanTVA.style.display = "none";
};
iTel.onclick = function () {
  spanTel.style.display = "none";
};

document.getElementById("iAddspan").addEventListener("click", function () {
  var newSpan = document.createElement("span");
  var newInputInfo = document.createElement("input");
  newInputInfo.setAttribute("type", "text");
  newInputInfo.setAttribute("placeholder", "Information");
  newInputInfo.style.fontWeight = "bold";

  var newInputContenu = document.createElement("input");
  newInputContenu.setAttribute("type", "text");
  newInputContenu.setAttribute("placeholder", "Contenu");

  var newIcon = document.createElement("i");
  newIcon.setAttribute("class", "fa-solid fa-circle-minus");
  newIcon.onclick = function () {
    newSpan.style.display = "none";
   };
  newSpan.appendChild(newInputInfo);
  newSpan.appendChild(newInputContenu);
  newSpan.appendChild(newIcon);

  var addSpan = document.getElementById("addSpan");
  addSpan.appendChild(newSpan);
});

//******************************************start  :  Client-info
let spanSiretClient = document.getElementById("spanSiretClient");
let iSiretClient = document.getElementById("iSiretClient");
let spanTélClient = document.getElementById("spanTélClient");
let iTélClient = document.getElementById("iTélClient");

iSiretClient.onclick = function () {
  spanSiretClient.style.display = "none";
};
iTélClient.onclick = function () {
  spanTélClient.style.display = "none";
};

document.getElementById("iAddspanClient").addEventListener("click", function () {
    var newSpan = document.createElement("span");
    var newInputInfo = document.createElement("input");
    newInputInfo.setAttribute("type", "text");
    newInputInfo.setAttribute("placeholder", "Information");
    newInputInfo.style.fontWeight = "bold";

    var newInputContenu = document.createElement("input");
    newInputContenu.setAttribute("type", "text");
    newInputContenu.setAttribute("placeholder", "Contenu");

    var newIcon = document.createElement("i");
    newIcon.setAttribute("class", "fa-solid fa-circle-minus");
    newIcon.onclick = function () {
      newSpan.style.display = "none";
    };
    newSpan.appendChild(newInputInfo);
    newSpan.appendChild(newInputContenu);
    newSpan.appendChild(newIcon);

    var addSpan = document.getElementById("addSpanClient");
    addSpan.appendChild(newSpan);
  });

//******************************************************** start : the dates
document.addEventListener("DOMContentLoaded", function () {
  var today = new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var year = today.getFullYear();
  var hours = String(today.getHours()).padStart(2, "0");
  var minutes = String(today.getMinutes()).padStart(2, "0");

  var currentDate = year + "-" + month + "-" + day;
  var currentDateTime = currentDate + "T" + hours + ":" + minutes;

  var dateFacture = document.getElementById("dateFacture");
  var dateLivraison = document.getElementById("dateLivraison");
  var datePaiement = document.getElementById("datePaiement");

  dateFacture.value = currentDate;
  dateLivraison.value = currentDateTime;
  datePaiement.value = currentDateTime;
});

var trDateFacture = document.getElementById("trDateFacture");
var iconMinusFacture = document.getElementById("iconMinusFacture");
var trDateLivraison = document.getElementById("trDateLivraison");
var iconMinusLivraison = document.getElementById("iconMinusLivraison");
var trDatePaiement = document.getElementById("trDatePaiement");
var iconMinusPaiement = document.getElementById("iconMinusPaiement");

iconMinusFacture.onclick = function () {
  trDateFacture.style.display = "none";
};
iconMinusLivraison.onclick = function () {
  trDateLivraison.style.display = "none";
};
iconMinusPaiement.onclick = function () {
  trDatePaiement.style.display = "none";
};

document.getElementById("iAddTrDate").addEventListener("click", function () {
  var newTr = document.createElement("tr");
  var newThLeft = document.createElement("th");
  var newInputLeft = document.createElement("input");
  var newThRight = document.createElement("th");
  var newInputRight = document.createElement("input");

  newThLeft.setAttribute("class", "newThLeft");
  newThRight.setAttribute("class", "newThRight");
  newInputLeft.setAttribute("class", "newInputLeft");
  newInputLeft.setAttribute("placeholder", "En-tête");
  newTr.setAttribute("class", "newTr");
  newInputRight.setAttribute("class", "newInputRight");
  newInputRight.setAttribute("type", "date");

  var newIconPlus = document.createElement("i");
  newIconPlus.setAttribute("class", "fa-solid fa-circle-minus");
  newIconPlus.onclick = function () {
    newTr.style.display = "none";
  };

  newThLeft.appendChild(newInputLeft);
  newThRight.appendChild(newInputRight);
  newTr.appendChild(newThLeft);
  newTr.appendChild(newThRight);
  newThRight.appendChild(newIconPlus);

  var tableBody = document.getElementById("tableBody");
  tableBody.appendChild(newTr);
});

//***************************************************** start : counting-table
var bottomTr = document.getElementById("bottomTr");
var iconMinusCount = document.getElementById("iconMinusCoun");
iconMinusCount.onclick = function () {
  bottomTr.style.display = "none";
};

document.getElementById("iAddTrCount").addEventListener("click", function () {
  var newTr = document.createElement("tr");
  var thDescription = document.createElement("th");
  var inputDescriptionTop = document.createElement("input");
  var inputDescriptionBottom = document.createElement("input");
  var thQuantite = document.createElement("th");
  var inputQuantite = document.createElement("input");
  var thUnitaire = document.createElement("th");
  var inputUnitaire = document.createElement("input");
  var spanUnitaire = document.createElement("span");
  var thTotal = document.createElement("th");
  var small = document.createElement("small");
  var spanTotal = document.createElement("span");

  thDescription.setAttribute("id", "leftThNew");
  inputDescriptionTop.setAttribute("placeholder", "TITRE PRESTATION");
  inputDescriptionTop.setAttribute("type", "text");
  inputDescriptionBottom.setAttribute("placeholder", "Description prestation");
  inputDescriptionBottom.setAttribute("type", "text");

  inputQuantite.setAttribute("value", "1");
  inputQuantite.setAttribute("type", "number");
  inputQuantite.setAttribute("id", "QuantiteNewInput");
  inputQuantite.addEventListener("keyup", updateTotals);
  inputQuantite.addEventListener("change", updateTotals);

  thUnitaire.setAttribute("id", "thPrixUntair");
  inputUnitaire.setAttribute("placeholder", "00.0");
  inputUnitaire.setAttribute("type", "number");
  inputUnitaire.setAttribute("id", "UnitaireNewInput");
  inputUnitaire.addEventListener("keyup", updateTotals);
  inputUnitaire.addEventListener("change", updateTotals);
  spanUnitaire.textContent = "€";

  thTotal.setAttribute("id", "thPrixTotal");
  small.setAttribute("id", "newTtotal");
  small.innerHTML = "0.00";
  spanTotal.textContent = " €";

  var newIcon = document.createElement("i");
  newIcon.setAttribute("class", "fa-solid fa-circle-minus");
  newIcon.onclick = function () {
    newTr.remove();
    updateTotals();
  };

  thDescription.appendChild(inputDescriptionTop);
  thDescription.appendChild(inputDescriptionBottom);
  thQuantite.appendChild(inputQuantite);
  thUnitaire.appendChild(inputUnitaire);
  thUnitaire.appendChild(spanUnitaire);
  thTotal.appendChild(small);
  thTotal.appendChild(spanTotal);
  thTotal.appendChild(newIcon);

  newTr.appendChild(thDescription);
  newTr.appendChild(thQuantite);
  newTr.appendChild(thUnitaire);
  newTr.appendChild(thTotal);

  var tableCounting = document.getElementById("tableCounting");
  tableCounting.appendChild(newTr);
  updateTotals();
});

function updateTotals() {
  let htTotal = 0;
  let tvaTotal = 0;
  let ttcTotal = 0;

  let rows = document.querySelectorAll("#tableCounting tr");

  rows.forEach(row => {
    let quantite = row.querySelector("#QuantiteNewInput") || row.querySelector("#Quantite");
    let unitaire = row.querySelector("#UnitaireNewInput") || row.querySelector("#unitaire");
    let total = row.querySelector("#newTtotal") || row.querySelector("#total");

    if (quantite && unitaire && total) {
      let qty = parseFloat(quantite.value) || 0;
      let unitPrice = parseFloat(unitaire.value) || 0;
      let rowTotal = qty * unitPrice;
      total.textContent = rowTotal.toFixed(2);
      htTotal += rowTotal;
    }
  });

  let htTtotal = document.getElementById("ht");
  let tvaTtotal = document.getElementById("tva");
  let ttcTtotal = document.getElementById("ttc");

  htTtotal.value = htTotal.toFixed(2);
  tvaTotal = htTotal * 0.2;
  tvaTtotal.value = tvaTotal.toFixed(2);
  ttcTotal = htTotal + tvaTotal;
  ttcTtotal.value = ttcTotal.toFixed(2);
}

// ************ PDF EXPORT FUNCTIONALITY ************

// Function to generate PDF
async function exportToPDF() {
  const exportBtn = document.getElementById('exportPdfBtn');
  const invoiceContent = document.getElementById('invoiceContent');
  
  try {
    // Disable button and show loading
    exportBtn.disabled = true;
    exportBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
    
    // Add PDF mode class to hide edit controls
    invoiceContent.classList.add('pdf-mode');
    
    // Wait a moment for styles to apply
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Create canvas from HTML
    const canvas = await html2canvas(invoiceContent, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: invoiceContent.offsetWidth,
      height: invoiceContent.offsetHeight
    });
    
    // Get invoice number for filename
    const titleElement = document.getElementById('title');
    const invoiceTitle = titleElement.textContent || 'Facture';
    const fileName = invoiceTitle.replace(/[^a-zA-Z0-9]/g, '_') + '.pdf';
    
    // Create PDF
    const { jsPDF } = window.jspdf;
    const imgData = canvas.toDataURL('image/png');
    
    // Calculate dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    
    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    
    // Add additional pages if needed
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    // Save the PDF
    pdf.save(fileName);
    
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.');
  } finally {
    // Remove PDF mode class
    invoiceContent.classList.remove('pdf-mode');
    
    // Re-enable button
    exportBtn.disabled = false;
    exportBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Export to PDF';
  }
}

// Function to print invoice
function printInvoice() {
  const invoiceContent = document.getElementById('invoiceContent');
  
  // Add PDF mode class to hide edit controls
  invoiceContent.classList.add('pdf-mode');
  
  // Print
  window.print();
  
  // Remove PDF mode class after printing
  setTimeout(() => {
    invoiceContent.classList.remove('pdf-mode');
  }, 1000);
}

// Event listeners for export buttons
document.getElementById('exportPdfBtn').addEventListener('click', exportToPDF);
document.getElementById('printBtn').addEventListener('click', printInvoice);

// Initialize totals on page load
document.addEventListener('DOMContentLoaded', function() {
  updateTotals();
});