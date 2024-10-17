require("dotenv").config();
const { writeFileSync, mkdirSync } = require("fs");

const targetPath = "./src/environments/environments.ts";
const targetPathDev = "./src/environments/environment.development.ts";

envFileContent = `
export const environment = {
  production: true,
  NG_APP_API_KEY: "${process.env["API_KEY"]}",
  NG_APP_MAPBOX_KEY: "${process.env["MAPBOX_KEY"]}"
}`;

envDevContent = `
export const environment = {
  production: false,
  NG_APP_API_KEY: "${process.env["API_KEY"]}",
  NG_APP_MAPBOX_KEY: "${process.env["MAPBOX_KEY"]}"
}`;

mkdirSync("./src/environment", { recursive: true });

writeFileSync(targetPath, envFileContent);

writeFileSync(targetPathDev, envDevContent);
