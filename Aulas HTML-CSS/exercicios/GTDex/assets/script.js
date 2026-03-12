
const dadosCarros = [
    {
        id: 1,
        nome: "Aston Martin Vantage '18",
        marca: "Aston Martin",
        imagem: "./assets/img/vantage.png",
        imagem2: "./assets/img/vantage_2.png",
        tituloDescricao: "Esta máquina leve de fazer curvas foi aclamada como o melhor Aston Martin de todos os tempos.",
        descricao: "O Vantage provou ser um sucesso como um carro esportivo focado em desempenho, de tração traseira. O modelo introduzido em 2017 compartilhou muito de sua construção com o DB11 V8, mas apresentava uma distância entre eixos mais curta e era aproximadamente 265 lbs mais leve. O motor era um V8 biturbo de 4.0 litros derivado da Mercedes-AMG.",
        categoria: "Gr.N", pp: "595.91", cilindrada: "3982 cc", tracao: "FR",
        potencia: "502 HP / 6000 rpm", torque: "505.5 ft-lb / 2000 rpm", peso: "3373 lbs.",
        aspiracao: "TC", comprimento: "175.8 in.", largura: "76.5 in.", altura: "50.1 in."
    },
    {
        id: 2,
        nome: "Nissan Skyline GT-R V·spec II (R34) '02",
        marca: "Nissan",
        imagem: "./assets/img/r34.png",
        imagem2: "./assets/img/r34_2.png",
        tituloDescricao: "A evolução final da lendária geração R34 do Skyline GT-R.",
        descricao: "Lançado em agosto de 2000, o V-spec II trazia um capô de fibra de carbono com duto NACA e suspensão ainda mais rígida. É considerado por muitos o auge da engenharia japonesa dos anos 90, equipado com o indestrutível motor RB26DETT e o avançado sistema de tração integral ATTESA E-TS.",
        categoria: "Gr.N", pp: "550.20", cilindrada: "2568 cc", tracao: "4WD",
        potencia: "276 HP / 6800 rpm", torque: "289.3 ft-lb / 4400 rpm", peso: "3439 lbs.",
        aspiracao: "TC", comprimento: "181.1 in.", largura: "70.3 in.", altura: "53.5 in."
    },
    {
        id: 3,
        nome: "Toyota Supra RZ '97",
        marca: "Toyota",
        imagem: "./assets/img/supra.png",
        imagem2: "./assets/img/supra_2.png",
        tituloDescricao: "O ícone dos anos 90 com um dos motores mais famosos da história.",
        descricao: "O modelo RZ era o topo de linha da quarta geração do Supra (JZA80). Ele se tornou uma lenda mundial graças ao seu motor 2JZ-GTE biturbo, conhecido por sua extrema durabilidade e capacidade de suportar modificações insanas de potência sem abrir o bloco.",
        categoria: "Gr.N", pp: "532.15", cilindrada: "2997 cc", tracao: "FR",
        potencia: "325 HP / 5600 rpm", torque: "332.0 ft-lb / 4000 rpm", peso: "3329 lbs.",
        aspiracao: "TC", comprimento: "177.9 in.", largura: "71.3 in.", altura: "50.2 in."
    },
    {
        id: 4,
        nome: "Porsche 911 GT3 RS (991) '16",
        marca: "Porsche",
        imagem: "./assets/img/porsche.png",
        imagem2: "./assets/img/porsche_2.png",
        tituloDescricao: "Um carro de corrida legalizado para as ruas, purista e implacável.",
        descricao: "A geração 991 do GT3 RS levou o motor boxer de seis cilindros naturalmente aspirado ao limite. Com aerodinâmica agressiva focada em downforce e uso extensivo de materiais leves como magnésio e fibra de carbono, é uma das melhores experiências de pilotagem em pista já criadas.",
        categoria: "Gr.N", pp: "650.45", cilindrada: "3996 cc", tracao: "RR",
        potencia: "493 HP / 8250 rpm", torque: "339.2 ft-lb / 6250 rpm", peso: "3130 lbs.",
        aspiracao: "NA", comprimento: "179.0 in.", largura: "74.0 in.", altura: "50.8 in."
    },
    {
        id: 5,
        nome: "Ferrari F40 '92",
        marca: "Ferrari",
        imagem: "./assets/img/f40.png",
        imagem2: "./assets/img/f40_2.png",
        tituloDescricao: "O último projeto supervisionado pessoalmente por Enzo Ferrari.",
        descricao: "Criada para celebrar o 40º aniversário da Ferrari, a F40 era essencialmente um carro do Grupo B adaptado para as ruas. Sem direção hidráulica, sem rádio e com portas puxadas por cordinhas, seu foco era puramente a velocidade, impulsionada por um V8 biturbo brutal.",
        categoria: "Gr.N", pp: "630.80", cilindrada: "2936 cc", tracao: "MR",
        potencia: "471 HP / 7000 rpm", torque: "425.4 ft-lb / 4000 rpm", peso: "2976 lbs.",
        aspiracao: "TC", comprimento: "171.6 in.", largura: "77.6 in.", altura: "44.2 in."
    },
    {
        id: 6,
        nome: "Mazda RX-7 Spirit R Type A (FD) '02",
        marca: "Mazda",
        imagem: "./assets/img/rx7.png",
        imagem2: "./assets/img/rx7_2.jpg",
        tituloDescricao: "A edição final e mais cobiçada do lendário esportivo de motor rotativo.",
        descricao: "O Spirit R foi o canto do cisne da geração FD do RX-7. A versão Type A era a mais agressiva, com dois lugares, freios maiores e assentos Recaro vermelhos exclusivos. Seu motor Wankel de duplo rotor biturbo é famoso pelo som único e entrega de potência suave.",
        categoria: "Gr.N", pp: "545.60", cilindrada: "1308 cc", tracao: "FR",
        potencia: "276 HP / 6500 rpm", torque: "231.5 ft-lb / 5000 rpm", peso: "2800 lbs.",
        aspiracao: "TC", comprimento: "168.5 in.", largura: "68.9 in.", altura: "48.4 in."
    },
    {
        id: 7,
        nome: "Honda NSX Type R '92",
        marca: "Honda",
        imagem: "./assets/img/nsx.png",
        imagem2: "./assets/img/nsx_2.png",
        tituloDescricao: "O supercarro japonês que obrigou a Ferrari a repensar seus carros.",
        descricao: "Desenvolvido com o feedback do tricampeão de F1 Ayrton Senna, o NSX-R foi uma versão de pista aliviada. A Honda removeu 120 kg de isolamento acústico e equipamentos de conforto, resultando em um chassi de alumínio perfeitamente equilibrado com um motor VTEC brilhante.",
        categoria: "Gr.N", pp: "530.10", cilindrada: "2977 cc", tracao: "MR",
        potencia: "276 HP / 7300 rpm", torque: "216.9 ft-lb / 5400 rpm", peso: "2711 lbs.",
        aspiracao: "NA", comprimento: "173.4 in.", largura: "71.3 in.", altura: "46.1 in."
    },
    {
        id: 8,
        nome: "Ford Mustang Boss 429 '69",
        marca: "Ford",
        imagem: "./assets/img/mustang.png",
        imagem2: "./assets/img/mustang_2.png",
        tituloDescricao: "Um muscle car raro construído apenas para homologar um motor da NASCAR.",
        descricao: "Para competir com a Chrysler na NASCAR, a Ford precisava homologar seu massivo motor V8 de 429 polegadas cúbicas (7.0L). O motor era tão grande que a Ford teve que contratar uma empresa externa para modificar os chassis do Mustang para que ele coubesse no cofre.",
        categoria: "Gr.N", pp: "510.50", cilindrada: "7030 cc", tracao: "FR",
        potencia: "375 HP / 5200 rpm", torque: "450.0 ft-lb / 3400 rpm", peso: "3520 lbs.",
        aspiracao: "NA", comprimento: "187.4 in.", largura: "71.8 in.", altura: "50.4 in."
    },
    {
        id: 9,
        nome: "BMW M3 Coupé '07",
        marca: "BMW",
        imagem: "./assets/img/bmw.png",
        imagem2: "./assets/img/bmw_2.png",
        tituloDescricao: "A única geração do M3 equipada com um motor V8.",
        descricao: "A geração E92 marcou uma grande mudança para a linha M3, abandonando o tradicional seis cilindros em linha por um V8 de 4.0 litros de altíssima rotação (S65). Com a linha vermelha acima de 8.000 rpm, é um dos motores de melhor som já produzidos pela marca bávara.",
        categoria: "Gr.N", pp: "560.80", cilindrada: "3999 cc", tracao: "FR",
        potencia: "414 HP / 8300 rpm", torque: "295.0 ft-lb / 3900 rpm", peso: "3649 lbs.",
        aspiracao: "NA", comprimento: "181.7 in.", largura: "71.0 in.", altura: "55.8 in."
    },
    {
        id: 10,
        nome: "Chevrolet Corvette C7 ZR1 '19",
        marca: "Chevrolet",
        imagem: "./assets/img/corvette.png",
        imagem2: "./assets/img/corvette_2.png",
        tituloDescricao: "O ápice absoluto da plataforma de motor dianteiro do Corvette.",
        descricao: "O último dos Corvettes de motor dianteiro foi embora com um estrondo. O C7 ZR1 empurra números absurdos graças a um enorme supercharger de 2.65 litros acoplado ao V8 de 6.2L. Sua asa traseira massiva e apêndices aerodinâmicos o mantêm grudado no asfalto.",
        categoria: "Gr.N", pp: "680.20", cilindrada: "6162 cc", tracao: "FR",
        potencia: "755 HP / 6300 rpm", torque: "715.0 ft-lb / 4400 rpm", peso: "3560 lbs.",
        aspiracao: "SC (Supercharger)", comprimento: "176.9 in.", largura: "77.4 in.", altura: "48.6 in."
    }
];


