
# form-cadastro  

Projeto criado para processo celetivo da Gama Academy  junto ao Itaú.
  
  ## Características do projeto  
  Este formulário está dividido em três sessões, sendo estas:
1. Identificação: nessa sessão estão sendo solicitados dados que possam ser úteis para identificar o usuário, tais como nome e RG.
2. Localidade: Nesta sessão são solicitados dados que possam ser úteis para identificar o local onde reside o usuário.
 3. Contatos: na terceira e última sessão da página, são solicitados dados que podem ser úteis para contactar o usuário.  

 Ao longo do formulário, o usuário pode se deparar com vários inputs, no entanto só na primeira sessão há uma diferença, os inputs para identificação de sexo estão em forma de radio buttons.
 Mais informações em 
 [Tipo de entrada HTML = "rádio" - W3C](https://www.w3schools.com/tags/att_input_type_radio.asp)
 Os demais inputs são caixas de edissão que pedem dados digitados.
 Ainda na primeira sessão são utilizados labels, recurso que é importante para usuários de leitores de telas, pois os labels servem para etiquetar os inputs.
 [HTML label tag - W3C](https://www.w3schools.com/tags/tag_label.asp)  
 Em quase todos os inputs de caixa de edição  foram inseridos atributos placeholders, para auxiliar o usuário em como ele deve inserir as informações solicitadas.
 [HTML <input> placeholder Attribute - w3schools](https://www.w3schools.com/tags/att_input_placeholder.asp)  
 Foram utilizados também neste formulário os atributos [minlength](https://www.w3schools.com/tags/att_input_minlength.asp)e [maxlength](https://www.w3schools.com/tags/att_input_maxlength.asp) para limitar respectivamente as quantidades mínimas e máximas aceitaveis de caracteres.  
 Como recursos de JavaScript, foram criadas funções para [validação de CPF](http://www.dbins.com.br/dica/como-funciona-a-logica-da-validacao-do-cpf), [Expressões regulares](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Regular_Expressions) para formatação do CEP, [CPF](https://www.alura.com.br/artigos/formatando-cpf-com-ajuda-das-expressoes-regulares) e [telefone](https://www.alura.com.br/artigos/criando-uma-mascara-de-telefone-com-javascript). Para o preenchimento dos campos de endereço, foi inserido no JavaScript um Script do site [ViaCEP](https://viacep.com.br/exemplo/javascript/).  
 Ferramentas utilizadas durante este processo:  
1. Visual Studio Code para edição de códigos;
2. Node.JS em conjunto com Prompt de comandos do Windows para testagem dos códigos JavaScript;
3. Google Chrome para executar e testar a página HTML;
4. Git e GitHub para vercionamento e armazenamento de códigos.