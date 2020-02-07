import * as React from "react";
import { TodoList } from "./components/TodoList/components/TodoList";

interface Props {
    // 
}

const Root: React.FunctionComponent<Props> = () => {
    return (
        <div>
            <TodoList />
        </div>
    )
}

export default Root;