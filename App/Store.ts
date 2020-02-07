import TodoStore from "./components/TodoList/Store/TodoStore";

// this is our root store for mobx and will combine all stores for each of our components
export default class RootStore {
    todoStore: TodoStore;
    constructor() {
        this.todoStore = new TodoStore(this);
    }
}
