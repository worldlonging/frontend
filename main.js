//Модальное окно
const modal = document.getElementById("modals");
const btn = document.getElementById("openModal");
const btn2 = document.getElementById("openModal2");
const btn3 = document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const phoneInput = document.getElementById('phone');
const countrySelect = document.getElementById('country');
//Открытие модального окна при нажатии на кнопку
btn.onclick = function() {
    modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}
btn3.onclick = function() {
    modal.style.display = "block";
}

//Закрытие окна при нажатии на крестик
span.onclick = function() {
    modal.style.display = "none";
}

//Закрытие модального окна при нажатии вне рамки
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//Появление кнопки отправки формы при актив чекбоксе
function toggleButton() {
    const checkbox = document.getElementById('chbox');
    const submit = document.getElementById('submit');
    submit.style.display = checkbox.checked ? 'block' : 'none';
}

//Создание масок для форм
function setPhoneMask() {
    const country = countrySelect.value;
    phoneInput.value = '';
    switch (country) {
        case 'ru':
            phoneInput.placeholder = '+7 ___ ___-__-__';
            phoneInput.pattern = '\\+7\\s?\\d{3}\\s?\\d{3}-\\d{2}-\\d{2}';
            break;
        case 'kz':
            phoneInput.placeholder = '+7 ___ ___-__-__';
            phoneInput.pattern = '\\+7\\s?\\d{3}\\s?\\d{3}-\\d{2}-\\d{2}';
            break;
        case 'by':
            phoneInput.placeholder = '+375 ___ ___-__-__';
            phoneInput.pattern = '\\+375\\s?\\d{3}\\s?\\d{3}-\\d{2}-\\d{2}';
            break;
        case 'cn':
            phoneInput.placeholder = '+86 ___ ____-____';
            phoneInput.pattern = '\\+86\\s?\\d{3}\\s?\\d{4}-\\d{4}';
            break;
        default:
            phoneInput.placeholder = '';
            phoneInput.pattern = '';
            break;
    }
}

function restrictInputToNumbers(event) {
    const allowedChars = /[\d\+\-\s]/;
    if (!allowedChars.test(event.key)) {
        event.preventDefault();
    }
}

phoneInput.addEventListener('keypress', restrictInputToNumbers);
countrySelect.addEventListener('change', setPhoneMask);
