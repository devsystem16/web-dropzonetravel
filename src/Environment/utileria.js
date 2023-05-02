export const transformText = (text) => {
  // Encuentra todos los números en el texto usando una expresión regular
  const numbers = text.match(/\d+/g);

  // Si no se encontraron números, devuelve el texto original
  if (!numbers) {
    return 0;
  }

  // Si se encontró un solo número, devuelve ese número y asume que se trata de días
  if (numbers.length === 1) {
    return parseInt(numbers[0]);
  }

  // Si se encontraron dos números, devuelve ambos números con etiquetas de días y noches
  if (numbers.length === 2) {
    if (parseInt(numbers[0]) > parseInt(numbers[1]))
      return parseInt(numbers[0]);
    else return parseInt(numbers[1]);
  }

  if (parseInt(numbers[0]) > parseInt(numbers[1])) return parseInt(numbers[0]);
  else return parseInt(numbers[1]);
};

export const transformTextDiasNoches = (text) => {
  // Encuentra todos los números en el texto usando una expresión regular
  const numbers = text.match(/\d+/g);

  // Si no se encontraron números, devuelve el texto original
  if (!numbers) {
    return text;
  }

  // Si se encontró un solo número, devuelve ese número y asume que se trata de días
  if (numbers.length === 1) {
    return `${numbers[0]} días`;
  }

  // Si se encontraron dos números, devuelve ambos números con etiquetas de días y noches
  if (numbers.length === 2) {
    return `${numbers[0]} días ${numbers[1]} noches`;
  }

  // Si se encontraron más de dos números, devuelve solo los primeros dos con etiquetas de días y noches
  return `${numbers[0]} días ${numbers[1]} noches`;
};
