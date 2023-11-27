const form = document.getElementById("form")

function validaForm() {
    var fieldA = document.getElementById("fieldA").value;
    var fieldB = document.getElementById("fieldB").value;

    if (fieldB > fieldA) {
        document.getElementById("message").innerHTML = "Formulário válido!";
        document.getElementById("message").style.color = "green";
        return true;
    } else {
        document.getElementById("message").innerHTML = "Formulário inválido! O valor de B deve ser maior que o valor de A.";
        document.getElementById("message").style.color = "red";
        return false;
    }
}