const toDoForm = document.getElementById("todo-form");
// const toDoInput = document.querySelector("#todo-form input");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  // JSON.stringify => String array를 단순한 String으로 바꿔서
  // 로컬스트리지에 저장
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // 버튼만 지우고 싶을 때 아래와 같이
  // const li = event.target;
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newToDo) {
  // 리스트 요소생성
  const li = document.createElement("li");
  li.id = newToDo.id;
  // 스팬 요소생성
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
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
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDosubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // JSON.parse String을 array로
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
