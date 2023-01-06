import Chart from 'chart.js/auto'

var data = {
  labels: [],
  datasets: []
};


const chart = new Chart(
  document.getElementById('acquisitions'),
  {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Curvas de juros'
        }
      },

    },


  }
);

export function AddTaxaDeJuros(taxa) {
  console.log(chart)
  const dados = CalculaTaxaDeJuros(taxa)
  const labels = dados.map((number, index) => { return `${index}º Ano` })
  console.log(labels)
  addData(chart, labels, dados, taxa)
}

function CalculaTaxaDeJuros(taxa) {
  let dados = [1]
  if (data.labels.length == 0) {
    for (let i = 1; i < 9; i++) {
      dados[i] = dados[i - 1] * (1 + taxa)
    }
  }
  else{
    for (let i = 1; i < data.labels.length; i++) {
      dados[i] = dados[i - 1] * (1 + taxa)
    }
  }
  console.log(dados)
  return dados
}

export function removeAno() {
  data.labels.pop()
  data.datasets.forEach((element) => {
    element.data.pop()
  })
  chart.update()
  console.log("Atualizando chart")
}

export function removeTaxaDeJuros(){
  data.datasets.pop()
  chart.update()
}
export function adicionarAno() {
  data.labels.push(`${data.labels.length}º Ano`)
  data.datasets.forEach((element) => {
    element.data.push(element.data[element.data.length - 1] * (element.taxa + 1))
  })
  chart.update()
}

function addData(chart, label, dados, taxa) {

  const cor = geraCorHex()
  var newDataset = {
    label: `Curva de ${(taxa * 100).toFixed(2)}%`,
    backgroundColor: cor,
    borderColor: cor,
    borderWidth: 1,
    data: dados,
    taxa: taxa
  }

  if (data.labels.length == 0) {
    data.labels = label
  }
  else {
    console.log("Vazio")
  }
  data.datasets.push(newDataset);
  chart.update();
}

function geraCorHex() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}



