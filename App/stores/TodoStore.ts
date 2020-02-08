import { createContext } from 'react'
import { decorate, observable, computed } from 'mobx'
import { throws } from 'assert'
import { TodoItem } from '../components/TodoList/Interfaces/TodoItem'

export class TodoStore {
  	todos: TodoItem[] = []

	add = (item) => {
		this.todos.push({
			task: item,
			complete: false,
			id: this.todos.length,
		});
	}

	checkItem = (index) => {
		this.todos[index].complete = !this.todos[index].complete;
	}
}

decorate(TodoStore, {
  todos: observable,
})

export default createContext(new TodoStore())