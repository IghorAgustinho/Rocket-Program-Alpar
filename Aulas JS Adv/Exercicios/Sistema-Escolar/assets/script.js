class Usuario {

    constructor(nome, email, senha) {
        this._nome = nome;
        this._email = email;
        this._senha = senha;
    }
    get nome() { return this._nome; }
    set nome(nome) { this._nome = nome; }

    get email() { return this._email; }
    set email(email) { this._email = email; }

    get senha() { return this._senha; }
    set senha(senha) { this._senha = senha; }

    exibirPerfil(nome, email) {

        console.log(this.nome);
        console.log(this.email);
    }
}


class Aluno extends Usuario {

    constructor(nome, email, senha, turma) {

        super(nome, email, senha)
        this._turma = turma;
    }

    get turma() { return this._turma; }
    set turma(turma) { this._turma = turma; }

    exibirPerfil() {

        console.log(this.nome);
        console.log(this.email);
        console.log(this.turma);
    }
}

class Professor extends Usuario {

    constructor(nome, email, senha, materias) {

        super(nome, email, senha)
        this._materias = materias;
    }

    get materias() { return this._materias; }
    set materias(materias) { this._materias = materias; }

    exibirPerfil() {

        console.log(this.nome);
        console.log(this.email);
        console.log(this.materias);
    }
}



