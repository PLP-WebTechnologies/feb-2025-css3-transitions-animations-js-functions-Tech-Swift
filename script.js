const themeBtn = document.getElementById("themeBtn");

window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.add("light-theme");
  }
};

themeBtn.addEventListener("click", () => {
  if (document.body.classList.contains("light-theme")) {
    document.body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light");
  }
});
