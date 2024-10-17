require('dotenv').config();
const { writeFileSync, mkdirSync} = require('fs');
const targetPath = './src/environments/environments.ts';

const targetPathDev = './src/environments/environment.development.ts';

envFileContent = `
export const environment = {
  NG_APP_API_KEY: "${process.env['NG_APP_API_KEY']}"
}`;


mkdirSync('./src/environment', {recursive: true});

writeFileSync(targetPath, envFileContent);

writeFileSync(targetPathDev, envFileContent);
