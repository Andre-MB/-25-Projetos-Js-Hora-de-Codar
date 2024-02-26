const form = document.querySelector("#form");
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTestarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio
    if (nameInput.value === "") {
        alert("Por favor, preencha o seu nome")
        return;
    }

    // Verifica se o e-mail está preenchido e se é valido
    if (emailInput.value === "" || !isEmailValida(emailInput.value)) {
        alert("Por favor, preencha o seu e-mail")
        return;
    }

    // Verifica se a está preenchida
    if (!validatePassword(passwordInput.value, 8)) {
        alert("A senha precisa ser no mínimo 8 digitos")
        return;
    }

    // verifica se a situção foi selacionada
    if (jobSelect.value === "") {
        alert("Por favor, selecione a sua situação")
        return;
    }

    // varifica se a mensagem está preenchida
    if (messageTestarea.value === "") {
        alert("Por favor, digite alguma mensagem")
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form
    form.submit();
})

// Função que valida e-mail
function isEmailValida(email) {
    // cria uma regex para validar email
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true;
    }

    return false;
}

// Função que valida a senha 
function validatePassword(password, minDigits) {
    if (password.length >= minDigits) {
        // senha valida
        return true
    }
    // senha invalida
    return false
}