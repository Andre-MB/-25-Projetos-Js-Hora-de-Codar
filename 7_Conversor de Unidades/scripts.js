// Chamar os elementos do DOM
const inputElement = document.querySelector("#input");
const fromElement = document.querySelector("#from");
const toElement = document.querySelector("#to");
const outputElement = document.querySelector("#output");
const convertButton = document.querySelector("#convert-btn");
const messageElement = document.querySelector("#message");

// Função para converter aas unidades

function convert() {
    // Obter os valores das unidades de entrada e saida
    const fromValue = fromElement.value;
    const toValue = toElement.value;

    // Verificar se as unidades de entrada e saida são iguais 
    if (fromValue === toValue) {
        outputElement.value = inputElement.value + " m";
        messageElement.textContent = "";
        return;
    }

    // Converter o valor de entrada para metros
    let meters;
    switch (fromValue) {
        case "m":
            meters = inputElement.value;
            break;
        case "km":
            meters = inputElement.value * 1000;
            break;
        case "cm":
            meters = inputElement.value / 100;
            break;
        case "mm":
            meters = inputElement.value / 1000;
            break;
    }

    // Converter os metros para a unidade de saída
    let result;
    switch (toValue) {
        case "m":
            result = meters + "m";
            break;
        case "km":
            result = (meters / 1000).toFixed(2) + " Km";
            break;
        case "cm":
            result = (meters * 100).toFixed(2) + " Cm";
            break;
        case "mm":
            result = (meters * 1000).toFixed(2) + " Mm";
            break;
    }

    // Exibir o resultado no input
    output.value = result;

    // Exibir a mensagem de conversão
    const fromLabel = fromElement.options[fromElement.selectedIndex].text;
    const toLabel = toElement.options[toElement.selectedIndex].text;
    const message = `${inputElement.value} ${fromLabel} equivalem a ${result} ${toLabel}`;
    messageElement.textContent = message;
}


// Adicionar um evento de click ao botão 
convertButton.addEventListener("click", convert);