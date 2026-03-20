const usuarioSalvo = localStorage.getItem('usuarioLogado');

if (usuarioSalvo) {

    const usuarioE = JSON.parse(usuarioSalvo);
    const Dados = document.getElementById('dadosUsuario');

    let informacaoAdicional = "";

    if (usuarioE._turma) {
        informacaoAdicional = `<p>Turma: ${usuarioE._turma}</p>`;
    } else if (usuarioE._materias) {
        informacaoAdicional = `<p>Matérias: ${usuarioE._materias}</p>`;
    }
    Dados.innerHTML = `
        <h3>Nome: ${usuarioE._nome}</h3>
        <p>Email: ${usuarioE._email}</p>
        ${informacaoAdicional}
    `;


}
else { window.location.href = "index.html"; }



