angular
  .module('todoApp')
  .controller('TodosController', TodosController);

function TodosController(){

  const self = this;
//database which is an array with an index.
  this.todoList = [
    {task: 'build an awesome todo app', done: false},
    {task: 'get super good at Angular', done: false},
    {task: 'party on code', done: false},
    {task: 'tackle the bonus challenges for this lesson', done: false},
    {task: 'take a nap', done: false}
  ];

  self.editMe = {}; //store to do we r editing
  self.addTodo = addTodo;
  self.deleteTodo = deleteTodo;
  self.completedTodos = completedTodos;
  self.remainingTodos = remainingTodos;
  self.editTodo = editTodo;
  self.updateTodo = updateTodo;
  //function that allows us to add new todos to our todoList
  function addTodo(){
    self.todoList.push({task: self.text, done: false});
    self.text = null;
  }

  //function that allows us to delete specific todos from our todoList
  function deleteTodo($index){
    self.todoList.splice($index, 1);
  }

  //returns a count of the tasks that have been marked as done
  function completedTodos(){
    return self.todoList.filter(function(x){
      return x.done === true;
    });
  }

  //returns a count of the tasks that have not been marked as done
  function remainingTodos(){
    return self.todoList.filter(function(x){
      return x.done === false;
    });
  }
  //pass in the index
  //position of todo in the array
  // set to edit me in the variable
  // self.todoList[$index] whole object. .task is the data we want to pull - {"text":"sasasasas"}
  //function to update the edit to do
  //where in the array we want to update. {"text":"build an awesome todo app","index":0}
  //access to updated task and index. grab to correct data and update that
  // self is in reference to the controller
  function editTodo($index){
    self.editMe.text = self.todoList[$index].task;
    self.editMe.index = $index;
  }
  function updateTodo(){
    const index = self.editMe.index; //set into variable and parse it
    self.todoList[index].task = self.editMe.text; //update the array and the todo
    self.editMe = {};
  }

}
