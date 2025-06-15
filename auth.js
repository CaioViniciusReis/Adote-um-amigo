function cadastrar() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  if (!email || !senha) return alert('Preencha todos os campos');
  localStorage.setItem(`user_${email}`, senha);
  alert('Usuário cadastrado com sucesso!');
}

function login() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const storedSenha = localStorage.getItem(`user_${email}`);
  if (storedSenha === senha) {
    localStorage.setItem('userLogado', email);
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('mensagem').innerText = 'Login inválido';
  }
}
