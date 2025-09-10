const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const ConnectDB = async () => {
  try {
    await prisma.$connect();
    

    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

module.exports = { prisma, ConnectDB };