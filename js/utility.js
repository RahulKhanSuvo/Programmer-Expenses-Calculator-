// set hidden
function setHidden(id) {
  document.getElementById(id).classList.add("hidden");
}
// remove hidden
function removeHidden(id) {
  document.getElementById(id).classList.remove("hidden");
}
// for validation
function inputValidation(input, errorId) {
  document.getElementById(input).addEventListener("input", function (event) {
    const valueOfInput = event.target.value;
    if (valueOfInput <= 0 || isNaN(valueOfInput)) {
      removeHidden(errorId);
    } else {
      setHidden(errorId);
    }
  });
}
// for get input
function getInputValue(id) {
  return parseFloat(document.getElementById(id).value);
}
// for setValue
function setValueToInner(id, elementToSet) {
  document.getElementById(id).innerText = elementToSet;
}
