let premiumValue = 0;

function calculatePremium() {
  let income = document.getElementById("income").value;

  if (!income) {
    alert("Enter income first!");
    return;
  }

  // AI-like mock logic
  let riskFactor = Math.random() * 0.2;
  premiumValue = income * 0.05 + riskFactor * 100;

  document.getElementById("premium").innerText =
    "Weekly Premium: ₹" + premiumValue.toFixed(2);
}

function simulateRain() {
  triggerPayout("Heavy Rain");
}

function simulateTraffic() {
  triggerPayout("Traffic Jam");
}

function triggerPayout(reason) {
  if (premiumValue === 0) {
    alert("Calculate premium first!");
    return;
  }

  let payout = premiumValue * 5;

  document.getElementById("payout").innerText =
    "Payout Triggered due to " + reason + ": ₹" + payout.toFixed(2);
}