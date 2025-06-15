#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente
dotenv.config();

// Obtém o diretório atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lê o arquivo de configuração
const configPath = path.join(__dirname, '..', 'js', 'config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Substitui as variáveis de ambiente
const googleClientId = process.env.GOOGLE_CLIENT_ID || '';
configContent = configContent.replace('{{GOOGLE_CLIENT_ID}}', googleClientId);

// Escreve o arquivo de configuração atualizado
fs.writeFileSync(configPath, configContent);
