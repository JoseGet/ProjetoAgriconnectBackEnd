import prisma from '../../config/dbConfig';

exports.getAll = async () => {
    return await prisma.associacao.findMany();
}