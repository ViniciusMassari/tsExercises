// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.

// minha solução
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const responseJson = await response.json();
  mostrarCursos(responseJson);
}
fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

function isCurso(data: unknown): data is Array<Curso> {
  if (
    data &&
    data instanceof Array &&
    'nome' in data[0] &&
    'horas' in data[0] &&
    'tags' in data[0]
  ) {
    return true;
  } else {
    return false;
  }
}

function mostrarCursos(data: Array<Curso>): void {
  if (
    isCurso(data) &&
    typeof data[0].horas === 'number' &&
    typeof data[0].nome === 'string' &&
    data[0].tags instanceof Array
  ) {
    document.body.innerHTML += `
    ${data
      .map((curso) => {
        return `<h1>${curso.nome}</h1>
      <p>Horas: ${curso.horas}</p>
      <p>${curso.tags.join(', ')}</p>
      `;
      })
      .join('\n')}
    `;
  }
}

// solução professor
/*
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  handleCursos(json);
}
fetchCursos();

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'iniciante' | 'avancado';
}

function isCurso(curso: unknown): curso is Curso {
  if (
    curso &&
    typeof curso === 'object' &&
    'nome' in curso &&
    'horas' in curso &&
    'tags' in curso
  ) {
    return true;
  } else {
    return false;
  }
}

function handleCursos(data: unknown) {
  if (Array.isArray(data)) {
    data.filter(isCurso).forEach((item) => {
      document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(', ')}</p>
        </div>
      `;
    });
  }
}
*/
