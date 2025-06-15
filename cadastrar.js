function cadastrarAnimal() {
  const nome = document.getElementById('nome').value;
  const tipo = document.getElementById('tipo').value;
  const idade = document.getElementById('idade').value;
  const cor = document.getElementById('cor').value;
  const porte = document.getElementById('porte').value;
  const descricao = document.getElementById('descricao').value;
  const contato = document.getElementById('contato').value;
  const fotoInput = document.getElementById('foto');

  const reader = new FileReader();
  reader.onload = function () {
    const base64 = reader.result;
    const novoAnimal = {
      nome, tipo, idade, cor, porte, descricao, contato,
      foto: base64,
      adotado: false
    };

    const animais = JSON.parse(localStorage.getItem('animais')) || [];
    animais.push(novoAnimal);
    localStorage.setItem('animais', JSON.stringify(animais));

    alert('Animal cadastrado com sucesso!');
    window.location.href = 'dashboard.html';
  };

  if (fotoInput.files[0]) {
    reader.readAsDataURL(fotoInput.files[0]);
  } else {
    alert('Selecione uma imagem!');
  }
}
