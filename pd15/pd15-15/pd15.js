function removeElementFromArray(array, element) {
  const index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const initialArray = [1, 2, 3, 4, 5];
const elementToRemove = 3;
const modifiedArray = removeElementFromArray(initialArray, elementToRemove);
console.log(modifiedArray); // Output: [1, 2, 4, 5]