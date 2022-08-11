# Paper Finder

## O que é esse projeto

Esse é meu primeiro projeto usando React. Esse projeto é uma releitura do meu primeiro projeto usando JavaScript. Dessa vez optei por usar NextJS para criação do projeto React junto com TypeScript, meu foco era melhorar meu entendimento do React e explorar suas funcionalidades. Como o projeto anterior não tinha um backend, dessa vez usei um BaaS (supabase), assim tendo acesso a um banco de dados, mas podendo ainda focar no frontend.

## Como a ideia surgiu

No meu antigo trabalho, eu encontrei um grande problema de estoque na área em que eu trabalhava, então tentei fazer uma solução usando programação.

Para contextualizar o problema. Eu trabalhava em uma fábrica que produzia painéis de MDF revestido, especificamente na área de revestimento. Os revestimentos são feitos com um papel especial que é prensado na superfície do painel de MDF. Esse papel tem um comprimento de quase 6 metros, sendo possível prensar dois painéis de uma vez. Ele é armazenado em paletes, que são empilhados em grandes gondolas, que na empresa são chamados de magazines, cada magazine suporta 8 desses papeis e são identificados com letras de A até Z.

Todos os paletes são carregados por empilhadeiras, que fazem a troca do tipo de papel que será utilizado na linha de produção. E é nessa etapa que se encontra o problema. Os operadores de empilhadeira, não possuem nenhum sistema de controle de estoque, sendo assim, sempre quando é necessário fazer a troca de um determinado papel na linha de produção, é preciso procurar onde está cada papel entre os diversos magazines e paletes.

Observando esse problema, fica claro a necessidade de um sistema de controle de estoque. Como na época eu ainda estava na faculdade de Análise e Desenvolvimento de Sistemas e também começando a estudar Javascript para web, achei que seria uma ótima oportunidade de usar um problema real para melhorar minhas habilidades.

## Como o sistema funciona

O sistema consiste em apenas uma tela, onde o operador de empilhadeira pode registrar algum palete de papel e também fazer a busca por um papel específico na lista. O palete com papel tem as seguintes informações:

- Nome (por ser apenas um projeto de demonstração, não é apresentado o catálogo completo, somente algumas opções para teste)
- Posição (magazine: A-Z e posição no magazine: 1-8. ex.: E5)
- Lado (superior ou inferior)

Após o preenchimento das informações, o material é armazenado em uma lista que contém todos os papéis do estoque. Uma barra de pesquisa pode ser utilizada para buscar determinado material pelo seu nome, filtrando e mostrando a posição onde se encontra cada papel da pesquisa.

Dessa vez, diferente do projeto anterior, todas as informações são armazenadas em um banco de dados usando Supabase. Note que todas as Keys e URLs necessárias para acessar o banco de dados, estão como variáveis de ambiente. Porém, esse método não funciona com Next e Supabase. Todas as variáveis de ambiente deveriam ser expostas ao cliente, pois o supabase é iniciado no lado do cliente e não do servidor.

A maneira que o supabase contorna o fato das Keys estarem expostas ao cliente, é por meio de Row Level Security, permitindo somente usuários autenticados fazerem alterações no banco de dados.

Tendo isso em mente, durante o desenvolvimento usei as Keys e URLs diretamente no código, para ter uma experiência mais tranquila de desenvolvimento. Meu intuito era melhorar meu entendimento do React usando esse projeto antigo como base.

Tenho planos pra implementar um sistema de autenticação em um projeto futuro, que vai ser mais completo e complexo, com ferramentas que melhoram não só o desenvolvimento, mas também o comportamento da aplicação, agora que tenho um melhor entendimento de como o React funciona.
