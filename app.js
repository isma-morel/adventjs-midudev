const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
];

function contarOvejas(ovejas) {
  const ovejasFiltered = ovejas.filter(
    ({ name, color }) =>
      name.toLowerCase().includes("n") &&
      name.toLowerCase().includes("a") &&
      color.toLowerCase().includes("rojo")
  );
  return ovejasFiltered;
}

const ovejasfilt = contarOvejas(ovejas);
console.log(ovejasfilt);
