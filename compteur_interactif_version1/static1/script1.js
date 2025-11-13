// Fonction qui met à jour le compteur côté serveur
async function updateCounter(action) {
  const response = await fetch(`/counter/${action}`, { method: "POST" });
  const data = await response.json();
  document.getElementById("counter").innerText = data.counter;
}

// Fonction qui récupère la valeur du compteur au chargement
async function getCounter() {
  const response = await fetch("/counter");
  const data = await response.json();
  document.getElementById("counter").innerText = data.counter;
}

// Associer les boutons aux actions
document.getElementById("inc").onclick = () => updateCounter("inc");
document.getElementById("dec").onclick = () => updateCounter("dec");

// Charger la valeur initiale du compteur
getCounter();