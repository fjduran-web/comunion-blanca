// === CONFIGURA AQUÍ LA FECHA OBJETIVO ===
const targetDate = new Date("2026-05-09T12:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      "<div>¡Llegó el momento!</div>";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerHTML = `
              <div class="block">
                  <div class="number">${days}</div>
                  <div class="label">Días</div>
              </div>
              <div class="block">
                  <div class="number">${hours}</div>
                  <div class="label">Horas</div>
              </div>
              <div class="block">
                  <div class="number">${minutes}</div>
                  <div class="label">Minutos</div>
              </div>
              <div class="block">
                  <div class="number">${seconds}</div>
                  <div class="label">Segundos</div>
              </div>
          `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
