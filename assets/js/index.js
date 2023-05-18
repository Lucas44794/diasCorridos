function verificarCheckbox() {
    var checkbox = document.getElementById("question");
  
    if (checkbox.checked) {
      return 0;
    } else {
      return 1;
    }
  }

function calcularData() {
    var temporario = verificarCheckbox();
    

    // Obtém os valores dos campos de entrada
    var dataInicial = new Date(document.getElementById("dataInicial").value);
    var quantidadeDias = parseInt(document.getElementById("quantidadeDias").value);

    // Adiciona os dias à data inicial
    var dataResultado = new Date(dataInicial);
    dataResultado.setDate(dataResultado.getDate() + quantidadeDias);

    // Formata a data resultado no formato "dd/mm/aaaa"
    var dia = (dataResultado.getDate() + temporario).toString().padStart(2, "0");
    var mes = (dataResultado.getMonth() + 1).toString().padStart(2, "0");
    var ano = dataResultado.getFullYear();

    var resultado = dia + "/" + mes + "/" + ano;

    // Exibe o resultado na página
    document.getElementById("resultado").innerHTML = "Data Resultado: " + resultado;
  }