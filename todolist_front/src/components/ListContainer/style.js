import { css } from "@emotion/react";

export const containerBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 20px 30px 20px 20px;
    width: 400px;
    height: 700px;
    border: 2px solid #686363;
    background-color: #ebebeb;
    box-shadow: 12px 12px 0 #ebebeb ;
    
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
    cursor: pointer;
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
    border-bottom: 3px solid #3f3f3f;
    background-color: #000000;
    color: #ffffff;
    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

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
    color: #ffffff;
    border-radius: 10px;
    background-color: #000000;
    cursor: pointer;

`;

export const todoDeleteButton = css`
    box-sizing: border-box;
    margin-right: 5px;
    border: 1px solid #000000;
    color: #ffffff;
    border-radius: 10px;
    background-color: #000000;
    cursor: pointer;
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
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    background-color: #b4b4b4;
    *:focus {
        outline: none;
    }
    
`;

export const modalH2Title = css`
    box-sizing: border-box;
    margin-bottom: 40px;
    padding: 5px;
    background-color: #b9b9b9;
    box-shadow: inset 0 0 3px #333;
    
`;

export const modalInput = css`
    box-sizing: border-box;
    width: 80%;
    height: 40px;
    font-size: 18px;
`;

export const modalCompleteAndCancelLayout = css`
    box-sizing: border-box;
    display: flex;
    margin-top: 30px;
    width: 100px;
    height: 40px;
`;

export const modalComplete = css`
    box-sizing: border-box;
    margin-right: 10px;
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #000000;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
`;

export const modalCancel = css`
    box-sizing: border-box;
    margin-left: 10px;
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border: 1px solid #000000;
    background-color: #000000;
    color: #ffffff;
    cursor: pointer;
`;


