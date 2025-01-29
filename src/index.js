function displayLyrics(response) {
  let songLyrics = document.querySelector("#song-lyrics");
  new Typewriter(songLyrics, {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  }).start();
}

function generateSongLyrics(event) {
  event.preventDefault();
  let topicInput = document.querySelector("#topic-input").value;
  let languageInput = document.querySelector("#language-input").value;
  api_key = "58e244e95c3e78eb13e0ffotadf7c1b8";
  context =
    "You are an expert lyricist and poet, you can write in any language, real or fictional. Write a song in very short verses, add a <br /> between verses, it must be between four and twenty verses in length. All verses must be of similar lengths to fit with the music. The refrain must be in <strong></strong>. Follow user instructions to generate the lyrics. The song must have a title as an <h3 class='song-title'></h3> element at the top. Sign in SheCodes Ai at the end in <em class='signature'></em>";
  prompt = `User Instructions: Generate song lyrics in ${languageInput} about ${topicInput}.`;
  api_url = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${api_key}`;
  axios.get(api_url).then(displayLyrics);
}

let form = document.querySelector("form");
form.addEventListener("submit", generateSongLyrics);
