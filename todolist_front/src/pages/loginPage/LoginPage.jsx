import React from 'react';
import { Link } from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import * as s from "./style";

function LoginPage(props) {
    return (
        <div css={s.loginPageLayout}>

            <p>
                <label htmlFor="">이메일: </label>
                <input type="text" />
            </p>
            <p>
                <label htmlFor="">비밀번호: </label>
                <input type="text" />
            </p>

            <Link to="/api/v1/join"><button>회원가입</button></Link>
        </div>
    );
}

export default LoginPage;