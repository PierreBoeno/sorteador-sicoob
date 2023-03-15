let pessoas;

var fileErro = document.querySelector(".erro");

const inputExcel = document.getElementById("input");
inputExcel.addEventListener("change", function () {
  readXlsxFile(input.files[0]).then(function (data) {
    console.log(data);
    pessoas = data;
  });
});

function sortear() {
  x = Math.floor(Math.random() * teste.length);
  console.log(x);
  console.log(teste[x]["NOME"]);
  console.log(teste[x]["CONTA"]);
}

var cont = 1;

function listarTabela() {
  let tableSorteados = document.getElementById("tableSorteados");

  let tr = tableSorteados.insertRow();

  let td_id = tr.insertCell();
  let td_cupom = tr.insertCell();
  let td_nome = tr.insertCell();
  let td_pa = tr.insertCell();

  td_id.innerText = cont;
  td_cupom.innerText = pessoas[x][7];
  td_nome.innerText = pessoas[x][2];
  td_pa.innerText = pessoas[x][5];

  cont += 1;
}

var min = 1;
var qtd_sorteios = 0;

function sortearTeste() {
  if (qtd_sorteios < 5) {
    x = Math.floor(Math.random() * (pessoas.length - min) + min);
    // console.log("Posição antes: " + x);
    if (x == 0) {
      x += 1;
    }
    // console.log("Posição depois: " + x)
    console.log(x);
    console.log(pessoas[x][0]);
    console.log(pessoas[x][1]);
    console.log(pessoas[x][2]);
    console.log(pessoas[x][3]);
    console.log(pessoas[x][6]);

    listarTabela();
  }

  qtd_sorteios += 1;

  console.log("Quantidade de sorteios: " + qtd_sorteios);
}
