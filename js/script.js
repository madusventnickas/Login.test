document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();
    validateForm();
});

// Adicione a lógica para limpar a mensagem de sucesso quando o conteúdo dos inputs é apagado
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
        messages.classList.add('success'); // Adiciona a classe de sucesso
    }
}

function showErrorAnimation() {
    var loginContainer = document.querySelector('.login-container');
    var messages = document.getElementById('messages'); // Adicionei essa linha
    loginContainer.classList.add('error-shake');
    messages.classList.remove('success'); // Remove a classe de sucesso

    setTimeout(function () {
        loginContainer.classList.remove('error-shake');
    }, 500);
}

function showSuccessAnimation() {
    var loginContainer = document.querySelector('.login-container');
    loginContainer.classList.add('success-scale');

    setTimeout(function () {
        loginContainer.classList.remove('success-scale');
    }, 500);
}

// Adicione a lógica para abrir e fechar o modal
var modal = document.getElementById('forgotPasswordModal');
var forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
var closeBtn = document.getElementById('closeBtn');

// Inicialmente, mantenha o modal fechado
modal.style.display = 'none';

forgotPasswordBtn.onclick = function () {
    modal.style.display = 'block';
};

closeBtn.onclick = function () {
    modal.style.display = 'none';
    clearModalInputs();
};

function clearSuccessMessage() {
    var messages = document.getElementById('messages');
    messages.innerHTML = '';
    messages.classList.remove('success'); // Remove a classe de sucesso
}

function clearModalInputs() {
    var emailInput = document.getElementById('email');
    emailInput.value = '';
}