#language: pt
@sites 
Funcionalidade: Acessar site da unifacisa via pesquisa no google
    A funcionalidade deve realizar uma busca no site do google

    Contexto: realizar busca no google
        Dado que o usuário esteja no site do google
        
    Esquema do Cenário: Acessar site do Unifacisa
        E ele digitar '<Site>' no campo de busca
        E submeter a pesquisa
        Quando o usuário acessar o link '<Site>'
        Então o site '<Site>' será exibido
        Exemplos:
        | Site              | 
        | Unifacisa         |
        | Anac              |
        | Bootstrap         |
