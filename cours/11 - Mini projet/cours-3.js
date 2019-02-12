/* Mini projet : valider un rendez-vous */
// Retrouvez chaque version du projet dans cours-1.js, cours-2.js etc.

// Version 3 : pour une durée de RDV de 25 minutes

// Début du RDV : 15h40
let debutRdvHeures = 15;
let debutRdvMinutes = 40;

// Fin de journée : 16h30
let finJourneeHeures = 16;
let finJourneeMinutes = 30;

// Durée du RDV : 25 minutes
let duree = 25;

// Calcul de la fin du RDV
let finRdvHeures = debutRdvHeures;
let finRdvMinutes = debutRdvMinutes + duree;

// Gestion du cas particulier où les minutes sont >= 60
if (finRdvMinutes >= 60) {
  finRdvHeures = finRdvHeures + 1;
  finRdvMinutes = finRdvMinutes - 60;
}

// Est-ce que la fin du RDV est avant la fin de la journée ?
if (
  finRdvHeures < finJourneeHeures
  || (finRdvHeures === finJourneeHeures && finRdvMinutes < finJourneeMinutes)) {
  console.log("RDV OK");
} else {
  console.log("RDV impossible");
}

// Gestion du format HHhMM
if (finRdvMinutes < 10) {
  console.log("Le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
} else {
  console.log("Le RDV se terminera à " + finRdvHeures + "h" + finRdvMinutes);
}