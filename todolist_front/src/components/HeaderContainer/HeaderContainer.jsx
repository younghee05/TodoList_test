import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../api/instanse';

function HeaderContainer(props) {

    const [ todo, setTodo ] = useState({
        content: "",
        status: 0,
        date: ""
    });

    const handleInputChange = (e) => {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
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
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <div css={s.HeaderContainerLayout}>

            <div css={s.TitleLayout}>
                <h1 css={s.h1Title}>TODOLIST</h1>
                <div css={s.InputLayout}>
                    <input css={s.Input} type="text" name='content' value={todo.content} onChange={handleInputChange} />
                    <button css={s.ButtonLayout} onClick={handleAddClick}>추가</button>
                </div>
            </div>

            <div css={s.InputAndButtonLayout}>
                <div css={s.InputAndButton} >
                    <input type="date" />
                    <button>조회</button>
                </div>
            </div>
            
        </div>
    );
}

export default HeaderContainer;