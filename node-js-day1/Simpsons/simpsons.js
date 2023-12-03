const fs = require('fs').promises;

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const simpWithoutNelson = simpsons.filter((simp) => simp.id !== '5');
  const simpWithMaggie = simpWithoutNelson.concat({ id: '5', name: 'Maggie Simpson' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpWithMaggie));
};

async function addNelson() {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  simpsons.push({ id: '5', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsons));
};

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const family = simpsons.filter((simp) => familyIds.includes(Number(simp.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(family));
};

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simp) => simp.id !== '10' && simp.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
};

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const chosenSimp = simpsons.find((simp) => Number(simp.id) === id);
  if (!chosenSimp) throw new Error('id não encontrado');
  return chosenSimp;
}

async function main() {
  // await readAll() 
  // const simpson = await getSimpsonById(1);
  // console.log(simpson);
  // await filterSimpsons();
  // createSimpsonsFamily();
  // addNelson();
  replaceNelson();
};

main();