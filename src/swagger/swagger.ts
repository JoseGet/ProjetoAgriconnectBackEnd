// src/config/swagger.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Pedidos com Prisma',
      version: '1.0.0',
      description: 'Documentação da API para gerenciamento de pedidos, clientes, feiras, produtos e vendedores.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Servidor Local',
      },
    ],
    components: {
      schemas: {
        Pedido: {
          type: 'object',
          properties: {
            pedido_id: {
              type: 'integer',
              example: 1,
            },
            data_pedido: {
              type: 'string',
              format: 'date-time',
              example: '2024-06-01T12:00:00Z',
            },
            fk_feira: {
              type: 'integer',
              example: 2,
            },
            fk_cliente: {
              type: 'integer',
              example: 3,
            },
            produto: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id_produto: { type: 'integer', example: 10 },
                  nome: { type: 'string', example: 'Banana' },
                  preco: { type: 'number', example: 5.5 },
                },
              },
            },
          },
        },
        Associacao: {
          type: 'object',
          properties: {
            id_associacao: {
              type: 'string',
              example: 'A123',
            },
            nome: {
              type: 'string',
              example: 'Associação dos Produtores Orgânicos',
            },
            descricao: {
              type: 'string',
              example: 'Grupo de produtores de alimentos orgânicos.',
            },
            vendedor: {
              type: 'integer',
              example: 7,
            },
          },
          required: ['id_associacao', 'nome', 'descricao', 'vendedor'],
        },
        Vendedor: {
          type: 'object',
          properties: {
            id_vendedor: {
              type: 'string',
              format: 'uuid',
              example: 'a1b2c3d4-e5f6-7890-ab12-cdef34567890',
            },
            nome: {
              type: 'string',
              example: 'João Silva',
            },
            tipo_vendedor: {
              type: 'string',
              example: 'Autônomo',
            },
            telefone: {
              type: 'string',
              example: '(11) 99999-8888',
            },
            endereco_venda: {
              type: 'string',
              example: 'Rua das Flores, 123',
            },
            tipo_documento: {
              type: 'string',
              example: 'CPF',
            },
            numero_documento: {
              type: 'string',
              example: '123.456.789-00',
              nullable: true,
            },
            fk_associacao: {
              type: 'string',
              example: null,
              nullable: true,
            },
            senha: {
              type: 'string',
              example: 'senha123',
            },
          },
          required: ['nome', 'tipo_vendedor', 'telefone', 'endereco_venda', 'tipo_documento', 'senha'],
        },
        VendedorInput: {
          type: 'object',
          properties: {
            nome: {
              type: 'string',
              example: 'João Silva',
            },
            tipo_vendedor: {
              type: 'string',
              example: 'Autônomo',
            },
            telefone: {
              type: 'string',
              example: '(11) 99999-8888',
            },
            endereco_venda: {
              type: 'string',
              example: 'Rua das Flores, 123',
            },
            tipo_documento: {
              type: 'string',
              example: 'CPF',
            },
            numero_documento: {
              type: 'string',
              example: '123.456.789-00',
              nullable: true,
            },
            fk_associacao: {
              type: 'string',
              example: null,
              nullable: true,
            },
            senha: {
              type: 'string',
              example: 'senha123',
            },
          },
          required: ['nome', 'tipo_vendedor', 'telefone', 'endereco_venda', 'tipo_documento', 'senha'],
        },
      },
    },
    paths: {
      '/vendedores': {
        get: {
          tags: ['Vendedores'],
          summary: 'Lista todos os vendedores',
          responses: {
            '200': {
              description: 'Lista de vendedores',
              content: {
                'application/json': {
                  schema: {
                    type: 'array',
                    items: { $ref: '#/components/schemas/Vendedor' },
                  },
                },
              },
            },
            '500': { description: 'Erro interno do servidor' },
          },
        },
      },
      '/vendedores/{id}': {
        get: {
          tags: ['Vendedores'],
          summary: 'Busca vendedor pelo ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID do vendedor',
              required: true,
              schema: { type: 'string', format: 'uuid' },
            },
          ],
          responses: {
            '200': {
              description: 'Vendedor encontrado',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Vendedor' } } },
            },
            '404': { description: 'Vendedor não encontrado' },
            '500': { description: 'Erro interno do servidor' },
          },
        },
        put: {
          tags: ['Vendedores'],
          summary: 'Atualiza um vendedor pelo ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID do vendedor',
              required: true,
              schema: { type: 'string', format: 'uuid' },
            },
          ],
          requestBody: {
            description: 'Dados para atualizar o vendedor',
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/VendedorInput' },
              },
            },
          },
          responses: {
            '200': {
              description: 'Vendedor atualizado',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Vendedor' } } },
            },
            '404': { description: 'Vendedor não encontrado' },
            '500': { description: 'Erro interno do servidor' },
          },
        },
        delete: {
          tags: ['Vendedores'],
          summary: 'Deleta um vendedor pelo ID',
          parameters: [
            {
              name: 'id',
              in: 'path',
              description: 'ID do vendedor',
              required: true,
              schema: { type: 'string', format: 'uuid' },
            },
          ],
          responses: {
            '200': { description: 'Vendedor deletado' },
            '404': { description: 'Vendedor não encontrado' },
            '500': { description: 'Erro interno do servidor' },
          },
        },
      },
      '/vendedores/cadastro': {
        post: {
          tags: ['Vendedores'],
          summary: 'Cria um novo vendedor',
          requestBody: {
            description: 'Dados do vendedor',
            required: true,
            content: {
              'application/json': {
                schema: { $ref: '#/components/schemas/VendedorInput' },
              },
            },
          },
          responses: {
            '201': {
              description: 'Vendedor criado',
              content: { 'application/json': { schema: { $ref: '#/components/schemas/Vendedor' } } },
            },
            '500': { description: 'Erro interno do servidor' },
          },
        },
      },
    },
  },
  apis: ['./src/routes/**/*.ts'],
};

const specs = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}
