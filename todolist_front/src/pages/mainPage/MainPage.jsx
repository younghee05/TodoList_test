import React, { useEffect, useState } from 'react';
import HeaderContainer from '../../components/HeaderContainer/HeaderContainer';
import ListContainer from '../../components/ListContainer/ListContainer';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../api/instanse';
import { dateStateAtom } from '../../components/atoms/dateAtom';
import { useRecoilState } from 'recoil';

function MainPage(props) {

    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);
    
    const [ todoList, setTodoList ] = useState([]); // list -> 배열로 초기설정

    useEffect(() => {
        getTodoList();
    }, []);

    const getTodoList = async () => {
        let responseDate = null; // responsDate 의 값을 바꿀 예정이기 때문에 let을 사용 / 초기 null로 설정
        
        try {
            responseDate = await api.get(`/todolist/${dateState}`);
            setTodoList(responseDate.data);

        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div css={s.MainPageLayout}>
            <HeaderContainer getTodoList={getTodoList} />
            <div css={s.listContainerLayout}>
                <ListContainer todoList={todoList} getTodoList={getTodoList} title={"전체"} />
                <ListContainer todoList={todoList.filter(todo => todo.status === 0)} getTodoList={getTodoList} title={"미완료"}/>
                <ListContainer todoList={todoList.filter(todo => todo.status === 1)} getTodoList={getTodoList} title={"완료"}/>
            </div>
        </div>
    );
}

export default MainPage;