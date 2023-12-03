const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenSimp = simpsons.find((simp) => Number(simp.id) === id);
  if (!chosenSimp) throw new Error('id não encontrado');
  return chosenSimp;
}

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
  const simpson = await getSimpsonById(1);  
  console.log(simpson);
}

main();