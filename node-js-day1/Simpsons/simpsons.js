const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
}

async function main() {
  await readAll();
}

main();