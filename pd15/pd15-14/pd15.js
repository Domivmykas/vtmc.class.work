function mergeArraysAndRemoveDuplicates(arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  let uniqueArray = [...new Set(mergedArray)];
  return uniqueArray;
}