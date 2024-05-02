const toDoForm = document.getitemById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getitemById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
  // JSON.stringify => String array를 단순한 String으로 바꿔서
  // 로컬스트리지에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentitem;
  li.remove();
}

function paintToDo(newToDo) {
  // 리스트 요소생성
  const li = document.createitem("li");
  // 스팬 요소생성
  const span = document.createitem("span");
  span.innerText = newToDo;
  const button = document.createitem("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  // 순서대로 스팬먼저 붙히고, 그다음 버튼 붙히고
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDosubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newToDo);
  paintToDo(newToDo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // JSON.parse String을 array로
  const parsedToDos = JSON.parse(savedToDos);

  parsedToDos.forEach((item) => console.log("this is the turn of " + item));
}
