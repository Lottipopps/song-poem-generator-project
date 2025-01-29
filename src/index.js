import Typewriter from "typewriter-effect/dist/core";

function generateSongLyrics(event) {
  event.preventDefault();
  let songLyrics = document.querySelector("#song-lyrics");
  new Typewriter(songLyrics, {
    strings:
      "L'Onore! <br /> Ladri! Voi state ligi all'onor vostro, voi! <br/> Cloache d'ignominia! <br/> - Sir John Falstaff",
    autoStart: true,
  });
}

let form = document.querySelector("form");
form.addEventListener("submit", generateSongLyrics);
