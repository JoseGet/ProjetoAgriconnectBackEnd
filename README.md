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

- **View**: no contexto do backend, corresponde principalmente às respostas retornadas pela API que são consumidas.

Essa separação facilita a manutenção, melhora a legibilidade do código e torna o sistema mais escalável.

## Tecnologias utilizadas

# Agriconnect – Backend

Este repositório contém o **backend do projeto Agriconnect**, responsável por prover a lógica de negócio, autenticação, gerenciamento de dados e exposição de APIs consumidas pelo frontend e por aplicações externas.

O Agriconnect é uma plataforma de código aberto dedicada a **auxiliar produtores agrícolas e consumidores de feiras locais**, promovendo a digitalização do pequeno produtor rural, ampliando a visibilidade de seus produtos e facilitando o acesso do consumidor a alimentos frescos e de origem garantida.

O projeto conta com apoio da iniciativa **Mover-se na Web**, desenvolvida pelo **NIC.br** e **Ceweb.br**, que incentiva o uso de tecnologias com alto impacto social e transformação comunitária.

---

## Licença

Este projeto está licenciado sob a **GNU AGPL v3**.  
Consulte o arquivo `LICENSE` para mais detalhes.

---

## Descrição Geral

O backend do Agriconnect foi desenvolvido com foco em:

- Organização e padronização do código
- Escalabilidade
- Segurança
- Facilidade de manutenção
- Arquitetura modular

Ele é responsável por:

- Gerenciamento de usuários (Cliente, Vendedor e Admin)
- Autenticação e autorização
- Regras de negócio
- Integração com banco de dados
- Upload e gerenciamento de arquivos
- Integração com meios de pagamento
- Documentação e exposição de APIs REST

---

## Arquitetura

A aplicação segue o padrão **MVC (Model–View–Controller)**:

- **Model:**  
  Representa as entidades do sistema, regras de negócio e acesso aos dados via ORM.

- **Controller:**  
  Recebe as requisições HTTP, valida os dados de entrada e aciona os serviços adequados.

- **View:**  
  No contexto do backend, corresponde às respostas retornadas pela API e consumidas pelo frontend.

Essa separação garante maior clareza, manutenibilidade e escalabilidade do sistema.

---

## Tecnologias Utilizadas

### Stack Principal
- **Runtime:** Node.js  
- **Linguagem:** TypeScript  
- **Framework Web:** Express.js  

---

### Banco de Dados & ORM
- **Banco de Dados:** PostgreSQL  
- **ORM Principal:** Prisma (v6.19.1)  
- **ORM Secundário:** Sequelize (v6.37.6)  
  - Utilizado em módulos específicos e para compatibilidade com código legado.

---

### Autenticação & Segurança
- **JWT:** jsonwebtoken  
- **Hash de Senhas:** bcrypt  
- **CORS:** cors  
- **Variáveis de Ambiente:** dotenv  

---

### Validação & Tipagem
- **Validação de Requisições:** express-validator (v7.2.1)  
- **Schema Validation:** Zod (v4.1.11)  
- **Tipagem Estática:** TypeScript (types definidos para todas as dependências)

---

### APIs & Integrações
- **Mercado Pago:** mercadopago (v2.7.0)  
  - Processamento de pagamentos.
- **Supabase:** @supabase/supabase-js  
  - Banco de dados em produção  
  - Armazenamento de arquivos (File Storage)  
  - Autenticação adicional

---

### Upload de Arquivos
- **Middleware:** multer (v2.0.2)  

---

### Documentação da API
- **Swagger / OpenAPI**
  - swagger-jsdoc  
  - swagger-ui-express  
- **Geração Automática:** swagger-autogen  

---

### Desenvolvimento & Build
- **Hot Reload:** nodemon  
- **Execução TypeScript:** ts-node  
- **Compilação:** TypeScript Compiler (tsc)  
- **Parsing de Requisições:** body-parser  

---

### Infraestrutura & Deploy
- **Docker & Docker Compose**  
- **Render:** Hospedagem do backend  
- **Supabase:** Banco de dados e armazenamento em produção  

---

## Estrutura de Pastas

A aplicação é organizada de forma **modular**, baseada nos domínios do sistema.

Exemplo da estrutura de um módulo (Produtos):




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
