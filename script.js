const formNewsletter = document.getElementById("form-newsletter");
const emailInput = document.getElementById("email-input");

formNewsletter.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value;

  alert(
    `Obrigado por se inscrever, senhor veríssimo! \nNovidades serão enviadas para: ${email}`,
  );
  emailInput.value = "";
});

const music = document.getElementById("bg-music");
const playBtn = document.getElementById("play-pause");
const volumeSlider = document.getElementById("volume-slider");

// Play / Pause
playBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    playBtn.innerHTML = '<i class="bi bi-pause-fill"></i> Pause';
  } else {
    music.pause();
    playBtn.innerHTML = '<i class="bi bi-play-fill"></i> Play';
  }
});

// Mixer de Volume
volumeSlider.addEventListener("input", (event) => {
  // O valor do input (0 a 1) altera diretamente o volume do áudio
  music.volume = event.target.value;
});
