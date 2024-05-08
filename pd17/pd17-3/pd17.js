// Raskite mygtuką pagal jo ID
var mygtukas = document.getElementById("mygtukas");

// Pridėkite įvykių klausytoją paspaudimui
mygtukas.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue"; // Keičiama tinklalapio fono spalva
});