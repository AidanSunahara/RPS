const checkbox = document.querySelector("#toggle");
var background = document.getElementById("base");
const toggleTheme = function () {
    if (checkbox.checked == false || checkbox.checked == true){
        const choice = Math.floor(Math.random()*12)
        if (choice == 0){
            background.setAttribute("data-theme", "forest");
        }
        else if (choice == 1){
            background.setAttribute("data-theme", "cupcake");
        }
        else if (choice == 2){
            background.setAttribute("data-theme", "synthwave");
        }
        else if (choice == 3){
            background.setAttribute("data-theme", "halloween");
        }
        else if (choice == 4){
            background.setAttribute("data-theme", "pastel");
        }
        else if (choice == 5){
            background.setAttribute("data-theme", "cyberpunk");
        }
        else if (choice == 6){
            background.setAttribute("data-theme", "fantasy");
        }
        else if (choice == 7){
            background.setAttribute("data-theme", "dracula");
        }
        else if (choice == 8){
            background.setAttribute("data-theme", "lemonade");
        }
        else if (choice == 9){
            background.setAttribute("data-theme", "retro");
        }
        else if (choice == 10){
            background.setAttribute("data-theme", "valentine");
        }
        else if (choice == 11){
            background.setAttribute("data-theme", "coffee");
            printTheme();
        } 
   
    }
}
toggleTheme();
checkbox.addEventListener("click", toggleTheme)
