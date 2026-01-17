# Agriconnect 
Este projeto está licenciado sob a licença AGPLv3 - consulte o arquivo LICENSE para detalhes.

O projeto Agriconnect é uma plataforma de código aberto dedicada à auxiliar produtores agrícolas e consumidores de feiras locais.
Ele nasceu da necessidade de digitalizar e dar visibilidade ao trabalho do produtor rural, facilitando o escoamento da produção e o acesso do consumidor a produtos frescos e de origem garantida.

Este projeto tem apoio da iniciativa [Mover-se na Web](https://moverse.ceweb.br/), desenvolvida pelo NIC.br e Ceweb.br, que incentiva tecnologias com alto potencial de impacto social e transformação comunitária. 

## Descricao

Este repositório contém o backend do Agriconnect, responsável por prover a lógica de negócio, gerenciamento de dados, autenticação e comunicação com o banco de dados, além de expor APIs que são consumidas.
O sistema foi desenvolvido com foco em organização, escalabilidade e manutenção do código.

## Arquitetura

A aplicação segue a arquitetura **MVC (Model–View–Controller)**, que separa as responsabilidades do sistema em três camadas principais:

- **Model**: representa as entidades do sistema e a lógica de acesso aos dados, incluindo regras de negócio e integração com o banco de dados.

- **Controller**: atua como intermediário entre as requisições do cliente e o sistema, recebendo as requisições, processando-as e retornando as respostas adequadas.

- **View**: no contexto do backend, corresponde principalmente às respostas retornadas pela API (geralmente em formato JSON), que são consumidas pelo frontend.

Essa separação facilita a manutenção, melhora a legibilidade do código e torna o sistema mais escalável.

## Tecnologias utilizadas

- Node Js ->


### Outras tecnologias

- Render -> Utilizamos o Render para fazer a hospedagem do backend. Uma plataforma simples e acessível para projetos menores ou em fase de desenvolvimento.
- Supabase -> Utilizamos o supa para atender duas de nossas necessidades, hospedagem de um banco de dados para produção e armazenamento de arquivos de imagem(File Storage). Ferramenta muito intuitivo, acessível e com um robusto plano gratuito.


## Estrutura de pastas

No sistema, as pastas são organizadas e dividas por módulos de acordo com os domínios da aplicação. Cada módulo concentra todas as responsabilidades relacionadas a uma funcionalidade específica do sistema, como, por exemplo, o módulo de Produtos.

A estrutura do módulo de Produtos é organizada da seguinte forma:

- controllers.ts: contém os controllers responsáveis por receber as requisições HTTP, validar os dados de entrada e acionar os serviços apropriados.
- routes.ts: define as rotas da API relacionadas ao módulo de produtos, mapeando endpoints para seus respectivos controllers.
- service.ts: concentra a lógica de negócio do módulo, separando regras de negócio do controle de requisições.
- schemas.ts: define os schemas de validação e/ou serialização de dados utilizados pelo módulo.
- types.ts: contém definições de tipos e interfaces TypeScript utilizadas no módulo.
- index.ts: arquivo responsável por centralizar e exportar os componentes do módulo, facilitando a importação em outras partes do sistema.

Essa organização modular facilita a manutenção, reutilização de código e escalabilidade da aplicação, permitindo que novos módulos sejam adicionados seguindo o mesmo padrão. 

## Instalação 
Clonando o Repositório
```
git clone git@github.com:JoseGet/ProjetoCareiroBackEnd.git
```
## Execução
### Buildando e iniciando os Containers Docker!
Para construir as imagens Docker e iniciar a aplicação localmente, existem duas opções:
1. Com o projeto já instalado, procure o arquivo "docker-compose.local.yml", clique nele com o botão direito e clique em "Compose Up"
   
2. Com o projeto já instalado, execute:
```
docker compose -f docker-compose.yaml up -d
```
3. Pronto, o projeto esta rodando localmente na sua maquina. 
