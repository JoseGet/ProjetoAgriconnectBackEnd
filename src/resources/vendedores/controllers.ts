import { Request, Response } from 'express';
import prisma from '../../config/dbConfig';
import { vendedor } from '@prisma/client';
import { supabase } from '../../config/supabaseConfig';

const bcrypt = require('bcrypt');
const saltRounds = 10;
// Função para obter todos os vendedores
export const getVendedores = async (req: Request, res: Response) => {
  try {
    const result: vendedor[] = await prisma.vendedor.findMany();
    console.log("aqui no vendedores");
    res.json(result);
  } catch (error) {
    console.error('Erro ao buscar vendedores:', error);
    res.status(500).send('Erro ao buscar vendedores');
  }
};

export const getVendedorById = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result: vendedor | null = await prisma.vendedor.findUnique({
      where: { id_vendedor: id },
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Vendedor não encontrado');
    }
  } catch (error) {
    console.error('Erro ao buscar vendedor:', error);
    res.status(500).send('Erro ao buscar vendedor');
  }
};

export const createVendedor = async (req: Request, res: Response) => {

  const { nome, email, tipo_vendedor, telefone, endereco_venda, tipo_documento, numero_documento, fk_associacao, senha } = req.body;
  const imageFile = req.file;

  try {

    if (!email) {
      res.status(400).json({ error: 'Email é obrigatório' });
      return;
    }

    if (!imageFile) {
      res.status(400).json({ error: 'A imagem do vendedor é obrigatória' });
      return;
    }

    const senha_segura = await bcrypt.hash(senha, saltRounds);

    const fileName = `${Date.now()}-${imageFile.originalname}`;
    const filePath = `${fileName}`;
    const bucketName = 'associacoes/vendedores/imagens';

    const { error: uploadError } = await supabase.storage
      .from(bucketName)
      .upload(filePath, imageFile.buffer, {
        contentType: imageFile.mimetype,
        upsert: false,
      });

    const { data: publicURLData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    const imageUrl = publicURLData.publicUrl;

    const result = await prisma.vendedor.create({
      data: {
        id_vendedor: crypto.randomUUID(),
        nome,
        email,
        tipo_vendedor,
        telefone,
        endereco_venda,
        tipo_documento,
        numero_documento: numero_documento || null,
        fk_associacao: fk_associacao || null,
        senha: senha_segura,
        tipo_usuario: 'VENDEDOR',
        image: imageUrl
      },
    });

    res.status(201).json(result);
  } catch (error) {
    console.error('Erro ao criar vendedor:', error);
    res.status(500).send('Erro ao criar vendedor');
  }
};

// Função para atualizar um vendedor
export const updateVendedor = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { nome, email, tipo_vendedor, telefone, endereco_venda, tipo_documento, numero_documento, fk_associacao, senha } = req.body;

  try {
    const dataToUpdate: any = {
      nome,
      tipo_vendedor,
      telefone,
      endereco_venda,
      tipo_documento,
      numero_documento,
      fk_associacao,
    };

    // Adicionar email se fornecido
    if (email) {
      dataToUpdate.email = email;
    }

    // Apenas fazer hash da senha se ela for fornecida
    if (senha) {
      const senha_segura = await bcrypt.hash(senha, saltRounds);
      dataToUpdate.senha = senha_segura;
    }

    const result = await prisma.vendedor.update({
      where: { id_vendedor: id },
      data: dataToUpdate,
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Vendedor não encontrado');
    }
  } catch (error) {
    console.error('Erro ao atualizar vendedor:', error);
    res.status(500).send('Erro ao atualizar vendedor');
  }
};

// Função para deletar um vendedor
export const deleteVendedor = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result: vendedor | null = await prisma.vendedor.delete({
      where: { id_vendedor: id },
    });

    if (result) {
      res.json(result);
    } else {
      res.status(404).send('Vendedor não encontrado');
    }
  } catch (error) {
    console.error('Erro ao deletar vendedor:', error);
    res.status(500).send('Erro ao deletar vendedor');
  }
};

export default {
  getVendedores,
  getVendedorById,
  createVendedor,
  updateVendedor,
  deleteVendedor,
};
