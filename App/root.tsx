import * as React from "react";
import { TodoList } from "./components/TodoList/components/TodoList";
import { Header } from "./components/Layout/Header.tsx/Header";
import { Layout } from "./components/Layout/Layout";
import "./app.scss";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { Content } from "./components/Layout/Content/Content";
import { RightPanel } from "./components/RightPanel/RightPanel";

interface Props {
    // 
}

const Root: React.FunctionComponent<Props> = () => {
    return (
        <div>
            <Layout>
                <Header />
                <Content>
                    <React.Fragment>
                        <LeftPanel />
                        <RightPanel />
                    </React.Fragment>
                </Content>
            </Layout>
        </div>
    )
}

export default Root;