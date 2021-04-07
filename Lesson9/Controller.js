
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
    }

    listen() {
        this.view.listenAdding(this.addTodo.bind(this));
        this.view.listenRemoving(this.removeTodo.bind(this));
        this.view.listenCompleted(this.checkComleted.bind(this));
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

    removeTodo(id) {
        this.model.removeTodo(id, this.render.bind(this));
    }
    checkComleted(id){
    this.model.switchCompleted(id,this.render.bind(this));
    }
}