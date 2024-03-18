let knyga = {
  pavadinimas: 'Pavadinimo pavyzdys',
  autorius: 'Autoriaus pavyzdys',
  puslapiuSkaicius: 300
};

function spausdintiKnygosPranesima() {
  console.log(`Knyga "${knyga.pavadinimas}" autoriaus ${knyga.autorius} turi ${knyga.puslapiuSkaicius} puslapius.`);
}