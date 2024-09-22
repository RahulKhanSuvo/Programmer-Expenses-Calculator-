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
inputValidation("income", "income-error");
inputValidation("software", "software-error");
inputValidation("courses", "courses-error");
inputValidation("internet", "internet-error");
// calculate saving
document
  .getElementById("calculate-savings")
  .addEventListener("click", function () {
    const income = getInputValue("income");
    const software = getInputValue("software");
    const courses = getInputValue("courses");
    const internet = getInputValue("internet");
    const totalCost = software + courses + internet;
    const balance = income - totalCost;
    const savingPercentage = getInputValue("savings") || 0;
    if (isNaN(savingPercentage)) {
      removeHidden("logic-error");
      return;
    } else {
      setHidden("logic-error");
    }
    const saving = (balance * savingPercentage) / 100;
    const remaining = balance - saving;
    if (isNaN(balance) || income < totalCost) {
      removeHidden("logic-error");
      return;
    } else {
      setHidden("logic-error");
    }
    setValueToInner("savings-amount", saving);
    setValueToInner("remaining-balance", remaining);
  });
// toggle btn
