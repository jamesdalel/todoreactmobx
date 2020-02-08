import React, { ReactElement } from "react";
import "./content.scss";

interface Props {
    children?: ReactElement;
}

export const Content = (props: Props): JSX.Element => {
    return <div className={"app-content"}>{props.children}</div>;
};
