import React from 'react';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function ListContainer(props) {
    return (
        
        <div css={s.containerBox}>
            <input type="checkBox" />
            <input type="text" />
            <button>수정</button>
            <button>삭제</button>
        </div>

    );
}

export default ListContainer;