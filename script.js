// Функция вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция изменения цвета фона страницы
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === "none" ? "block" : "none";
    }
}

// Функция извлечения значения параметра utm_term из URL
function updateHeadingFromUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const h1 = document.querySelector("h1");
    if (h1 && utmTerm) {
        h1.textContent = utmTerm;
    }
}

// Функция вывода текущего времени в консоль
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('ru-RU', { hour12: false });
    console.log(`Текущее время: ${timeString}`);
}

// Функция сброса цвета фона к исходному
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}

// Вызов функций в необходимом порядке
console.log("-----------------------------------------")
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility(".content");
    updateHeadingFromUTM();
});
