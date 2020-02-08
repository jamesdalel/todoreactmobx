import "./left-panel.scss";
import React from "react";
export const LeftPanel = (): JSX.Element => {
    return (
        <div className={"left-panel-holder"}>
            <div className={"left-panel-holder-heading"}>Manage your Life</div>
            <div className={"left-panel-holder-sub-heading"}>One task at a time</div>
        </div>
    );
};
