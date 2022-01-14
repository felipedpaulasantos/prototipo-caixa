/*
  Copia um objeto de maneira 'rasa', sem guardar a mesma referência:
  o objeto original não será alterado ao modificar a cópia
*/
export const makeShallowCopy = (source: any): any => {
  return JSON.parse(JSON.stringify(source));
};

/*
  Copia um objeto de maneira 'profunda', guardando a mesma referência:
  o objeto original será alterado ao modificar a cópia
*/
export const makeDeepCopy = (target: any, source: any): any => {
  return Object.assign(target, source);
};

/*
  Coloca recursos em agrupamentos de colunas por linha
  Retorna um array contendo vários arrays de length igual a 'columnsPerRow'
*/
export const groupColumns = (resources: any[], columnsPerRow: number = 3): any[] => {
  const newRows = [];
  for (let index = 0; index < resources.length; index += columnsPerRow) {
    newRows.push(resources.slice(index, index + columnsPerRow));
  }
  return newRows;
};
