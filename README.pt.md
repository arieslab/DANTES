<p><img src="https://github.com/arieslab/DANTES/blob/main/logotipo-dantes.png?raw=true" width="528"></p>
<!--# DANTES-->
[Read this in English / Ler em Inglês](README.md)

## Detection ANd refactoring of TEst Smells (DANTES)

DANTES é uma ferramenta web projetada para detectar e refatorar _test smells_ em códigos de teste de unidade Java usando JUnit. Atualmente, o DANTES oferece cobertura de detecção e refatoração para 11 tipos diferentes de _test smells_ e é capaz de refatorar uma classe de teste inteira com um único clique de botão.

## Dependências
Para se utilizar a DANTES, é necessário ter as seguintes dependências instaladas:
* Java: disponível em www.java.com
* NodeJS: disponível em www.nodejs.org

## Instalação
O processo de instalação consiste nos seguintes passos:
* Baixe ou clone o repositório
* Navegue até a pasta do projeto
* Abra o terminal na pasta do projeto
* Execute o comando ````npm install```` no terminal
* Execute o comando ````node app.js```` no terminal
* Abra um navegador no endereço http://localhost:3000/

````shell
git clone https://github.com/arieslab/DANTES.git
cd DANTES
npm install
node app.js
````

## Utilizando a ferramenta
Ao se abrir a página da ferramenta, esta deve ser sua estrutura. Marcado em círculos vermelhos numerados de um a nove são alguns pontos importantes da ferramenta:
![image](https://github.com/arieslab/DANTES/assets/71935065/e7850030-e2e1-425d-8b24-54a37207c79c)

1. Esta é a caixa de texto principal da ferramenta, aqui o usuário pode escrever ou colar o código de teste que deseja submeter para análise da ferramenta;
2. Neste botão o usuário pode mudar o tema entre claro e escuro;
3. O botão "Detect" deve ser clicado para que a ferramenta faça a detecção de _test smells_ no código fornecido
4. O usuário pode clicar no botão de "Upload a file" para escolher um arquivo e copiar o conteúdo desse arquivo diretamente para a caixa de texto
5. Neste menu _dropdown_ o usuáro pode selecionar diferentes formas de ordenar a exibição dos _test smells_ encontrados:
   * Selecione "Order by Position in Code" para ordenar de acordo com a ordem de aparição dos _smells_ no código;
   * Selecione "Order by Smell Type" para ordenar pela ordem alfabética dos nomes dos _test smells_;
6. Após a detecção dos _test smells_, esta caixa será atualizada com a listagem de todos os _test smells_ encontrados;
7. Nesta caixa será exibido o código enviado para análise com as linhas que contém _test smells_ marcadas em vermelho;
8. Após feita alguma refatoração, o código refatorado será exibido nesta caixa, com as linhas refatoradas marcadas em verde;
9. O usuário pode clicar neste botão para copiar para a área de transferência todo o conteúdo do código exibido.

Após o envio do código e realizada a detecção, a caixa marcada com número 6 será atualizada desta forma:
![image](https://github.com/arieslab/DANTES/assets/71935065/9f01309a-21da-4593-a539-481c40882075)

1. Acima da caixa esta linha é gerada mostrando se houve algum erro na detecção e, caso contrário, exibindo a quantidade de _test smells_ encontrada no código;
2. Dentro da caixa, cada linha corresponde a uma ocorrência de _test smell_ encontrado no código. Na linha é detalhado o tipo do _smell_, o método onde foi encontrado e a linha;
3. Para cada _smell_ é colocado um botão verde referente à refatoração a ser executada para este _smell_, para executá-la basta pressionar o botão e a ferramenta irá executar a refatoração nomeada no botão;  
4. Ao clicar este botão todos os _test smells_ encontrados no código será refatorado de uma só vez.
