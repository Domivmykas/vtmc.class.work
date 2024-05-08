function sortAlphabetically() {
  const list = document.getElementById('myList');
  const items = Array.from(list.getElementsByTagName('li'));
  items.sort((a, b) => a.textContent.localeCompare(b.textContent));
  items.forEach(item => list.appendChild(item));
}

function sortByOrder() {
  const list = document.getElementById('myList');
  const items = Array.from(list.getElementsByTagName('li'));
  items.sort((a, b) => Array.from(list.children).indexOf(a) - Array.from(list.children).indexOf(b));
  items.forEach(item => list.appendChild(item));
}