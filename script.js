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
    const h1 = document.getElementById("welcome");
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
showMessage("Скрипт успешно загружен!");
logCurrentTime();

document.addEventListener("DOMContentLoaded", () => {
    changeBackgroundColor("lightblue");
    //resetBackgroundColor();
    toggleVisibility(".content");
    updateHeadingFromUTM();
});



//13task
document.getElementById("practice").addEventListener("click", () => {
    alert("Вы кликнули на заголовок - так держать!");
});

const Topics = [
    "Базовое бэкенд-приложение",
    "HTTP-запросы",
    "JSON и работа с ним",
    "HTTP-ответы",
    "Проектирование API",
    "Роутинг и его настройка",
    "NoSQL базы данных",
    "Обеспечение авторизации и доступа пользователей",
    "Работа сторонних сервисов уведомления и авторизации",
    "Основы ReactJS",
    "Работа с компонентами динамической DOM",
    "Использование хуков в React",
    "Основы микросервисной архитектуры",
    "Разработка классических модулей веб-приложений",
];

document.getElementById("change").addEventListener("click", () => {
    const tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = ""; // Очистка таблицы

    Topics.forEach((topic, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${topic}</td>`;
        tableBody.appendChild(row);
    });
});


const Photo = document.getElementById("photo");
Photo.addEventListener("mouseover", () => {
    Photo.style.width = "25%";
    Photo.style.height = "25%";
    Photo.style.transition = 'transform 0.4s ease-in-out';
    Photo.style.transform = 'rotate(360deg)';

});

Photo.addEventListener("mouseout", () => {
    Photo.style.width = "20%";
    Photo.style.height = "20%";
    Photo.style.transform = 'rotate(0deg)';
});

Photo.addEventListener("click", () => {
    Photo.src = "https://images.hdqwalls.com/download/mountain-reflections-3840x2400.jpg";
});

// Сообщение по двойному клику
Photo.addEventListener("dblclick", () => {
    alert("Слишком много кликаешь");
});


//14task
const title = document.getElementById('paragraf');
title.addEventListener('mouseover', () => {
    title.style.transition = 'transform 0.3s ease-in-out';
    title.style.transform = 'scale(1.4)';
});

title.addEventListener('mouseout', () => {
    title.style.transform = 'scale(1)';
});
const txt = document.getElementById('text');

txt.addEventListener('click', () => {
    txt.style.transition = 'background-color 0.4s ease';
    if (txt.style.backgroundColor === 'whitesmoke') {
        txt.style.backgroundColor = '';
    } else {
        txt.style.backgroundColor = 'whitesmoke';
    }
});
const showLectures = document.getElementById('showLectures');
const lecturesTable = document.getElementById('lecturesTable');

showLectures.addEventListener('click', () => {
    lecturesTable.style.transition = 'opacity 0.5s ease-in-out';
    if (lecturesTable.style.display === 'none') {
        lecturesTable.style.display = 'table';
        setTimeout(() => {
            lecturesTable.style.opacity = '1';
        }, 10);
    } else {
        lecturesTable.style.opacity = '0';
        setTimeout(() => {
            lecturesTable.style.display = 'none';
        }, 500);
    }
});
const form2 = document.getElementById('form2');
const formMessage = document.getElementById('formMessage');

form2.addEventListener('submit', (event) => {
    event.preventDefault();
    formMessage.style.display = 'block';
    formMessage.style.transition = 'color 0.5s ease-in-out';
    formMessage.style.color = 'red';
});

