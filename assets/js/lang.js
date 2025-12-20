const texts = {
  id: {
    badge: "Websitenya belum selesai. Hehe:)",
    role: "Developer Web Junior",
    grad: "Fresh Graduate",
    desc: "Seorang developer 18 tahun dengan pengalaman junior di pengembangan <b>frontend</b> dan <b>backend</b>, kini mendalami <b>AI</b> dan <b>machine learning</b>.",
    touch: "Hubungi saya!",
    lang: "ID",
  },
  en: {
    badge: "This website is not completely finished yet.",
    role: "Junior Web Developer",
    grad: "Fresh Graduate",
    desc: "An 18-year-old aspiring developer with junior-level experience in <b>frontend</b> and <b>backend</b> development, currently exploring <b>AI</b> and <b>machine learning</b>.",
    touch: "Get in touch!",
    lang: "ENG",
  },
};

let current = "en";
const btnLang = document.getElementById("languageToggle");
const badgeEl = document.getElementById("badgeText");
const roleEl = document.getElementById("roleText");
const gradEl = document.getElementById("gradText");
const descEl = document.getElementById("descText");
const touchEl = document.getElementById("touchText");

function setLang(lang) {
  current = lang;
  btnLang.textContent = texts[lang].lang;
  badgeEl.textContent = texts[lang].badge;
  roleEl.textContent = texts[lang].role;
  gradEl.textContent = texts[lang].grad;
  touchEl.textContent = texts[lang].touch;
  descEl.innerHTML = texts[lang].desc;
}

btnLang.addEventListener("click", () =>
  setLang(current === "en" ? "id" : "en")
);

setLang("en");
