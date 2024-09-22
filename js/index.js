document.getElementById("calculate").addEventListener("click", function () {
  const income = getInputValue("income");
  const software = getInputValue("software");
  const courses = getInputValue("courses");
  const internet = getInputValue("internet");
  const totalCost = software + courses + internet;
  const balance = income - totalCost;
  if (isNaN(balance) || income < totalCost) {
    removeHidden("logic-error");
    setHidden("results");
    return;
  } else {
    setHidden("logic-error");
  }
  removeHidden("results");
  setValueToInner("total-expenses", totalCost);
  setValueToInner("balance", balance);
});

// validation
