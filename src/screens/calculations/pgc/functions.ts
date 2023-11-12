enum Sexo {
  Masculino = 'Masculino',
  Feminino = 'Feminino',
}

interface DobraCutanea {
  triceps: number;
  subescapular: number;
  abdominal: number;
  suprailiaca: number;
}

interface ResultadoGordura {
  percentual: number;
  categoria: string;
}

export function calcularGorduraCorporal(sexo: Sexo, idade: number, dobras: DobraCutanea): ResultadoGordura {
  // Fórmula de Durnin e Womersley
  let somaDobras = dobras.triceps + dobras.subescapular + dobras.abdominal + dobras.suprailiaca;
  let densidadeCorporal: number;
  
  if (sexo === Sexo.Masculino) {
    densidadeCorporal = 1.1714 - 0.0671 * Math.log(somaDobras) + 0.0453 * idade;
  } else {
    densidadeCorporal = 1.1665 - 0.0706 * Math.log(somaDobras) + 0.0463 * idade;
  }

  // Cálculo do percentual de gordura corporal
  let percentualGordura = ((4.95 / densidadeCorporal) - 4.5) * 100;

  // Determinar a categoria
  let categoria = '';
  if (sexo === Sexo.Masculino) {
    if (percentualGordura < 8) {
      categoria = 'Excelente';
    } else if (percentualGordura < 20) {
      categoria = 'Boa';
    } else {
      categoria = 'Obesidade';
    }
  } else {
    if (percentualGordura < 21) {
      categoria = 'Excelente';
    } else if (percentualGordura < 33) {
      categoria = 'Boa';
    } else {
      categoria = 'Obesidade';
    }
  }

  return {
    percentual: percentualGordura,
    categoria: categoria,
  };
}

// Exemplo de uso
const resultado = calcularGorduraCorporal(Sexo.Masculino, 25, {
  triceps: 10,
  subescapular: 15,
  abdominal: 20,
  suprailiaca: 12,
});

console.log('Percentual de Gordura: ', resultado.percentual.toFixed(2) + '%');
console.log('Categoria: ', resultado.categoria);