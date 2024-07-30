import React, { useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import ListContainer from '../../components/ListContainer/ListContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function MainPage(props) {
    
    const [ todoList, setTodoList ] = useState("");

    

    return (
        <div css={s.MainPageLayout}>
            <HeaderContainer />
            <div css={s.listContainerLayout}>
                <ListContainer />   
                <ListContainer />
                <ListContainer />
            </div>
        </div>
    );
}

export default MainPage;