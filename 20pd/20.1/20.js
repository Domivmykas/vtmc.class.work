$(document).ready(function() {
    var isAvailable = $(".Card").attr("isAvailable");
  
    // Pritaikome stilius pagal sąlygą naudodami ternary operatorių
    isAvailable === "true" ? $(".Card").addClass("available") : $(".Card").addClass("not-available");
  });
  