function compra(linkDestino) {

    alert('Assinatura feita com sucesso!');

    window.open(linkDestino, '_blank');

}

function darkview(linkDestino) {

    window.open(linkDestino, '_blank');

}

const formulario = document.getElementById('formQuest');

formulario.addEventListener('submit', function(event) {

      event.preventDefault();

    alert('Questionário enviado com sucesso')
});