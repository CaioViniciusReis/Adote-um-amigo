document.addEventListener('DOMContentLoaded', listarAnimais);

function listarAnimais() {
  const lista = document.getElementById('lista');
  const filtroTipo = document.getElementById('filtroTipo')?.value || '';
  const filtroPorte = document.getElementById('filtroPorte')?.value || '';
  const animais = JSON.parse(localStorage.getItem('animais')) || [];

  lista.innerHTML = '';

  const filtrados = animais.filter(animal => {
    const tipoOk = !filtroTipo || animal.tipo === filtroTipo;
    const porteOk = !filtroPorte || animal.porte === filtroPorte;
    return tipoOk && porteOk;
  });

  if (filtrados.length === 0) {
    lista.innerHTML = '<p>Nenhum animal encontrado com esses filtros.</p>';
    return;
  }

  filtrados.forEach((animal, index) => {
    const card = document.createElement('div');
    card.className = 'animal';

card.innerHTML = `
  <img src="${animal.foto}" alt="${animal.nome}" />
  <h3>${animal.nome} (${animal.tipo})</h3>
  <p>${animal.descricao}</p>
  <ul>
    <li><strong>Idade:</strong> ${animal.idade}</li>
    <li><strong>Cor:</strong> ${animal.cor}</li>
    <li><strong>Porte:</strong> ${animal.porte}</li>
    <li><strong>Status:</strong> ${animal.adotado ? 'Adotado' : 'Disponível'}</li>
    <li><strong>Contato:</strong> ${animal.contato}</li>
  </ul>
  ${!animal.adotado ? `
    <button onclick="adotar(${index})">Marcar como Adotado</button>` : ''}
  <button onclick="editarAnimal(${index})">Editar</button>
  <button onclick="excluirAnimal(${index})">Excluir</button>
`;

    lista.appendChild(card);
  });
}

function adotar(index) {
  const animais = JSON.parse(localStorage.getItem('animais')) || [];
  animais[index].adotado = true;
  localStorage.setItem('animais', JSON.stringify(animais));
  listarAnimais();
}
function excluirAnimal(index) {
  if (!confirm('Tem certeza que deseja excluir este animal?')) return;
  const animais = JSON.parse(localStorage.getItem('animais')) || [];
  animais.splice(index, 1);
  localStorage.setItem('animais', JSON.stringify(animais));
  listarAnimais();
}

function editarAnimal(index) {
  localStorage.setItem('animalEditando', index);
  window.location.href = 'editar.html';
}
