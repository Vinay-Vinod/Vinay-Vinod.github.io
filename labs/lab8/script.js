function toggleTheme() {
    
    document.body.classList.toggle("dark-mode")
}

let buttonVariable = document.getElementById("toggleButton")
buttonVariable.onclick = toggleTheme;

