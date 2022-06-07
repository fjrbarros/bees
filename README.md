# BEES front-end interview challenge

## Aplicação que simula uma página de cervejarias :desktop_computer:

### Algumas tecnologias utilizadas:
 - ReactJs
   - redux-toolkit, react-redux, react-router.
   - TypeScript
   - Axios.
   - Jest, react-testing-library
 - [Styled components](https://styled-components.com/)
 
 A aplicação pode ser acessada pelo link: https://bees-demo.herokuapp.com

### Esta aplicação possui apenas 3 páginas:
  - Home (path: /)
  
  ![image](https://user-images.githubusercontent.com/44577035/172490972-878b0628-d33b-4287-80fa-560b327c77a8.png)
  
  Aqui são feitas algumas validações no nome de usuário:
  - Só pode conter caracteres do alfabeto (com ou sem acentos).  
  - Deve haver o nome completo.
  - Caso seja a primeira que o usuário preenche o campo não é mostrado o erro, apenas após a primeira tentativa do "submit"
  
  Ex:

  ![image](https://user-images.githubusercontent.com/44577035/172491644-aa7f2c67-aca6-47d9-b4f2-66d81b352826.png)


  - Dashboard (path: /dashboard)

  ![image](https://user-images.githubusercontent.com/44577035/172491092-c2335063-5c74-4473-836d-3fe9f59c9f68.png)
  
  Aqui o usuário tem algumas opções como:
  - Filtrar pelo nome da cervejaria ou endereço.
  ![image](https://user-images.githubusercontent.com/44577035/172492254-5fdb1c88-3392-4b03-80ae-1cf2f529dfa9.png)
  
  - Adicionar novas tags em cada cervejaria.
  - Ao clicar em "adicionar" o campo de texto é exibido com o foco nele.
  - Se o usuário pressionar "Esc" a tag é removida.
  - Ao pressionar "Enter" ou "clicar" no botão ao lado esquerdo a tag é adicionada ao card.
  
  Ex:
  
  ![image](https://user-images.githubusercontent.com/44577035/172492625-4446d48e-c2ff-4234-aedc-7413aa385644.png)
  
  ![image](https://user-images.githubusercontent.com/44577035/172492680-e53494b3-dc98-4651-bb88-74b3ff653c58.png)
  
  - Remover card da página.
  
  ![image](https://user-images.githubusercontent.com/44577035/172493416-f24bce7a-c460-4c40-8b29-4ebe5260b5d5.png)
  
  ![image](https://user-images.githubusercontent.com/44577035/172493457-e7cb18cb-7a65-48d6-acc5-ee60ab648c6a.png)



  - Not found (path: /*)

  ![image](https://user-images.githubusercontent.com/44577035/172491196-45f41815-c541-4834-b63d-8d4a80e4836c.png)
  
  - Caso seja inserida uma rota que não corresponde a página home ou dashboard, o usuário é direcionado para esta pagina, possibilitando seu retorno para a dashboard


### Passos para utilizar esta aplicação:

ps: você precisa ter o [Git](https://git-scm.com/) instalado em sua máquina.

1. Fazer o clone do repositorio. :octocat:	
    > git clone https&#xfeff;://github.com/fjrbarros/bees.git

    este comando vai fazer um clone do repositorio para uma pasta com o nome `bees`,

    para acessar usar o comando `cd bees`

2. Executar a aplicação. :arrow_forward:	 

   Para executar a aplicação pode ser utilizado duas formas, usando npm ou yarn.
    
   Você pode instalar o [Node](https://nodejs.org/en/), o npm ja vem junto.
   
   uma vez na raiz do projeto e com npm ou yarn instalado.
   
   execute o comando `yarn install` ou `npm run install`, isso vai ler e baixar todos pacotes que tem no arquivo package.json.
   
   execute o comando `yarn start` ou `npm run start`, isso vai iniciar o projeto, apos isso, acesse a url http://localhost:3000/
   
3. Testes.
   - Ao executar o comando `yarn test` todos os testes da aplicação serão executados.
   - Ao executar o comando `yarn coverage` será executado os testes de cobertura de toda aplicação.
   
   ps: caso esteja usando o `npm` e for fazer o "coverage", você precisará configurar o comando no arquivo `package.json`
   na linha 24 trocar de `yarn test -- --coverage` para `npm run test -- --coverage`.
   o ultimo comando pode ser executado diretamente no terminal.
   
Divirta-se :grinning:
