
class TodosView {
    constructor(host) {
        this.host = host;
        this.formElement = this.host.querySelector(".todos-form");
        this.fieldElement = this.formElement.querySelector(".todos-form__field");
        this.listElement = this.host.querySelector(".todos-list");
        this.removeBtnSelector = ".todo__remove";
        this.changeStatus ="todo__change-status";
    }

    clearInput() {
        this.fieldElement.value = "";
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
    listenCompleted(cd){
        this.listElement.addEventListener("click", (event) => {
            const target = event.target;
            if (target.matches(this.changeStatus)) {
                if (target.dataset.todoId) {
                    cb(+target.dataset.todoId);
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