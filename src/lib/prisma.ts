import { PrismaClient } from "@prisma/client";

// Crée une instance unique de PrismaClient
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Déclare un objet global pour stocker l'instance de PrismaClient
declare global {
  var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>;
}

// Utilise l'instance globale existante ou en crée une nouvelle
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

// Stocke l'instance de prisma dans l'objet global en mode développement
if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
