import React from "react"
import { useStores } from "../../../hooks/useStores"

interface Props {

}

export const TodoList: React.FunctionComponent<Props> = () => {
    const { user, order } = useStores()
    const addTodoItem = () => {
        
    }
    
    return (
        <div>
            <input value={""} placeholder={"What would you like to add to your list?"}></input>
            <button onClick={() => addTodoItem()}>Add Todo Item</button>
        </div>
    )
}