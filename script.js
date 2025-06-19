
function enviarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    document.getElementById("confirmacao").innerText = `Obrigado pelo contato, ${nome}! Sua mensagem foi recebida com sucesso para a Aprentec.`;
}

function mudar() {
            document.getElementById("imagemClick").src = "cursos1.png";
        }