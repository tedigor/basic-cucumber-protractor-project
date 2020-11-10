#language: pt
@checkoutForm 
Funcionalidade: Formulário genérico de pagamento do bootstrap
    A funcionalidade simular o funcionamento de um formulário de pagamento

    Contexto: Acessar formulário checkout do bootstrap
        Dado que o usuário esteja acessando o fomulário checkout do bootstrap

    Cenário: Preencher todos os campos e submeter corretamente
        Quando o usuário preencher corretamente todos os campos do formulário
        E clicar no botão "Continue to checkout"
        Então os campos serão limpos, indicando sucesso na submissão
    
    Cenário: Validar obrigatoriedade do campo First Name
         Quando não preencher o campo "First Name"
         E clicar no botão "Continue to checkout"
         Então a mensagem de erro "Valid first name is required." será exibida