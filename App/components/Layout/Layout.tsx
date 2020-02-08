import React, { ReactElement } from "react";

interface Props {
    children?: ReactElement;
}

export const Layout = (props: Props): JSX.Element => {
    return (
        <React.Fragment>
            <div>{props.children}</div>
        </React.Fragment>
    );
};
