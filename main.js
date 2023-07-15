const form = document.getElementById('form-contato');
const contatos = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizarListaContatos();
});

function adicionarContato() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    const contato = {
        nome: inputNome.value,
        numero: inputNumero.value
    };

    contatos.push(contato);

    inputNome.value = '';
    inputNumero.value = '';
}

function atualizarListaContatos() {
    const listaContatos = document.getElementById('lista-contatos');
    listaContatos.innerHTML = '';
  
    contatos.forEach(function(contato, index) {
      const itemLista = document.createElement('div');
      itemLista.textContent = `${contato.nome}: ${contato.numero}`;
      itemLista.classList.add('contato-item'); // Adiciona a classe CSS personalizada
  
      const botaoExcluir = document.createElement('button');
      botaoExcluir.textContent = 'Excluir - ';
      botaoExcluir.addEventListener('click', function() {
        excluirContato(index);
      });
  
      itemLista.appendChild(botaoExcluir);
      listaContatos.appendChild(itemLista);
    });
  }
  

    

