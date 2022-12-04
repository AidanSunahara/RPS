const checkbox = document.querySelector("#toggle");
var background = document.getElementById("base");
const toggleTheme = function () {
    checkbox.checked ? background.setAttribute("data-theme", "forest")
    : background.setAttribute("data-theme", "lofi")
    if (checkbox.checked) {
        localStorage.setItem('darkModeStorage', "on")
    }
    else {
        localStorage.setItem('darkModeStorage', "off")
    }
}
//toggleTheme();
checkbox.addEventListener("click", toggleTheme)

if (localStorage.getItem('darkModeStorage') === null) {
    console.log("Dark Mode is null")
    localStorage.setItem('darkModeStorage', "off")
  } 
  else {
      const darkModeStorage = localStorage.getItem('darkModeStorage')
      if (darkModeStorage === "on") {
          background.setAttribute("data-theme", "forest")
          checkbox.checked = true
      }
      else {
          background.setAttribute("data-theme", "lofi")
      }
      console.log("test")
  }