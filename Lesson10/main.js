class TodosModel {
    constructor() {
        this.todos = [];
        this.apiUrl = "https://jsonplaceholder.typicode.com";
    }

    getTodos(cb) {
        axios.get(`${this.apiUrl}/todos`).then((res) => {
            this.todos = res.data;
            cb(this.todos);
        });
    }

    addTodo(title, cb) {
        const newTodo = {
            title,
            completed: false,
        };
        axios.post(`${this.apiUrl}/todos`, newTodo).then((res) => {
            console.log("RESPONSE", res);
            this.todos = [res.data, ...this.todos];
            cb(this.todos);
        });
    }

    removeTodo(id, cb) {
        axios.delete(`${this.apiUrl}/todos/${id}`).then((res) => {
            console.log("DELETED TODO", res);
            this.todos = this.todos.filter((todo) => todo.id !== id);
            cb(this.todos);
        });
    }

    switchCompleted(id, cb) {
        let todoToUpdate = this.todos.find((todo) => todo.id === id);
        todoToUpdate = {
            ...todoToUpdate,
            completed: !todoToUpdate.completed,
        };
        axios
            .put(`${this.apiUrl}/todos/${todoToUpdate.id}`, todoToUpdate)
            .then((res) => {
                this.todos = this.todos.map((todo) =>
                    todo.id === todoToUpdate.id ? {
                        ...res.data
                    } : todo
                );
                console.log("res.data", res.data);
                cb(this.todos);
            });
    }
    filterTodo(id, cb) {
        switch (id) {
            case "all":
                cb(this.todos);
                break;
            case "completed":
                cb(this.todos.filter((todo) => todo.completed == true));
                break;
            case "toDo":
                cb(this.todos.filter((todo) => todo.completed == false));
                break;
        }
    }
}

class TodosView {
    constructor(host) {
        this.host = host;
        this.formElement = this.host.querySelector(".todos-form");
        this.fieldElement = this.formElement.querySelector(".todos-form__field");
        this.listElement = this.host.querySelector(".todos-list");
        this.removeBtnSelector = ".todo__remove";
        this.todoCheckboxSelector = ".todo__change-status";
        this.inputElement =this.host.querySelector(".todos-filter");
        this.todoFilster =".todos-filter__radio";
    }

    clearInput() {
        this.fieldElement.value = "";
    }
    defaultFilter(){
        this.host.querySelector(".default").checked = true;
    }

    listenAdding(cb) {
        this.formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            const title = this.fieldElement.value;
            if (title.length === 0) {
                alert("Введите title");
                return;
            }
            cb(title);
        });
    }

    listenRemoving(cb) {
        this.listElement.addEventListener("click", (event) => {
            const target = event.target;
            if (target.matches(this.removeBtnSelector)) {
                if (target.dataset.todoId) {

                    cb(+target.dataset.todoId);
                }
            }
        });
    }

    listenCompletedSwitching(cb) {
        this.listElement.addEventListener("change", (event) => {
            const target = event.target;
            if (target.matches(this.todoCheckboxSelector)) {
                if (target.dataset.todoId) {
                    cb(+target.dataset.todoId);
                }
            }
        });
    }
    ListenFilter(cb) {
        this.inputElement.addEventListener("change", (event) => {
            console.log("list");
            const target = event.target;
            if (target.matches(this.todoFilster)) {
                if (target.value) {
                    console.log(target);
                    cb(target.value);
                }
            }
        });
    }
    

    renderList(todos) {
        let template = "";
        todos.forEach((todo) => {
            template += `
          <li class="todos-list__item todo">
            <button class="todo__remove" data-todo-id="${todo.id}">X</button>
            <span>${todo.title}</span>
            <input data-todo-id="${
              todo.id
            }" class="todo__change-status" type="checkbox" ${
          todo.completed ? "checked" : ""
        }/>
          </li>
        `;
        });
        this.listElement.innerHTML = template;
    }
}
class TodosController {
    constructor(selector) {
        this.host = document.querySelector(selector);
        this.model = new TodosModel();
        this.view = new TodosView(this.host);
        this.init();
    }

    init() {
        this.model.getTodos(this.render.bind(this));
      
        this.listen();
        this.view.defaultFilter();
    }

    listen() {
        this.view.listenAdding(this.addTodo.bind(this));
        this.view.listenRemoving(this.removeTodo.bind(this));
        this.view.listenCompletedSwitching(this.swicthCompleted.bind(this));
        this.view.ListenFilter(this.filterTodos.bind(this));
    }

    render(todos) {
        this.view.renderList(todos);
    }

    addTodo(title) {
        this.model.addTodo(
            title,
            function (todos) {
                this.render(todos);
                this.view.clearInput();
            }.bind(this)
        );
    }

    swicthCompleted(id) {
        this.model.switchCompleted(id, this.render.bind(this));
    }

    removeTodo(id) {
        this.model.removeTodo(id, this.render.bind(this));
    }
    filterTodos(id){
        this.model.filterTodo(id,this.render.bind(this));
    }
}

const todosController = new TodosController("#todosComponent");
