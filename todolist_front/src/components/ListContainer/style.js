import { css } from "@emotion/react";

export const containerBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 400px;
    height: 700px;
    border: 2px solid #dbdbdb;
    
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 0px 10px 0px;
    width: 100%;
    border-bottom: 2px solid #dbdbdb;
`;

// checkBox

export const checkBox = css`
    box-sizing: border-box;
    margin-left: 10px;
    margin-bottom: 5px;
`;

// 제목
export const h2Title = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 0px 10px 0px;
    width: 100%;
    height: 70px;
    border-bottom: 2px solid #000000;
    background-color: #ffffff;

`;

// button
export const buttonLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    margin-bottom: 5px;
    width: 100%;

`;

export const todoUpdateButton = css`
    box-sizing: border-box;
    margin-right: 15px;
    border: 1px solid #000000;
`;

export const todoDeleteButton = css`
    box-sizing: border-box;
    margin-right: 5px;
    border: 1px solid #000000;
`;

// input

export const inputLayout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-bottom: 5px;
    width: 100%;
`;

// modal 
export const modalLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;


