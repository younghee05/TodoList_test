import React from 'react';
import { Link } from 'react-router-dom';

function JoinPage(props) {
    return (
        <div>
            <label htmlFor="">이메일</label>
            <input type="text" />

            <label htmlFor="">비밀번호</label>
            <input type="password" />

            <label htmlFor="">비밀번호 확인</label>
            <input type="password" />

            <button>회원가입하기</button>
            <Link to="/"><button>로그인</button></Link>
        </div>
    );
}

export default JoinPage;