import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../api/instanse';
import { dateStateAtom } from '../atoms/dateAtom';
import { useRecoilState } from 'recoil';

function HeaderContainer({ getTodoList }) {

    const [ dateState, setDateState ] = useRecoilState(dateStateAtom);

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: ""
    });

    // // 위에 date 값과 dateChange 안에 쓰는 date 값이 다를 수 있기때문에 
    // // 상태를 두개로 만든 것 
    // const [ dateChange, setDateChange ] = useState("");

    const handleInputChange = (e) => {
        const today = new Date();
        const year = today.getFullYear();
        const temp = today.getMonth() + 1;
        const month = temp - 10 < 0 ? "0" + temp : temp 
        const date = today.getDate();

        setTodo(todo => {
            return {
                ...todo,
                [e.target.name]: e.target.value,
                date: year + "-" + month + "-" + date
            }
        });
    }

    const handleAddClick = async () => {
        let responseData = null;
        try {
            responseData = await api.post("/todo", todo);
            console.log(responseData.data);
            getTodoList();
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearchClick = () => {
        getTodoList();
    }

    const handleDateChange = (e) => {
        setDateState(e.target.value);
    }

    return (

        <div css={s.HeaderContainerLayout}>

            <div css={s.TitleLayout}>
                <h1 css={s.h1Title}><span>📋 </span>TODOLIST</h1>
                <div css={s.InputLayout}>
                    <input css={s.Input} type="text" name='content' value={todo.content} onChange={handleInputChange} />
                    <button css={s.ButtonLayout} onClick={handleAddClick}>추가</button>
                </div>
            </div>

            <div css={s.InputAndButtonLayout}>
                <input css={s.dateInput} type="month" value={dateState} onChange={handleDateChange}/>
                <button css={s.searchButton} onClick={handleSearchClick} >조회</button>
            </div>
            
        </div>
    );
}

export default HeaderContainer;