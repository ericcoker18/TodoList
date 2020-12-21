
   let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    let todolist= document.getElementById("todo-list")
    for (let i = 0; i < arrayOfTodos.length; i++){
    

        let itemTitle = document.createTextNode(arrayOfTodos[i].title);

        let item = document.createElement("li");

        item.appendChild(itemTitle);
        todolist.appendChild(item);

        if(arrayOfTodos[i].completed === false){
            item.style.color = "red"
        }

        else{
            item.style.color = "blue"

        }
        




    }

  }