document.addEventListener("DOMContentLoaded", () => {
    const topButton = document.getElementById("topButton");

    // Показать кнопку при прокрутке вниз
    window.addEventListener("scroll", () => {
        if (window.scrollY > 270) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });

    // Скролл наверх при нажатии на кнопку
    topButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});