document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

document.getElementById('username').addEventListener('input', function () {
    clearSuccessMessage();
});

document.getElementById('password').addEventListener('input', function () {
    clearSuccessMessage();
});

function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var messages = document.getElementById('messages');

    messages.innerHTML = '';

    if (username.trim() === '' || password.trim() === '') {
        messages.innerHTML = 'Por favor, preencha todos os campos.';
        showErrorAnimation();
    } else {
        messages.innerHTML = 'Login bem-sucedido!';
        showSuccessAnimation();
        messages.classList.add('success');

        clearModalInputs();

        setTimeout(function () {
            modal.style.display = 'none';
        }, 1000);
    }
}

function clearModalInputs() {
    var emailInput = document.getElementById('email');
    emailInput.value = '';
}


function showErrorAnimation() {
    var loginContainer = document.querySelector('.loginContainer');
    var messages = document.getElementById('messages');
    loginContainer.classList.add('errorShake');
    messages.classList.remove('success');

    setTimeout(function () {
        loginContainer.classList.remove('errorShake');
    }, 500);
}

function showSuccessAnimation() {
    var loginContainer = document.querySelector('.loginContainer');
    loginContainer.classList.add('successScale');

    setTimeout(function () {
        loginContainer.classList.remove('successScale');
    }, 500);
}

var modal = document.getElementById('forgotPasswordModal');
var forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
var closeBtn = document.getElementById('closeBtn');
var overlay = document.getElementById('overlay');
var emailInput = document.getElementById('email');
var recoverPasswordBtn = document.getElementById('recoverPasswordBtn'); // Adicione esta linha

modal.style.display = 'none';

forgotPasswordBtn.onclick = function () {
    modal.style.display = 'block';
};

closeBtn.onclick = function () {
    modal.style.display = 'none';
    clearModalInputs();
};

recoverPasswordBtn.onclick = function () { 
    recoverPassword();
};

function clearModalInputs() {
    emailInput.value = '';
}

function recoverPassword() {
    modal.style.display = 'none';
    clearModalInputs();
}
