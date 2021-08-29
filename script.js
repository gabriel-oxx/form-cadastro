function verificaCpf(cpf) {
  let soma = 0;
  if (cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999") {
    return false;
  }
  for (let i = 0; i < 9; i++) {
    if (parseInt(cpf.charAt(i)) == null) {
      i = 0;
    }
    soma += parseInt(cpf.charAt(i)) * (10 - i);
    console.log(soma);
  }
  let resto = (soma * 10) % 11;
  if (resto == cpf.charAt(9)) {
    if (resto == 0 || resto == 1) {
      resto = 0;
    }
    return true;
  } else {
    return false;
  }
  soma = 0;
  resto = 0;
  for (let j = 0; j < 10; j++) {
    if (parseInt(cpf.charAt(j)) == null) {
      j = 0;
    }
    soma += parseInt(cpf.charAt(j)) * (11 - j);
    console.log(soma);
  }
  resto = (soma * 10) % 11;
  if (resto == cpf.charAt(10)) {
    if (resto == 0 || resto == 1) {
      resto = 0;
    }
    return true;
  } else {
    return false;
  }
  return true;
}

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

function verificador() {
  const nome = document.querySelector("#nome-usuario").value;
  const cartaoCpf = verificaCpf(document.querySelector("#cartao-CPF").value);
  const cpf = mascaraCPF(document.querySelector("#cartao-CPF"));
  let recebeMascara = mascaraCep();
  const celular = mascaraTelefone(document.getElementById("celular"));
  const numeroTelefone = mascaraTelefone(document.getElementById("fixo"));

  if (nome.length < 3) {
    alert("Opa! Seu nome deve ter pelo menos três letras.");
  }
  else{
    alert(`Obrigado! ${nome}`);
  }
  if (cartaoCpf == false || cartaoCpf.length == 0) {
    alert("Opa! Verifique o campo CPF, você pode ter inserido um número de CPF inválido ou ter se esquecido de inserir o número de seu CPF.");
  }
  }

