const index = localStorage.getItem('animalEditando');
const animais = JSON.parse(localStorage.getItem('animais')) || [];
const animal = animais[index];

document.getElementById('nome').value = animal.nome;
document.getElementById('tipo').value = animal.tipo;
document.getElementById('idade').value = animal.idade;
document.getElementById('cor').value = animal.cor;
document.getElementById('porte').value = animal.porte;
document.getElementById('descricao').value = animal.descricao;
document.getElementById('contato').value = animal.contato;

function salvarEdicao() {
  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const idade = document.getElementById('idade').value;
  const cor = document.getElementById('cor').value;
  const porte = document.getElementById('porte').value;
  const descricao = document.getElementById('descricao').value;
  const contato = document.getElementById('contato').value;
  const fotoInput = document.getElementById('foto');

  const atualizar = () => {
    animais[index] = {
      ...animais[index],
      nome, tipo, idade, cor, porte, descricao, contato
    };
    localStorage.setItem('animais', JSON.stringify(animais));
    localStorage.removeItem('animalEditando');
    window.location.href = 'dashboard.html';
  };

  if (fotoInput.files[0]) {
    const reader = new FileReader();
    reader.onload = () => {
      animais[index].foto = reader.result;
      atualizar();
    };
    reader.readAsDataURL(fotoInput.files[0]);
  } else {
    atualizar();
  }
}
