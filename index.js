function verificarConteudo() {
    let emailInput = document.getElementById("emailInput").value;
    let senhaInput = document.getElementById("senhaInput").value;

    if (!emailInput || !senhaInput) {
        alert("Por favor, preencha todos os campos.");
    } else {       
        window.location.href = "index1.html";
    }
}
