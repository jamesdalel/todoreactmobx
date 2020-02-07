import { observable } from "mobx"
import { TodoItem } from "../Interfaces/TodoItem"

export default class TodoStore {
    @observable todos: TodoItem[] = []
    rootStore: any
    constructor(rootStore) {
        this.rootStore = rootStore
    }
}