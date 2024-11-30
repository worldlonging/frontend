const formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    comment: '',
    printData: function () {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Дата: ${this.date}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isNumeric(value) {
    return /^\d*$/.test(value);
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const date = document.getElementById('date').value.trim();
    const comment = document.getElementById('comment').value.trim();

    if (!name || !email || !comment) {
        alert('Поля "Имя", "E-mail" и "Комментарий" должны быть заполнены.');
        return;
    }

    if (!isNumeric(phone)) {
        alert('Поле "Телефон" должно содержать только цифры.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Введите корректный E-mail.');
        return;
    }
    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.date = date;
    formData.comment = comment;
    formData.printData();
    alert('Форма успешно отправлена!');
}
const form = document.getElementById('contactForm');
form.addEventListener('submit', submitForm);