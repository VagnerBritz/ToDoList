const digiteTarefa = document.querySelector('#texto-tarefa'); // input texto do botão adicionar
const adicionar = document.querySelector('#criar-tarefa'); // botão Adicionar
const listItem = document.querySelector('#lista-tarefas'); // <ol>

// Adiciona a tarefa à lista
function adicionarTarefa() {
  const addTask = document.createElement('li');
  addTask.classList = 'list';
  addTask.innerText = digiteTarefa.value;
  listItem.appendChild(addTask);
  digiteTarefa.value = '';
}
adicionar.addEventListener('click', adicionarTarefa); // Botão adicionar

// ** Consultei o manual para relembrar a querySelectorAll.
// ** Source: https://www.w3schools.com/jsref/met_document_queryselectorall.asp

function clearBackgroundColor() {
  const clearBgColor = document.querySelectorAll('.list');
  for (let index = 0; index < clearBgColor.length; index += 1) {
    clearBgColor[index].style.backgroundColor = 'white';
  }
}
// pinta o background de cinza quando o list item for clicado
document.addEventListener(
  'click',
  (event) => {
    if (event.target.classList.contains('list')) {
      clearBackgroundColor();
      event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
  },
  false,
);

// risca o item se clicado duas vezes e desrisca
document.addEventListener(
  'dblclick',
  (event) => {
    if (event.target.classList.contains('list')) {
      clearBackgroundColor();
      if (event.target.classList.contains('completed')) {
        const teste = document.querySelector('.completed');
        teste.classList.remove('completed');
      } else {
         event.target.classList.add('completed');
      }
    } 
  },
);

// ** Consultei o site abaixo para conseguir montar a função apagarLista():
// ** Source: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild

// Apagar lista completa
function apagarLista() {
  const listaToda = document.querySelector('#lista-tarefas'); // todos os list itens
  while (listaToda.firstChild) {
    listaToda.removeChild(listaToda.firstChild);
  }
}
const btnApagarLista = document.querySelector('#apaga-tudo');// botão apagar tudo
btnApagarLista.addEventListener('click', apagarLista); // Apaga a lista completa

// Apagar concluídos
function apagarFinalizados() {
  const itenslista = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < itenslista.length; index += 1) {
    if (itenslista[index].classList.contains('completed')) {
      itenslista[index].remove();
    }
  }
}
const btnApagarFinalizados = document.querySelector('#remover-finalizados');
btnApagarFinalizados.addEventListener('click', apagarFinalizados);
