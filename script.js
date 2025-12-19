const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");
const html = document.documentElement;

if (localStorage.theme === "dark") {
  html.classList.add("dark");
  icon.className = "ri-sun-line text-xl";
}

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.theme = "dark";
    icon.className = "ri-sun-line text-xl";
  } else {
    localStorage.theme = "light";
    icon.className = "ri-moon-line text-xl";
  }
});

const menuToggle = document.getElementById("menuToggle");
const menuPanel = document.getElementById("menuPanel");

menuToggle.addEventListener("click", () => {
  const isOpen = menuPanel.classList.contains("translate-x-full");
  if (isOpen) {
    // buka
    menuPanel.classList.remove(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
  } else {
    // tutup
    menuPanel.classList.add(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
  }
});

document.addEventListener("click", (e) => {
  const wrapper = document.getElementById("navWrapper");
  if (!wrapper.contains(e.target)) {
    menuPanel.classList.add(
      "translate-x-full",
      "opacity-0",
      "pointer-events-none"
    );
  }
});

const spotify = document.getElementById("spotify");

function setSpotifyTheme() {
  const isDark = document.documentElement.classList.contains("dark");
  spotify.src = `https://open.spotify.com/embed/playlist/2206mnD8u5SZ8b3sPxEHOg?utm_source=generator&theme=${
    isDark ? "1" : "0"
  }`;
}

setSpotifyTheme();

document
  .getElementById("themeToggle")
  .addEventListener("click", setSpotifyTheme);
