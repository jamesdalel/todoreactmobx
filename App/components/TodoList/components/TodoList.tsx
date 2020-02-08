import React, { useState } from "react";
import { useRootData } from "../../../hooks/useRootData";
import { observer } from "mobx-react-lite";
import "./todo-list.scss";

export const TodoList: React.FunctionComponent = observer(() => {
    const todo = useRootData(store => {
        return {
            items: store.TodoStore.todos,
            add: store.TodoStore.add,
            checkItem: store.TodoStore.checkItem,
        };
    });
    const [newTodoItem, setNewTodoItem] = useState("");

    return (
        <div className={"todo-list-holder"}>
            <input
                className={"todo-list-holder-new"}
                value={newTodoItem}
                onChange={(e): void => setNewTodoItem(e.currentTarget.value)}
                placeholder={"What would you like to add to your list?"}
            ></input>
            <button
                className={`${newTodoItem ? "button-enabled" : "button-disabled"}`}
                onClick={(): void => {
                    todo.add(newTodoItem);
                    setNewTodoItem("");
                }}
            >
                Add Todo Item
            </button>
            <div className={"todo-list-holder-items"}>
                {todo.items.map((item, index) => {
                    return (
                        <div key={index} className={"todo-list-holder-items-item"}>
                            <div className={"todo-list-holder-items-item-text"}>{item.task}</div>
                            <div className={"todo-list-holder-items-item-checkbox"}>
                                <label className="container">
                                    <input onChange={(): void => todo.checkItem(index)} type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});
