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
                  <div class="countdown-item number">${days}</div>
                  <div class="countdown-item label">Días</div>
              </div>
              <div class="block">
                  <div class="countdown-item number">${hours}</div>
                  <div class="countdown-item label">Horas</div>
              </div>
              <div class="block">
                  <div class="countdown-item number">${minutes}</div>
                  <div class="countdown-item label">Minutos</div>
              </div>
              <div class="block">
                  <div class="countdown-item number">${seconds}</div>
                  <div class="countdown-item label">Segundos</div>
              </div>
          `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
