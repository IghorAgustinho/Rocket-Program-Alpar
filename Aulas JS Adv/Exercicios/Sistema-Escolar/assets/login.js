const listaUsuarios = [
    new Aluno("Ighor", "ighor.pontes@alpar.com.br", "123456", "A"),
    new Aluno("Alexandre", "Alexandre@alpar.com.br", "123456", "B"),
    new Professor("Ana", "ana@alparacademy.com.br", "senha123", "Web"),
    new Professor("Carlos", "carlos@alparacademy.com.br", "senha123", "POO")
];

listaUsuarios.forEach(usuario => {
    usuario.exibirPerfil();
    console.log("-----------------------");
});

document.getElementById('btnLogin').addEventListener('click', function () {

    const emailDigitado = document.getElementById('emailInput').value;
    const senhaDigitada = document.getElementById('senhaInput').value;
    const usuarioEncontrado = listaUsuarios.find(usuario => usuario.email === emailDigitado && usuario.senha === senhaDigitada);

    if (usuarioEncontrado) {

        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        window.location.href = "perfil.html";
    }
    else {

        document.getElementById('mensagemErro').style.display = 'block';
    }

});