const containerDex = document.getElementById('containerDex');
const inputBusca = document.getElementById('inputBusca');
const modalCarro = document.getElementById('modalCarro');
const botaoFechar = document.getElementById('botaoFechar');

function renderizarCarros(listaDeCarros) {
    containerDex.innerHTML = '';

    listaDeCarros.forEach(carro => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${carro.imagem}" alt="${carro.nome}">
            <h3>${carro.nome}</h3>
            <p>${carro.marca}</p>
        `;

        card.addEventListener('click', () => abrirModal(carro));
        containerDex.appendChild(card);
    });
}

inputBusca.addEventListener('input', (evento) => {
    const termoBuscado = evento.target.value.toLowerCase();

    const carrosFiltrados = dadosCarros.filter(carro =>
        carro.nome.toLowerCase().includes(termoBuscado) ||
        carro.marca.toLowerCase().includes(termoBuscado)
    );

    renderizarCarros(carrosFiltrados);
});


function abrirModal(carro) {

    document.getElementById('imgModal').src = carro.imagem2;
    document.getElementById('nomeModal').textContent = carro.nome;
    document.getElementById('tituloDescricaoModal').textContent = carro.tituloDescricao;
    document.getElementById('descricaoModal').textContent = carro.descricao;
    document.getElementById('categoriaModal').textContent = carro.categoria;
    document.getElementById('ppModal').textContent = carro.pp;
    document.getElementById('cilindradaModal').textContent = carro.cilindrada;
    document.getElementById('tracaoModal').textContent = carro.tracao;
    document.getElementById('potenciaModal').textContent = carro.potencia;
    document.getElementById('torqueModal').textContent = carro.torque;
    document.getElementById('pesoModal').textContent = carro.peso;
    document.getElementById('aspiracaoModal').textContent = carro.aspiracao;
    document.getElementById('comprimentoModal').textContent = carro.comprimento;
    document.getElementById('larguraModal').textContent = carro.largura;
    document.getElementById('alturaModal').textContent = carro.altura;


    modalCarro.classList.remove('oculto');
}


botaoFechar.addEventListener('click', () => {
    modalCarro.classList.add('oculto');
});


window.addEventListener('click', (evento) => {
    if (evento.target === modalCarro) {
        modalCarro.classList.add('oculto');
    }
});

const modalForm = document.getElementById('modalForm');
const btnAbrirForm = document.getElementById('btnAbrirForm');
const fecharForm = document.getElementById('fecharForm');
const formNovoCarro = document.getElementById('formNovoCarro');


btnAbrirForm.addEventListener('click', () => modalForm.classList.remove('oculto'));
fecharForm.addEventListener('click', () => modalForm.classList.add('oculto'));


formNovoCarro.addEventListener('submit', (evento) => {
    evento.preventDefault();


    const novoCarro = {
        id: dadosCarros.length + 1,
        nome: document.getElementById('inputNome').value,
        marca: document.getElementById('inputMarca').value,
        imagem: document.getElementById('inputImagem').value,
        imagem2: document.getElementById('inputImagem2').value,
        tituloDescricao: "Adicionado Manualmente",
        descricao: document.getElementById('inputDescricao').value,
        categoria: document.getElementById('inputCategoria').value,
        pp: document.getElementById('inputPP').value,
        cilindrada: document.getElementById('inputCilindrada').value,
        tracao: document.getElementById('inputTracao').value,
        potencia: document.getElementById('inputPotencia').value,
        torque: document.getElementById('inputTorque').value,
        peso: document.getElementById('inputPeso').value,
        aspiracao: document.getElementById('inputAspiracao').value,
        comprimento: document.getElementById('inputComprimento').value,
        largura: document.getElementById('inputLargura').value,
        altura: document.getElementById('inputAltura').value
    };


    dadosCarros.push(novoCarro);


    renderizarCarros(dadosCarros);


    formNovoCarro.reset();
    modalForm.classList.add('oculto');

    alert("Carro adicionado com sucesso na sessão atual!");
});

renderizarCarros(dadosCarros);