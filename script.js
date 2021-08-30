function mascaraCPF(CPF) {
  const elementoAlvo = CPF;
  const cpfAtual = CPF.value;
  let cpfAtualizado;
  cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  elementoAlvo.value = cpfAtualizado;
}

function mascaraTelefone(telefone) {
  const textoAtual = telefone.value;
  const eCelular = textoAtual.length === 11;
  const eTelefone = textoAtual.length === 10;
  let textoAjustado;
  if (eCelular) {
    textoAjustado = textoAtual.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    telefone.value = textoAjustado;
  }
  if (eTelefone) {
    textoAjustado = textoAtual.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    telefone.value = textoAjustado;
  }
}

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById('rua').value = ("");
  document.getElementById('bairro').value = ("");
  document.getElementById('cidade').value = ("");
  document.getElementById('uf').value = ("");
  document.getElementById('ibge').value = ("");
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
    document.getElementById('ibge').value = (conteudo.ibge);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {

  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {

      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById('rua').value = "...";
      document.getElementById('bairro').value = "...";
      document.getElementById('cidade').value = "...";
      document.getElementById('uf').value = "...";
      document.getElementById('ibge').value = "...";

      //Cria um elemento javascript.
      var script = document.createElement('script');

      //Sincroniza com o callback.
      script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

      //Insere script no documento e carrega o conteúdo.
      document.body.appendChild(script);

    } //end if.
    else {
      //cep é inválido.
      limpa_formulário_cep();
      alert("Formato de CEP inválido.");
    }
  }

  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
};

//Função para o cep seria colocada aqui
function mascaraCep(cep) {
  let cepAtual = document.getElementById(cep.id);
  cepAtual = cepAtual.value.split('-').join('');

  let cepAtualizado = cepAtual.match(/\d{5}(?=\d{3})|\d+/g).join('-');
  document.getElementById(cep.id).value = cepAtualizado;
}
let recebeMascara = mascaraCep();
  const celular = mascaraTelefone(document.getElementById("celular"));
  const numeroTelefone = mascaraTelefone(document.getElementById("fixo"));
  function verificador() {
  const cpf = mascaraCPF(document.querySelector("#cartao-CPF"));
  let cartaoCpf = document.querySelector("#cartao-CPF").value;  
  }
