let premiumValue = 0;
let riskScore = 0;

function calculatePremium() {
  let income = document.getElementById("income").value;

  if (!income) {
    alert("Enter income!");
    return;
  }

  // Simulated AI factors
  let weather = Math.random();
  let traffic = Math.random();
  let zone = Math.random();

  riskScore = (weather + traffic + zone) / 3;

  premiumValue = income * 0.05 + riskScore * 100;

  document.getElementById("premium").innerText =
    "Weekly Premium: ₹" + premiumValue.toFixed(2);

  document.getElementById("risk").innerText =
    "Risk Score: " + riskScore.toFixed(2);

  document.getElementById("aiInfo").innerHTML = `
    <li>Weather Impact: ${weather.toFixed(2)}</li>
    <li>Traffic Level: ${traffic.toFixed(2)}</li>
    <li>Zone Risk: ${zone.toFixed(2)}</li>
  `;
}

function simulateRain() {
  triggerPayout("Heavy Rain 🌧");
}

function simulateTraffic() {
  triggerPayout("Traffic Jam 🚦");
}

function simulateOutage() {
  triggerPayout("Platform Down 📱");
}

function triggerPayout(reason) {
  if (premiumValue === 0) {
    alert("Calculate premium first!");
    return;
  }

  let payout = premiumValue * (3 + Math.random() * 2);

  document.getElementById("payout").innerText =
    `✅ Payout Triggered due to ${reason}: ₹${payout.toFixed(2)}`;
}