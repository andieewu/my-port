const toggle = document.getElementById("themeToggle");
const themeIcon = toggle.querySelector("i");
const html = document.documentElement;

if (localStorage.theme === "dark") {
  html.classList.add("dark");
  themeIcon.className = "ri-sun-line text-xl";
}
toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
    themeIcon.className = "ri-sun-line text-xl";
  } else {
    localStorage.theme = "light";
    themeIcon.className = "ri-moon-line text-xl";
  }
});

// const spotify = document.getElementById("spotify");
// function setSpotifyTheme() {
//   const isDark = html.classList.contains("dark");
//   spotify.src = `https://open.spotify.com/embed/playlist/2206mnD8u5SZ8b3sPxEHOg?utm_source=generator&theme=${
//     isDark ? "1" : "0"
//   }`;
// }
// setSpotifyTheme();
// toggle.addEventListener("click", setSpotifyTheme);
