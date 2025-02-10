document.querySelector(".sunflower").addEventListener("click", function() {
    this.style.transform = "scale(1.5)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 500);
});
