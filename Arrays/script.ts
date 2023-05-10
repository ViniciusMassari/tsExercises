interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: Array<string>;
  idAulas: Array<number>;
  nivel: 'iniciante' | 'avançado';
}
async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
}
fetchCursos();
function mostrarCursos(cursos: Array<Curso>) {
  let color: string;
  cursos.forEach((curso) => {
    if (curso.nivel === 'iniciante') {
      color = 'blue';
    } else {
      color = 'red';
    }
    document.body.innerHTML += `<h2 style="color:${color}">${curso.nome}</h2>
    <p>Horas: ${curso.horas}</p>
    `;
  });
}
