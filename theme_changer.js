const checkbox = document.querySelector("#toggle");
var background = document.getElementById("base");
const toggleTheme = function () {
    checkbox.checked ? background.setAttribute("data-theme", "forest")
    : background.setAttribute("data-theme", "lofi")
       
    
   
    }
toggleTheme();
checkbox.addEventListener("click", toggleTheme)
