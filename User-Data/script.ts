// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData

interface UserData {
  nome?: string;
  email?: string;
  cpf?: string;
}

interface Window {
  UserData: any;
}

window.UserData = {};

function isUserData(data: unknown): data is UserData {
  if (
    data &&
    typeof data === 'object' &&
    'nome' in data &&
    'email' in data &&
    'cpf' in data
  ) {
    return true;
  } else {
    return false;
  }
}

function fillValues(value: UserData) {
  if (isUserData(value)) {
    Object.entries(value).forEach(([key, value]) => {
      const input = document.getElementById(key);
      if (input instanceof HTMLInputElement) {
        input.value = value;
        window.UserData[key] = value;
      }
    });
  }
}

function getUserJson() {
  const userData = localStorage.getItem('UserData');
  if (userData) {
    const objUserData = JSON.parse(userData);
    fillValues(objUserData);
  }
}
getUserJson();

const form = <HTMLElement>document.querySelector('#form');

function handleForm({ target }: KeyboardEvent) {
  if (target instanceof HTMLInputElement) {
    window.UserData[target.id] = target.value;
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
  }
}

form?.addEventListener('keyup', handleForm);
