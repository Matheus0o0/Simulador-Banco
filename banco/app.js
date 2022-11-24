function depositar() {
  var saldoAtual = Number(document.querySelector("#saldo").innerHTML.replace(',','.'));
  var valorDoDeposito = Number(document.querySelector("#valor").value);
  var saldoFinal = saldoAtual + valorDoDeposito;

  document.querySelector("#saldo").innerHTML = saldoFinal.toFixed(2).replace('.',',');
}

function sacar() {
  var saldoAtual = Number(document.querySelector("#saldo").innerHTML.replace(',','.'));
  var valorDoSaque = Number(document.querySelector("#valor").value);
  
  if (valorDoSaque > saldoAtual) {
    alert("Valor do saque não pode ser maior que seu saldo atual");
    return;
  }
  var saldoFinal = saldoAtual - valorDoSaque;

  document.querySelector("#saldo").innerHTML = saldoFinal.toFixed(2);
}

function juros() {
  setInterval(() => {
    var saldoAtual = Number(document.querySelector("#saldo").innerHTML.replace(',','.'));
    var saldoFinal = saldoAtual + saldoAtual * 0.1;
    document.querySelector("#saldo").innerHTML = saldoFinal.toFixed(2).replace('.',',');
  }, 60000);
}

juros();
