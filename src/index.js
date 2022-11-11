import './style.css';

const arrayOfObjects = [
  {
    index: 1,
    description: 'complete set ups',
    completed: false,
  },
  {
    index: 1,
    description: 'complete To Do list project',
    completed: false,
  },
];

const todoTask = document.querySelector('.list task here');
arrayOfObjects.forEach((element) => {
  const div = document.createElement('li');
  div.classList.add('lists');
  div.innerHTML += `

          <i class="uil uil-square-full"></i>
          <p class="">${element.description}</p>
          <i class="uil uil-ellipsis-v"></i>
    `;
  todoTask.append(div);
});