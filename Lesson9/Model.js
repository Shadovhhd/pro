class TodosModel {
    constructor() {
        this.todos = [];
        this.apiUrl = "https://jsonplaceholder.typicode.com";
    }

    getTodos(cb) {
        axios.get(`${this.apiUrl}/todos`).then((res) => {
            this.todos = res.data;
            console.log(this.todos);
            cb(this.todos);
        });
        // setTimeout(() => {
        //   cb(this.todos);
        // }, 1000);
    }

    addTodo(title, cb) {
        const newTodo = {
            
            title,
            done: false,
        };
        
        axios.post('https://jsonplaceholder.typicode.com/todos').then((res) =>{
            this.todos = [newTodo, ...this.todos];
            res.data=this.todos;
            cb(this.todos);
      
        });
        
    }

    removeTodo(id, cb) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        cb(this.todos);
    }
    switchCompleted(id, cd){
      this.todos.forEach(element => {
          if(element.id===id){
              element.id = !element.id;
          }
          cb(this.todos);
      }); 
    }
}
