let zmogus = {
  vardas: 'Jonas',
  pavarde: 'Jonaitis',
  amzius: 30,
  profesija: 'Inžinierius'
};

function spausdintiZmogausSavybes(obj) {
  for (let savybe in obj) {
    console.log(obj[savybe]);
  }
}