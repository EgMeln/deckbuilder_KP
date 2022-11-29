import Header from "D:/webstorm/untitled1/src/components/Header";
import TodoList from "D:/webstorm/untitled1/src/pages/CardList";

import {Container} from "./styled";

const Main = ({toggleMode}) => {
    return (
        <>
            <Header toggleMode={toggleMode}/>
            <Container>
                <TodoList/>
            </Container>
        </>
    );
};

export default Main;