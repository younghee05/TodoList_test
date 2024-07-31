import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";
import api from '../../api/instanse';
import ReactModal from 'react-modal';

function ListContainer({ todoList, getTodoList }) {

    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ content, setContent ] = useState({
        todoId: 0,
        content: ""
    })

    const handleCheckChange = async (e) => {
        try {
            const response = await api.put(`/todo/${e.target.id}/status`);
            console.log(response);

        } catch (error) {
            console.error(error);
        }
        getTodoList();
    }

    const handleCompleteClick = async () => {
        try {
            const response = await api.put(`/todo`, content);
            console.log(response);
            closeModal();
            getTodoList();
        } catch (error) {
            console.error(error);
        }
    }

    const handleCancelClick = (e) => {
        setIsModalOpen(false);
    }

    const handleUpdateClick = (e) => {
        setIsModalOpen(true);
        setContent(todo => {
            return {
                ...todo,
                todoId: e.target.name
            }
        });
    }

    const handleInputChange = (e) => {
        setContent(todo => {
            return {
                ...todo,
                content: e.target.value
            }
        });
    }

    const handleDeleteClick = async (e) => {
        console.log(e.target.name);
        
        try {
            const response = await api.delete(`/todo/${e.target.name}`);
            console.log(response);
            getTodoList();
        } catch (error) {
            console.error(error);
        }
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    

    return (
        
        <div css={s.containerBox}>

            <ReactModal
                style={{
                    content: {
                        boxSizing: 'border-box',
                        transform: 'translate(-50%, -50%)',
                        top: '50%',
                        left: '50%',
                        padding: '20px',
                        width: '300px',
                        height: '300px',
                        backgroundColor: '#fafafa',
                    }
                }}
                isOpen={isModalOpen}
                onRequestClose={closeModal}
            >
                <div css={s.modalLayout}>
                    <h2>ToDo 수정</h2>
                    <input type="text" name="content" onChange={handleInputChange} value={content.content}/>
                    <div>
                        <button onClick={handleCompleteClick} >완료</button>
                        <button onClick={handleCancelClick}>취소</button>
                    </div>
                </div>
            </ReactModal>

            <h2 css={s.h2Title}>전체</h2>   
            
            {
                todoList.map(todo => 
                    <div css={s.container}>
                        
                        <input css={s.checkBox} id={todo.todoId} onChange={handleCheckChange} type="checkBox" checked={todo.status === 1} />

                        <div css={s.inputLayout}>
                            <label htmlFor={todo.todoId}>{todo.content}</label>
                        </div>

                        <div css={s.buttonLayout}>
                            <button css={s.todoUpdateButton} name={todo.todoId} onClick={handleUpdateClick}>수정</button>
                            <button css={s.todoDeleteButton} name={todo.todoId} onClick={handleDeleteClick}>삭제</button>
                        </div>
                    </div>
                )
            }
        </div>

    );
}

export default ListContainer;