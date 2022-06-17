import dotenv from 'dotenv';
import Server from './models/server';

// Configurar dotenv
dotenv.config();

// Crear y levantar servidor
const server= new Server();
server.listen();