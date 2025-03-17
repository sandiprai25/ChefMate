document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll(".ingredient-list input");
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function() {
            if (this.checked) {
                this.parentElement.style.textDecoration = "line-through";
            } else {
                this.parentElement.style.textDecoration = "none";
            }
        });
    });
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function printRecipe() {
    window.print();
}
