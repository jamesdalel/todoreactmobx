import "./right-panel.scss";
import React from "react";
import { TodoList } from "../TodoList/components/TodoList";
export const RightPanel = (): JSX.Element => {
    return (
        <div className={"right-panel-holder"}>
            <TodoList />
        </div>
    );
};
