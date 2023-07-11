

const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const todoText = input.value.trim();
  if (todoText !== '') {
    addTodoItem(todoText);
    input.value = ''; 
  }
});

function addTodoItem(todoText) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');

  span.textContent = todoText;
  deleteButton.textContent = 'Delete';

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);

  deleteButton.addEventListener('click', function() {
    li.remove();
  });

  span.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
}
