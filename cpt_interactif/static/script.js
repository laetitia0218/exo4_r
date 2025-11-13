// Fonction qui récupère la valeur du compteur
async function getCounter() {
  const response = await fetch("/counter");
  const data = await response.json();
  document.getElementById("counter").innerText = data.counter;
}

// Fonction qui incrémente ou décrémente le compteur
async function updateCounter(action) {
  const response = await fetch(`/counter/${action}`, { method: "POST" });
  const data = await response.json();
  document.getElementById("counter").innerText = data.counter;
}

// Événements sur les boutons
document.getElementById("inc").onclick = () => updateCounter("inc");
document.getElementById("dec").onclick = () => updateCounter("dec");

// Charger la valeur au démarrage
getCounter();

// Lancer le polling toutes les 5 secondes pour synchroniser tous les navigateurs
setInterval(getCounter, 5000); // 5000 ms = 5 secondes
